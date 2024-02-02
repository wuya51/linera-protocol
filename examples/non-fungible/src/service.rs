// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

#![cfg_attr(target_arch = "wasm32", no_main)]

mod state;

use self::state::NonFungibleToken;
use async_graphql::{ComplexObject, EmptySubscription, Request, Response, Schema};
use async_trait::async_trait;
use linera_sdk::{
    base::{AccountOwner, WithServiceAbi},
    graphql::GraphQLMutationRoot,
    Service, ServiceRuntime, ViewStateStorage,
};
use non_fungible::{Nft, Operation, TokenId};
use std::{collections::BTreeMap, sync::Arc};
use thiserror::Error;

linera_sdk::service!(NonFungibleToken);

impl WithServiceAbi for NonFungibleToken {
    type Abi = non_fungible::NonFungibleTokenAbi;
}

#[async_trait]
impl Service for NonFungibleToken {
    type Error = Error;
    type Storage = ViewStateStorage<Self>;

    async fn handle_query(
        self: Arc<Self>,
        _runtime: &ServiceRuntime,
        request: Request,
    ) -> Result<Response, Self::Error> {
        let schema =
            Schema::build(self.clone(), Operation::mutation_root(), EmptySubscription).finish();
        let response = schema.execute(request).await;
        Ok(response)
    }
}

// Implements additional fields not derived from struct members of FungibleToken.
#[ComplexObject]
impl NonFungibleToken {
    async fn owned_nfts(
        &self,
        owner: AccountOwner,
    ) -> Result<BTreeMap<TokenId, Nft>, async_graphql::Error> {
        let mut result = BTreeMap::new();
        let owned_token_ids = self.owners.get(&owner).await?;

        if let Some(owned_token_ids) = owned_token_ids {
            for token_id in owned_token_ids {
                result.insert(
                    token_id.clone(),
                    self.nfts
                        .get(&token_id)
                        .await?
                        .expect("Token Id should be present here!"),
                );
            }
        }

        Ok(result)
    }
}

/// An error that can occur during the contract execution.
#[derive(Debug, Error)]
pub enum Error {
    /// Invalid query argument; could not deserialize GraphQL request.
    #[error(
        "Invalid query argument; Fungible application only supports JSON encoded GraphQL queries"
    )]
    InvalidQuery(#[from] serde_json::Error),
}
