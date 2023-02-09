// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

//! Types for the exported futures for the contract endpoints.
//!
//! Each type is called by the code generated by [`wit_bindgen_rust`] when the host calls the guest
//! WASM module's respective endpoint. This module contains the code to forward the call to the
//! contract type that implements [`linera_sdk::Contract`].

use crate::{
    contract::{
        self,
        system_api::{self, WasmContext},
    },
    ApplicationCallResult, Contract, ContractLogger, ExecutionResult, ExportedFuture,
    SessionCallResult, SessionId, SimpleStateStorage, ViewStateStorage,
};
use linera_views::views::ContainerView;
use serde::{de::DeserializeOwned, Serialize};
use std::marker::PhantomData;

/// The storage APIs used by a contract.
pub trait ContractStateStorage {
    /// Loads the `Application` state and calls its [`initialize`][Application::initialize] method.
    fn initialize(
        context: contract::OperationContext,
        argument: Vec<u8>,
    ) -> ExportedFuture<Result<ExecutionResult, String>>;

    /// Loads the `Application` state and calls its [`execute_operation`][Application::execute_operation] method.
    fn execute_operation(
        context: contract::OperationContext,
        operation: Vec<u8>,
    ) -> ExportedFuture<Result<ExecutionResult, String>>;

    /// Loads the `Application` state and calls its [`execute_effect`][Application::execute_effect] method.
    fn execute_effect(
        context: contract::EffectContext,
        effect: Vec<u8>,
    ) -> ExportedFuture<Result<ExecutionResult, String>>;

    /// Loads the `Application` state and calls its [`call_application`][Application::call_application] method.
    fn call_application(
        context: contract::CalleeContext,
        argument: Vec<u8>,
        forwarded_sessions: Vec<contract::SessionId>,
    ) -> ExportedFuture<Result<ApplicationCallResult, String>>;

    /// Future implementation exported from the guest to allow the host to call
    /// [`Application::call_session`].
    fn call_session(
        context: contract::CalleeContext,
        session: contract::Session,
        argument: Vec<u8>,
        forwarded_sessions: Vec<contract::SessionId>,
    ) -> ExportedFuture<Result<SessionCallResult, String>>;
}

impl<Application> ContractStateStorage for SimpleStateStorage<Application>
where
    Application: Contract + Default + DeserializeOwned + Serialize,
{
    fn initialize(
        context: contract::OperationContext,
        argument: Vec<u8>,
    ) -> ExportedFuture<Result<ExecutionResult, String>> {
        ExportedFuture::new(async move {
            let mut application: Application = system_api::load_and_lock().await;
            let result = application.initialize(&context.into(), &argument).await;
            if result.is_ok() {
                system_api::store_and_unlock(application).await;
            }
            result.map_err(|error| error.to_string())
        })
    }

    fn execute_operation(
        context: contract::OperationContext,
        operation: Vec<u8>,
    ) -> ExportedFuture<Result<ExecutionResult, String>> {
        ExportedFuture::new(async move {
            let mut application: Application = system_api::load_and_lock().await;
            let result = application
                .execute_operation(&context.into(), &operation)
                .await;
            if result.is_ok() {
                system_api::store_and_unlock(application).await;
            }
            result.map_err(|error| error.to_string())
        })
    }

    fn execute_effect(
        context: contract::EffectContext,
        effect: Vec<u8>,
    ) -> ExportedFuture<Result<ExecutionResult, String>> {
        ExportedFuture::new(async move {
            let mut application: Application = system_api::load_and_lock().await;
            let result = application.execute_effect(&context.into(), &effect).await;
            if result.is_ok() {
                system_api::store_and_unlock(application).await;
            }
            result.map_err(|error| error.to_string())
        })
    }

    fn call_application(
        context: contract::CalleeContext,
        argument: Vec<u8>,
        forwarded_sessions: Vec<contract::SessionId>,
    ) -> ExportedFuture<Result<ApplicationCallResult, String>> {
        ExportedFuture::new(async move {
            let mut application: Application = system_api::load_and_lock().await;

            let forwarded_sessions = forwarded_sessions
                .into_iter()
                .map(SessionId::from)
                .collect();

            let result = application
                .call_application(&context.into(), &argument, forwarded_sessions)
                .await;
            if result.is_ok() {
                system_api::store_and_unlock(application).await;
            }
            result.map_err(|error| error.to_string())
        })
    }

    fn call_session(
        context: contract::CalleeContext,
        session: contract::Session,
        argument: Vec<u8>,
        forwarded_sessions: Vec<contract::SessionId>,
    ) -> ExportedFuture<Result<SessionCallResult, String>> {
        ExportedFuture::new(async move {
            let mut application: Application = system_api::load_and_lock().await;

            let forwarded_sessions = forwarded_sessions
                .into_iter()
                .map(SessionId::from)
                .collect();

            let result = application
                .call_session(
                    &context.into(),
                    session.into(),
                    &argument,
                    forwarded_sessions,
                )
                .await;
            if result.is_ok() {
                system_api::store_and_unlock(application).await;
            }
            result.map_err(|error| error.to_string())
        })
    }
}

