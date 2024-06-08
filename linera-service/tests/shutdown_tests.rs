// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

mod common;

use std::{net::SocketAddr, time::Duration};

use futures::{SinkExt, TryStreamExt};
use linera_base::identifiers::ChainId;
use linera_core::{data_types::ChainInfoQuery, node::ValidatorNode};
use linera_rpc::{
    config::{NetworkProtocol, TlsConfig, ValidatorPublicNetworkPreConfig},
    grpc::GrpcClient,
    simple, NodeOptions, RpcMessage,
};
use tokio::{net::TcpStream, task::JoinHandle, time};
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

/// Check that the simple TCP proxy shuts down gracefully.
///
/// Ensure that it finishes proxying the response to an active request before the process ends.
#[test_log::test(tokio::test)]
async fn simple_tcp_proxy_shutdown() -> anyhow::Result<()> {
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
    localnet.terminate_proxy(0)?;

    localnet.ensure_is_running().await?;
    assert!(connection.try_next().await?.is_some());

    time::sleep(Duration::from_millis(50)).await;
    assert!(localnet.ensure_is_running().await.is_err());

    localnet.reap_proxy(0)?;
    localnet.terminate().await?;
    Ok(())
}

/// Check that the gRPC server shuts down gracefully.
///
/// Ensure that it finishes responding to an active request before the process ends.
#[test_log::test(tokio::test)]
async fn grpc_server_shutdown() -> anyhow::Result<()> {
    let _guard = INTEGRATION_TEST_GUARD.lock().await;
    let config = LocalNetConfig {
        num_other_initial_chains: 0,
        num_shards: 1,
        num_initial_validators: 1,
        ..LocalNetConfig::new_test(Database::Service, Network::Grpc)
    };
    let (mut localnet, _client) = config.instantiate().await?;

    let connection_task = spawn_grpc_connection_task(LocalNet::proxy_port(0) as u16);

    time::sleep(Duration::from_millis(200)).await;
    localnet.terminate_server(0, 0)?;

    localnet.ensure_is_running().await?;

    connection_task.await??;
    time::sleep(Duration::from_millis(50)).await;

    assert!(localnet.ensure_is_running().await.is_err());

    localnet.reap_server(0, 0)?;
    localnet.terminate().await?;
    Ok(())
}

/// Spawns a tasks that connects to the validator and performs a dummy query twice.
///
/// The first query should succeed, even though a termination signal will be sent while it
/// is being processed. The second query should fail to connect, because the server should
/// have stopped.
fn spawn_grpc_connection_task(proxy_port: u16) -> JoinHandle<anyhow::Result<()>> {
    let options = NodeOptions {
        send_timeout: Duration::from_secs(10),
        recv_timeout: Duration::from_secs(10),
        notification_retry_delay: Duration::ZERO,
        notification_retries: 0,
    };

    let network = ValidatorPublicNetworkPreConfig {
        protocol: NetworkProtocol::Grpc(TlsConfig::ClearText),
        host: "127.0.0.1".to_owned(),
        port: proxy_port,
    };

    tokio::spawn(async move {
        let mut client = GrpcClient::new(network, options)?;
        let query = ChainInfoQuery::new(ChainId::root(0));

        // First query should succeed
        client.handle_chain_info_query(query.clone()).await?;

        // Second query should fail to connect
        assert!(client.handle_chain_info_query(query).await.is_err());

        Ok(())
    })
}
