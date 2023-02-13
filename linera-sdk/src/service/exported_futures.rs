// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

//! Types for the exported futures for the service endpoints.
//!
//! Each type is called by the code generated by [`wit_bindgen_rust`] when the host calls the guest
//! WASM module's respective endpoint. This module contains the code to forward the call to the
//! service type that implements [`linera_sdk::Service`].

use crate::{
    service::{
        self,
        system_api::{self, ReadableWasmContext},
    },
    ExportedFuture, Service, ServiceLogger, SimpleStateStorage, ViewStateStorage,
};
use linera_views::views::ContainerView;
use serde::{de::DeserializeOwned, Serialize};
use std::marker::PhantomData;

/// The storage APIs used by a service.
pub trait ServiceStateStorage {
    /// Loads the `Application` state and calls its [`initialize`][Application::initialize] method.
    fn query_application(
        context: service::QueryContext,
        argument: Vec<u8>,
    ) -> ExportedFuture<Result<Vec<u8>, String>>;
}

impl<Application> ServiceStateStorage for SimpleStateStorage<Application>
where
    Application: Service + Default + DeserializeOwned + Serialize,
{
    fn query_application(
        context: service::QueryContext,
        argument: Vec<u8>,
    ) -> ExportedFuture<Result<Vec<u8>, String>> {
        ExportedFuture::new(async move {
            let application: Application = system_api::load().await;
            application
                .query_application(&context.into(), &argument)
                .await
                .map_err(|error| error.to_string())
        })
    }
}

impl<Application> ServiceStateStorage for ViewStateStorage<Application>
where
    Application: Service + ContainerView<ReadableWasmContext>,
{
    fn query_application(
        context: service::QueryContext,
        argument: Vec<u8>,
    ) -> ExportedFuture<Result<Vec<u8>, String>> {
        ExportedFuture::new(async move {
            let application: Application = system_api::lock_and_load_view().await;
            let result = application
                .query_application(&context.into(), &argument)
                .await;
            if result.is_ok() {
                system_api::unlock_view(application).await;
            }
            result.map_err(|error| error.to_string())
        })
    }
}

/// Future implementation exported from the guest to allow the host to call
/// [`Application::query_application`].
///
/// Loads the `Application` state and calls its
/// [`query_application`][Application::query_application] method.
pub struct QueryApplication<Application> {
    future: ExportedFuture<Result<Vec<u8>, String>>,
    _application: PhantomData<Application>,
}

impl<Application> QueryApplication<Application>
where
    Application: Service,
    Application::Storage: ServiceStateStorage,
{
    /// Creates the exported future that the host can poll.
    ///
    /// This is called from the host.
    pub fn new(context: service::QueryContext, argument: Vec<u8>) -> Self {
        ServiceLogger::install();
        QueryApplication {
            future: Application::Storage::query_application(context, argument),
            _application: PhantomData,
        }
    }

    /// Polls the future export from the guest.
    ///
    /// This is called from the host.
    pub fn poll(&self) -> service::PollQuery {
        self.future.poll()
    }
}
