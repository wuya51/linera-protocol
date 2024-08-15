(function() {var type_impls = {
"zstd_safe":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DCtx%3C'a%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#717-983\">source</a><a href=\"#impl-DCtx%3C'a%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a&gt; <a class=\"struct\" href=\"zstd_safe/struct.DCtx.html\" title=\"struct zstd_safe::DCtx\">DCtx</a>&lt;'a&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.decompress\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#719-735\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.decompress\" class=\"fn\">decompress</a>&lt;C: <a class=\"trait\" href=\"zstd_safe/trait.WriteBuf.html\" title=\"trait zstd_safe::WriteBuf\">WriteBuf</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    &amp;mut self,\n    dst: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.reference.html\">&amp;mut C</a>,\n    src: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>],\n) -&gt; <a class=\"type\" href=\"zstd_safe/type.SafeResult.html\" title=\"type zstd_safe::SafeResult\">SafeResult</a></h4></section></summary><div class=\"docblock\"><p>Wraps the <code>ZSTD_decompressDCtx()</code> function.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decompress_using_dict\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#738-757\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.decompress_using_dict\" class=\"fn\">decompress_using_dict</a>&lt;C: <a class=\"trait\" href=\"zstd_safe/trait.WriteBuf.html\" title=\"trait zstd_safe::WriteBuf\">WriteBuf</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    &amp;mut self,\n    dst: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.reference.html\">&amp;mut C</a>,\n    src: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>],\n    dict: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>],\n) -&gt; <a class=\"type\" href=\"zstd_safe/type.SafeResult.html\" title=\"type zstd_safe::SafeResult\">SafeResult</a></h4></section></summary><div class=\"docblock\"><p>Wraps <code>ZSTD_decompress_usingDict</code></p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decompress_using_ddict\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#760-778\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.decompress_using_ddict\" class=\"fn\">decompress_using_ddict</a>&lt;C: <a class=\"trait\" href=\"zstd_safe/trait.WriteBuf.html\" title=\"trait zstd_safe::WriteBuf\">WriteBuf</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    &amp;mut self,\n    dst: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.reference.html\">&amp;mut C</a>,\n    src: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>],\n    ddict: &amp;<a class=\"struct\" href=\"zstd_safe/struct.DDict.html\" title=\"struct zstd_safe::DDict\">DDict</a>&lt;'_&gt;,\n) -&gt; <a class=\"type\" href=\"zstd_safe/type.SafeResult.html\" title=\"type zstd_safe::SafeResult\">SafeResult</a></h4></section></summary><div class=\"docblock\"><p>Wraps the <code>ZSTD_decompress_usingDDict()</code> function.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.init\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#783-785\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.init\" class=\"fn\">init</a>(&amp;mut self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Wraps the <code>ZSTD_initCStream()</code> function.</p>\n<p>Initializes an existing <code>DStream</code> for decompression.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.reset\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#820-828\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.reset\" class=\"fn\">reset</a>(&amp;mut self) -&gt; <a class=\"type\" href=\"zstd_safe/type.SafeResult.html\" title=\"type zstd_safe::SafeResult\">SafeResult</a></h4></section></summary><div class=\"docblock\"><p>Wraps the <code>ZSTD_resetDStream()</code> function.</p>\n</div></details><section id=\"method.load_dictionary\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#830-838\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.load_dictionary\" class=\"fn\">load_dictionary</a>(&amp;mut self, dict: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"type\" href=\"zstd_safe/type.SafeResult.html\" title=\"type zstd_safe::SafeResult\">SafeResult</a></h4></section><section id=\"method.ref_ddict\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#840-847\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.ref_ddict\" class=\"fn\">ref_ddict</a>&lt;'b&gt;(&amp;mut self, ddict: &amp;<a class=\"struct\" href=\"zstd_safe/struct.DDict.html\" title=\"struct zstd_safe::DDict\">DDict</a>&lt;'b&gt;) -&gt; <a class=\"type\" href=\"zstd_safe/type.SafeResult.html\" title=\"type zstd_safe::SafeResult\">SafeResult</a><div class=\"where\">where\n    'b: 'a,</div></h4></section><section id=\"method.ref_prefix\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#849-860\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.ref_prefix\" class=\"fn\">ref_prefix</a>&lt;'b&gt;(&amp;mut self, prefix: &amp;'b [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"type\" href=\"zstd_safe/type.SafeResult.html\" title=\"type zstd_safe::SafeResult\">SafeResult</a><div class=\"where\">where\n    'b: 'a,</div></h4></section><section id=\"method.set_parameter\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#862-896\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.set_parameter\" class=\"fn\">set_parameter</a>(&amp;mut self, param: <a class=\"enum\" href=\"zstd_safe/enum.DParameter.html\" title=\"enum zstd_safe::DParameter\">DParameter</a>) -&gt; <a class=\"type\" href=\"zstd_safe/type.SafeResult.html\" title=\"type zstd_safe::SafeResult\">SafeResult</a></h4></section><details class=\"toggle method-toggle\" open><summary><section id=\"method.decompress_stream\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#899-914\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.decompress_stream\" class=\"fn\">decompress_stream</a>&lt;C: <a class=\"trait\" href=\"zstd_safe/trait.WriteBuf.html\" title=\"trait zstd_safe::WriteBuf\">WriteBuf</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt;(\n    &amp;mut self,\n    output: &amp;mut <a class=\"struct\" href=\"zstd_safe/struct.OutBuffer.html\" title=\"struct zstd_safe::OutBuffer\">OutBuffer</a>&lt;'_, C&gt;,\n    input: &amp;mut <a class=\"struct\" href=\"zstd_safe/struct.InBuffer.html\" title=\"struct zstd_safe::InBuffer\">InBuffer</a>&lt;'_&gt;,\n) -&gt; <a class=\"type\" href=\"zstd_safe/type.SafeResult.html\" title=\"type zstd_safe::SafeResult\">SafeResult</a></h4></section></summary><div class=\"docblock\"><p>Wraps the <code>ZSTD_decompressStream()</code> function.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.in_size\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#919-921\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.in_size\" class=\"fn\">in_size</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Wraps the <code>ZSTD_DStreamInSize()</code> function.</p>\n<p>Returns a hint for the recommended size of the input buffer for decompression.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.out_size\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#926-928\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.out_size\" class=\"fn\">out_size</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Wraps the <code>ZSTD_DStreamOutSize()</code> function.</p>\n<p>Returns a hint for the recommended size of the output buffer for decompression.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.sizeof\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#931-933\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.sizeof\" class=\"fn\">sizeof</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.usize.html\">usize</a></h4></section></summary><div class=\"docblock\"><p>Wraps the <code>ZSTD_sizeof_DCtx()</code> function.</p>\n</div></details></div></details>",0,"zstd_safe::DStream"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DCtx%3C'static%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#704-715\">source</a><a href=\"#impl-DCtx%3C'static%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"zstd_safe/struct.DCtx.html\" title=\"struct zstd_safe::DCtx\">DCtx</a>&lt;'static&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.try_create\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#705-710\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.try_create\" class=\"fn\">try_create</a>() -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Self&gt;</h4></section><section id=\"method.create\" class=\"method\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#711-714\">source</a><h4 class=\"code-header\">pub fn <a href=\"zstd_safe/struct.DCtx.html#tymethod.create\" class=\"fn\">create</a>() -&gt; Self</h4></section></div></details>",0,"zstd_safe::DStream"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-DCtx%3C'_%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#698-702\">source</a><a href=\"#impl-Default-for-DCtx%3C'_%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"zstd_safe/struct.DCtx.html\" title=\"struct zstd_safe::DCtx\">DCtx</a>&lt;'_&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#699-701\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.80.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","zstd_safe::DStream"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-DCtx%3C'_%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#990-996\">source</a><a href=\"#impl-Drop-for-DCtx%3C'_%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"zstd_safe/struct.DCtx.html\" title=\"struct zstd_safe::DCtx\">DCtx</a>&lt;'_&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#991-995\">source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.80.0/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","zstd_safe::DStream"],["<section id=\"impl-Send-for-DCtx%3C'_%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/zstd_safe/lib.rs.html#998\">source</a><a href=\"#impl-Send-for-DCtx%3C'_%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"zstd_safe/struct.DCtx.html\" title=\"struct zstd_safe::DCtx\">DCtx</a>&lt;'_&gt;</h3></section>","Send","zstd_safe::DStream"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()