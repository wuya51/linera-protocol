// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

//! This module aims to help the mapping of complex data-structures onto a key-value
//! store. The central notion is a [`views::View`] which can be loaded from storage, modified in
//! memory, then committed (i.e. the changes are atomically persisted in storage).

#![deny(missing_docs)]

/// The definition of the batches for writing in the datatbase.
pub mod batch;

/// The definitions used for the memory/rocksdb/dynamo_db
pub mod common;

/// The main definitions
pub mod views;

/// The lru caching
pub mod lru_caching;

/// The register_view
pub mod register_view;

/// The log_view
pub mod log_view;

/// The queue_view
pub mod queue_view;

/// The map_view
pub mod map_view;

/// The map_view
pub mod set_view;

/// The collection_view
pub mod collection_view;

/// The reentrant_collection_view
#[cfg(not(target_arch = "wasm32"))]
pub mod reentrant_collection_view;

/// The key value store view
#[cfg(not(target_arch = "wasm32"))]
pub mod key_value_store_view;

/// Helper definitions for in-memory storage.
pub mod memory;

/// Helper definitions for Rocksdb storage.
#[cfg(not(target_arch = "wasm32"))]
pub mod rocksdb;

/// Helper definitions for DynamoDB storage.
#[cfg(feature = "aws")]
pub mod dynamo_db;

/// Helper types for interfacing with a LocalStack instance.
#[cfg(feature = "aws")]
pub mod localstack;

/// Wrapping a view to compute a hash
#[cfg(not(target_arch = "wasm32"))]
pub mod hashable_wrapper;

/// Helper types for tests.
#[cfg(any(test, feature = "test"))]
#[cfg(not(target_arch = "wasm32"))]
pub mod test_utils;

/// For macros.
#[doc(hidden)]
pub use {async_trait::async_trait, generic_array, serde, sha3};

#[doc(hidden)]
#[cfg(not(target_arch = "wasm32"))]
pub use linera_base::crypto;

/// Does nothing. Use the metrics feature to enable.
#[cfg(not(feature = "metrics"))]
pub fn increment_counter(_name: &str, _struct_name: &str, _base_key: &[u8]) {}

/// Increments the metrics counter with the given name, with the struct and base key as labels.
#[cfg(feature = "metrics")]
pub fn increment_counter(name: &'static str, struct_name: &str, base_key: &[u8]) {
    let base_key = hex::encode(base_key);
    let labels = [("type", struct_name.into()), ("base_key", base_key)];
    metrics::increment_counter!(name, &labels,);
}

/// The metric counting how often a view is read from storage.
pub const LOAD_VIEW_COUNTER: &str = "load_view";
/// The metric counting how often a view is written from storage.
pub const SAVE_VIEW_COUNTER: &str = "save_view";

#[cfg(all(feature = "aws", target_arch = "wasm32"))]
compile_error!("Cannot build AWS features for the WASM target");
