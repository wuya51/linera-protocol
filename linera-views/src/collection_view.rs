use crate::{
    common::{Batch, Context},
    views::{View, ViewError},
};
use async_trait::async_trait;
use serde::{de::DeserializeOwned, Serialize};
use std::{
    cmp::Eq,
    collections::{btree_map, BTreeMap},
    fmt::Debug,
    mem,
    sync::Arc,
};
use tokio::sync::{Mutex, OwnedMutexGuard};

/// A view that supports accessing a collection of views of the same kind, indexed by a
/// key, one subview at a time.
#[derive(Debug, Clone)]
pub struct CollectionView<C, I, W> {
    context: C,
    was_cleared: bool,
    updates: BTreeMap<I, Option<W>>,
}

/// A view that supports accessing a collection of views of the same kind, indexed by a
/// key, possibly several subviews at a time.
#[derive(Debug)]
pub struct ReentrantCollectionView<C, I, W> {
    context: C,
    was_cleared: bool,
    updates: BTreeMap<I, Option<Arc<Mutex<W>>>>,
}

/// The context operations supporting [`CollectionView`].
#[async_trait]
pub trait CollectionOperations<I>: Context {
    /// Clone the context and advance the (otherwise implicit) base key for all read/write
    /// operations.
    fn clone_with_scope(&self, index: &I) -> Self;

    /// Return the list of indices in the collection.
    async fn indices(&mut self) -> Result<Vec<I>, Self::Error>;

    /// Execute a function on each index.
    async fn for_each_index<F>(&mut self, mut f: F) -> Result<(), Self::Error>
    where
        F: FnMut(I) + Send;

    /// Add the index to the list of indices. Crash-resistant implementations should only write
    /// to `batch`.
    fn add_index(&self, batch: &mut Batch, index: I) -> Result<(), Self::Error>;

    /// Remove the index from the list of indices. Crash-resistant implementations should only
    /// write to `batch`.
    fn remove_index(&self, batch: &mut Batch, index: I) -> Result<(), Self::Error>;

    // TODO(#149): In contrast to other views, there is no delete operation for CollectionOperation.
}

/// A marker type used to distinguish keys from the current scope from the keys of sub-views.
///
/// Sub-views in a collection share a common key prefix, like in other view types. However,
/// just concatenating the shared prefix with sub-view keys makes it impossible to distinguish if a
/// given key belongs to child sub-view or a grandchild sub-view (consider for example if a
/// collection is stored inside the collection).
///
/// The solution to this is to use a marker type to have two sets of keys, where
/// [`CollectionKey::Index`] serves to indicate the existence of an entry in the collection, and
/// [`CollectionKey::Subvie`] serves as the prefix for the sub-view.
#[derive(Serialize)]
enum CollectionKey<I> {
    Index(I),
    Subview(I),
}

#[async_trait]
impl<I, C: Context + Send> CollectionOperations<I> for C
where
    I: Serialize + DeserializeOwned + Send + Sync + 'static,
{
    fn clone_with_scope(&self, index: &I) -> Self {
        let key = self
            .derive_key(&CollectionKey::Subview(index))
            .expect("derive_key should not fail");
        self.clone_self(key)
    }

    fn add_index(&self, batch: &mut Batch, index: I) -> Result<(), Self::Error> {
        let key = self.derive_key(&CollectionKey::Index(index))?;
        batch.put_key_value(key, &())?;
        Ok(())
    }

    fn remove_index(&self, batch: &mut Batch, index: I) -> Result<(), Self::Error> {
        let key = self.derive_key(&CollectionKey::Index(index))?;
        batch.delete_key(key);
        Ok(())
    }

    async fn indices(&mut self) -> Result<Vec<I>, Self::Error> {
        let base = self.derive_key(&CollectionKey::Index(()))?;
        self.get_sub_keys(&base).await
    }

    async fn for_each_index<F>(&mut self, mut f: F) -> Result<(), Self::Error>
    where
        F: FnMut(I) + Send,
    {
        let base = self.derive_key(&CollectionKey::Index(()))?;
        for index in self.get_sub_keys(&base).await? {
            f(index);
        }
        Ok(())
    }
}

#[async_trait]
impl<C, I, W> View<C> for CollectionView<C, I, W>
where
    C: CollectionOperations<I> + Send,
    ViewError: From<C::Error>,
    I: Send + Ord + Sync + Debug + Clone,
    W: View<C> + Send,
{
    fn context(&self) -> &C {
        &self.context
    }

    async fn load(context: C) -> Result<Self, ViewError> {
        Ok(Self {
            context,
            was_cleared: false,
            updates: BTreeMap::new(),
        })
    }

    fn rollback(&mut self) {
        self.was_cleared = false;
        self.updates.clear();
    }

    async fn flush(&mut self, batch: &mut Batch) -> Result<(), ViewError> {
        if self.was_cleared {
            self.was_cleared = false;
            self.delete_entries(batch).await?;
            for (index, update) in mem::take(&mut self.updates) {
                if let Some(mut view) = update {
                    view.flush(batch).await?;
                    self.context.add_index(batch, index)?;
                }
            }
        } else {
            for (index, update) in mem::take(&mut self.updates) {
                match update {
                    Some(mut view) => {
                        view.flush(batch).await?;
                        self.context.add_index(batch, index)?;
                    }
                    None => {
                        let context = self.context.clone_with_scope(&index);
                        self.context.remove_index(batch, index)?;
                        let view = W::load(context).await?;
                        view.delete(batch).await?;
                    }
                }
            }
        }
        Ok(())
    }

    async fn delete(mut self, batch: &mut Batch) -> Result<(), ViewError> {
        self.delete_entries(batch).await
    }

    fn clear(&mut self) {
        self.was_cleared = true;
        self.updates.clear();
    }
}

