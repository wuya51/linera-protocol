// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

//! Types for the exported futures for the service endpoints.
//!
//! Each type is called by the code generated by [`wit-bindgen-guest-rust`] when the host calls the guest
//! Wasm module's respective endpoint. This module contains the code to forward the call to the
//! service type that implements [`linera-sdk::Service`].

use crate::{
    service::{system_api, wit_types},
    views::ViewStorageContext,
    ExportedFuture, Service, ServiceLogger, SimpleStateStorage, ViewStateStorage,
};
use linera_views::views::RootView;
use serde::{de::DeserializeOwned, Serialize};
use std::{marker::PhantomData, sync::Arc};

/// The storage APIs used by a service.
pub trait ServiceStateStorage {
    /// Loads the application state and run the given query.
    fn handle_query(
        context: wit_types::QueryContext,
        argument: Vec<u8>,
    ) -> ExportedFuture<Result<Vec<u8>, String>>;
}

impl<Application> ServiceStateStorage for SimpleStateStorage<Application>
where
    Application: Service + Default + DeserializeOwned + Serialize,
{
    fn handle_query(
        context: wit_types::QueryContext,
        argument: Vec<u8>,
    ) -> ExportedFuture<Result<Vec<u8>, String>> {
        ExportedFuture::new(async move {
            let application: Arc<Application> = Arc::new(system_api::load().await);
            let argument: Application::Query =
                serde_json::from_slice(&argument).map_err(|e| e.to_string())?;
            let query_response = application
                .handle_query(&context.into(), argument)
                .await
                .map_err(|error| error.to_string())?;
            serde_json::to_vec(&query_response).map_err(|e| e.to_string())
        })
    }
}

impl<Application> ServiceStateStorage for ViewStateStorage<Application>
where
    Application: Service + RootView<ViewStorageContext>,
{
    fn handle_query(
        context: wit_types::QueryContext,
        argument: Vec<u8>,
    ) -> ExportedFuture<Result<Vec<u8>, String>> {
        ExportedFuture::new(async move {
            let application: Arc<Application> = Arc::new(system_api::lock_and_load_view().await);
            let argument: Application::Query =
                serde_json::from_slice(&argument).map_err(|e| e.to_string())?;
            let result = application.handle_query(&context.into(), argument).await;
            if result.is_ok() {
                system_api::unlock_view().await;
            }
            let query_response = result.map_err(|error| error.to_string())?;
            serde_json::to_vec(&query_response).map_err(|e| e.to_string())
        })
    }
}

/// Future implementation exported from the guest to allow the host to call
/// [`Service::handle_query`].
///
/// Loads the `Application` state and calls its
/// [`handle_query`][Service::handle_query] method.
pub struct HandleQuery<Application> {
    future: ExportedFuture<Result<Vec<u8>, String>>,
    _application: PhantomData<Application>,
}

impl<Application> HandleQuery<Application>
where
    Application: Service,
{
    /// Creates the exported future that the host can poll.
    ///
    /// This is called from the host.
    pub fn new(context: wit_types::QueryContext, query: Vec<u8>) -> Self {
        ServiceLogger::install();
        HandleQuery {
            future: Application::Storage::handle_query(context, query),
            _application: PhantomData,
        }
    }

    /// Polls the future export from the guest.
    ///
    /// This is called from the host.
    pub fn poll(&self) -> wit_types::PollApplicationQueryResult {
        self.future.poll()
    }
}
