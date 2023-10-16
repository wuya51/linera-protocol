[![License](https://img.shields.io/badge/license-Apache-green.svg)](LICENSE)
[![Build Status for Rust](https://github.com/linera-io/linera-protocol/actions/workflows/rust.yml/badge.svg)](https://github.com/linera-io/linera-protocol/actions/workflows/rust.yml)
[![Build Status for Documentation](https://github.com/linera-io/linera-protocol/actions/workflows/documentation.yml/badge.svg)](https://github.com/linera-io/linera-protocol/actions/workflows/documentation.yml)
[![Build Status for DynamoDB](https://github.com/linera-io/linera-protocol/actions/workflows/dynamodb.yml/badge.svg)](https://github.com/linera-io/linera-protocol/actions/workflows/dynamodb.yml)
<!-- [![Build Status for Kubernetes](https://github.com/linera-io/linera-protocol/actions/workflows/kubernetes.yml/badge.svg)](https://github.com/linera-io/linera-protocol/actions/workflows/kubernetes.yml) -->

# Linera

This repository is dedicated to developing the Linera protocol. For an overview of how
the Linera protocol functions refer to the [whitepaper](https://linera.io/whitepaper).

## Repository Structure

The Linera protocol repository is broken down into the following crates and subdirectories: (from low-level to high-level in the dependency graph)

1. [`linera-base`](https://linera-io.github.io/linera-protocol/linera_base/index.html) Base definitions, including cryptography.

2. [`linera-views`](https://linera-io.github.io/linera-protocol/linera_views/index.html) A library mapping complex data structures onto a key-value store. The corresponding procedural macros are implemented in `linera-view-derive`.

3. [`linera-execution`](https://linera-io.github.io/linera-protocol/linera_execution/index.html) Persistent data and the corresponding logics for runtime and execution of smart contracts / applications.

4. [`linera-chain`](https://linera-io.github.io/linera-protocol/linera_chain/index.html) Persistent data and the corresponding logics for chains of blocks, certificates, and cross-chain messaging.

5. [`linera-storage`](https://linera-io.github.io/linera-protocol/linera_storage/index.html) Defines the storage abstractions for the protocol on top of `linera-chain`.

6. [`linera-core`](https://linera-io.github.io/linera-protocol/linera_core/index.html) The core Linera protocol, including client and server logic, node synchronization, etc.

7. [`linera-rpc`](https://linera-io.github.io/linera-protocol/linera_rpc/index.html) Defines the data-type for RPC messages (currently all client<->proxy<->chain<->chain interactions), and track the corresponding data schemas.

8. [`linera-service`](https://linera-io.github.io/linera-protocol/linera_service/index.html) Executable for clients (aka CLI wallets), proxy (aka validator frontend) and servers.

9. [`linera-sdk`](https://linera-io.github.io/linera-protocol/linera_sdk/index.html) The library to develop Linera applications written in Rust for the Wasm virtual machine.

10. [`examples`](./examples) Examples of Linera applications written in Rust.

## Quickstart with the Linera service CLI

```bash
# Import the optional bash helper function `spawn_and_set_wallet_env_vars`.
source scripts/linera_net_helper.sh

# Make sure to compile the Linera binaries.
# cargo build -p linera-service --bins

# Run a local test network with the default parameters and 0 extra user wallets.
spawn_and_set_wallet_env_vars \
    target/debug/linera net up --extra-wallets 0

# Initial client of the chains created at genesis.
CLIENT=(target/debug/linera --with-wallet 0)

# Print the set of validators.
${CLIENT[@]} query-validators

# Query some of the chains created at genesis
CHAIN1="e476187f6ddfeb9d588c7b45d3df334d5501d6499b3f9ad5595cae86cce16a65"
CHAIN2="256e1dbc00482ddd619c293cc0df94d366afe7980022bb22d99e33036fd465dd"
${CLIENT[@]} query-balance "$CHAIN1"
${CLIENT[@]} query-balance "$CHAIN2"

# Transfer 10 units then 5 back
${CLIENT[@]} transfer 10 --from "$CHAIN1" --to "$CHAIN2"
${CLIENT[@]} transfer 5 --from "$CHAIN2" --to "$CHAIN1"

# Query balances again
${CLIENT[@]} query-balance "$CHAIN1"
${CLIENT[@]} query-balance "$CHAIN2"
```
