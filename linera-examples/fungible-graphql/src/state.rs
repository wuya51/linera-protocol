// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

use fungible_graphql::AccountOwner;
use linera_sdk::base::Amount;
use linera_views::{
    common::Context,
    map_view::MapView,
    views::{GraphQLView, RootView, View},
};
use std::collections::BTreeMap;
use async_graphql::OutputType;
use async_trait::async_trait;
use serde::de::DeserializeOwned;
use serde::Serialize;
use thiserror::Error;
use linera_views::batch::Batch;
use linera_views::register_view::RegisterView;
use linera_views::views::ViewError;

/// The application state.
#[derive(RootView, GraphQLView)]
pub struct FungibleToken<C> {
    accounts: MapView<C, AccountOwner, Amount>,
}

#[allow(dead_code)]
impl<C> FungibleToken<C>
where
    C: Context + Send + Sync + Clone + 'static,
    linera_views::views::ViewError: From<C::Error>,
{
    /// Initialize the application state with some accounts with initial balances.
    pub(crate) async fn initialize_accounts(&mut self, accounts: BTreeMap<AccountOwner, Amount>) {
        for (k, v) in accounts {
            self.accounts
                .insert(&k, v)
                .expect("Error in insert statement");
        }
    }

    /// Obtain the balance for an `account`.
    pub(crate) async fn balance(&self, account: &AccountOwner) -> Amount {
        self.accounts
            .get(account)
            .await
            .expect("Failure in the retrieval")
            .unwrap_or_default()
    }

    /// Credit an `account` with the provided `amount`.
    pub(crate) async fn credit(&mut self, account: AccountOwner, amount: Amount) {
        let mut value = self.balance(&account).await;
        value.saturating_add_assign(amount);
        self.accounts
            .insert(&account, value)
            .expect("Failed insert statement");
    }

    /// Try to debit the requested `amount` from an `account`.
    pub(crate) async fn debit(
        &mut self,
        account: AccountOwner,
        amount: Amount,
    ) -> Result<(), InsufficientBalanceError> {
        let mut balance = self.balance(&account).await;
        balance
            .try_sub_assign(amount)
            .map_err(|_| InsufficientBalanceError)?;
        self.accounts
            .insert(&account, balance)
            .expect("Failed insertion operation");
        Ok(())
    }
}

/// Attempt to debit from an account with insufficient funds.
#[derive(Clone, Copy, Debug, Error)]
#[error("Insufficient balance for transfer")]
pub struct InsufficientBalanceError;