impl<Application> ContractStateStorage for ViewStateStorage<Application>
where
    Application: Contract + ContainerView<WasmContext>,
{
    fn initialize(
        context: contract::OperationContext,
        argument: Vec<u8>,
    ) -> ExportedFuture<Result<ExecutionResult, String>> {
        ExportedFuture::new(async move {
            let mut application: Application = system_api::load_and_lock_view().await;
            let result = application.initialize(&context.into(), &argument).await;
            if result.is_ok() {
                system_api::store_and_unlock_view(application).await;
            }
            result.map_err(|error| error.to_string())
        })
    }

    fn execute_operation(
        context: contract::OperationContext,
        operation: Vec<u8>,
    ) -> ExportedFuture<Result<ExecutionResult, String>> {
        ExportedFuture::new(async move {
            let mut application: Application = system_api::load_and_lock_view().await;
            let result = application
                .execute_operation(&context.into(), &operation)
                .await;
            if result.is_ok() {
                system_api::store_and_unlock_view(application).await;
            }
            result.map_err(|error| error.to_string())
        })
    }

    fn execute_effect(
        context: contract::EffectContext,
        effect: Vec<u8>,
    ) -> ExportedFuture<Result<ExecutionResult, String>> {
        ExportedFuture::new(async move {
            let mut application: Application = system_api::load_and_lock_view().await;
            let result = application.execute_effect(&context.into(), &effect).await;
            if result.is_ok() {
                system_api::store_and_unlock_view(application).await;
            }
            result.map_err(|error| error.to_string())
        })
    }

    fn call_application(
        context: contract::CalleeContext,
        argument: Vec<u8>,
        forwarded_sessions: Vec<contract::SessionId>,
    ) -> ExportedFuture<Result<ApplicationCallResult, String>> {
        ExportedFuture::new(async move {
            let mut application: Application = system_api::load_and_lock_view().await;

            let forwarded_sessions = forwarded_sessions
                .into_iter()
                .map(SessionId::from)
                .collect();

            let result = application
                .call_application(&context.into(), &argument, forwarded_sessions)
                .await;
            if result.is_ok() {
                system_api::store_and_unlock_view(application).await;
            }
            result.map_err(|error| error.to_string())
        })
    }

    fn call_session(
        context: contract::CalleeContext,
        session: contract::Session,
        argument: Vec<u8>,
        forwarded_sessions: Vec<contract::SessionId>,
    ) -> ExportedFuture<Result<SessionCallResult, String>> {
        ExportedFuture::new(async move {
            let mut application: Application = system_api::load_and_lock_view().await;

            let forwarded_sessions = forwarded_sessions
                .into_iter()
                .map(SessionId::from)
                .collect();

            let result = application
                .call_session(
                    &context.into(),
                    session.into(),
                    &argument,
                    forwarded_sessions,
                )
                .await;
            if result.is_ok() {
                system_api::store_and_unlock_view(application).await;
            }
            result.map_err(|error| error.to_string())
        })
    }
}

/// Future implementation exported from the guest to allow the host to call
/// [`Application::initialize`].
///
/// Loads the `Application` state and calls its [`initialize`][Application::initialize] method.
pub struct Initialize<Application> {
    future: ExportedFuture<Result<ExecutionResult, String>>,
    _application: PhantomData<Application>,
}

impl<Application> Initialize<Application>
where
    Application: Contract,
    Application::Storage: ContractStateStorage,
{
    /// Creates the exported future that the host can poll.
    ///
    /// This is called from the host.
    pub fn new(context: contract::OperationContext, argument: Vec<u8>) -> Self {
        ContractLogger::install();
        Initialize {
            future: Application::Storage::initialize(context, argument),
            _application: PhantomData,
        }
    }

    /// Polls the future export from the guest.
    ///
    /// This is called from the host.
    pub fn poll(&self) -> contract::PollExecutionResult {
        self.future.poll()
    }
}

