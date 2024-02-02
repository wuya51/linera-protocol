// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

use async_graphql::{Request, Response, SimpleObject};
use fungible::Account;
use linera_sdk::{
    base::{AccountOwner, ApplicationId, ChainId, ContractAbi, ServiceAbi},
    graphql::GraphQLMutationRoot,
};
use serde::{Deserialize, Serialize};

pub type TokenId = String;

pub struct NonFungibleTokenAbi;

impl ContractAbi for NonFungibleTokenAbi {
    type InitializationArgument = ();
    type Parameters = ();
    type ApplicationCall = Operation;
    type Operation = Operation;
    type Message = Message;
    type SessionCall = ();
    type Response = ();
    type SessionState = ();
}

impl ServiceAbi for NonFungibleTokenAbi {
    type Query = Request;
    type QueryResponse = Response;
    type Parameters = ();
}

/// An operation.
#[derive(Debug, Deserialize, Serialize, GraphQLMutationRoot)]
pub enum Operation {
    /// Mints a token
    Mint { name: String, extra_data: Vec<u8> },
    /// Transfers a token from a (locally owned) account to a (possibly remote) account.
    Transfer {
        source_owner: AccountOwner,
        token_id: TokenId,
        target_account: Account,
    },
    /// Same as `Transfer` but the source account may be remote. Depending on its
    /// configuration, the target chain may take time or refuse to process
    /// the message.
    Claim {
        source_account: Account,
        token_id: TokenId,
        target_account: Account,
    },
}

/// A message.
#[derive(Debug, Deserialize, Serialize)]
pub enum Message {
    /// Transfers to the given `target` account, unless the message is bouncing, in which case
    /// we transfer back to the `source`.
    Transfer { nft: Nft, target_account: Account },

    /// Claims from the given account and starts a transfer to the target account.
    Claim {
        source_account: Account,
        token_id: TokenId,
        target_account: Account,
    },
}

#[derive(Debug, Serialize, Deserialize, Clone, SimpleObject, PartialEq, Eq)]
#[serde(rename_all = "camelCase")]
pub struct Nft {
    pub token_id: TokenId,
    pub owner: AccountOwner,
    pub name: String,
    pub minter: AccountOwner,
    pub payload: Vec<u8>,
}

impl Nft {
    pub fn create_token_id(
        chain_id: &ChainId,
        application_id: &ApplicationId,
        name: &String,
        minter: &AccountOwner,
        payload: &Vec<u8>,
    ) -> TokenId {
        use base64::engine::{general_purpose::STANDARD_NO_PAD, Engine as _};
        use sha3::Digest as _;

        let mut hasher = sha3::Sha3_256::new();
        hasher.update(chain_id.to_string());
        hasher.update(application_id.to_string());
        hasher.update(name);
        hasher.update(minter.to_string());
        hasher.update(payload);

        STANDARD_NO_PAD.encode(hasher.finalize())
    }
}
