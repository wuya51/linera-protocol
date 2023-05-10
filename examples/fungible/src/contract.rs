// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

#![cfg_attr(target_arch = "wasm32", no_main)]

mod state;

use self::state::FungibleToken;
use async_trait::async_trait;
use fungible::{
    Account, AccountOwner, ApplicationCall, Destination, Effect, InitialState, Operation,
    SessionCall,
};
use linera_sdk::{
    base::{Amount, ApplicationId, Owner, SessionId},
    contract::system_api,
    views::ViewStorageContext,
    ApplicationCallResult, CalleeContext, Contract, EffectContext, ExecutionResult,
    OperationContext, Session, SessionCallResult, ViewStateStorage,
};
use std::str::FromStr;
use thiserror::Error;

linera_sdk::contract!(FungibleToken<ViewStorageContext>);

#[async_trait]
impl Contract for FungibleToken<ViewStorageContext> {
    type Error = Error;
    type Storage = ViewStateStorage<Self>;
    type InitializationArguments = InitialState;
    type ApplicationCallArguments = ApplicationCall;
    type Operation = Operation;
    type Effect = Effect;
    type SessionCall = SessionCall;
    type Response = Amount;
    type SessionState = Amount;

    async fn initialize(
        &mut self,
        context: &OperationContext,
        mut state: Self::InitializationArguments,
    ) -> Result<ExecutionResult<Self::Effect>, Self::Error> {
        // If initial accounts are empty, creator gets 1M tokens to act like a faucet.
        if state.accounts.is_empty() {
            if let Some(owner) = context.authenticated_signer {
                state.accounts.insert(
                    AccountOwner::User(owner),
                    Amount::from_str("1000000").unwrap(),
                );
            }
        }
        self.initialize_accounts(state).await;
        Ok(ExecutionResult::default())
    }

    async fn execute_operation(
        &mut self,
        context: &OperationContext,
        operation: Self::Operation,
    ) -> Result<ExecutionResult<Self::Effect>, Self::Error> {
        match operation {
            Operation::Transfer {
                owner,
                amount,
                target_account,
            } => {
                Self::check_account_authentication(None, context.authenticated_signer, owner)?;
                self.debit(owner, amount).await?;
                Ok(self
                    .finish_transfer_to_account(amount, target_account)
                    .await)
            }

            Operation::Claim {
                source_account,
                amount,
                target_account,
            } => {
                Self::check_account_authentication(
                    None,
                    context.authenticated_signer,
                    source_account.owner,
                )?;
                self.claim(source_account, amount, target_account).await
            }
        }
    }

    async fn execute_effect(
        &mut self,
        context: &EffectContext,
        effect: Effect,
    ) -> Result<ExecutionResult<Self::Effect>, Self::Error> {
        match effect {
            Effect::Credit { owner, amount } => {
                self.credit(owner, amount).await;
                Ok(ExecutionResult::default())
            }
            Effect::Withdraw {
                owner,
                amount,
                target_account,
            } => {
                Self::check_account_authentication(None, context.authenticated_signer, owner)?;
                self.debit(owner, amount).await?;
                Ok(self
                    .finish_transfer_to_account(amount, target_account)
                    .await)
            }
        }
    }

    async fn handle_application_call(
        &mut self,
        context: &CalleeContext,
        call: ApplicationCall,
        _forwarded_sessions: Vec<SessionId>,
    ) -> Result<ApplicationCallResult<Self::Effect, Self::Response, Self::SessionState>, Self::Error>
    {
        match call {
            ApplicationCall::Balance { owner } => {
                let mut result = ApplicationCallResult::default();
                let balance = self.balance(&owner).await;
                result.value = Some(balance);
                Ok(result)
            }

            ApplicationCall::Transfer {
                owner,
                amount,
                destination,
            } => {
                Self::check_account_authentication(
                    context.authenticated_caller_id,
                    context.authenticated_signer,
                    owner,
                )?;
                self.debit(owner, amount).await?;
                Ok(self
                    .finish_transfer_to_destination(amount, destination)
                    .await)
            }

            ApplicationCall::Claim {
                source_account,
                amount,
                target_account,
            } => {
                Self::check_account_authentication(
                    None,
                    context.authenticated_signer,
                    source_account.owner,
                )?;
                let execution_result = self.claim(source_account, amount, target_account).await?;
                Ok(ApplicationCallResult {
                    execution_result,
                    ..Default::default()
                })
            }
        }
    }

    async fn handle_session_call(
        &mut self,
        _context: &CalleeContext,
        session: Session<Self::SessionState>,
        request: SessionCall,
        _forwarded_sessions: Vec<SessionId>,
    ) -> Result<SessionCallResult<Self::Effect, Amount, Self::SessionState>, Self::Error> {
        match request {
            SessionCall::Balance => self.handle_session_balance(session.data),
            SessionCall::Transfer {
                amount,
                destination,
            } => {
                self.handle_session_transfer(session.data, amount, destination)
                    .await
            }
        }
    }
}

