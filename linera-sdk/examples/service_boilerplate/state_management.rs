// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

use super::{super::ServiceState, queryable_system as system};
use futures::future;
use std::future::Future;

impl ServiceState {
    /// Load the service state, without locking it for writes.
    pub async fn load() -> Self {
        let future = system::Load::new();
        Self::load_using(future::poll_fn(|_context| future.poll().into())).await
    }

    /// Helper function to load the service state or create a new one if it doesn't exist.
    pub async fn load_using(future: impl Future<Output = Result<Vec<u8>, String>>) -> Self {
        let bytes = future.await.expect("Failed to load service state");
        if bytes.is_empty() {
            Self::default()
        } else {
            bcs::from_bytes(&bytes).expect("Invalid service state")
        }
    }
}
