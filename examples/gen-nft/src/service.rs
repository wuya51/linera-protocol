// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

#![cfg_attr(target_arch = "wasm32", no_main)]

mod model;
mod random;
mod state;
mod token;

use std::{
    collections::{BTreeMap, BTreeSet},
    sync::Arc,
};

use async_graphql::{Context, EmptySubscription, Object, Request, Response, Schema};
use base64::engine::{general_purpose::STANDARD_NO_PAD, Engine as _};
use fungible::Account;
use gen_nft::{NftOutput, Operation, TokenId};
use linera_sdk::{
    http,
    linera_base_types::{AccountOwner, WithServiceAbi},
    views::View,
    Service, ServiceRuntime,
};
use log::info;

use self::state::GenNftState;
use crate::model::ModelContext;

pub struct GenNftService {
    state: Arc<GenNftState>,
    runtime: Arc<ServiceRuntime<Self>>,
}

linera_sdk::service!(GenNftService);

impl WithServiceAbi for GenNftService {
    type Abi = gen_nft::GenNftAbi;
}

impl Service for GenNftService {
    type Parameters = ();

    async fn new(runtime: ServiceRuntime<Self>) -> Self {
        let state = GenNftState::load(runtime.root_view_storage_context())
            .await
            .expect("Failed to load state");
        GenNftService {
            state: Arc::new(state),
            runtime: Arc::new(runtime),
        }
    }

    async fn handle_query(&self, request: Request) -> Response {
        let runtime = self.runtime.clone();
        let schema = Schema::build(
            QueryRoot {
                non_fungible_token: self.state.clone(),
            },
            MutationRoot {
                runtime: self.runtime.clone(),
            },
            EmptySubscription,
        )
        .data(runtime)
        .finish();
        schema.execute(request).await
    }
}

struct QueryRoot {
    non_fungible_token: Arc<GenNftState>,
}

#[Object]
impl QueryRoot {
    async fn nft(&self, token_id: String) -> Option<NftOutput> {
        let token_id_vec = STANDARD_NO_PAD.decode(&token_id).unwrap();
        let nft = self
            .non_fungible_token
            .nfts
            .get(&TokenId { id: token_id_vec })
            .await
            .unwrap();

        if let Some(nft) = nft {
            let nft_output = NftOutput::new_with_token_id(token_id, nft);
            Some(nft_output)
        } else {
            None
        }
    }

    async fn nfts(&self) -> BTreeMap<String, NftOutput> {
        let mut nfts = BTreeMap::new();
        self.non_fungible_token
            .nfts
            .for_each_index_value(|_token_id, nft| {
                let nft = nft.into_owned();
                let nft_output = NftOutput::new(nft);
                nfts.insert(nft_output.token_id.clone(), nft_output);
                Ok(())
            })
            .await
            .unwrap();

        nfts
    }

    async fn owned_token_ids_by_owner(&self, owner: AccountOwner) -> BTreeSet<String> {
        self.non_fungible_token
            .owned_token_ids
            .get(&owner)
            .await
            .unwrap()
            .into_iter()
            .flatten()
            .map(|token_id| STANDARD_NO_PAD.encode(token_id.id))
            .collect()
    }

    async fn owned_token_ids(&self) -> BTreeMap<AccountOwner, BTreeSet<String>> {
        let mut owners = BTreeMap::new();
        self.non_fungible_token
            .owned_token_ids
            .for_each_index_value(|owner, token_ids| {
                let token_ids = token_ids.into_owned();
                let new_token_ids = token_ids
                    .into_iter()
                    .map(|token_id| STANDARD_NO_PAD.encode(token_id.id))
                    .collect();

                owners.insert(owner, new_token_ids);
                Ok(())
            })
            .await
            .unwrap();

        owners
    }

    async fn owned_nfts(&self, owner: AccountOwner) -> BTreeMap<String, NftOutput> {
        let mut result = BTreeMap::new();
        let owned_token_ids = self
            .non_fungible_token
            .owned_token_ids
            .get(&owner)
            .await
            .unwrap();

        for token_id in owned_token_ids.into_iter().flatten() {
            let nft = self
                .non_fungible_token
                .nfts
                .get(&token_id)
                .await
                .unwrap()
                .unwrap();
            let nft_output = NftOutput::new(nft);
            result.insert(nft_output.token_id.clone(), nft_output);
        }

        result
    }

    async fn prompt(&self, ctx: &Context<'_>, prompt: String) -> String {
        let runtime = ctx.data::<Arc<ServiceRuntime<GenNftService>>>().unwrap();
        info!("prompt: {}", prompt);
        let response = runtime.http_request(http::Request::get("http://localhost:10001/model.bin"));
        let raw_weights = response.body;
        info!("got weights: {}B", raw_weights.len());
        let response =
            runtime.http_request(http::Request::get("http://localhost:10001/tokenizer.json"));
        let tokenizer_bytes = response.body;
        let model_context = ModelContext {
            model: raw_weights,
            tokenizer: tokenizer_bytes,
        };
        model_context.run_model(&prompt).unwrap()
    }
}

struct MutationRoot {
    runtime: Arc<ServiceRuntime<GenNftService>>,
}

#[Object]
impl MutationRoot {
    async fn mint(&self, minter: AccountOwner, prompt: String) -> [u8; 0] {
        let operation = Operation::Mint { minter, prompt };
        self.runtime.schedule_operation(&operation);
        []
    }

    async fn transfer(
        &self,
        source_owner: AccountOwner,
        token_id: String,
        target_account: Account,
    ) -> [u8; 0] {
        let operation = Operation::Transfer {
            source_owner,
            token_id: TokenId {
                id: STANDARD_NO_PAD.decode(token_id).unwrap(),
            },
            target_account,
        };
        self.runtime.schedule_operation(&operation);
        []
    }

    async fn claim(
        &self,
        source_account: Account,
        token_id: String,
        target_account: Account,
    ) -> [u8; 0] {
        let operation = Operation::Claim {
            source_account,
            token_id: TokenId {
                id: STANDARD_NO_PAD.decode(token_id).unwrap(),
            },
            target_account,
        };
        self.runtime.schedule_operation(&operation);
        []
    }
}
