# GM Contract for Linera

## Overview
A simple smart contract demonstrating Linera's capabilities for building decentralized applications with:

- Daily rate-limited "Gmicrochains" messages
- Cross-chain communication
- State persistence

## Key Features
| Feature | Description |
|---------|-------------|
| State Management | Uses `MapView` for efficient storage of message timestamps |
| Message Handling | Enforces 24-hour cooldown between messages |
| Query Interface | Provides access to last message timestamps |

## Getting Started

### Prerequisites
- Rust 1.70+ (`rustup` recommended)
- Linera CLI 0.6.0+
- For Windows: `windows-curses` package

### Installation
```bash
# Clone the repository
git clone https://github.com/linera-io/linera-protocol.git

# Build the contract
cd linera-protocol/examples/gm
cargo build --release --target wasm32-unknown-unknown
```
   