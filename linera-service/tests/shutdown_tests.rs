// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

mod common;

use std::{net::SocketAddr, time::Duration};

use futures::{SinkExt, TryStreamExt};
use linera_base::identifiers::ChainId;
use linera_core::data_types::ChainInfoQuery;
use linera_rpc::{simple, RpcMessage};
use tokio::{net::TcpStream, time};
use tokio_util::codec::Framed;

use linera_service::cli_wrappers::{
    local_net::{Database, LocalNet, LocalNetConfig},
    LineraNet, LineraNetConfig, Network,
};

use self::common::INTEGRATION_TEST_GUARD;

/// Check that the simple TCP server shuts down gracefully.
///
/// Ensure that it finishes responding to an active request before the process ends.
#[test_log::test(tokio::test)]
async fn simple_tcp_server_shutdown() -> anyhow::Result<()> {
    let _guard = INTEGRATION_TEST_GUARD.lock().await;
    let config = LocalNetConfig {
        num_other_initial_chains: 0,
        num_shards: 1,
        num_initial_validators: 1,
        ..LocalNetConfig::new_test(Database::Service, Network::Tcp)
    };
    let (mut localnet, _client) = config.instantiate().await?;

    let proxy_address = SocketAddr::from(([127, 0, 0, 1], LocalNet::proxy_port(0) as u16));
    let mut connection = Framed::new(TcpStream::connect(proxy_address).await?, simple::Codec);

    connection
        .send(RpcMessage::ChainInfoQuery(Box::new(ChainInfoQuery::new(
            ChainId::root(0),
        ))))
        .await?;
    connection.flush().await?;

    time::sleep(Duration::from_millis(200)).await;
    localnet.terminate_server(0, 0)?;

    localnet.ensure_is_running().await?;
    assert!(connection.try_next().await?.is_some());

    time::sleep(Duration::from_millis(50)).await;
    assert!(localnet.ensure_is_running().await.is_err());

    localnet.reap_server(0, 0)?;
    localnet.terminate().await?;
    Ok(())
}
