// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

//! Imports for the contract system APIs.

use crate::CallOutcome;
use linera_base::{
    data_types::{Amount, Timestamp},
    identifiers::{ApplicationId, ChainId, SessionId},
};
use linera_witty::{
    guest::Guest, hlist, hlist_pat, GuestPointer, InstanceWithMemory, Layout, WitLoad, WitStore,
    WitType,
};
use std::mem::MaybeUninit;

#[link(wasm_import_module = "linera:app/contract-system-api")]
extern "C" {
    #[link_name = "get-chain-id"]
    pub fn wit_get_chain_id(return_area: i32);

    #[link_name = "get-application-id"]
    pub fn wit_get_application_id(return_area: i32);

    #[link_name = "get-application-parameters"]
    pub fn wit_get_application_parameters(return_area: i32);

    #[link_name = "read-chain-balance"]
    pub fn wit_read_chain_balance(return_area: i32);

    #[link_name = "read-system-timestamp"]
    pub fn wit_read_system_timestamp() -> i64;

    #[link_name = "try-call-application"]
    pub fn wit_try_call_application(parameters_address: i32, return_area: i32);

    #[link_name = "try-call-session"]
    pub fn wit_try_call_session(parameters_address: i32, return_area: i32);

    #[link_name = "log"]
    pub fn wit_log(message_address: i32, message_length: i32, log_level: i32);
}

pub fn get_chain_id() -> ChainId {
    let mut return_area = stack_buffer_for!(ChainId);
    let return_area_address = stack_buffer_address!(return_area, ChainId);

    let mut guest = Guest::default();
    let memory = guest.memory().expect("Failed to obtain `Memory` instance");

    unsafe { wit_get_chain_id(return_area_address.as_i32()) };

    ChainId::load(&memory, return_area_address).expect("Failed to load `ChainId`")
}

pub fn get_application_id() -> ApplicationId {
    let mut return_area = stack_buffer_for!(ApplicationId);
    let return_area_address = stack_buffer_address!(return_area, ApplicationId);
    let mut guest = Guest::default();
    let memory = guest.memory().expect("Failed to obtain `Memory` instance");

    unsafe { wit_get_application_id(return_area_address.as_i32()) };

    ApplicationId::load(&memory, return_area_address).expect("Failed to load `ApplicationId`")
}

pub fn get_application_parameters() -> Vec<u8> {
    let mut return_area = stack_buffer_for!(Vec<u8>);
    let return_area_address = stack_buffer_address!(return_area, Vec<u8>);
    let mut guest = Guest::default();
    let memory = guest.memory().expect("Failed to obtain `Memory` instance");

    unsafe { wit_get_application_parameters(return_area_address.as_i32()) };

    Vec::load(&memory, return_area_address).expect("Failed to load application parameters")
}

pub fn read_chain_balance() -> Amount {
    let mut return_area = stack_buffer_for!(Amount);
    let return_area_address = stack_buffer_address!(return_area, Amount);
    let mut guest = Guest::default();
    let memory = guest.memory().expect("Failed to obtain `Memory` instance");

    unsafe { wit_read_chain_balance(return_area_address.as_i32()) };

    Amount::load(&memory, return_area_address).expect("Failed to load `Amount`")
}

pub fn read_system_timestamp() -> Timestamp {
    let mut guest = Guest::default();
    let memory = guest.memory().expect("Failed to obtain `Memory` instance");

    let raw_timestamp = unsafe { wit_read_system_timestamp() };

    Timestamp::lift_from(hlist![raw_timestamp], &memory).expect("Failed to load `Timestamp`")
}

pub fn try_call_application(
    authenticated: bool,
    callee_id: ApplicationId,
    argument: Vec<u8>,
    forwarded_sessions: Vec<SessionId>,
) -> CallOutcome {
    type Parameters = (bool, ApplicationId, Vec<u8>, Vec<SessionId>);

    let mut parameters_area = stack_buffer_for!(Parameters);
    let parameters_area_address = stack_buffer_address!(parameters_area, Parameters);

    let mut return_area = stack_buffer_for!(CallOutcome);
    let return_area_address = stack_buffer_address!(return_area, CallOutcome);

    let mut guest = Guest::default();
    let mut memory = guest.memory().expect("Failed to obtain `Memory` instance");

    (authenticated, callee_id, argument, forwarded_sessions)
        .store(&mut memory, parameters_area_address)
        .expect("Failed to store `try_call_application` parameters");

    unsafe {
        wit_try_call_application(
            parameters_area_address.as_i32(),
            return_area_address.as_i32(),
        )
    };

    CallOutcome::load(&memory, return_area_address)
        .expect("Failed to load application `CallOutcome`")
}

pub fn try_call_session(
    authenticated: bool,
    session_id: SessionId,
    argument: Vec<u8>,
    forwarded_sessions: Vec<SessionId>,
) -> CallOutcome {
    type Parameters = (bool, SessionId, Vec<u8>, Vec<SessionId>);

    let mut parameters_area = stack_buffer_for!(Parameters);
    let parameters_area_address = stack_buffer_address!(parameters_area, Parameters);

    let mut return_area = stack_buffer_for!(CallOutcome);
    let return_area_address = stack_buffer_address!(return_area, CallOutcome);

    let mut guest = Guest::default();
    let mut memory = guest.memory().expect("Failed to obtain `Memory` instance");

    (authenticated, session_id, argument, forwarded_sessions)
        .store(&mut memory, parameters_area_address)
        .expect("Failed to store `try_call_session` parameters");

    unsafe {
        wit_try_call_session(
            parameters_area_address.as_i32(),
            return_area_address.as_i32(),
        )
    };

    CallOutcome::load(&memory, return_area_address).expect("Failed to load session `CallOutcome`")
}

pub fn log(message: String, level: log::Level) {
    let mut guest = Guest::default();
    let mut memory = guest.memory().expect("Failed to obtain `Memory` instance");
    let hlist_pat![message_address, message_length, log_level] = (message, level)
        .lower(&mut memory)
        .expect("Failed to store log message and level");

    unsafe { wit_log(message_address, message_length, log_level) };
}
