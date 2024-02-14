// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

use std::{any::Any, collections::HashMap, marker::PhantomData};

use linera_base::{
    data_types::{Amount, BlockHeight, SendMessageRequest, Timestamp},
    identifiers::{Account, ApplicationId, ChainId, ChannelName, MessageId, Owner},
    ownership::{ChainOwnership, CloseChainError},
};
use linera_views::batch::{Batch, WriteOperation};
use linera_witty::{Instance, RuntimeError};
use tracing::log;

use super::WasmExecutionError;
use crate::{BaseRuntime, ContractRuntime, ExecutionError, ServiceRuntime};

pub struct SystemApiData<Runtime> {
    runtime: Runtime,
    active_promises: HashMap<u32, Box<dyn Any + Send + Sync>>,
    promise_counter: u32,
}

impl<Runtime> SystemApiData<Runtime> {
    pub fn new(runtime: Runtime) -> Self {
        SystemApiData {
            runtime,
            active_promises: HashMap::new(),
            promise_counter: 0,
        }
    }

    pub fn runtime_mut(&mut self) -> &mut Runtime {
        &mut self.runtime
    }

    fn register_promise<Promise>(&mut self, promise: Promise) -> Result<u32, RuntimeError>
    where
        Promise: Send + Sync + 'static,
    {
        let id = self.promise_counter;

        self.active_promises.insert(id, Box::new(promise));
        self.promise_counter += 1;

        Ok(id)
    }

    fn take_promise<Promise>(&mut self, promise_id: u32) -> Result<Promise, RuntimeError>
    where
        Promise: Send + Sync + 'static,
    {
        let type_erased_promise = self
            .active_promises
            .remove(&promise_id)
            .ok_or_else(|| RuntimeError::Custom(WasmExecutionError::UnknownPromise.into()))?;

        type_erased_promise
            .downcast()
            .map(|boxed_promise| *boxed_promise)
            .map_err(|_| RuntimeError::Custom(WasmExecutionError::IncorrectPromise.into()))
    }
}

#[derive(Default)]
pub struct ContractSystemApi<Caller>(PhantomData<Caller>);

