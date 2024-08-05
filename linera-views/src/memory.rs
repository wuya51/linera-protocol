// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

use std::{
    collections::BTreeMap,
    fmt::Debug,
    sync::{Arc, LazyLock, Mutex, RwLock},
};

use thiserror::Error;

#[cfg(with_testing)]
use crate::test_utils::generate_test_namespace;
use crate::{
    batch::{Batch, DeletePrefixExpander, WriteOperation},
    common::{
        get_big_key, get_interval, AdminKeyValueStore, CommonStoreConfig, Context, ContextFromStore,
        KeyIterable, KeyValueStore, ReadableKeyValueStore, WritableKeyValueStore,
    },
    value_splitting::DatabaseConsistencyError,
    views::ViewError,
};

/// The initial configuration of the system
#[derive(Debug)]
pub struct MemoryStoreConfig {
    /// The common configuration of the key value store
    pub common_config: CommonStoreConfig,
}

impl MemoryStoreConfig {
    /// Creates a `MemoryStoreConfig`. `max_concurrent_queries` and `cache_size` are not used.
    pub fn new(max_stream_queries: usize) -> Self {
        let common_config = CommonStoreConfig {
            max_concurrent_queries: None,
            max_stream_queries,
            cache_size: 1000,
        };
        Self { common_config }
    }
}

/// The number of streams for the test
pub const TEST_MEMORY_MAX_STREAM_QUERIES: usize = 10;

/// The data is serialized in memory just like for RocksDB / DynamoDB
/// The analog of the database is the BTreeMap
type MemoryStoreMap = BTreeMap<Vec<u8>, Vec<u8>>;

/// The container for the `MemoryStopMap` according to the Namespace.
type NamespaceMemoryStore = BTreeMap<String, Arc<RwLock<MemoryStoreMap>>>;

/// The global variables of the Namespace memory stores
static MEMORY_STORES: LazyLock<Mutex<NamespaceMemoryStore>> =
    LazyLock::new(|| Mutex::new(NamespaceMemoryStore::new()));

/// A virtual DB client where data are persisted in memory.
#[derive(Clone)]
pub struct MemoryStore {
    /// The map used for storing the data.
    map: Arc<RwLock<MemoryStoreMap>>,
    /// The maximum number of queries used for the stream.
    max_stream_queries: usize,
    /// The namespace of the store
    namespace: String,
    /// Whether to kill on drop or not the
    kill_on_drop: bool,
}

impl Drop for MemoryStore {
    fn drop(&mut self) {
        if self.kill_on_drop {
            let mut namespace_memory_store = MEMORY_STORES
                .lock()
                .expect("MEMORY_STORES lock should not be poisoned");
            Self::sync_delete(&mut namespace_memory_store, &self.namespace);
        }
    }
}

impl ReadableKeyValueStore<MemoryStoreError> for MemoryStore {
    const MAX_KEY_SIZE: usize = usize::MAX;
    type Keys = Vec<Vec<u8>>;
    type KeyValues = Vec<(Vec<u8>, Vec<u8>)>;

    fn max_stream_queries(&self) -> usize {
        self.max_stream_queries
    }

    async fn read_value_bytes(&self, root_key: &[u8], key: &[u8]) -> Result<Option<Vec<u8>>, MemoryStoreError> {
        let map = self
            .map
            .read()
            .expect("MemoryStore lock should not be poisoned");
        let big_key = get_big_key(root_key, key);
        Ok(map.get(&big_key).cloned())
    }

    async fn contains_key(&self, root_key: &[u8], key: &[u8]) -> Result<bool, MemoryStoreError> {
        let map = self
            .map
            .read()
            .expect("MemoryStore lock should not be poisoned");
        let big_key = get_big_key(root_key, key);
        Ok(map.contains_key(&big_key))
    }

