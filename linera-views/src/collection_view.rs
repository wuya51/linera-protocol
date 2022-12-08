use crate::{
    common::{Batch, Context},
    views::{HashView, Hasher, HashingContext, View, ViewError},
};
use async_trait::async_trait;
use serde::{de::DeserializeOwned, Serialize};
use std::{
    collections::{btree_map, BTreeMap},
    fmt::Debug,
    io::Write,
    marker::PhantomData,
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
    updates: BTreeMap<Vec<u8>, Option<W>>,
    _phantom: PhantomData<I>,
}

/// A view that supports accessing a collection of views of the same kind, indexed by a
/// key, possibly several subviews at a time.
#[derive(Debug)]
pub struct ReentrantCollectionView<C, I, W> {
    context: C,
    was_cleared: bool,
    updates: BTreeMap<Vec<u8>, Option<Arc<Mutex<W>>>>,
    _phantom: PhantomData<I>,
}

/// We need to find new base keys in order to implement the collection_view.
/// We do this by appending a value to the base_key.
///
/// Sub-views in a collection share a common key prefix, like in other view types. However,
/// just concatenating the shared prefix with sub-view keys makes it impossible to distinguish if a
/// given key belongs to child sub-view or a grandchild sub-view (consider for example if a
/// collection is stored inside the collection).
///
/// Value 0 specify an index and serves to indicate the existence of an entry in the collection
/// Value 1 specify as the prefix for the sub-view.
#[inline]
fn get_index_key(mut base: Vec<u8>, index: &[u8]) -> Vec<u8> {
    base.extend_from_slice(&[0]);
    base.extend_from_slice(index);
    base
}

#[inline]
fn get_subview_key(mut base: Vec<u8>, index: &[u8]) -> Vec<u8> {
    base.extend_from_slice(&[1]);
    base.extend_from_slice(index);
    base
}

#[async_trait]
impl<C, I, W> View<C> for CollectionView<C, I, W>
where
    C: Context + Send,
    ViewError: From<C::Error>,
    I: Send + Sync + Debug + Clone + Serialize + DeserializeOwned,
    W: View<C> + Send + Sync,
{
    fn context(&self) -> &C {
        &self.context
    }

    async fn load(context: C) -> Result<Self, ViewError> {
        Ok(Self {
            context,
            was_cleared: false,
            updates: BTreeMap::new(),
            _phantom: PhantomData,
        })
    }

    fn rollback(&mut self) {
        self.was_cleared = false;
        self.updates.clear();
    }

    fn flush(&mut self, batch: &mut Batch) -> Result<(), ViewError> {
        if self.was_cleared {
            self.was_cleared = false;
            batch.delete_key_prefix(self.context.base_key());
            for (index, update) in mem::take(&mut self.updates) {
                if let Some(mut view) = update {
                    view.flush(batch)?;
                    self.add_index(batch, &index)?;
                }
            }
        } else {
            for (index, update) in mem::take(&mut self.updates) {
                match update {
                    Some(mut view) => {
                        view.flush(batch)?;
                        self.add_index(batch, &index)?;
                    }
                    None => {
                        let key_subview = self.get_subview_key(&index);
                        let key_index = self.get_index_key(&index);
                        batch.delete_key(key_index);
                        batch.delete_key_prefix(key_subview);
                    }
                }
            }
        }
        Ok(())
    }

    fn delete(self, batch: &mut Batch) {
        batch.delete_key_prefix(self.context.base_key());
    }

    fn clear(&mut self) {
        self.was_cleared = true;
        self.updates.clear();
    }
}

impl<C, I, W> CollectionView<C, I, W>
where
    C: Context + Send,
    ViewError: From<C::Error>,
    I: Sync + Clone + Send + Debug + Serialize + DeserializeOwned,
    W: View<C> + Sync,
{
    fn get_index_key(&self, index: &[u8]) -> Vec<u8> {
        get_index_key(self.context.base_key(), index)
    }

    fn get_subview_key(&self, index: &[u8]) -> Vec<u8> {
        get_subview_key(self.context.base_key(), index)
    }

    fn add_index(&self, batch: &mut Batch, index: &[u8]) -> Result<(), ViewError> {
        let key = self.get_index_key(index);
        batch.put_key_value(key, &())?;
        Ok(())
    }

    /// Obtain a subview for the data at the given index in the collection. If an entry
    /// was removed before then a default entry is put on this index.
    pub async fn load_entry(&mut self, index: I) -> Result<&mut W, ViewError> {
        let short_key = self.context.derive_short_key(&index)?;
        let base = self.context.base_key();
        match self.updates.entry(short_key.clone()) {
            btree_map::Entry::Occupied(entry) => {
                let entry = entry.into_mut();
                match entry {
                    Some(view) => Ok(view),
                    None => {
                        let context = self.context.clone_with_base_key(get_subview_key(base, &short_key));
                        // Obtain a view and set its pending state to the default (e.g. empty) state
                        let mut view = W::load(context).await?;
                        view.clear();
                        *entry = Some(view);
                        Ok(entry.as_mut().unwrap())
                    }
                }
            }
            btree_map::Entry::Vacant(entry) => {
                let context = self.context.clone_with_base_key(get_subview_key(base, &short_key));
                let mut view = W::load(context).await?;
                if self.was_cleared {
                    view.clear();
                }
                Ok(entry.insert(Some(view)).as_mut().unwrap())
            }
        }
    }

    /// Mark the entry so that it is removed in the next flush
    pub fn remove_entry(&mut self, index: I) -> Result<(), ViewError> {
        let short_key = self.context.derive_short_key(&index)?;
        if self.was_cleared {
            self.updates.remove(&short_key);
        } else {
            self.updates.insert(short_key, None);
        }
        Ok(())
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
        self.for_each_index_i(|index: I| {
            indices.push(index);
            Ok(())
        })
        .await?;
        Ok(indices)
    }

    pub fn extra(&self) -> &C::Extra {
        self.context.extra()
    }
}

