(function() {var type_impls = {
"aws_smithy_http":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Metadata\" class=\"impl\"><a class=\"src rightside\" href=\"src/aws_smithy_runtime_api/client/orchestrator.rs.html#293\">source</a><a href=\"#impl-Clone-for-Metadata\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"aws_smithy_runtime_api/client/orchestrator/struct.Metadata.html\" title=\"struct aws_smithy_runtime_api::client::orchestrator::Metadata\">Metadata</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/aws_smithy_runtime_api/client/orchestrator.rs.html#293\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"aws_smithy_runtime_api/client/orchestrator/struct.Metadata.html\" title=\"struct aws_smithy_runtime_api::client::orchestrator::Metadata\">Metadata</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.80.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","aws_smithy_http::operation::Metadata"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Metadata\" class=\"impl\"><a class=\"src rightside\" href=\"src/aws_smithy_runtime_api/client/orchestrator.rs.html#293\">source</a><a href=\"#impl-Debug-for-Metadata\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"aws_smithy_runtime_api/client/orchestrator/struct.Metadata.html\" title=\"struct aws_smithy_runtime_api::client::orchestrator::Metadata\">Metadata</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/aws_smithy_runtime_api/client/orchestrator.rs.html#293\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.80.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","aws_smithy_http::operation::Metadata"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Metadata\" class=\"impl\"><a class=\"src rightside\" href=\"src/aws_smithy_runtime_api/client/orchestrator.rs.html#299\">source</a><a href=\"#impl-Metadata\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"aws_smithy_runtime_api/client/orchestrator/struct.Metadata.html\" title=\"struct aws_smithy_runtime_api::client::orchestrator::Metadata\">Metadata</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.name\" class=\"method\"><a class=\"src rightside\" href=\"src/aws_smithy_runtime_api/client/orchestrator.rs.html#301\">source</a><h4 class=\"code-header\">pub fn <a href=\"aws_smithy_runtime_api/client/orchestrator/struct.Metadata.html#tymethod.name\" class=\"fn\">name</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.str.html\">str</a></h4></section></summary><div class=\"docblock\"><p>Returns the operation name.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.service\" class=\"method\"><a class=\"src rightside\" href=\"src/aws_smithy_runtime_api/client/orchestrator.rs.html#306\">source</a><h4 class=\"code-header\">pub fn <a href=\"aws_smithy_runtime_api/client/orchestrator/struct.Metadata.html#tymethod.service\" class=\"fn\">service</a>(&amp;self) -&gt; &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.str.html\">str</a></h4></section></summary><div class=\"docblock\"><p>Returns the service name.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/aws_smithy_runtime_api/client/orchestrator.rs.html#311-314\">source</a><h4 class=\"code-header\">pub fn <a href=\"aws_smithy_runtime_api/client/orchestrator/struct.Metadata.html#tymethod.new\" class=\"fn\">new</a>(\n    operation: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'static, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.str.html\">str</a>&gt;&gt;,\n    service: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'static, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.str.html\">str</a>&gt;&gt;,\n) -&gt; <a class=\"struct\" href=\"aws_smithy_runtime_api/client/orchestrator/struct.Metadata.html\" title=\"struct aws_smithy_runtime_api::client::orchestrator::Metadata\">Metadata</a></h4></section></summary><div class=\"docblock\"><p>Creates <a href=\"aws_smithy_runtime_api/client/orchestrator/struct.Metadata.html\" title=\"struct aws_smithy_runtime_api::client::orchestrator::Metadata\"><code>Metadata</code></a>.</p>\n</div></details></div></details>",0,"aws_smithy_http::operation::Metadata"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Storable-for-Metadata\" class=\"impl\"><a class=\"src rightside\" href=\"src/aws_smithy_runtime_api/client/orchestrator.rs.html#322\">source</a><a href=\"#impl-Storable-for-Metadata\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"aws_smithy_types/config_bag/storable/trait.Storable.html\" title=\"trait aws_smithy_types::config_bag::storable::Storable\">Storable</a> for <a class=\"struct\" href=\"aws_smithy_runtime_api/client/orchestrator/struct.Metadata.html\" title=\"struct aws_smithy_runtime_api::client::orchestrator::Metadata\">Metadata</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Storer\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Storer\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"aws_smithy_types/config_bag/storable/trait.Storable.html#associatedtype.Storer\" class=\"associatedtype\">Storer</a> = <a class=\"struct\" href=\"aws_smithy_types/config_bag/storable/struct.StoreReplace.html\" title=\"struct aws_smithy_types::config_bag::storable::StoreReplace\">StoreReplace</a>&lt;<a class=\"struct\" href=\"aws_smithy_runtime_api/client/orchestrator/struct.Metadata.html\" title=\"struct aws_smithy_runtime_api::client::orchestrator::Metadata\">Metadata</a>&gt;</h4></section></summary><div class='docblock'>Specify how an item is stored in the config bag, e.g. <a href=\"aws_smithy_types/config_bag/storable/struct.StoreReplace.html\" title=\"struct aws_smithy_types::config_bag::storable::StoreReplace\"><code>StoreReplace</code></a> and <a href=\"aws_smithy_types/config_bag/storable/struct.StoreAppend.html\" title=\"struct aws_smithy_types::config_bag::storable::StoreAppend\"><code>StoreAppend</code></a></div></details></div></details>","Storable","aws_smithy_http::operation::Metadata"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()