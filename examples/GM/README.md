# GM Project (Greeting Message)

A simple blockchain application that demonstrates basic contract and service implementation on Linera protocol, allowing users to post and view greeting messages.

## Core Features
- **Greeting Contract**:
  - `post` - Store a greeting message on-chain
  - `get` - Retrieve stored greeting messages
- **Greeting Service**:
  - Web interface to interact with the contract
  - Display greeting message history
- **Linera Integration**:
  - Full compatibility with Linera protocol
  - Example of contract-service architecture

## Directory Structure
├── Cargo.toml               # Rust project configuration
├── src/
│   ├── lib.rs                 # Shared types and utilities
│   └── bin/
│       ├── contract.rs         # Contract logic implementation
│       └── service.rs          # Service logic implementation
├── response.rs              # Standardized API response handlers           
└── README.md   