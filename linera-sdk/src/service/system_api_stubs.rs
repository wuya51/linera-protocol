// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

//! Stubs for the interface of the system API available to application services.
//!
//! This allows building the crate for non-Wasm targets.

use linera_base::identifiers::ApplicationId;
use std::fmt;

const MESSAGE: &str = "Attempt to call a contract system API when not running as a Wasm guest";

/// Retrieves the current application parameters.
pub fn current_application_parameters() -> Vec<u8> {
    panic!("{MESSAGE}");
}

/// Loads the application state.
pub async fn load_view<State>() -> State {
    panic!("{MESSAGE}");
}

/// Requests the host to log a message.
///
/// Useful for debugging locally, but may be ignored by validators.
pub fn log(_message: &fmt::Arguments<'_>, _level: log::Level) {
    panic!("{MESSAGE}");
}

/// Queries another application.
pub fn query_application(_application: ApplicationId, _argument: &[u8]) -> Vec<u8> {
    panic!("{MESSAGE}");
}
