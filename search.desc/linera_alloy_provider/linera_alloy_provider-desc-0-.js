searchState.loadedDescShard("linera_alloy_provider", 0, "linera-alloy-provider\nA builder for an <code>&quot;eth_call&quot;</code> request. This type is returned …\nA task that polls the provider with <code>eth_getFilterChanges</code>, …\nAn identity layer that does nothing.\nRepresents a transaction that is yet to be confirmed a …\nA builder for configuring a pending transaction watcher.\nConfiguration for watching a pending transaction.\nProvider is parameterized with a network and a transport. …\nThe provider constructed by this layer.\nA builder for constructing a <code>Provider</code> from various layers.\nA layering abstraction in the vein of <code>tower::Layer</code>\nType alias for a <code>RootProvider</code> using the <code>Http</code> transport and …\nThe root provider manages the RPC client and the …\nAn <code>RpcCall</code> that takes an optional <code>BlockId</code> parameter. By …\nThe underlying <code>NetworkSigner</code> type contained in this stack.\nA stack of two providers.\nList of trace calls for use with <code>Provider::trace_call_many</code>\nTrait for Providers, Fill stacks, etc, which contain …\nSet the block to use for this call.\nSet the block id.\nBoxes the inner client.\nExecute a smart contract call with a transaction request …\nExecute a smart contract call with a transaction request …\nReturns the RPC client used to send requests.\nReturns the RPC client used to send requests.\nConnects to a boxed transport with the given connector.\nCreates a new root provider from the provided connection …\nCreate an EIP-2930 access list.\nCreate an EIP-2930 access list.\nGet the default signer address.\nGet the default signer address.\nSet the block id to “earliest”.\nEstimates the EIP1559 <code>maxFeePerGas</code> and <code>maxPriorityFeePerGas</code>…\nEstimates the EIP1559 <code>maxFeePerGas</code> and <code>maxPriorityFeePerGas</code>…\nEstimate the gas needed for a transaction.\nEstimate the gas needed for a transaction.\nExtended APIs for the provider module.\nAdd a chain ID filler to the stack being built. The filler …\nAdd a transaction filler to the stack being built. …\nTransaction Fillers\nSet the block id to “finalized”.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a new pending transaction builder from the given …\nRetrieves account information (Account) for the given …\nRetrieves account information (Account) for the given …\nGets the accounts in the remote node. This is usually …\nGets the accounts in the remote node. This is usually …\nGets the balance of the account at the specified tag, …\nGets the balance of the account at the specified tag, …\nReturns the base fee per blob gas (blob gas price) in wei.\nReturns the base fee per blob gas (blob gas price) in wei.\nGets a block by either its hash, tag, or number, with full …\nGets a block by either its hash, tag, or number, with full …\nGets a block by its BlockHash, with full transactions or …\nGets a block by its BlockHash, with full transactions or …\nGet a block by its number.\nGet a block by its number.\nGet the last block number available.\nGet the last block number available.\nGets the selected block BlockNumberOrTag receipts.\nGets the selected block BlockNumberOrTag receipts.\nGets the chain ID.\nGets the chain ID.\nGets the client version of the chain client().\nGets the client version of the chain client().\nGets the bytecode located at the corresponding Address.\nGets the bytecode located at the corresponding Address.\nReturns a collection of historical gas information …\nReturns a collection of historical gas information …\nGet a list of values that have been added since the last …\nGet a list of values that have been added since the last …\nGet a list of values that have been added since the last …\nGet a list of values that have been added since the last …\nGets the current gas price in wei.\nGets the current gas price in wei.\nRetrieves a <code>Vec&lt;Log&gt;</code> with the given Filter.\nRetrieves a <code>Vec&lt;Log&gt;</code> with the given Filter.\nReturns a suggestion for the current <code>maxPriorityFeePerGas</code> …\nReturns a suggestion for the current <code>maxPriorityFeePerGas</code> …\nGets the network ID. Same as <code>eth_chainId</code>.\nGets the network ID. Same as <code>eth_chainId</code>.\nGet the account and storage values of the specified …\nGet the account and storage values of the specified …\nWaits for the transaction to confirm with the given number …\nGets the specified storage value from Address.\nGets the specified storage value from Address.\nGets a transaction by its TxHash.\nGets a transaction by its TxHash.\nGets the transaction count (AKA “nonce”) of the …\nGets the transaction count (AKA “nonce”) of the …\nGets a transaction receipt if it exists, by its TxHash.\nGets a transaction receipt if it exists, by its TxHash.\nGets an uncle block through the tag BlockId and index u64.\nGets an uncle block through the tag BlockId and index u64.\nGets the number of uncles for the block specified by the …\nGets the number of uncles for the block specified by the …\nCheck if the signer can sign for the given address.\nCheck if the signer can sign for the given address.\nSet the block id to a specific hash, without requiring the …\nSet the block id to a specific hash and require the hash …\nReturns the inner configuration.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConsumes this builder, returning the inner configuration.\nSet the block id to “latest”.\nWrap the given provider in the layer’s provider.\nAdd a layer to the stack being built. This is similar to …\nUseful layer implementations for the provider. Currently …\nMap the response.\nChange the network.\nCreates a new root provider from the given RPC client.\nCreate a new <code>Stack</code>.\nCreate a new <code>ProviderBuilder</code>.\nCreates a new pending transaction builder.\nCreate a new watch for a transaction.\nCreate a new CallBuilder.\nCreate a new <code>RpcWithBlock</code> instance.\nNotify the provider that we are interested in new blocks.\nNotify the provider that we are interested in new blocks.\nNotify the provider that we are interested in logs that …\nNotify the provider that we are interested in logs that …\nCreates a new HTTP root provider from the given URL.\nNotify the provider that we are interested in new pending …\nNotify the provider that we are interested in new pending …\nSet the block id to a specific height.\nBuild this provider with anvil, using an Reqwest HTTP …\nBuild this provider with anvil, using an Reqwest HTTP …\nBuild this provider with anvil, using an Reqwest HTTP …\nBuild this provider with anvil, using an Reqwest HTTP …\nFinish the layer stack by providing a connection string …\nFinish the layer stack by providing a root <code>RpcClient</code>, …\nBuild this provider with an Reqwest HTTP transport.\nFinish the layer stack by providing a root <code>Provider</code>, …\nSet the state overrides for this call.\nSet the block id to “pending”.\nReturns the provider.\nSends a raw JSON-RPC request.\nSends a raw JSON-RPC request.\nSends a raw JSON-RPC request with type-erased parameters …\nSends a raw JSON-RPC request with type-erased parameters …\nRegisters the watching configuration with the provider.\nReturns the number of confirmations to wait for.\nReturns the number of confirmations to wait for.\nReturns the root provider.\nSet the block id to “safe”.\nBroadcasts a raw transaction RLP bytes to the network.\nBroadcasts a raw transaction RLP bytes to the network.\nBroadcasts a transaction to the network.\nBroadcasts a transaction to the network.\nSet the bytecode of a given account.\nSet the bytecode of a given account.\nSets the number of confirmations to wait for.\nSets the number of confirmations to wait for.\nSets the timeout.\nSets the timeout.\nSets the transaction hash.\nSets the transaction hash.\nGet a reference to the underlying signer.\nAdd a signer layer to the stack being built.\nGet an iterator of all signer addresses. Note that because …\nGet an iterator of all signer addresses. Note that because …\nGet a mutable reference to the underlying signer.\nConsumes this builder, returning the provider and the …\nGets syncing info.\nGets syncing info.\nReturns the timeout.\nReturns the timeout.\nTrace all transactions in the given block.\nTrace all transactions in the given block.\nExecutes the given transaction and returns a number of …\nExecutes the given transaction and returns a number of …\nTraces multiple transactions on top of the same block, …\nTraces multiple transactions on top of the same block, …\nParity trace transaction.\nParity trace transaction.\nReturns this transaction’s hash.\nReturns the transaction hash.\nReturns the transaction hash.\nProvider-related utilities.\nWaits for the transaction to confirm with the given number …\nWatch for new blocks by polling the provider with …\nWatch for new blocks by polling the provider with …\nWatch for new pending transaction bodies by polling the …\nWatch for new pending transaction bodies by polling the …\nWatch for new logs using the given filter by polling the …\nWatch for new logs using the given filter by polling the …\nWatch for the confirmation of a single pending transaction …\nWatch for the confirmation of a single pending transaction …\nWatch for new pending transaction by polling the provider …\nWatch for new pending transaction by polling the provider …\nReturns a <code>Weak</code> RPC client used to send requests.\nReturns a <code>Weak</code> RPC client used to send requests.\nAdd a chain layer to the stack being built. The layer will …\nAdd a specific chain ID to the stack being built. The …\nAdd gas estimation to the stack being built.\nAdd nonce management to the stack being built.\nWraps this configuration with a provider to expose …\nAdd preconfigured set of layers handling gas estimation, …\nSets the number of confirmations to wait for.\nSets the number of confirmations to wait for.\nSets the timeout.\nSets the timeout.\nSets the transaction hash.\nSets the transaction hash.\nAdmin namespace rpc interface that gives access to several …\nDebug namespace rpc interface that gives access to several …\nGeth only Txpool namespace rpc interface.\nRequests adding the given peer, returning a boolean …\nRequests adding the given peer as a trusted peer, which …\nReturn a full stack trace of all invoked opcodes of all …\nSame as <code>debug_trace_block_by_hash</code> but block is specified …\nExecutes the given transaction without publishing it like …\nSame as <code>debug_trace_call</code> but it used to run and trace …\nReruns the transaction specified by the hash and returns …\nReturns general information about the node as well as …\nReturns the list of peers currently connected to the node.\nRequests to remove the given peer, returning true if the …\nRequests to remove the given peer, returning a boolean …\nReturns the content of the transaction pool.\nReturns the content of the transaction pool filtered by a …\nReturns a textual summary of each transaction in the pool.\nReturns the current status of the transaction pool.\nA <code>TxFiller</code> that populates the chain ID of a transaction.\nA <code>Provider</code> that applies one or more <code>TxFiller</code>s.\nThe properties that this filler retrieves from the RPC. to …\nThe control flow for a filler.\nThe filler has filled in all properties that it can fill.\nA <code>TxFiller</code> that populates gas related fields in …\nA layer that can fill in a <code>TransactionRequest</code> with …\nThe filler is missing a required property.\nA <code>TxFiller</code> that fills nonces on transactions.\nThe filler is ready to fill in the transaction request.\nA layer that signs transactions locally.\nA layer that can fill in a <code>TransactionRequest</code> with …\nAbsorb the control flow of another filler.\nReturns true if the filler is missing a required property.\nReturns <code>true</code> if the filler is should continnue filling.\nFills in the transaction request with the fillable …\nFills the transaction request, using the configured fillers\nReturns <code>true</code> if the filler is finished filling in the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if the filler is finished filling in the …\nReturns <code>true</code> if the filler is missing information required …\nReturns <code>true</code> if the filler is ready to fill in the …\nJoins this filler with another filler to compose multiple …\nJoins a filler to this provider\nGet a reference to the left filler.\nCreates a new <code>Missing</code> control flow.\nCreate a new <code>ChainIdFiller</code> with an optional chain ID.\nCreates a new signing layer with the given signer.\nCreates a new <code>JoinFill</code> with the given layers.\nCreates a new <code>FillProvider</code> with the given filler and inner …\nPrepares fillable properties, potentially by making an RPC …\nPrepares and fills the transaction request with the …\nReturns <code>true</code> if the filler is ready to fill in the …\nGet a reference to the right filler.\nReturn a control-flow enum indicating whether the filler …\nA layer that wraps an <code>Anvil</code> config. The config will be used\nA provider that wraps an <code>AnvilInstance</code>, preventing the …\nA layer that wraps a <code>NamedChain</code>. The layer will be used to …\nGet the chain’s average blocktime, if applicable.\nGet the instance http endpoint.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nStarts the anvil instance, or gets a reference to the …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreates a new <code>AnvilProvider</code> with the given inner provider …\nGet the instance ws endpoint.\nMultiplier for the current base fee to estimate max base …\nThe number of blocks from the past for which the fee …\nThe default percentile of gas premiums that are fetched …\nReturn type of EIP1155 gas fee estimator.\nAn estimator function for EIP1559 fees.\nThe default EIP-1559 fee estimator which is based on the …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nThe base fee per gas.\nThe max priority fee per gas.")