    async fn contains_keys(&self, root_key: &[u8], keys: Vec<Vec<u8>>) -> Result<Vec<bool>, MemoryStoreError> {
        let map = self
            .map
            .read()
            .expect("MemoryStore lock should not be poisoned");
        Ok(keys
           .into_iter()
           .map(|key| {
               let big_key = get_big_key(root_key, &key);
               map.contains_key(&big_key)
           })
           .collect::<Vec<_>>())
    }

    async fn read_multi_values_bytes(
        &self,
        root_key: &[u8],
        keys: Vec<Vec<u8>>,
    ) -> Result<Vec<Option<Vec<u8>>>, MemoryStoreError> {
        let map = self
            .map
            .read()
            .expect("MemoryStore lock should not be poisoned");
        let mut result = Vec::new();
        for key in keys {
            let big_key = get_big_key(root_key, &key);
            result.push(map.get(&big_key).cloned());
        }
        Ok(result)
    }

    async fn find_keys_by_prefix(
        &self,
        root_key: &[u8],
        key_prefix: &[u8],
    ) -> Result<Vec<Vec<u8>>, MemoryStoreError> {
        let map = self
            .map
            .read()
            .expect("MemoryStore lock should not be poisoned");
        let mut values = Vec::new();
        let len = key_prefix.len() + root_key.len();
        let big_key_prefix = get_big_key(root_key, key_prefix);
        for (key, _value) in map.range(get_interval(big_key_prefix)) {
            values.push(key[len..].to_vec())
        }
        Ok(values)
    }

    async fn find_key_values_by_prefix(
        &self,
        root_key: &[u8],
        key_prefix: &[u8],
    ) -> Result<Vec<(Vec<u8>, Vec<u8>)>, MemoryStoreError> {
        let map = self
            .map
            .read()
            .expect("MemoryStore lock should not be poisoned");
        let mut key_values = Vec::new();
        let len = key_prefix.len() + root_key.len();
        let big_key_prefix = get_big_key(root_key, key_prefix);
        for (key, value) in map.range(get_interval(big_key_prefix)) {
            let key_value = (key[len..].to_vec(), value.to_vec());
            key_values.push(key_value);
        }
        Ok(key_values)
    }
}

impl WritableKeyValueStore<MemoryStoreError> for MemoryStore {
    const MAX_VALUE_SIZE: usize = usize::MAX;

    async fn write_batch(&self, root_key: &[u8], batch: Batch) -> Result<(), MemoryStoreError> {
        let mut map = self
            .map
            .write()
            .expect("MemoryStore lock should not be poisoned");
        for ent in batch.operations {
            match ent {
                WriteOperation::Put { key, value } => {
                    let big_key = get_big_key(root_key, &key);
                    map.insert(big_key, value);
                }
                WriteOperation::Delete { key } => {
                    let big_key = get_big_key(root_key, &key);
                    map.remove(&big_key);
                }
                WriteOperation::DeletePrefix { key_prefix } => {
                    let big_key_prefix = get_big_key(root_key, &key_prefix);
                    let key_list = map
                        .range(get_interval(big_key_prefix))
                        .map(|x| x.0.to_vec())
                        .collect::<Vec<_>>();
                    for key in key_list {
                        map.remove(&key);
                    }
                }
            }
        }
        Ok(())
    }

    async fn clear_journal(&self, _root_key: &[u8]) -> Result<(), MemoryStoreError> {
        Ok(())
    }
}

impl MemoryStore {
    fn sync_connect(
        namespace_memory_store: &NamespaceMemoryStore,
        config: &MemoryStoreConfig,
        namespace: &str,
        kill_on_drop: bool,
    ) -> Result<Self, MemoryStoreError> {
        let max_stream_queries = config.common_config.max_stream_queries;
        let namespace = namespace.to_string();
        let store = namespace_memory_store
            .get(&namespace)
            .ok_or(MemoryStoreError::NotExistentNamespace)?;
        let map = store.clone();
        let namespace = namespace.to_string();
        Ok(MemoryStore {
            map,
            max_stream_queries,
            namespace,
            kill_on_drop,
        })
    }