impl<C, I, W> CollectionView<C, I, W>
where
    C: CollectionOperations<I> + Send,
    ViewError: From<C::Error>,
    I: Eq + Ord + Sync + Clone + Send + Debug,
    W: View<C>,
{
    /// Delete all entries in this [`Collection`].
    async fn delete_entries(&mut self, batch: &mut Batch) -> Result<(), ViewError> {
        let stored_indices = self.context.indices().await?;
        for index in &stored_indices {
            let context = self.context.clone_with_scope(index);
            self.context.remove_index(batch, index.clone())?;
            let view = W::load(context).await?;
            view.delete(batch).await?;
        }
        Ok(())
    }

    /// Obtain a subview for the data at the given index in the collection. If an entry
    /// was removed before then a default entry is put on this index.
    pub async fn load_entry(&mut self, index: I) -> Result<&mut W, ViewError> {
        match self.updates.entry(index.clone()) {
            btree_map::Entry::Occupied(entry) => {
                let entry = entry.into_mut();
                match entry {
                    Some(view) => Ok(view),
                    None => {
                        let context = self.context.clone_with_scope(&index);
                        // Obtain a view and set its pending state to the default (e.g. empty) state
                        let mut view = W::load(context).await?;
                        view.clear();
                        *entry = Some(view);
                        Ok(entry.as_mut().unwrap())
                    }
                }
            }
            btree_map::Entry::Vacant(entry) => {
                let context = self.context.clone_with_scope(&index);
                let mut view = W::load(context).await?;
                if self.was_cleared {
                    view.clear();
                }
                Ok(entry.insert(Some(view)).as_mut().unwrap())
            }
        }
    }

    /// Mark the entry so that it is removed in the next flush
    pub fn remove_entry(&mut self, index: I) {
        if self.was_cleared {
            self.updates.remove(&index);
        } else {
            self.updates.insert(index, None);
        }
    }

    /// Mark the entry so that it is removed in the next flush
    pub async fn reset_entry_to_default(&mut self, index: I) -> Result<(), ViewError> {
        let view = self.load_entry(index).await?;
        view.clear();
        Ok(())
    }

    /// Return the list of indices in the collection.
    pub async fn indices(&mut self) -> Result<Vec<I>, ViewError> {
        let mut indices = Vec::new();
        if !self.was_cleared {
            for index in self.context.indices().await? {
                if !self.updates.contains_key(&index) {
                    indices.push(index);
                }
            }
        }
        for (index, entry) in &self.updates {
            if entry.is_some() {
                indices.push(index.clone());
            }
        }
        indices.sort();
        Ok(indices)
    }

    pub fn extra(&self) -> &C::Extra {
        self.context.extra()
    }
}

impl<C, I, W> CollectionView<C, I, W>
where
    C: CollectionOperations<I> + Send,
    ViewError: From<C::Error>,
    I: Eq + Ord + Clone + Debug + Sync,
    W: View<C> + Sync,
{
    /// Execute a function on each index.
    pub async fn for_each_index<F>(&mut self, mut f: F) -> Result<(), ViewError>
    where
        F: FnMut(I) + Send,
    {
        if !self.was_cleared {
            self.context
                .for_each_index(|index: I| {
                    if !self.updates.contains_key(&index) {
                        f(index);
                    }
                })
                .await?;
        }
        for (index, entry) in &self.updates {
            if entry.is_some() {
                f(index.clone());
            }
        }
        Ok(())
    }
}

