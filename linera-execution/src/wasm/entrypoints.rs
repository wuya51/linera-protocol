// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

//! Wasm entrypoints for contracts and services.

#[linera_witty::wit_import(package = "linera:app")]
pub trait ContractEntrypoints {
    fn initialize(argument: Vec<u8>) -> Result<(), String>;
    fn execute_operation(operation: Vec<u8>) -> Result<Vec<u8>, String>;
    fn execute_message(message: Vec<u8>) -> Result<(), String>;
    fn finalize() -> Result<(), String>;
}

#[linera_witty::wit_import(package = "linera:app")]
pub trait ServiceEntrypoints {
    fn handle_query(argument: Vec<u8>) -> Result<Vec<u8>, String>;
}