impl<C, I, W> CollectionView<C, I, W>
where
    C: Context + Send,
    ViewError: From<C::Error>,
    I: Clone + Debug + Sync + Send + Serialize + DeserializeOwned,
    W: View<C> + Sync,
{
    /// Execute a function on each index serialization. The order in which the entry
    /// are passed is not the ones of the entryies I but of their serialization
    pub async fn for_each_index<F>(&mut self, mut f: F) -> Result<(), ViewError>
    where
        F: FnMut(Vec<u8>) -> Result<(), ViewError> + Send,
    {
        let mut iter = self.updates.iter();
        let mut pair = iter.next();
        if !self.was_cleared {
            let base = self.get_index_key(&[]);
            for index in self.context.find_stripped_keys_by_prefix(&base).await? {
                loop {
                    match pair {
                        Some((key, value)) => {
                            let key = key.clone();
                            if key < index {
                                if value.is_some() {
                                    f(key)?;
                                }
                                pair = iter.next();
                            } else {
                                if key != index {
                                    f(index)?;
                                } else if value.is_some() {
                                    f(key)?;
                                    pair = iter.next();
                                }
                                break;
                            }
                        }
                        None => {
                            f(index)?;
                            break;
                        }
                    }
                }
            }
        }
        while let Some((key, value)) = pair {
            if value.is_some() {
                f(key.to_vec())?;
            }
            pair = iter.next();
        }
        Ok(())
    }

    /// Execute a function on each index. The order in which the entry are passed
    /// is not the ones of the entryies I but of their serialization.
    pub async fn for_each_index_i<F>(&mut self, mut f: F) -> Result<(), ViewError>
    where
        F: FnMut(I) -> Result<(), ViewError> + Send,
    {
        self.for_each_index(|index: Vec<u8>| {
            let index = C::deserialize_value(&index)?;
            f(index)?;
            Ok(())
	}).await?;
        Ok(())
    }
}

#[async_trait]
impl<C, I, W> View<C> for ReentrantCollectionView<C, I, W>
where
    C: Context + Send,
    ViewError: From<C::Error>,
    I: Send + Sync + Debug + Clone + Serialize + DeserializeOwned,
    W: View<C> + Send + Sync,
{
    fn context(&self) -> &C {
        &self.context
    }

    async fn load(context: C) -> Result<Self, ViewError> {
        Ok(Self {
            context,
            was_cleared: false,
            updates: BTreeMap::new(),
            _phantom: PhantomData,
        })
    }

    fn rollback(&mut self) {
        self.was_cleared = false;
        self.updates.clear();
    }

    fn flush(&mut self, batch: &mut Batch) -> Result<(), ViewError> {
        if self.was_cleared {
            self.was_cleared = false;
            batch.delete_key_prefix(self.context.base_key());
            for (index, update) in mem::take(&mut self.updates) {
                if let Some(view) = update {
                    let mut view = Arc::try_unwrap(view)
                        .map_err(|_| ViewError::CannotAcquireCollectionEntry)?
                        .into_inner();
                    view.flush(batch)?;
                    self.add_index(batch, &index)?;
                }
            }
        } else {
            for (index, update) in mem::take(&mut self.updates) {
                match update {
                    Some(view) => {
                        let mut view = Arc::try_unwrap(view)
                            .map_err(|_| ViewError::CannotAcquireCollectionEntry)?
                            .into_inner();
                        view.flush(batch)?;
                        self.add_index(batch, &index)?;
                    }
                    None => {
                        let key_subview = self.get_subview_key(&index);
                        let key_index = self.get_index_key(&index);
                        batch.delete_key(key_index);
                        batch.delete_key_prefix(key_subview);
                    }
                }
            }
        }
        Ok(())
    }

    fn delete(self, batch: &mut Batch) {
        batch.delete_key_prefix(self.context.base_key());
    }

    fn clear(&mut self) {
        self.was_cleared = true;
        self.updates.clear();
    }
}

