// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

use crate::{chain_guards::ChainGuards, DbStore, DbStoreClient};
use linera_execution::WasmRuntime;
use linera_views::rocksdb::{RocksdbClient, DB};
use std::{path::PathBuf, sync::Arc};

#[cfg(test)]
#[path = "unit_tests/rocksdb.rs"]
mod tests;

type RocksdbStore = DbStore<RocksdbClient>;

pub type RocksdbStoreClient = DbStoreClient<RocksdbClient>;

impl RocksdbStoreClient {
    pub fn new(path: PathBuf, wasm_runtime: Option<WasmRuntime>) -> Self {
        RocksdbStoreClient {
            client: Arc::new(RocksdbStore::new(path, wasm_runtime)),
        }
    }
}

impl RocksdbStore {
    pub fn new(dir: PathBuf, wasm_runtime: Option<WasmRuntime>) -> Self {
        let mut options = rocksdb::Options::default();
        options.create_if_missing(true);
        let db = DB::open(&options, dir).unwrap();
        Self {
            client: Arc::new(db),
            guards: ChainGuards::default(),
            user_applications: Arc::default(),
            wasm_runtime,
        }
    }
}
