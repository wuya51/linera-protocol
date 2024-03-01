// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

#[cfg(with_simple_network)]
use crate::simple;
use crate::{client::Client, grpc};

use linera_core::node::{NodeError, ValidatorNodeProvider};

use std::time::Duration;

/// A general node provider which delegates node provision to the underlying
/// node provider according to the `ValidatorPublicNetworkConfig`.
#[derive(Copy, Clone)]
pub struct NodeProvider {
    grpc: grpc::NodeProvider,
    #[cfg(with_simple_network)]
    simple: simple::NodeProvider,
}

impl NodeProvider {
    pub fn new(options: NodeOptions) -> Self {
        Self {
            grpc: grpc::NodeProvider::new(options),
            #[cfg(with_simple_network)]
            simple: simple::NodeProvider::new(options),
        }
    }
}

impl ValidatorNodeProvider for NodeProvider {
    type Node = Client;

    fn make_node(&self, address: &str) -> anyhow::Result<Self::Node, NodeError> {
        let address = address.to_lowercase();

        #[cfg(with_simple_network)]
        if address.starts_with("tcp") || address.starts_with("udp") {
            return Ok(Client::Simple(self.simple.make_node(&address)?));
        }

        if address.starts_with("grpc") {
            return Ok(Client::Grpc(self.grpc.make_node(&address)?));
        }

        Err(NodeError::CannotResolveValidatorAddress { address })
    }
}

#[derive(Copy, Clone)]
pub struct NodeOptions {
    pub send_timeout: Duration,
    pub recv_timeout: Duration,
    pub notification_retry_delay: Duration,
    pub notification_retries: u32,
}