    fn sync_list_all(namespace_memory_store: &NamespaceMemoryStore) -> Vec<String> {
        namespace_memory_store.keys().cloned().collect::<Vec<_>>()
    }

    fn sync_exists(namespace_memory_store: &NamespaceMemoryStore, namespace: &str) -> bool {
        let namespace = namespace.to_string();
        namespace_memory_store.contains_key(&namespace)
    }

    fn sync_create(namespace_memory_store: &mut NamespaceMemoryStore, namespace: &str) {
        let namespace = namespace.to_string();
        let map = MemoryStoreMap::new();
        let map = Arc::new(RwLock::new(map));
        namespace_memory_store.insert(namespace, map);
    }

    fn sync_delete(namespace_memory_store: &mut NamespaceMemoryStore, namespace: &str) {
        let namespace = namespace.to_string();
        namespace_memory_store.remove(&namespace);
    }

    /// Create a memory store if one is missing and otherwise connect with the existing one
    fn sync_maybe_create_and_connect(
        config: &MemoryStoreConfig,
        namespace: &str,
        kill_on_drop: bool,
    ) -> Result<Self, MemoryStoreError> {
        let mut namespace_memory_store = MEMORY_STORES.lock().expect("lock should not be poisoned");
        if !MemoryStore::sync_exists(&namespace_memory_store, namespace) {
            MemoryStore::sync_create(&mut namespace_memory_store, namespace);
        }
        MemoryStore::sync_connect(&namespace_memory_store, config, namespace, kill_on_drop)
    }

    /// Creates a `MemoryStore` from a number of queries and a namespace.
    pub fn new(max_stream_queries: usize, namespace: &str) -> Result<Self, MemoryStoreError> {
        let common_config = CommonStoreConfig {
            max_concurrent_queries: None,
            max_stream_queries,
            cache_size: 1000,
        };
        let config = MemoryStoreConfig { common_config };
        let kill_on_drop = false;
        MemoryStore::sync_maybe_create_and_connect(&config, namespace, kill_on_drop)
    }

    /// Creates a `MemoryStore` from a number of queries and a namespace for testing.
    #[cfg(with_testing)]
    pub fn new_for_testing(
        max_stream_queries: usize,
        namespace: &str,
    ) -> Result<Self, MemoryStoreError> {
        let common_config = CommonStoreConfig {
            max_concurrent_queries: None,
            max_stream_queries,
            cache_size: 1000,
        };
        let config = MemoryStoreConfig { common_config };
        let kill_on_drop = true;
        MemoryStore::sync_maybe_create_and_connect(&config, namespace, kill_on_drop)
    }
}

impl AdminKeyValueStore for MemoryStore {
    type Error = MemoryStoreError;
    type Config = MemoryStoreConfig;

    async fn connect(config: &Self::Config, namespace: &str) -> Result<Self, MemoryStoreError> {
        let namespace_memory_store = MEMORY_STORES
            .lock()
            .expect("MEMORY_STORES lock should not be poisoned");
        let kill_on_drop = false;
        Self::sync_connect(&namespace_memory_store, config, namespace, kill_on_drop)
    }

    async fn list_all(_config: &Self::Config) -> Result<Vec<String>, MemoryStoreError> {
        let namespace_memory_store = MEMORY_STORES
            .lock()
            .expect("MEMORY_STORES lock should not be poisoned");
        Ok(Self::sync_list_all(&namespace_memory_store))
    }

    async fn exists(_config: &Self::Config, namespace: &str) -> Result<bool, MemoryStoreError> {
        let namespace_memory_store = MEMORY_STORES
            .lock()
            .expect("MEMORY_STORES lock should not be poisoned");
        Ok(Self::sync_exists(&namespace_memory_store, namespace))
    }

    async fn create(_config: &Self::Config, namespace: &str) -> Result<(), MemoryStoreError> {
        let mut namespace_memory_store = MEMORY_STORES
            .lock()
            .expect("MEMORY_STORES lock should not be poisoned");
        Self::sync_create(&mut namespace_memory_store, namespace);
        Ok(())
    }