impl FungibleToken<ViewStorageContext> {
    /// Verifies that a transfer is authenticated for this local account.
    fn check_account_authentication(
        authenticated_application_id: Option<ApplicationId>,
        authenticated_signer: Option<Owner>,
        owner: AccountOwner,
    ) -> Result<(), Error> {
        match owner {
            AccountOwner::User(address) if authenticated_signer == Some(address) => Ok(()),
            AccountOwner::Application(id) if authenticated_application_id == Some(id) => Ok(()),
            _ => Err(Error::IncorrectAuthentication),
        }
    }

    /// Handles a session balance request sent by an application.
    fn handle_session_balance(
        &self,
        session_data: Amount,
    ) -> Result<SessionCallResult<Effect, Amount, Amount>, Error> {
        let application_call_result = ApplicationCallResult {
            value: Some(session_data),
            execution_result: ExecutionResult::default(),
            create_sessions: vec![],
        };
        let session_call_result = SessionCallResult {
            inner: application_call_result,
            new_state: Some(session_data),
        };
        Ok(session_call_result)
    }

    /// Handles a transfer from a session.
    async fn handle_session_transfer(
        &mut self,
        mut balance: Amount,
        amount: Amount,
        destination: Destination,
    ) -> Result<SessionCallResult<Effect, Amount, Amount>, Error> {
        balance
            .try_sub_assign(amount)
            .map_err(|_| Error::InsufficientSessionBalance)?;

        let updated_session = (balance > Amount::zero()).then_some(balance);

        Ok(SessionCallResult {
            inner: self
                .finish_transfer_to_destination(amount, destination)
                .await,
            new_state: updated_session,
        })
    }

    async fn claim(
        &mut self,
        source_account: Account,
        amount: Amount,
        target_account: Account,
    ) -> Result<ExecutionResult<Effect>, Error> {
        if source_account.chain_id == system_api::current_chain_id() {
            self.debit(source_account.owner, amount).await?;
            Ok(self
                .finish_transfer_to_account(amount, target_account)
                .await)
        } else {
            let effect = Effect::Withdraw {
                owner: source_account.owner,
                amount,
                target_account,
            };
            Ok(ExecutionResult::default()
                .with_authenticated_effect(source_account.chain_id, effect))
        }
    }

    /// Executes the final step of a transfer where the tokens are sent to the destination.
    async fn finish_transfer_to_destination(
        &mut self,
        amount: Amount,
        destination: Destination,
    ) -> ApplicationCallResult<Effect, Amount, Amount> {
        let mut result = ApplicationCallResult::default();
        match destination {
            Destination::Account(account) => {
                result.execution_result = self.finish_transfer_to_account(amount, account).await;
            }
            Destination::NewSession => {
                result.create_sessions.push(Self::new_session(amount));
            }
        }
        result
    }

    /// Executes the final step of a transfer where the tokens are sent to the destination.
    async fn finish_transfer_to_account(
        &mut self,
        amount: Amount,
        account: Account,
    ) -> ExecutionResult<Effect> {
        if account.chain_id == system_api::current_chain_id() {
            self.credit(account.owner, amount).await;
            ExecutionResult::default()
        } else {
            let effect = Effect::Credit {
                owner: account.owner,
                amount,
            };
            ExecutionResult::default().with_effect(account.chain_id, effect)
        }
    }

    /// Creates a new session with the specified `amount` of tokens.
    fn new_session(amount: Amount) -> Session<Amount> {
        Session {
            kind: 0,
            data: amount,
        }
    }
}

/// An error that can occur during the contract execution.
#[derive(Debug, Error)]
pub enum Error {
    /// Invalid serialized initial state.
    #[error("Serialized initial state is invalid")]
    InvalidInitialState(#[from] serde_json::Error),

    /// Invalid serialized [`SignedTransfer`].
    #[error("Operation is not a valid serialized signed transfer")]
    InvalidOperation(#[source] bcs::Error),

    /// Invalid serialized [`Credit`].
    #[error("Effect is not a valid serialized credit operation")]
    InvalidEffect(#[source] bcs::Error),

    /// Invalid serialized [`ApplicationCall`].
    #[error("Cross-application call argument is not a valid request")]
    InvalidApplicationCall(#[source] bcs::Error),

    /// Invalid serialized [`SessionCall`].
    #[error("Cross-application session call argument is not a valid request")]
    InvalidSessionCall(#[source] bcs::Error),

    /// Insufficient balance in source account.
    #[error("Source account does not have sufficient balance for transfer")]
    InsufficientBalance(#[from] state::InsufficientBalanceError),

    /// Insufficient balance in session.
    #[error("Session does not have sufficient balance for transfer")]
    InsufficientSessionBalance,

    /// Requested transfer does not have permission on this account.
    #[error("The requested transfer is not correctly authenticated.")]
    IncorrectAuthentication,

    /// Failed to deserialize BCS bytes
    #[error("Failed to deserialize BCS bytes")]
    BcsError(#[from] bcs::Error),
}