/// Future implementation exported from the guest to allow the host to call
/// [`Application::execute_operation`].
///
/// Loads the `Application` state and calls its
/// [`execute_operation`][Application::execute_operation] method.
pub struct ExecuteOperation<Application> {
    future: ExportedFuture<Result<ExecutionResult, String>>,
    _application: PhantomData<Application>,
}

impl<Application> ExecuteOperation<Application>
where
    Application: Contract,
    Application::Storage: ContractStateStorage,
{
    /// Creates the exported future that the host can poll.
    ///
    /// This is called from the host.
    pub fn new(context: contract::OperationContext, operation: Vec<u8>) -> Self {
        ContractLogger::install();
        ExecuteOperation {
            future: Application::Storage::execute_operation(context, operation),
            _application: PhantomData,
        }
    }

    /// Polls the future export from the guest.
    ///
    /// This is called from the host.
    pub fn poll(&self) -> contract::PollExecutionResult {
        self.future.poll()
    }
}

/// Future implementation exported from the guest to allow the host to call
/// [`Application::execute_effect`].
///
/// Loads the `Application` state and calls its [`execute_effect`][Application::execute_effect]
/// method.
pub struct ExecuteEffect<Application> {
    future: ExportedFuture<Result<ExecutionResult, String>>,
    _application: PhantomData<Application>,
}

impl<Application> ExecuteEffect<Application>
where
    Application: Contract,
    Application::Storage: ContractStateStorage,
{
    /// Creates the exported future that the host can poll.
    ///
    /// This is called from the host.
    pub fn new(context: contract::EffectContext, effect: Vec<u8>) -> Self {
        ContractLogger::install();
        ExecuteEffect {
            future: Application::Storage::execute_effect(context, effect),
            _application: PhantomData,
        }
    }

    /// Polls the future export from the guest.
    ///
    /// This is called from the host.
    pub fn poll(&self) -> contract::PollExecutionResult {
        self.future.poll()
    }
}

/// Future implementation exported from the guest to allow the host to call
/// [`Application::call_application`].
///
/// Loads the `Application` state and calls its [`call_application`][Application::call_application]
/// method.
pub struct CallApplication<Application> {
    future: ExportedFuture<Result<ApplicationCallResult, String>>,
    _application: PhantomData<Application>,
}

impl<Application> CallApplication<Application>
where
    Application: Contract,
    Application::Storage: ContractStateStorage,
{
    /// Creates the exported future that the host can poll.
    ///
    /// This is called from the host.
    pub fn new(
        context: contract::CalleeContext,
        argument: Vec<u8>,
        forwarded_sessions: Vec<contract::SessionId>,
    ) -> Self {
        ContractLogger::install();
        CallApplication {
            future: Application::Storage::call_application(context, argument, forwarded_sessions),
            _application: PhantomData,
        }
    }

    /// Polls the future export from the guest.
    ///
    /// This is called from the host.
    pub fn poll(&self) -> contract::PollCallApplication {
        self.future.poll()
    }
}

/// Future implementation exported from the guest to allow the host to call
/// [`Application::call_session`].
///
/// Loads the `Application` state and calls its [`call_session`][Application::call_session] method.
pub struct CallSession<Application> {
    future: ExportedFuture<Result<SessionCallResult, String>>,
    _application: PhantomData<Application>,
}

impl<Application> CallSession<Application>
where
    Application: Contract,
    Application::Storage: ContractStateStorage,
{
    /// Creates the exported future that the host can poll.
    ///
    /// This is called from the host.
    pub fn new(
        context: contract::CalleeContext,
        session: contract::Session,
        argument: Vec<u8>,
        forwarded_sessions: Vec<contract::SessionId>,
    ) -> Self {
        ContractLogger::install();
        CallSession {
            future: Application::Storage::call_session(
                context,
                session,
                argument,
                forwarded_sessions,
            ),
            _application: PhantomData,
        }
    }

    /// Polls the future export from the guest.
    ///
    /// This is called from the host.
    pub fn poll(&self) -> contract::PollCallSession {
        self.future.poll()
    }
}
