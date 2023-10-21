// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

//! Functions and types to interface with the system API available to application contracts.

use super::contract_system_api as wit;
use crate::views::ViewStorageContext;
use futures::future;
use linera_base::{
    data_types::{Amount, Timestamp},
    identifiers::{ApplicationId, ChainId, SessionId},
};
use linera_views::views::{RootView, View};
use serde::{de::DeserializeOwned, Serialize};
use std::fmt;

/// Loads the application state and locks it for writes.
pub(crate) fn load_and_lock<State>() -> Option<State>
where
    State: Default + DeserializeOwned,
{
    let state_bytes = wit::load_and_lock()?;
    Some(deserialize_state(state_bytes))
}

/// Deserializes the application state or creates a new one if the `bytes` vector is empty.
fn deserialize_state<State>(bytes: Vec<u8>) -> State
where
    State: Default + DeserializeOwned,
{
    if bytes.is_empty() {
        State::default()
    } else {
        bcs::from_bytes(&bytes).expect("Invalid application state")
    }
}

/// Saves the application state and unlocks it.
pub(crate) async fn store_and_unlock<State>(state: State)
where
    State: Serialize,
{
    wit::store_and_unlock(&bcs::to_bytes(&state).expect("State serialization failed"));
}

/// Loads the application state and locks it for writes.
pub(crate) async fn load_and_lock_view<State: View<ViewStorageContext>>() -> Option<State> {
    let future = wit::Lock::new();
    if future::poll_fn(|_context| future.poll().into()).await {
        Some(load_view_using::<State>().await)
    } else {
        None
    }
}

/// Helper function to load the application state or create a new one if it doesn't exist.
pub(crate) async fn load_view_using<State: View<ViewStorageContext>>() -> State {
    let context = ViewStorageContext::default();
    let r = State::load(context).await;
    r.expect("Failed to load application state")
}

/// Saves the application state and unlocks it.
pub(crate) async fn store_and_unlock_view<State: RootView<ViewStorageContext>>(mut state: State) {
    state.save().await.expect("save operation failed");
}

/// Retrieves the current chain ID.
pub fn current_chain_id() -> ChainId {
    ChainId(wit::chain_id().into())
}

/// Retrieves the current application ID.
pub fn current_application_id() -> ApplicationId {
    wit::application_id().into()
}

/// Retrieves the current application parameters.
pub fn current_application_parameters() -> Vec<u8> {
    wit::application_parameters()
}

/// Retrieves the current system balance.
pub fn current_system_balance() -> Amount {
    wit::read_system_balance().into()
}

/// Retrieves the current system time, i.e. the timestamp of the block in which this is called.
pub fn current_system_time() -> Timestamp {
    wit::read_system_timestamp().into()
}

/// Calls another application without persisting the current application's state.
///
/// Use the `call_application` method generated by the [`linera-sdk::contract`] macro in order to
/// guarantee the state is up-to-date in reentrant calls.
pub(crate) fn call_application_without_persisting_state(
    authenticated: bool,
    application: ApplicationId,
    argument: &[u8],
    forwarded_sessions: Vec<SessionId>,
) -> (Vec<u8>, Vec<SessionId>) {
    let forwarded_sessions: Vec<_> = forwarded_sessions
        .into_iter()
        .map(wit::SessionId::from)
        .collect();

    wit::try_call_application(
        authenticated,
        application.into(),
        argument,
        &forwarded_sessions,
    )
    .into()
}

/// Calls another application's session without persisting the current application's state.
///
/// Use the `call_session` method generated by the [`linera-sdk::contract`] macro in order to
/// guarantee the state is up-to-date in reentrant calls.
pub(crate) fn call_session_without_persisting_state(
    authenticated: bool,
    session: SessionId,
    argument: &[u8],
    forwarded_sessions: Vec<SessionId>,
) -> (Vec<u8>, Vec<SessionId>) {
    let forwarded_sessions: Vec<_> = forwarded_sessions
        .into_iter()
        .map(wit::SessionId::from)
        .collect();

    wit::try_call_session(authenticated, session.into(), argument, &forwarded_sessions).into()
}

/// Requests the host to log a message.
///
/// Useful for debugging locally, but may be ignored by validators.
pub fn log(message: &fmt::Arguments<'_>, level: log::Level) {
    wit::log(&message.to_string(), level.into());
}
