// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

//! Conversions from types generated by [`wit_bindgen_rust`] to types declared in [`linera_sdk`].

use super::writable_system::{
    self as system, PollCallResult, PollViewFindKeyValues, PollViewFindKeys, PollViewLock, PollLoad,
    PollViewReadKeyBytes, PollViewWriteBatch,
};
use crate::{
    ApplicationId, BlockHeight, BytecodeId, CalleeContext, ChainId, CryptoHash, EffectContext,
    EffectId, OperationContext, Session, SessionId, SystemBalance,
};
use linera_views::views::ViewError;
use std::task::Poll;

impl From<super::OperationContext> for OperationContext {
    fn from(application_context: super::OperationContext) -> Self {
        OperationContext {
            chain_id: ChainId(application_context.chain_id.into()),
            height: BlockHeight(application_context.height),
            index: application_context.index,
        }
    }
}

impl From<super::EffectContext> for EffectContext {
    fn from(application_context: super::EffectContext) -> Self {
        EffectContext {
            chain_id: ChainId(application_context.chain_id.into()),
            height: BlockHeight(application_context.height),
            effect_id: application_context.effect_id.into(),
        }
    }
}

impl From<super::EffectId> for EffectId {
    fn from(effect_id: super::EffectId) -> Self {
        EffectId {
            chain_id: ChainId(effect_id.chain_id.into()),
            height: BlockHeight(effect_id.height),
            index: effect_id.index,
        }
    }
}

impl From<super::CalleeContext> for CalleeContext {
    fn from(application_context: super::CalleeContext) -> Self {
        CalleeContext {
            chain_id: ChainId(application_context.chain_id.into()),
            authenticated_caller_id: application_context
                .authenticated_caller_id
                .map(ApplicationId::from),
        }
    }
}

impl From<super::ApplicationId> for ApplicationId {
    fn from(application_id: super::ApplicationId) -> Self {
        ApplicationId {
            bytecode: BytecodeId(application_id.bytecode_id.into()),
            creation: application_id.creation.into(),
        }
    }
}

impl From<super::SessionId> for SessionId {
    fn from(session_id: super::SessionId) -> Self {
        SessionId {
            application_id: session_id.application_id.into(),
            kind: session_id.kind,
            index: session_id.index,
        }
    }
}

impl From<super::Session> for Session {
    fn from(session: super::Session) -> Self {
        Session {
            kind: session.kind,
            data: session.data,
        }
    }
}

impl From<super::CryptoHash> for CryptoHash {
    fn from(crypto_hash: super::CryptoHash) -> Self {
        CryptoHash::from([
            crypto_hash.part1,
            crypto_hash.part2,
            crypto_hash.part3,
            crypto_hash.part4,
            crypto_hash.part5,
            crypto_hash.part6,
            crypto_hash.part7,
            crypto_hash.part8,
        ])
    }
}

impl From<system::EffectId> for EffectId {
    fn from(effect_id: system::EffectId) -> Self {
        EffectId {
            chain_id: ChainId(effect_id.chain_id.into()),
            height: BlockHeight(effect_id.height),
            index: effect_id.index,
        }
    }
}

impl From<system::ApplicationId> for ApplicationId {
    fn from(application_id: system::ApplicationId) -> Self {
        ApplicationId {
            bytecode: BytecodeId(application_id.bytecode_id.into()),
            creation: application_id.creation.into(),
        }
    }
}

impl From<system::CryptoHash> for CryptoHash {
    fn from(hash_value: system::CryptoHash) -> Self {
        CryptoHash::from([
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

impl From<system::SystemBalance> for SystemBalance {
    fn from(balance: system::SystemBalance) -> Self {
        let value = ((balance.upper_half as u128) << 64) | (balance.lower_half as u128);
        SystemBalance(value)
    }
}

impl From<PollCallResult> for Poll<Result<(Vec<u8>, Vec<SessionId>), String>> {
    fn from(poll_call_result: PollCallResult) -> Poll<Result<(Vec<u8>, Vec<SessionId>), String>> {
        match poll_call_result {
            PollCallResult::Ready(Ok(result)) => Poll::Ready(Ok(result.into())),
            PollCallResult::Ready(Err(message)) => Poll::Ready(Err(message)),
            PollCallResult::Pending => Poll::Pending,
        }
    }
}

impl From<system::CallResult> for (Vec<u8>, Vec<SessionId>) {
    fn from(call_result: system::CallResult) -> (Vec<u8>, Vec<SessionId>) {
        let value = call_result.value;

        let sessions = call_result
            .sessions
            .into_iter()
            .map(SessionId::from)
            .collect();

        (value, sessions)
    }
}

impl From<system::SessionId> for SessionId {
    fn from(session_id: system::SessionId) -> SessionId {
        SessionId {
            application_id: session_id.application_id.into(),
            kind: session_id.kind,
            index: session_id.index,
        }
    }
}

impl From<PollViewLock> for Poll<Result<(), ViewError>> {
    fn from(poll_view_lock: PollViewLock) -> Self {
        match poll_view_lock {
            PollViewLock::Ready(Ok(())) => Poll::Ready(Ok(())),
            PollViewLock::Ready(Err(error)) => Poll::Ready(Err(ViewError::WasmHostGuestError(error))),
            PollViewLock::Pending => Poll::Pending,
        }
    }
}

impl From<PollViewReadKeyBytes> for Poll<Result<Option<Vec<u8>>, ViewError>> {
    fn from(poll_view_read_key_bytes: PollViewReadKeyBytes) -> Self {
        match poll_view_read_key_bytes {
            PollViewReadKeyBytes::Ready(Ok(bytes)) => Poll::Ready(Ok(bytes)),
            PollViewReadKeyBytes::Ready(Err(error)) => {
                Poll::Ready(Err(ViewError::WasmHostGuestError(error)))
            }
            PollViewReadKeyBytes::Pending => Poll::Pending,
        }
    }
}

impl From<PollViewFindKeys> for Poll<Result<Vec<Vec<u8>>, ViewError>> {
    fn from(poll_view_find_keys: PollViewFindKeys) -> Self {
        match poll_view_find_keys {
            PollViewFindKeys::Ready(Ok(keys)) => Poll::Ready(Ok(keys)),
            PollViewFindKeys::Ready(Err(error)) => {
                Poll::Ready(Err(ViewError::WasmHostGuestError(error)))
            }
            PollViewFindKeys::Pending => Poll::Pending,
        }
    }
}

impl From<PollViewFindKeyValues> for Poll<Result<Vec<(Vec<u8>, Vec<u8>)>, ViewError>> {
    fn from(poll_view_find_key_values: PollViewFindKeyValues) -> Self {
        match poll_view_find_key_values {
            PollViewFindKeyValues::Ready(Ok(key_values)) => Poll::Ready(Ok(key_values)),
            PollViewFindKeyValues::Ready(Err(error)) => {
                Poll::Ready(Err(ViewError::WasmHostGuestError(error)))
            }
            PollViewFindKeyValues::Pending => Poll::Pending,
        }
    }
}

impl From<PollViewWriteBatch> for Poll<Result<(), ViewError>> {
    fn from(poll_view_write_batch: PollViewWriteBatch) -> Self {
        match poll_view_write_batch {
            PollViewWriteBatch::Ready(Ok(())) => Poll::Ready(Ok(())),
            PollViewWriteBatch::Ready(Err(error)) => {
                Poll::Ready(Err(ViewError::WasmHostGuestError(error)))
            }
            PollViewWriteBatch::Pending => Poll::Pending,
        }
    }
}
