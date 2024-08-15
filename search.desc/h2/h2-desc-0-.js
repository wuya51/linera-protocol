searchState.loadedDescShard("h2", 0, "An asynchronous, HTTP/2 server and client implementation.\nUsed by the endpoint to indicate that the stream is no …\nThe endpoint is unable to maintain the header compression …\nThe connection established in response to a CONNECT …\nThe endpoint detected that its peer is exhibiting a …\nRepresents HTTP/2 operation errors.\nThe endpoint detected that its peer violated the …\nThe endpoint received a frame with an invalid size.\nA handle to release window capacity to a remote stream.\nThe endpoint requires that HTTP/1.1 be used instead of …\nThe underlying transport has properties that do not meet …\nThe endpoint encountered an unexpected internal error.\nThe associated condition is not a result of an error.\nThe endpoint detected an unspecific protocol error.\nSent via <code>PingPong</code> to send a PING frame to a peer.\nA handle to send and receive PING frames with the peer.\nReceived via <code>PingPong</code> when a peer acknowledges a <code>Ping</code>.\nThe endpoint refused the stream prior to performing any …\nHTTP/2 error codes.\nReceives the body stream and trailers from the remote peer.\nThe endpoint sent a SETTINGS frame but did not receive a …\nThe endpoint received a frame after a stream was …\nSends the body stream and trailers to the remote peer.\nA stream identifier, as described in Section 5.1.1 of RFC …\nReturns the <code>u32</code> corresponding to this <code>StreamId</code>\nGet the current available capacity of data this stream …\nReturns the stream’s current send capacity.\nClient implementation of the HTTP/2 protocol.\nGet the next data frame.\nGet a string description of the error code.\nExtensions specific to the HTTP/2 protocol.\nGet a mutable reference to this stream’s <code>FlowControl</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the error if the error is an io::Error\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the error if the error is an io::Error\nReturns true if the receive half has reached the end of …\nReturns true if the error is from a <code>GOAWAY</code>.\nReturns true if the error is an io::Error\nReturns true if the error was created by <code>h2</code>.\nReturns true if the error was received in a frame from the …\nReturns true if the error is from a <code>RST_STREAM</code>.\nCreates a new opaque <code>Ping</code> to be sent via a <code>PingPong</code>.\nSend a PING frame and wait for the peer to send the pong.\nRequests to be notified when the stream’s capacity …\nPoll for the next data frame.\nPolls to be notified when the client resets this stream.\nIf the error was caused by the remote peer, the error …\nRelease window capacity back to remote stream.\nRequests capacity to send data.\nSends a single data frame to the remote peer.\nResets the stream.\nSends trailers to the remote peer.\nServer implementation of the HTTP/2 protocol.\nReturns the stream ID of this stream.\nReturns the stream ID of this <code>SendStream</code>.\nReturns the stream ID of the stream whose capacity will be …\nGet optional trailers for this stream.\nGet the currently <em>used</em> capacity for this stream.\nBuilds client connections with custom configuration values.\nManages all state associated with an HTTP/2 client …\nA pushed response and corresponding request headers\nA stream of pushed responses and corresponding promised …\nA future of a pushed HTTP response.\nReturns a <code>SendRequest</code> instance once it is ready to send at …\nA future of an HTTP response.\nInitializes new HTTP/2 streams on a connection by sending …\nEnables or disables server push promises.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a new configured HTTP/2 client with default …\nCreates a new configured HTTP/2 client backed by <code>io</code>.\nSets the header table size.\nIndicates the initial window size (in octets) for …\nSets the initial maximum of locally initiated (send) …\nIndicates the initial window size (in octets) for …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConsumes <code>self</code>, returning the push promise’s request …\nReturns whether the extended CONNECT protocol is enabled …\nReturns the maximum number of concurrent streams that may …\nSets the maximum number of concurrent locally reset …\nReturns the maximum number of concurrent streams that may …\nSets the maximum number of concurrent streams.\nIndicates the size (in octets) of the largest HTTP/2 frame …\nSets the max size of received header frames.\nSets the maximum number of local resets due to protocol …\nSets the maximum number of pending-accept remotely-reset …\nSets the maximum send buffer size per stream.\nReturns a new client builder instance initialized with …\nTakes a <code>PingPong</code> instance from the connection.\nReturns <code>Ready</code> when the connection can initialize a new …\nGet the next <code>PushPromise</code>.\nReturns a stream of PushPromises\nConsumes <code>self</code>, returning a future that returns <code>self</code> back …\nReturns a reference to the push promise’s request …\nReturns a mutable reference to the push promise’s …\nSets the duration to remember locally reset streams.\nSends a HTTP/2 request to the server.\nSet a new <code>INITIAL_WINDOW_SIZE</code> setting (in octets) for …\nSets the target window size for the whole connection.\nReturns the stream ID of the response stream.\nReturns the stream ID of the response stream.\nRepresents the <code>:protocol</code> pseudo-header used by the …\nReturns a str representation of the header.\nReturns the argument unchanged.\nConverts a static string to a protocol name.\nCalls <code>U::from(self)</code>.\nBuilds server connections with custom configuration values.\nAccepts inbound HTTP/2 streams on a connection.\nIn progress HTTP/2 connection handshake future.\nSend a response to a promised request\nSend a response back to the client\nSets the connection to a GOAWAY state.\nAccept the next incoming request on this connection.\nEnables the extended CONNECT protocol.\nEnables the extended CONNECT protocol.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nStarts a graceful shutdown process.\nCreates a new configured HTTP/2 server with default …\nCreates a new configured HTTP/2 server backed by <code>io</code>.\nIndicates the initial window size (in octets) for …\nIndicates the initial window size (in octets) for …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the maximum number of concurrent streams that may …\nSets the maximum number of concurrent locally reset …\nReturns the maximum number of concurrent streams that may …\nSets the maximum number of concurrent streams.\nIndicates the size (in octets) of the largest HTTP/2 frame …\nSets the max size of received header frames.\nSets the maximum number of local resets due to protocol …\nSets the maximum number of pending-accept remotely-reset …\nSets the maximum send buffer size per stream.\nReturns a new server builder instance initialized with …\nTakes a <code>PingPong</code> instance from the connection.\nReturns <code>Ready</code> when the underlying connection has closed.\nPolls to be notified when the client resets this stream.\nPolls to be notified when the client resets this stream.\nPush a request and response to the client\nSets the maximum number of concurrent locally reset …\nSend a stream reset to the peer.\nSend a stream reset to the peer.\nSend a response to a promised request.\nSend a response to a client request.\nSet a new <code>INITIAL_WINDOW_SIZE</code> setting (in octets) for …\nSets the target window size for the whole connection.\nReturns the stream ID of the response stream.\nReturns the stream ID of the response stream.")