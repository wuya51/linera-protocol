// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

//! Conversions from types generated by [`wit_bindgen_rust`] to types declared in [`linera_sdk`].

use super::{queryable_system::PollLoad, service};
use linera_sdk::{ChainId, HashValue, QueryContext};
use std::task::Poll;

impl From<service::QueryContext> for QueryContext {
    fn from(application_context: service::QueryContext) -> Self {
        QueryContext {
            chain_id: ChainId(application_context.chain_id.into()),
        }
    }
}

impl From<service::HashValue> for HashValue {
    fn from(hash_value: service::HashValue) -> Self {
        HashValue::from([
            hash_value.part1,
            hash_value.part2,
            hash_value.part3,
            hash_value.part4,
            hash_value.part5,
            hash_value.part6,
            hash_value.part7,
            hash_value.part8,
        ])
    }
}

impl From<PollLoad> for Poll<Result<Vec<u8>, String>> {
    fn from(poll_get: PollLoad) -> Poll<Result<Vec<u8>, String>> {
        match poll_get {
            PollLoad::Ready(bytes) => Poll::Ready(bytes),
            PollLoad::Pending => Poll::Pending,
        }
    }
}
