// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0
use crate::{
    common::{get_interval, Batch, ContextFromDb, KeyValueOperations, SimpleKeyIterator, WriteOperation},
    views::ViewError,
};
use async_trait::async_trait;
use std::{
    collections::BTreeMap,
    fmt::Debug,
    sync::Arc,
};
use thiserror::Error;
use tokio::sync::{OwnedMutexGuard, RwLock};

/// The data is serialized in memory just like for rocksdb / dynamodb
/// The analogue of the database is the BTreeMap
pub type MemoryStoreMap = BTreeMap<Vec<u8>, Vec<u8>>;

pub type MemoryContainer = Arc<RwLock<OwnedMutexGuard<MemoryStoreMap>>>;

/// A context that stores all values in memory.
pub type MemoryContext<E> = ContextFromDb<E, MemoryContainer>;

impl<E> MemoryContext<E> {
    pub fn new(guard: OwnedMutexGuard<MemoryStoreMap>, extra: E) -> Self {
        Self {
            db: Arc::new(RwLock::new(guard)),
            base_key: Vec::new(),
            extra,
        }
    }
}

#[async_trait]
impl KeyValueOperations for MemoryContainer {
    type Error = MemoryContextError;
    type KeyIterator = SimpleKeyIterator<MemoryContextError>;

    async fn read_key_bytes(&self, key: &[u8]) -> Result<Option<Vec<u8>>, MemoryContextError> {
        let map = self.read().await;
        Ok(map.get(key).cloned())
    }

    async fn find_keys_with_prefix(
        &self,
        key_prefix: &[u8],
    ) -> Result<Self::KeyIterator, MemoryContextError> {
        let map = self.read().await;
        let mut values = Vec::new();
        for (key, _value) in map.range(get_interval(key_prefix.to_vec())) {
            values.push(key.clone())
        }
        Ok(SimpleKeyIterator::new(values))
    }

    async fn write_batch(&self, batch: Batch) -> Result<(), MemoryContextError> {
        let mut map = self.write().await;
        for ent in batch.operations {
            match ent {
                WriteOperation::Put { key, value } => { map.insert(key, value); },
                WriteOperation::Delete { key } => { map.remove(&key); },
                WriteOperation::DeletePrefix { key_prefix } => {
                    for (key, _value) in map.range(get_interval(key_prefix)) {
                        map.remove(key);
                    }
                }
            }
        }
        Ok(())
    }
}

#[derive(Error, Debug)]
pub enum MemoryContextError {
    #[error("BCS error: {0}")]
    Bcs(#[from] bcs::Error),
}

impl From<MemoryContextError> for ViewError {
    fn from(error: MemoryContextError) -> Self {
        Self::ContextError {
            backend: "memory".to_string(),
            error: error.to_string(),
        }
    }
}
