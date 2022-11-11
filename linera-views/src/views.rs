// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

use crate::common::{Batch, Context};
use async_trait::async_trait;
use std::fmt::Debug;
use thiserror::Error;

#[cfg(test)]
#[path = "unit_tests/views.rs"]
mod tests;

/// A view gives an exclusive access to read and write the data stored at an underlying
/// address in storage.
#[async_trait]
pub trait View<C: Context>: Sized {
    /// Obtain a mutable reference to the internal context.
    fn context(&self) -> &C;

    /// Create a view or a subview.
    async fn load(context: C) -> Result<Self, ViewError>;

    /// Discard all pending changes. After that `flush` should have no effect to storage.
    fn rollback(&mut self);

    /// Clear the view. That can be seen as resetting to default. In the case of a RegisterView
    /// this means setting the value to T::default(). For LogView, QueueView, this leaves
    /// the range data to be left in the database.
    fn clear(&mut self);

    /// Persist changes to storage. This leaves the view still usable and is essentially neutral to the
    /// program running. Crash-resistant storage implementations are expected to accumulate the desired
    /// changes in the `batch` variable first. If the view is dropped without calling `flush`, staged
    /// changes are simply lost.
    async fn flush(&mut self, batch: &mut Batch) -> Result<(), ViewError>;

    /// Instead of persisting changes, clear all the data that belong to this view and its
    /// subviews. Crash-resistant storage implementations are expected to accumulate the
    /// desired changes into the `batch` variable first.
    /// No data/metadata at all is left after delete. The view is consumed by delete
    /// and cannot be used in any way after delete.
    async fn delete(self, batch: &mut Batch) -> Result<(), ViewError>;
}

#[derive(Error, Debug)]
pub enum ViewError {
    #[error("the entry with key {0} was removed thus cannot be loaded any more")]
    RemovedEntry(String),

    #[error("failed to serialize value to calculate its hash")]
    Serialization(#[from] bcs::Error),

    #[error(
        "trying to flush or delete a collection view while some entries are still being accessed"
    )]
    CannotAcquireCollectionEntry,

    #[error("IO error")]
    Io(#[from] std::io::Error),

    #[error("Failed to lock collection entry: {0}")]
    TryLockError(#[from] tokio::sync::TryLockError),

    #[error("Panic in sub-task: {0}")]
    TokioJoinError(#[from] tokio::task::JoinError),

    #[error("Storage operation error in {backend}: {error}")]
    ContextError { backend: String, error: String },

    /// FIXME(#148): This belongs to a future `linera_storage::StoreError`.
    #[error("Entry does not exist in memory: {0}")]
    NotFound(String),
}