#[linera_witty::wit_export(package = "linera:app")]
impl<Caller, Runtime> ContractSystemApi<Caller>
where
    Caller: Instance<UserData = SystemApiData<Runtime>>,
    Runtime: ContractRuntime + Send + 'static,
{
    fn get_chain_id(caller: &mut Caller) -> Result<ChainId, RuntimeError> {
        tracing::error!("chain_id");
        caller
            .user_data_mut()
            .runtime
            .chain_id()
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn get_block_height(caller: &mut Caller) -> Result<BlockHeight, RuntimeError> {
        tracing::error!("block_height");
        caller
            .user_data_mut()
            .runtime
            .block_height()
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn get_application_id(caller: &mut Caller) -> Result<ApplicationId, RuntimeError> {
        tracing::error!("applicaiton_id");
        caller
            .user_data_mut()
            .runtime
            .application_id()
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn application_parameters(caller: &mut Caller) -> Result<Vec<u8>, RuntimeError> {
        tracing::error!("applicaiton_parameters");
        caller
            .user_data_mut()
            .runtime
            .application_parameters()
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn authenticated_signer(caller: &mut Caller) -> Result<Option<Owner>, RuntimeError> {
        tracing::error!("authenticated_signer");
        caller
            .user_data_mut()
            .runtime
            .authenticated_signer()
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn read_system_timestamp(caller: &mut Caller) -> Result<Timestamp, RuntimeError> {
        tracing::error!("read_system_timestamp");
        caller
            .user_data_mut()
            .runtime
            .read_system_timestamp()
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn get_message_id(caller: &mut Caller) -> Result<Option<MessageId>, RuntimeError> {
        tracing::error!("message_id");
        caller
            .user_data_mut()
            .runtime
            .message_id()
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn message_is_bouncing(caller: &mut Caller) -> Result<Option<bool>, RuntimeError> {
        tracing::error!("message_is_bouncing");
        caller
            .user_data_mut()
            .runtime
            .message_is_bouncing()
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn authenticated_caller_id(caller: &mut Caller) -> Result<Option<ApplicationId>, RuntimeError> {
        tracing::error!("authenticated_caller_id");
        caller
            .user_data_mut()
            .runtime
            .authenticated_caller_id()
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn read_chain_balance(caller: &mut Caller) -> Result<Amount, RuntimeError> {
        tracing::error!("read_chain_balance");
        caller
            .user_data_mut()
            .runtime
            .read_chain_balance()
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn read_owner_balance(caller: &mut Caller, owner: Owner) -> Result<Amount, RuntimeError> {
        tracing::error!("read_owner_balance");
        caller
            .user_data_mut()
            .runtime
            .read_owner_balance(owner)
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn send_message(
        caller: &mut Caller,
        message: SendMessageRequest<Vec<u8>>,
    ) -> Result<(), RuntimeError> {
        tracing::error!("send_message");
        caller
            .user_data_mut()
            .runtime
            .send_message(message)
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn subscribe(
        caller: &mut Caller,
        chain: ChainId,
        channel: ChannelName,
    ) -> Result<(), RuntimeError> {
        tracing::error!("subscribe");
        caller
            .user_data_mut()
            .runtime
            .subscribe(chain, channel)
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn unsubscribe(
        caller: &mut Caller,
        chain: ChainId,
        channel: ChannelName,
    ) -> Result<(), RuntimeError> {
        tracing::error!("unsubscribe");
        caller
            .user_data_mut()
            .runtime
            .unsubscribe(chain, channel)
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn transfer(
        caller: &mut Caller,
        source: Option<Owner>,
        destination: Account,
        amount: Amount,
    ) -> Result<(), RuntimeError> {
        tracing::error!("transfer");
        caller
            .user_data_mut()
            .runtime
            .transfer(source, destination, amount)
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn claim(
        caller: &mut Caller,
        source: Account,
        destination: Account,
        amount: Amount,
    ) -> Result<(), RuntimeError> {
        tracing::error!("claim");
        caller
            .user_data_mut()
            .runtime
            .claim(source, destination, amount)
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn get_chain_ownership(caller: &mut Caller) -> Result<ChainOwnership, RuntimeError> {
        tracing::error!("chain_ownership");
        caller
            .user_data_mut()
            .runtime
            .chain_ownership()
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn open_chain(
        caller: &mut Caller,
        chain_ownership: ChainOwnership,
        balance: Amount,
    ) -> Result<ChainId, RuntimeError> {
        tracing::error!("open_chain");
        caller
            .user_data_mut()
            .runtime
            .open_chain(chain_ownership, balance)
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn close_chain(caller: &mut Caller) -> Result<Result<(), CloseChainError>, RuntimeError> {
        tracing::error!("close_chain");
        match caller.user_data_mut().runtime.close_chain() {
            Ok(()) => Ok(Ok(())),
            Err(ExecutionError::UnauthorizedApplication(_)) => {
                Ok(Err(CloseChainError::NotPermitted))
            }
            Err(error) => Err(RuntimeError::Custom(error.into())),
        }
    }

    fn try_call_application(
        caller: &mut Caller,
        authenticated: bool,
        callee_id: ApplicationId,
        argument: Vec<u8>,
    ) -> Result<Vec<u8>, RuntimeError> {
        tracing::error!("try_call_application");
        caller
            .user_data_mut()
            .runtime
            .try_call_application(authenticated, callee_id, argument)
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn log(_caller: &mut Caller, message: String, level: log::Level) -> Result<(), RuntimeError> {
        match level {
            log::Level::Trace => tracing::trace!("{message}"),
            log::Level::Debug => tracing::debug!("{message}"),
            log::Level::Info => tracing::info!("{message}"),
            log::Level::Warn => tracing::warn!("{message}"),
            log::Level::Error => tracing::error!("{message}"),
        }
        Ok(())
    }
}

#[derive(Default)]
pub struct ServiceSystemApi<Caller>(PhantomData<Caller>);

#[linera_witty::wit_export(package = "linera:app")]
impl<Caller, Runtime> ServiceSystemApi<Caller>
where
    Caller: Instance<UserData = SystemApiData<Runtime>>,
    Runtime: ServiceRuntime + Send + 'static,
{
    fn get_chain_id(caller: &mut Caller) -> Result<ChainId, RuntimeError> {
        caller
            .user_data_mut()
            .runtime
            .chain_id()
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn get_next_block_height(caller: &mut Caller) -> Result<BlockHeight, RuntimeError> {
        caller
            .user_data_mut()
            .runtime
            .block_height()
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn get_application_id(caller: &mut Caller) -> Result<ApplicationId, RuntimeError> {
        caller
            .user_data_mut()
            .runtime
            .application_id()
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn get_application_parameters(caller: &mut Caller) -> Result<Vec<u8>, RuntimeError> {
        caller
            .user_data_mut()
            .runtime
            .application_parameters()
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn read_chain_balance(caller: &mut Caller) -> Result<Amount, RuntimeError> {
        caller
            .user_data_mut()
            .runtime
            .read_chain_balance()
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn read_owner_balance(caller: &mut Caller, owner: Owner) -> Result<Amount, RuntimeError> {
        caller
            .user_data_mut()
            .runtime
            .read_owner_balance(owner)
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn read_system_timestamp(caller: &mut Caller) -> Result<Timestamp, RuntimeError> {
        caller
            .user_data_mut()
            .runtime
            .read_system_timestamp()
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn read_owner_balances(caller: &mut Caller) -> Result<Vec<(Owner, Amount)>, RuntimeError> {
        caller
            .user_data_mut()
            .runtime
            .read_owner_balances()
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn read_balance_owners(caller: &mut Caller) -> Result<Vec<Owner>, RuntimeError> {
        caller
            .user_data_mut()
            .runtime
            .read_balance_owners()
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn try_query_application(
        caller: &mut Caller,
        application: ApplicationId,
        argument: Vec<u8>,
    ) -> Result<Vec<u8>, RuntimeError> {
        caller
            .user_data_mut()
            .runtime
            .try_query_application(application, argument)
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn log(_caller: &mut Caller, message: String, level: log::Level) -> Result<(), RuntimeError> {
        match level {
            log::Level::Trace => tracing::trace!("{message}"),
            log::Level::Debug => tracing::debug!("{message}"),
            log::Level::Info => tracing::info!("{message}"),
            log::Level::Warn => tracing::warn!("{message}"),
            log::Level::Error => tracing::error!("{message}"),
        }
        Ok(())
    }
}

#[derive(Default)]
pub struct ViewSystemApi<Caller>(PhantomData<Caller>);

#[linera_witty::wit_export(package = "linera:app")]
impl<Caller, Runtime> ViewSystemApi<Caller>
where
    Caller: Instance<UserData = SystemApiData<Runtime>>,
    Runtime: BaseRuntime + Send + 'static,
{
    fn contains_key_new(caller: &mut Caller, key: Vec<u8>) -> Result<u32, RuntimeError> {
        tracing::error!("contains_key_new");
        let mut data = caller.user_data_mut();
        let promise = data
            .runtime
            .contains_key_new(key)
            .map_err(|error| RuntimeError::Custom(error.into()))?;

        data.register_promise(promise)
    }

    fn contains_key_wait(caller: &mut Caller, promise_id: u32) -> Result<bool, RuntimeError> {
        tracing::error!("contains_key_wait");
        let mut data = caller.user_data_mut();
        let promise = data.take_promise(promise_id)?;

        data.runtime
            .contains_key_wait(&promise)
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn read_multi_values_bytes_new(
        caller: &mut Caller,
        keys: Vec<Vec<u8>>,
    ) -> Result<u32, RuntimeError> {
        tracing::error!("read_multi_values_bytes_new");
        let mut data = caller.user_data_mut();
        let promise = data
            .runtime
            .read_multi_values_bytes_new(keys)
            .map_err(|error| RuntimeError::Custom(error.into()))?;

        data.register_promise(promise)
    }

    fn read_multi_values_bytes_wait(
        caller: &mut Caller,
        promise_id: u32,
    ) -> Result<Vec<Option<Vec<u8>>>, RuntimeError> {
        tracing::error!("read_multi_values_bytes_wait");
        let mut data = caller.user_data_mut();
        let promise = data.take_promise(promise_id)?;

        data.runtime
            .read_multi_values_bytes_wait(&promise)
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn read_value_bytes_new(caller: &mut Caller, key: Vec<u8>) -> Result<u32, RuntimeError> {
        tracing::error!("read_value_bytes_new");
        let mut data = caller.user_data_mut();
        let promise = data
            .runtime
            .read_value_bytes_new(key)
            .map_err(|error| RuntimeError::Custom(error.into()))?;

        data.register_promise(promise)
    }

    fn read_value_bytes_wait(
        caller: &mut Caller,
        promise_id: u32,
    ) -> Result<Option<Vec<u8>>, RuntimeError> {
        tracing::error!("read_value_bytes_wait");
        let mut data = caller.user_data_mut();
        let promise = data.take_promise(promise_id)?;

        data.runtime
            .read_value_bytes_wait(&promise)
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn find_keys_new(caller: &mut Caller, key_prefix: Vec<u8>) -> Result<u32, RuntimeError> {
        tracing::error!("find_keys_new");
        let mut data = caller.user_data_mut();
        let promise = data
            .runtime
            .find_keys_by_prefix_new(key_prefix)
            .map_err(|error| RuntimeError::Custom(error.into()))?;

        data.register_promise(promise)
    }

    fn find_keys_wait(caller: &mut Caller, promise_id: u32) -> Result<Vec<Vec<u8>>, RuntimeError> {
        tracing::error!("find_keys_wait");
        let mut data = caller.user_data_mut();
        let promise = data.take_promise(promise_id)?;

        data.runtime
            .find_keys_by_prefix_wait(&promise)
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn find_key_values_new(caller: &mut Caller, key_prefix: Vec<u8>) -> Result<u32, RuntimeError> {
        tracing::error!("find_key_values_new");
        let mut data = caller.user_data_mut();
        let promise = data
            .runtime
            .find_key_values_by_prefix_new(key_prefix)
            .map_err(|error| RuntimeError::Custom(error.into()))?;

        data.register_promise(promise)
    }

    #[allow(clippy::type_complexity)]
    fn find_key_values_wait(
        caller: &mut Caller,
        promise_id: u32,
    ) -> Result<Vec<(Vec<u8>, Vec<u8>)>, RuntimeError> {
        tracing::error!("find_key_values_wait");
        let mut data = caller.user_data_mut();
        let promise = data.take_promise(promise_id)?;

        data.runtime
            .find_key_values_by_prefix_wait(&promise)
            .map_err(|error| RuntimeError::Custom(error.into()))
    }

    fn write_batch(
        caller: &mut Caller,
        operations: Vec<WriteOperation>,
    ) -> Result<(), RuntimeError> {
        tracing::error!("write_batch");
        caller
            .user_data_mut()
            .runtime
            .write_batch(Batch { operations })
            .map_err(|error| RuntimeError::Custom(error.into()))
    }
}