#[async_trait]
impl<C, I, W> View<C> for ReentrantCollectionView<C, I, W>
where
    C: CollectionOperations<I> + Send,
    ViewError: From<C::Error>,
    I: Send + Ord + Sync + Debug + Clone,
    W: View<C> + Send,
{
    fn context(&self) -> &C {
        &self.context
    }

    async fn load(context: C) -> Result<Self, ViewError> {
        Ok(Self {
            context,
            was_cleared: false,
            updates: BTreeMap::new(),
        })
    }

    fn rollback(&mut self) {
        self.was_cleared = false;
        self.updates.clear();
    }

    async fn flush(&mut self, batch: &mut Batch) -> Result<(), ViewError> {
        if self.was_cleared {
            self.was_cleared = false;
            self.delete_entries(batch).await?;
            for (index, update) in mem::take(&mut self.updates) {
                if let Some(view) = update {
                    let mut view = Arc::try_unwrap(view)
                        .map_err(|_| ViewError::CannotAcquireCollectionEntry)?
                        .into_inner();
                    view.flush(batch).await?;
                    self.context.add_index(batch, index)?;
                }
            }
        } else {
            for (index, update) in mem::take(&mut self.updates) {
                match update {
                    Some(view) => {
                        let mut view = Arc::try_unwrap(view)
                            .map_err(|_| ViewError::CannotAcquireCollectionEntry)?
                            .into_inner();
                        view.flush(batch).await?;
                        self.context.add_index(batch, index)?;
                    }
                    None => {
                        let context = self.context.clone_with_scope(&index);
                        self.context.remove_index(batch, index)?;
                        let view = W::load(context).await?;
                        view.delete(batch).await?;
                    }
                }
            }
        }
        Ok(())
    }

    async fn delete(mut self, batch: &mut Batch) -> Result<(), ViewError> {
        self.delete_entries(batch).await
    }

    fn clear(&mut self) {
        self.was_cleared = true;
        self.updates.clear();
    }
}

impl<C, I, W> ReentrantCollectionView<C, I, W>
where
    C: CollectionOperations<I> + Send,
    ViewError: From<C::Error>,
    I: Eq + Ord + Sync + Clone + Send + Debug,
    W: View<C>,
{
    /// Delete all entries in this [`Collection`].
    async fn delete_entries(&mut self, batch: &mut Batch) -> Result<(), ViewError> {
        let stored_indices = self.context.indices().await?;
        for index in &stored_indices {
            let context = self.context.clone_with_scope(index);
            self.context.remove_index(batch, index.clone())?;
            let view = W::load(context).await?;
            view.delete(batch).await?;
        }
        Ok(())
    }

    /// Obtain a subview for the data at the given index in the collection. If an entry
    /// was removed before then a default entry is put on this index.
    pub async fn try_load_entry(&mut self, index: I) -> Result<OwnedMutexGuard<W>, ViewError> {
        match self.updates.entry(index.clone()) {
            btree_map::Entry::Occupied(entry) => {
                let entry = entry.into_mut();
                match entry {
                    Some(view) => Ok(view.clone().try_lock_owned()?),
                    None => {
                        let context = self.context.clone_with_scope(&index);
                        // Obtain a view and set its pending state to the default (e.g. empty) state
                        let mut view = W::load(context).await?;
                        view.clear();
                        let wrapped_view = Arc::new(Mutex::new(view));
                        *entry = Some(wrapped_view.clone());
                        Ok(wrapped_view.try_lock_owned()?)
                    }
                }
            }
            btree_map::Entry::Vacant(entry) => {
                let context = self.context.clone_with_scope(&index);
                let mut view = W::load(context).await?;
                if self.was_cleared {
                    view.clear();
                }
                let wrapped_view = Arc::new(Mutex::new(view));
                entry.insert(Some(wrapped_view.clone()));
                Ok(wrapped_view.try_lock_owned()?)
            }
        }
    }

    /// Mark the entry so that it is removed in the next flush
    pub fn remove_entry(&mut self, index: I) {
        if self.was_cleared {
            self.updates.remove(&index);
        } else {
            self.updates.insert(index, None);
        }
    }

    /// Mark the entry so that it is removed in the next flush
    pub async fn try_reset_entry_to_default(&mut self, index: I) -> Result<(), ViewError> {
        let mut view = self.try_load_entry(index).await?;
        view.clear();
        Ok(())
    }

    /// Return the list of indices in the collection.
    pub async fn indices(&mut self) -> Result<Vec<I>, ViewError> {
        let mut indices = Vec::new();
        if !self.was_cleared {
            for index in self.context.indices().await? {
                if !self.updates.contains_key(&index) {
                    indices.push(index);
                }
            }
        }
        for (index, entry) in &self.updates {
            if entry.is_some() {
                indices.push(index.clone());
            }
        }
        indices.sort();
        Ok(indices)
    }

    pub fn extra(&self) -> &C::Extra {
        self.context.extra()
    }
}

impl<C, I, W> ReentrantCollectionView<C, I, W>
where
    C: CollectionOperations<I> + Send,
    ViewError: From<C::Error>,
    I: Eq + Ord + Clone + Debug + Send + Sync,
    W: View<C> + Send + Sync,
{
    /// Execute a function on each index.
    pub async fn for_each_index<F>(&mut self, mut f: F) -> Result<(), ViewError>
    where
        F: FnMut(I) + Send + Sync,
    {
        if !self.was_cleared {
            self.context
                .for_each_index(|index: I| {
                    if !self.updates.contains_key(&index) {
                        f(index);
                    }
                })
                .await?;
        }
        for (index, entry) in &self.updates {
            if entry.is_some() {
                f(index.clone());
            }
        }
        Ok(())
    }
}
