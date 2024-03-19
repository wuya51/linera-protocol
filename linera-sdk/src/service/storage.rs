// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

//! Types for the exported futures for the service endpoints.
//!
//! Each type is called by the code generated by [`wit-bindgen-guest-rust`] when the host calls the guest
//! Wasm module's respective endpoint. This module contains the code to forward the call to the
//! service type that implements [`linera-sdk::Service`].

use crate::{
    views::{AppStateStore, ViewStorageContext},
    Service, ServiceRuntime, SimpleStateStorage, ViewStateStorage,
};
use linera_views::{
    common::ReadableKeyValueStore,
    views::{RootView, View},
};
use serde::{de::DeserializeOwned, Serialize};

/// The storage APIs used by a service.
#[allow(async_fn_in_trait)]
pub trait ServiceStateStorage {
    /// Loads the application state and run the given query.
    async fn handle_query(argument: Vec<u8>) -> Result<Vec<u8>, String>;
}

impl<Application> ServiceStateStorage for SimpleStateStorage<Application>
where
    Application: Service,
    Application::State: Default + DeserializeOwned + Serialize,
{
    async fn handle_query(argument: Vec<u8>) -> Result<Vec<u8>, String> {
        let maybe_bytes = AppStateStore
            .read_value_bytes(&[])
            .await
            .expect("Failed to read application state bytes");

        let state = if let Some(bytes) = maybe_bytes {
            bcs::from_bytes(&bytes).expect("Failed to deserialize application state")
        } else {
            Application::State::default()
        };

        let application = Application::new(state)
            .await
            .map_err(|error| error.to_string())?;
        let argument: Application::Query =
            serde_json::from_slice(&argument).map_err(|e| e.to_string())?;
        let query_response = application
            .handle_query(&ServiceRuntime::default(), argument)
            .await
            .map_err(|error| error.to_string())?;
        serde_json::to_vec(&query_response).map_err(|e| e.to_string())
    }
}

impl<Application> ServiceStateStorage for ViewStateStorage<Application>
where
    Application: Service,
    Application::State: RootView<ViewStorageContext>,
{
    async fn handle_query(argument: Vec<u8>) -> Result<Vec<u8>, String> {
        let context = ViewStorageContext::default();
        let state = Application::State::load(context)
            .await
            .expect("Failed to load application state");
        let application = Application::new(state)
            .await
            .map_err(|error| error.to_string())?;
        let argument: Application::Query =
            serde_json::from_slice(&argument).map_err(|e| e.to_string())?;
        let result = application
            .handle_query(&ServiceRuntime::default(), argument)
            .await;
        let query_response = result.map_err(|error| error.to_string())?;
        serde_json::to_vec(&query_response).map_err(|e| e.to_string())
    }
}
