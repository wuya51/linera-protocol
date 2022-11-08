use crate::hash::HashingContext;
use crate::views::{Context, ViewError};
use async_trait::async_trait;
use derive_bounded::Clone;
use serde::{de::DeserializeOwned, Serialize};
use std::collections::HashMap;
pub enum WriteOperation {
    Delete { key: Vec<u8> },
    Put { key: Vec<u8>, value: Vec<u8> },
}

/// A batch of writes inside a transaction;
#[derive(Default)]
pub struct Batch {
    pub operations: Vec<WriteOperation>,
}


impl Batch {
    /// A key may appear multiple times in the batch
    /// The construction of BatchWriteItem and TransactWriteItem does
    /// not allow for this to happen.
    pub fn simplify(self) -> Self {
        let mut map = HashMap::new();
        for op in self.operations {
            match op {
                WriteOperation::Delete { key } => map.insert(key, None),
                WriteOperation::Put { key, value } => map.insert(key, Some(value)),
            };
        }
        let mut operations = Vec::with_capacity(map.len());
        for (key, val) in map {
            match val {
                Some(value) => operations.push(WriteOperation::Put { key, value }),
                None => operations.push(WriteOperation::Delete { key }),
            }
        }
        Self { operations }
    }

    /// Insert a put a key/value in the batch
    pub fn put_key_value(
        &mut self,
        key: Vec<u8>,
        value: &impl Serialize,
    ) -> Result<(), bcs::Error> {
        let bytes = bcs::to_bytes(value)?;
        self.operations
            .push(WriteOperation::Put { key, value: bytes });
        Ok(())
    }

    /// Delete a key and put that command into the batch
    pub fn delete_key(&mut self, key: Vec<u8>) {
        self.operations.push(WriteOperation::Delete { key });
    }
}

/// Build a batch using builder. This is used for the macro.
pub async fn build_batch<F>(builder: F) -> Result<Batch, ViewError>
where
    F: FnOnce(&mut Batch) -> futures::future::BoxFuture<Result<(), ViewError>> + Send + Sync,
{
    let mut batch = Batch::default();
    builder(&mut batch).await?;
    Ok(batch)
}

/// Low-level, asynchronous key-value operations. Useful for storage APIs not based on views.
#[async_trait]
pub trait KeyValueOperations {
    type E;
    async fn read_key<V: DeserializeOwned>(&self, key: &[u8]) -> Result<Option<V>, Self::E>;

    async fn find_keys_with_prefix(&self, key_prefix: &[u8]) -> Result<Vec<Vec<u8>>, Self::E>;

    async fn get_sub_keys<Key: DeserializeOwned + Send>(
        &mut self,
        key_prefix: &[u8],
    ) -> Result<Vec<Key>, Self::E>;

    async fn write_batch(&self, batch: Batch) -> Result<(), Self::E>;
}


#[derive(Debug, Clone)]
#[bounded_to(EX, DB)]
pub struct ContextFromDb<EX,DB,ER>
where
    EX: Clone + Sync + Send,
    DB: KeyValueOperations<E = ER> + Clone + Send + Sync,
    ER: std::convert::From<bcs::Error> + Send + Sync + std::error::Error + 'static,
{
    pub db: DB,
    pub base_key: Vec<u8>,
    pub extra: EX,
}


#[async_trait]
impl<EX,DB,ER> Context for ContextFromDb<EX,DB,ER>
where
    EX: Clone + Send + Sync,
    DB: KeyValueOperations<E = ER> + Clone + Send + Sync,
    ER: std::convert::From<bcs::Error> + Send + Sync + std::error::Error + 'static,
    ViewError: std::convert::From<ER>
{
    type Extra = EX;
    type Error = ER;

    fn extra(&self) -> &EX {
        &self.extra
    }

    fn base_key(&self) -> Vec<u8> {
        self.base_key.clone()
    }

    fn derive_key<I: Serialize>(&self, index: &I) -> Result<Vec<u8>, Self::Error> {
        let mut key = self.base_key.clone();
        bcs::serialize_into(&mut key, index)?;
        assert!(
            key.len() > self.base_key.len(),
            "Empty indices are not allowed"
        );
        Ok(key)
    }

    async fn read_key<Item>(&mut self, key: &[u8]) -> Result<Option<Item>, Self::Error>
    where
        Item: DeserializeOwned,
    {
        self.db.read_key(key).await
    }

    async fn find_keys_with_prefix(
        &self,
        key_prefix: &[u8],
    ) -> Result<Vec<Vec<u8>>, Self::Error> {
        self.db.find_keys_with_prefix(key_prefix).await
    }

    async fn get_sub_keys<Key>(
        &mut self,
        key_prefix: &[u8],
    ) -> Result<Vec<Key>, Self::Error>
    where
        Key: DeserializeOwned + Send,
    {
        self.db.get_sub_keys(key_prefix).await
    }

    async fn write_batch(&self, batch: Batch) -> Result<(), ViewError> {
        self.db.write_batch(batch).await?;
        Ok(())
    }

    fn clone_self(&self, base_key: Vec<u8>) -> Self {
        Self {
            db: self.db.clone(),
            base_key,
            extra: self.extra.clone(),
        }
    }
}

impl<EX,DB,ER> HashingContext for ContextFromDb<EX,DB,ER>
where
    EX: Clone + Send + Sync,
    DB: KeyValueOperations<E = ER> + Clone + Send + Sync,
    ER: std::convert::From<bcs::Error> + Send + Sync + std::error::Error + 'static,
    ViewError: std::convert::From<ER>,
{
    type Hasher = sha2::Sha512;
}
