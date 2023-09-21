// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

use crate::{chain_guards::ChainGuards, DbStore, DbStoreClient};
use linera_execution::WasmRuntime;
use linera_views::{
    common::TableStatus,
    rocks_db::{RocksDbClient, RocksDbContextError, RocksDbKvStoreConfig},
};
use std::sync::Arc;

#[cfg(any(test, feature = "test"))]
use {linera_views::rocks_db::create_rocks_db_common_config, tempfile::TempDir};

#[cfg(test)]
#[path = "unit_tests/rocks_db.rs"]
mod tests;

type RocksDbStore = DbStore<RocksDbClient>;

impl RocksDbStore {
    #[cfg(any(test, feature = "test"))]
    pub async fn new_for_testing(
        store_config: RocksDbKvStoreConfig,
        wasm_runtime: Option<WasmRuntime>,
    ) -> Result<(Self, TableStatus), RocksDbContextError> {
        let (client, table_status) = RocksDbClient::new_for_testing(store_config).await?;
        let store = Self {
            client,
            guards: ChainGuards::default(),
            user_applications: Arc::default(),
            wasm_runtime,
        };
        Ok((store, table_status))
    }

    pub async fn initialize(
        store_config: RocksDbKvStoreConfig,
        wasm_runtime: Option<WasmRuntime>,
    ) -> Result<Self, RocksDbContextError> {
        let client = RocksDbClient::initialize(store_config).await?;
        let store = Self {
            client,
            guards: ChainGuards::default(),
            user_applications: Arc::default(),
            wasm_runtime,
        };
        Ok(store)
    }

    pub async fn new(
        store_config: RocksDbKvStoreConfig,
        wasm_runtime: Option<WasmRuntime>,
    ) -> Result<(Self, TableStatus), RocksDbContextError> {
        let (client, table_status) = RocksDbClient::new(store_config).await?;
        let store = Self {
            client,
            guards: ChainGuards::default(),
            user_applications: Arc::default(),
            wasm_runtime,
        };
        Ok((store, table_status))
    }
}

pub type RocksDbStoreClient = DbStoreClient<RocksDbClient>;

impl RocksDbStoreClient {
    #[cfg(any(test, feature = "test"))]
    pub async fn make_test_client(wasm_runtime: Option<WasmRuntime>) -> RocksDbStoreClient {
        let dir = TempDir::new().unwrap();
        let path_buf = dir.path().to_path_buf();
        let common_config = create_rocks_db_common_config();
        let store_config = RocksDbKvStoreConfig {
            path_buf,
            common_config,
        };
        let (store_client, _) = RocksDbStoreClient::new_for_testing(store_config, wasm_runtime)
            .await
            .expect("store_client");
        store_client
    }

    pub async fn new_for_testing(
        store_config: RocksDbKvStoreConfig,
        wasm_runtime: Option<WasmRuntime>,
    ) -> Result<(Self, TableStatus), RocksDbContextError> {
        let (store, table_status) =
            RocksDbStore::new_for_testing(store_config, wasm_runtime).await?;
        let store_client = RocksDbStoreClient {
            client: Arc::new(store),
        };
        Ok((store_client, table_status))
    }
}

impl RocksDbStoreClient {
    pub async fn initialize(
        store_config: RocksDbKvStoreConfig,
        wasm_runtime: Option<WasmRuntime>,
    ) -> Result<Self, RocksDbContextError> {
        let store = RocksDbStore::initialize(store_config, wasm_runtime).await?;
        let store_client = RocksDbStoreClient {
            client: Arc::new(store),
        };
        Ok(store_client)
    }

    pub async fn new(
        store_config: RocksDbKvStoreConfig,
        wasm_runtime: Option<WasmRuntime>,
    ) -> Result<(Self, TableStatus), RocksDbContextError> {
        let (store, table_status) = RocksDbStore::new(store_config, wasm_runtime).await?;
        let store_client = RocksDbStoreClient {
            client: Arc::new(store),
        };
        Ok((store_client, table_status))
    }
}
