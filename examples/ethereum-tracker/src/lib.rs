// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

/*!
A Linera application that reads events emitted by the `simple_token.sol` example from
`linera-ethereum` and tracks the balances. This shows how Wasm contracts on Linera can
consume information generated by EVM contracts on Ethereum.
*/

use async_graphql::{scalar, Request, Response, SimpleObject};
use linera_sdk::{
    base::{ContractAbi, ServiceAbi},
    ethereum::U256,
    graphql::GraphQLMutationRoot,
};
use serde::{Deserialize, Serialize};
pub struct EthereumTrackerAbi;

impl ContractAbi for EthereumTrackerAbi {
    type Operation = Operation;
    type Response = ();
}

impl ServiceAbi for EthereumTrackerAbi {
    type Query = Request;
    type QueryResponse = Response;
}

/// The possible operation for the node
#[derive(Debug, Deserialize, Serialize, GraphQLMutationRoot)]
pub enum Operation {
    /// Update the database by querying an Ethereum node
    Update,
}

/// The initialization data required to create an Ethereum tracker
#[derive(Clone, Debug, Default, Deserialize, Serialize, SimpleObject)]
pub struct InstantiationArgument {
    /// The Ethereum endpoint being used
    pub ethereum_endpoint: String,
    /// The address of the contract
    pub contract_address: String,
}

#[derive(Clone, Default, Deserialize, Serialize)]
pub struct U256Cont {
    pub value: U256,
}
scalar!(U256Cont);