    async fn delete(_config: &Self::Config, namespace: &str) -> Result<(), MemoryStoreError> {
        let mut namespace_memory_store = MEMORY_STORES
            .lock()
            .expect("MEMORY_STORES lock should not be poisoned");
        Self::sync_delete(&mut namespace_memory_store, namespace);
        Ok(())
    }
}

impl KeyValueStore for MemoryStore {
    type Error = MemoryStoreError;
}

/// An implementation of [`crate::common::Context`] that stores all values in memory.
pub type MemoryContext<E> = ContextFromStore<E, MemoryStore>;

/// Creates a default memory test config
pub fn create_memory_store_test_config() -> MemoryStoreConfig {
    let max_stream_queries = TEST_MEMORY_MAX_STREAM_QUERIES;
    let common_config = CommonStoreConfig {
        max_concurrent_queries: None,
        max_stream_queries,
        cache_size: 1000,
    };
    MemoryStoreConfig { common_config }
}

impl<E> MemoryContext<E> {
    /// Creates a [`MemoryContext`].
    pub fn new(max_stream_queries: usize, namespace: &str, extra: E) -> Self {
        let store = MemoryStore::new(max_stream_queries, namespace).unwrap();
        let root_key = Vec::new();
        let base_key = Vec::new();
        Self {
            store,
            root_key,
            base_key,
            extra,
        }
    }

    /// Creates a [`MemoryContext`] for testing.
    #[cfg(with_testing)]
    pub fn new_for_testing(max_stream_queries: usize, namespace: &str, extra: E) -> Self {
        let store = MemoryStore::new_for_testing(max_stream_queries, namespace).unwrap();
        let root_key = Vec::new();
        let base_key = Vec::new();
        Self {
            store,
            root_key,
            base_key,
            extra,
        }
    }
}

/// Provides a `MemoryContext<()>` that can be used for tests.
/// It is not named create_memory_test_context because it is massively
/// used and so we want to have a short name.
#[cfg(with_testing)]
pub fn create_test_memory_context() -> MemoryContext<()> {
    let namespace = generate_test_namespace();
    MemoryContext::new_for_testing(TEST_MEMORY_MAX_STREAM_QUERIES, &namespace, ())
}

/// Creates a test memory store for working.
#[cfg(with_testing)]
pub fn create_test_memory_store() -> MemoryStore {
    let namespace = generate_test_namespace();
    MemoryStore::new_for_testing(TEST_MEMORY_MAX_STREAM_QUERIES, &namespace).unwrap()
}

/// The error type for [`MemoryContext`].
#[derive(Error, Debug)]
pub enum MemoryStoreError {
    /// Serialization error with BCS.
    #[error("BCS error: {0}")]
    Bcs(#[from] bcs::Error),

    /// The value is too large for the MemoryStore
    #[error("The value is too large for the MemoryStore")]
    TooLargeValue,

    /// The namespace does not exist
    #[error("The namespace does not exist")]
    NotExistentNamespace,

    /// The database is not consistent
    #[error(transparent)]
    DatabaseConsistencyError(#[from] DatabaseConsistencyError),
}

impl From<MemoryStoreError> for ViewError {
    fn from(error: MemoryStoreError) -> Self {
        Self::StoreError {
            backend: "memory".to_string(),
            error: error.to_string(),
        }
    }
}

impl DeletePrefixExpander for MemoryContext<()> {
    type Error = MemoryStoreError;

    async fn expand_delete_prefix(&self, _root_key: &[u8], key_prefix: &[u8]) -> Result<Vec<Vec<u8>>, Self::Error> {
        let mut vector_list = Vec::new();
        for key in <Vec<Vec<u8>> as KeyIterable<Self::Error>>::iterator(
            &self.find_keys_by_prefix(key_prefix).await?,
        ) {
            vector_list.push(key?.to_vec());
        }
        Ok(vector_list)
    }
}