impl<C, I, W> ReentrantCollectionView<C, I, W>
where
    C: Context + Send,
    ViewError: From<C::Error>,
    I: Sync + Clone + Send + Debug + Serialize + DeserializeOwned,
    W: View<C> + Send + Sync,
{
    fn get_index_key(&self, index: &[u8]) -> Vec<u8> {
        get_index_key(self.context.base_key(), index)
    }

    fn get_subview_key(&self, index: &[u8]) -> Vec<u8> {
        get_subview_key(self.context.base_key(), index)
    }

    fn add_index(&self, batch: &mut Batch, index: &[u8]) -> Result<(), ViewError> {
        let key = self.get_index_key(index);
        batch.put_key_value(key, &())?;
        Ok(())
    }

    /// Obtain a subview for the data at the given index in the collection. If an entry
    /// was removed before then a default entry is put on this index.
    pub async fn try_load_entry(&mut self, index: I) -> Result<OwnedMutexGuard<W>, ViewError> {
        let short_key = self.context.derive_short_key(&index)?;
        let base = self.context.base_key();
        match self.updates.entry(short_key.clone()) {
            btree_map::Entry::Occupied(entry) => {
                let entry = entry.into_mut();
                match entry {
                    Some(view) => Ok(view.clone().try_lock_owned()?),
                    None => {
                        let context = self.context.clone_with_base_key(get_subview_key(base, &short_key));
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
                let context = self.context.clone_with_base_key(get_subview_key(base, &short_key));
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
    pub fn remove_entry(&mut self, index: I) -> Result<(), ViewError> {
        let short_key = self.context.derive_short_key(&index)?;
        if self.was_cleared {
            self.updates.remove(&short_key);
        } else {
            self.updates.insert(short_key, None);
        }
        Ok(())
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
        self.for_each_index_i(|index: I| {
            indices.push(index);
            Ok(())
        })
        .await?;
        Ok(indices)
    }

    pub fn extra(&self) -> &C::Extra {
        self.context.extra()
    }

    /// Execute a function on each index serialization. The order in which the entry
    /// are passed is not the ones of the entries I but of their serialization
    pub async fn for_each_index<F>(&mut self, mut f: F) -> Result<(), ViewError>
    where
        F: FnMut(Vec<u8>) -> Result<(), ViewError> + Send,
    {
        let mut iter = self.updates.iter();
        let mut pair = iter.next();
        if !self.was_cleared {
            let base = self.get_index_key(&[]);
            for index in self.context.find_stripped_keys_by_prefix(&base).await? {
                loop {
                    match pair {
                        Some((key, value)) => {
                            let key = key.clone();
                            if key < index {
                                if value.is_some() {
                                    f(key)?;
                                }
                                pair = iter.next();
                            } else {
                                if key != index {
                                    f(index)?;
                                } else if value.is_some() {
                                    f(key)?;
                                    pair = iter.next();
                                }
                                break;
                            }
                        }
                        None => {
                            f(index)?;
                            break;
                        }
                    }
                }
            }
        }
        while let Some((key, value)) = pair {
            if value.is_some() {
                f(key.to_vec())?;
            }
            pair = iter.next();
        }
        Ok(())
    }

    /// Execute a function on each index. The order in which the entry are passed
    /// is not the ones of the entryies I but of their serialization.
    pub async fn for_each_index_i<F>(&mut self, mut f: F) -> Result<(), ViewError>
    where
        F: FnMut(I) -> Result<(), ViewError> + Send,
    {
        self.for_each_index(|index: Vec<u8>| {
            let index = C::deserialize_value(&index)?;
            f(index)?;
            Ok(())
	}).await?;
        Ok(())
    }
}

#[async_trait]
impl<C, I, W> HashView<C> for CollectionView<C, I, W>
where
    C: HashingContext + Context + Send + Sync,
    ViewError: From<C::Error>,
    I: Clone + Debug + Send + Sync + Serialize + DeserializeOwned + 'static,
    W: HashView<C> + Send + Sync + 'static,
{
    async fn hash(&mut self) -> Result<<C::Hasher as Hasher>::Output, ViewError> {
        let mut hasher = C::Hasher::default();
        let indices = self.indices().await?;
        hasher.update_with_bcs_bytes(&indices.len())?;
        for index in indices {
            hasher.update_with_bcs_bytes(&index)?;
            let view = self.load_entry(index).await?;
            let hash = view.hash().await?;
            hasher.write_all(hash.as_ref())?;
        }
        Ok(hasher.finalize())
    }
}

#[async_trait]
impl<C, I, W> HashView<C> for ReentrantCollectionView<C, I, W>
where
    C: HashingContext + Context + Send + Sync,
    ViewError: From<C::Error>,
    I: Clone + Debug + Send + Sync + Serialize + DeserializeOwned + 'static,
    W: HashView<C> + Send + Sync + 'static,
{
    async fn hash(&mut self) -> Result<<C::Hasher as Hasher>::Output, ViewError> {
        let mut hasher = C::Hasher::default();
        let indices = self.indices().await?;
        hasher.update_with_bcs_bytes(&indices.len())?;
        for index in indices {
            hasher.update_with_bcs_bytes(&index)?;
            let mut view = self.try_load_entry(index).await?;
            let hash = view.hash().await?;
            hasher.write_all(hash.as_ref())?;
        }
        Ok(hasher.finalize())
    }
}
