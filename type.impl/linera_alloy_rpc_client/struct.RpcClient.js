(function() {var type_impls = {
"linera_alloy_rpc_client":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-RpcClient%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linera_alloy_rpc_client/client.rs.html#31-35\">source</a><a href=\"#impl-Clone-for-RpcClient%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"linera_alloy_rpc_client/struct.RpcClient.html\" title=\"struct linera_alloy_rpc_client::RpcClient\">RpcClient</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/linera_alloy_rpc_client/client.rs.html#32-34\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Self</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.80.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","linera_alloy_rpc_client::ReqwestClient"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-RpcClient%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linera_alloy_rpc_client/client.rs.html#28\">source</a><a href=\"#impl-Debug-for-RpcClient%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"linera_alloy_rpc_client/struct.RpcClient.html\" title=\"struct linera_alloy_rpc_client::RpcClient\">RpcClient</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/linera_alloy_rpc_client/client.rs.html#28\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/1.80.0/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.80.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","linera_alloy_rpc_client::ReqwestClient"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deref-for-RpcClient%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linera_alloy_rpc_client/client.rs.html#136-142\">source</a><a href=\"#impl-Deref-for-RpcClient%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"linera_alloy_rpc_client/struct.RpcClient.html\" title=\"struct linera_alloy_rpc_client::RpcClient\">RpcClient</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Target\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Target\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.80.0/core/ops/deref/trait.Deref.html#associatedtype.Target\" class=\"associatedtype\">Target</a> = RpcClientInner&lt;T&gt;</h4></section></summary><div class='docblock'>The resulting type after dereferencing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/linera_alloy_rpc_client/client.rs.html#139-141\">source</a><a href=\"#method.deref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/ops/deref/trait.Deref.html#tymethod.deref\" class=\"fn\">deref</a>(&amp;self) -&gt; &amp;Self::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.80.0/core/ops/deref/trait.Deref.html#associatedtype.Target\" title=\"type core::ops::deref::Deref::Target\">Target</a></h4></section></summary><div class='docblock'>Dereferences the value.</div></details></div></details>","Deref","linera_alloy_rpc_client::ReqwestClient"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RpcClient%3CHttp%3CClient%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linera_alloy_rpc_client/client.rs.html#45-52\">source</a><a href=\"#impl-RpcClient%3CHttp%3CClient%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"linera_alloy_rpc_client/struct.RpcClient.html\" title=\"struct linera_alloy_rpc_client::RpcClient\">RpcClient</a>&lt;<a class=\"struct\" href=\"linera_alloy_transport_http/struct.Http.html\" title=\"struct linera_alloy_transport_http::Http\">Http</a>&lt;<a class=\"struct\" href=\"reqwest/async_impl/client/struct.Client.html\" title=\"struct reqwest::async_impl::client::Client\">Client</a>&gt;&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_http\" class=\"method\"><a class=\"src rightside\" href=\"src/linera_alloy_rpc_client/client.rs.html#47-51\">source</a><h4 class=\"code-header\">pub fn <a href=\"linera_alloy_rpc_client/struct.RpcClient.html#tymethod.new_http\" class=\"fn\">new_http</a>(url: <a class=\"struct\" href=\"url/struct.Url.html\" title=\"struct url::Url\">Url</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create a new <a href=\"linera_alloy_rpc_client/struct.RpcClient.html\" title=\"struct linera_alloy_rpc_client::RpcClient\"><code>RpcClient</code></a> with an HTTP transport.</p>\n</div></details></div></details>",0,"linera_alloy_rpc_client::ReqwestClient"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RpcClient%3CHttp%3CT%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linera_alloy_rpc_client/client.rs.html#128-134\">source</a><a href=\"#impl-RpcClient%3CHttp%3CT%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"struct\" href=\"linera_alloy_rpc_client/struct.RpcClient.html\" title=\"struct linera_alloy_rpc_client::RpcClient\">RpcClient</a>&lt;<a class=\"struct\" href=\"linera_alloy_transport_http/struct.Http.html\" title=\"struct linera_alloy_transport_http::Http\">Http</a>&lt;T&gt;&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_batch\" class=\"method\"><a class=\"src rightside\" href=\"src/linera_alloy_rpc_client/client.rs.html#131-133\">source</a><h4 class=\"code-header\">pub fn <a href=\"linera_alloy_rpc_client/struct.RpcClient.html#tymethod.new_batch\" class=\"fn\">new_batch</a>(&amp;self) -&gt; <a class=\"struct\" href=\"linera_alloy_rpc_client/struct.BatchRequest.html\" title=\"struct linera_alloy_rpc_client::BatchRequest\">BatchRequest</a>&lt;'_, <a class=\"struct\" href=\"linera_alloy_transport_http/struct.Http.html\" title=\"struct linera_alloy_transport_http::Http\">Http</a>&lt;T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Create a new <a href=\"linera_alloy_rpc_client/struct.BatchRequest.html\" title=\"struct linera_alloy_rpc_client::BatchRequest\"><code>BatchRequest</code></a> builder.</p>\n</div></details></div></details>",0,"linera_alloy_rpc_client::ReqwestClient"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RpcClient%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linera_alloy_rpc_client/client.rs.html#113-126\">source</a><a href=\"#impl-RpcClient%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"linera_alloy_transport/trait/trait.Transport.html\" title=\"trait linera_alloy_transport::trait::Transport\">Transport</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"struct\" href=\"linera_alloy_rpc_client/struct.RpcClient.html\" title=\"struct linera_alloy_rpc_client::RpcClient\">RpcClient</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.boxed\" class=\"method\"><a class=\"src rightside\" href=\"src/linera_alloy_rpc_client/client.rs.html#118-125\">source</a><h4 class=\"code-header\">pub fn <a href=\"linera_alloy_rpc_client/struct.RpcClient.html#tymethod.boxed\" class=\"fn\">boxed</a>(self) -&gt; <a class=\"struct\" href=\"linera_alloy_rpc_client/struct.RpcClient.html\" title=\"struct linera_alloy_rpc_client::RpcClient\">RpcClient</a>&lt;<a class=\"struct\" href=\"linera_alloy_transport/boxed/struct.BoxTransport.html\" title=\"struct linera_alloy_transport::boxed::BoxTransport\">BoxTransport</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Boxes the transport.</p>\n<p>This will create a new client if this instance is not the only reference to the inner\nclient.</p>\n</div></details></div></details>",0,"linera_alloy_rpc_client::ReqwestClient"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RpcClient%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linera_alloy_rpc_client/client.rs.html#54-93\">source</a><a href=\"#impl-RpcClient%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"struct\" href=\"linera_alloy_rpc_client/struct.RpcClient.html\" title=\"struct linera_alloy_rpc_client::RpcClient\">RpcClient</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/linera_alloy_rpc_client/client.rs.html#56-58\">source</a><h4 class=\"code-header\">pub fn <a href=\"linera_alloy_rpc_client/struct.RpcClient.html#tymethod.new\" class=\"fn\">new</a>(t: T, is_local: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.bool.html\">bool</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates a new <a href=\"linera_alloy_rpc_client/struct.RpcClient.html\" title=\"struct linera_alloy_rpc_client::RpcClient\"><code>RpcClient</code></a> with the given transport.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_inner\" class=\"method\"><a class=\"src rightside\" href=\"src/linera_alloy_rpc_client/client.rs.html#61-63\">source</a><h4 class=\"code-header\">pub fn <a href=\"linera_alloy_rpc_client/struct.RpcClient.html#tymethod.from_inner\" class=\"fn\">from_inner</a>(inner: RpcClientInner&lt;T&gt;) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates a new <a href=\"linera_alloy_rpc_client/struct.RpcClient.html\" title=\"struct linera_alloy_rpc_client::RpcClient\"><code>RpcClient</code></a> with the given inner client.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.inner\" class=\"method\"><a class=\"src rightside\" href=\"src/linera_alloy_rpc_client/client.rs.html#66-68\">source</a><h4 class=\"code-header\">pub const fn <a href=\"linera_alloy_rpc_client/struct.RpcClient.html#tymethod.inner\" class=\"fn\">inner</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;RpcClientInner&lt;T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Get a reference to the client.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_inner\" class=\"method\"><a class=\"src rightside\" href=\"src/linera_alloy_rpc_client/client.rs.html#71-73\">source</a><h4 class=\"code-header\">pub fn <a href=\"linera_alloy_rpc_client/struct.RpcClient.html#tymethod.into_inner\" class=\"fn\">into_inner</a>(self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;RpcClientInner&lt;T&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Convert the client into its inner type.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_weak\" class=\"method\"><a class=\"src rightside\" href=\"src/linera_alloy_rpc_client/client.rs.html#76-78\">source</a><h4 class=\"code-header\">pub fn <a href=\"linera_alloy_rpc_client/struct.RpcClient.html#tymethod.get_weak\" class=\"fn\">get_weak</a>(&amp;self) -&gt; <a class=\"type\" href=\"linera_alloy_rpc_client/type.WeakClient.html\" title=\"type linera_alloy_rpc_client::WeakClient\">WeakClient</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Get a <a href=\"https://doc.rust-lang.org/1.80.0/alloc/sync/struct.Weak.html\" title=\"struct alloc::sync::Weak\"><code>Weak</code></a> reference to the client.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_ref\" class=\"method\"><a class=\"src rightside\" href=\"src/linera_alloy_rpc_client/client.rs.html#81-83\">source</a><h4 class=\"code-header\">pub fn <a href=\"linera_alloy_rpc_client/struct.RpcClient.html#tymethod.get_ref\" class=\"fn\">get_ref</a>(&amp;self) -&gt; <a class=\"type\" href=\"linera_alloy_rpc_client/type.ClientRef.html\" title=\"type linera_alloy_rpc_client::ClientRef\">ClientRef</a>&lt;'_, T&gt;</h4></section></summary><div class=\"docblock\"><p>Borrow the client.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_poll_interval\" class=\"method\"><a class=\"src rightside\" href=\"src/linera_alloy_rpc_client/client.rs.html#89-92\">source</a><h4 class=\"code-header\">pub fn <a href=\"linera_alloy_rpc_client/struct.RpcClient.html#tymethod.with_poll_interval\" class=\"fn\">with_poll_interval</a>(self, poll_interval: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/core/time/struct.Duration.html\" title=\"struct core::time::Duration\">Duration</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Sets the poll interval for the client in milliseconds.</p>\n<p>Note: This will only set the poll interval for the client if it is the only reference to the\ninner client. If the reference is held by many, then it will not update the poll interval.</p>\n</div></details></div></details>",0,"linera_alloy_rpc_client::ReqwestClient"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RpcClient%3CT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/linera_alloy_rpc_client/client.rs.html#95-111\">source</a><a href=\"#impl-RpcClient%3CT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T: <a class=\"trait\" href=\"linera_alloy_transport/trait/trait.Transport.html\" title=\"trait linera_alloy_transport::trait::Transport\">Transport</a>&gt; <a class=\"struct\" href=\"linera_alloy_rpc_client/struct.RpcClient.html\" title=\"struct linera_alloy_rpc_client::RpcClient\">RpcClient</a>&lt;T&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.prepare_static_poller\" class=\"method\"><a class=\"src rightside\" href=\"src/linera_alloy_rpc_client/client.rs.html#99-110\">source</a><h4 class=\"code-header\">pub fn <a href=\"linera_alloy_rpc_client/struct.RpcClient.html#tymethod.prepare_static_poller\" class=\"fn\">prepare_static_poller</a>&lt;Params, Resp&gt;(\n    &amp;self,\n    method: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'static, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.str.html\">str</a>&gt;&gt;,\n    params: Params,\n) -&gt; <a class=\"struct\" href=\"linera_alloy_rpc_client/struct.PollerBuilder.html\" title=\"struct linera_alloy_rpc_client::PollerBuilder\">PollerBuilder</a>&lt;T, Params, Resp&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    Params: <a class=\"trait\" href=\"linera_alloy_json_rpc/trait.RpcParam.html\" title=\"trait linera_alloy_json_rpc::RpcParam\">RpcParam</a> + 'static,\n    Resp: <a class=\"trait\" href=\"linera_alloy_json_rpc/trait.RpcReturn.html\" title=\"trait linera_alloy_json_rpc::RpcReturn\">RpcReturn</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h4></section></summary><div class=\"docblock\"><p>Build a poller that polls a method with the given parameters.</p>\n<p>See <a href=\"linera_alloy_rpc_client/struct.PollerBuilder.html\" title=\"struct linera_alloy_rpc_client::PollerBuilder\"><code>PollerBuilder</code></a> for examples and more details.</p>\n</div></details></div></details>",0,"linera_alloy_rpc_client::ReqwestClient"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()