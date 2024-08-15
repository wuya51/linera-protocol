(function() {var type_impls = {
"winnow":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Parser%3CI,+(O,+%3CI+as+Stream%3E::Slice),+E%3E-for-WithTaken%3CF,+I,+O,+E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/winnow/combinator/parser.rs.html#654-672\">source</a><a href=\"#impl-Parser%3CI,+(O,+%3CI+as+Stream%3E::Slice),+E%3E-for-WithTaken%3CF,+I,+O,+E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F, I, O, E&gt; <a class=\"trait\" href=\"winnow/trait.Parser.html\" title=\"trait winnow::Parser\">Parser</a>&lt;I, (O, &lt;I as <a class=\"trait\" href=\"winnow/stream/trait.Stream.html\" title=\"trait winnow::stream::Stream\">Stream</a>&gt;::<a class=\"associatedtype\" href=\"winnow/stream/trait.Stream.html#associatedtype.Slice\" title=\"type winnow::stream::Stream::Slice\">Slice</a>), E&gt; for <a class=\"struct\" href=\"winnow/combinator/struct.WithTaken.html\" title=\"struct winnow::combinator::WithTaken\">WithTaken</a>&lt;F, I, O, E&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"winnow/trait.Parser.html\" title=\"trait winnow::Parser\">Parser</a>&lt;I, O, E&gt;,\n    I: <a class=\"trait\" href=\"winnow/stream/trait.Stream.html\" title=\"trait winnow::stream::Stream\">Stream</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.parse_next\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/winnow/combinator/parser.rs.html#660-671\">source</a><a href=\"#method.parse_next\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"winnow/trait.Parser.html#tymethod.parse_next\" class=\"fn\">parse_next</a>(&amp;mut self, input: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.reference.html\">&amp;mut I</a>) -&gt; <a class=\"type\" href=\"winnow/error/type.PResult.html\" title=\"type winnow::error::PResult\">PResult</a>&lt;(O, &lt;I as <a class=\"trait\" href=\"winnow/stream/trait.Stream.html\" title=\"trait winnow::stream::Stream\">Stream</a>&gt;::<a class=\"associatedtype\" href=\"winnow/stream/trait.Stream.html#associatedtype.Slice\" title=\"type winnow::stream::Stream::Slice\">Slice</a>), E&gt;</h4></section></summary><div class='docblock'>Take tokens from the <a href=\"winnow/stream/trait.Stream.html\" title=\"trait winnow::stream::Stream\"><code>Stream</code></a>, turning it into the output <a href=\"winnow/trait.Parser.html#tymethod.parse_next\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.parse_peek\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/winnow/parser.rs.html#87-92\">source</a><a href=\"#method.parse_peek\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"winnow/trait.Parser.html#method.parse_peek\" class=\"fn\">parse_peek</a>(&amp;mut self, input: I) -&gt; <a class=\"type\" href=\"winnow/error/type.IResult.html\" title=\"type winnow::error::IResult\">IResult</a>&lt;I, O, E&gt;</h4></section></summary><div class='docblock'>Take tokens from the <a href=\"winnow/stream/trait.Stream.html\" title=\"trait winnow::stream::Stream\"><code>Stream</code></a>, turning it into the output <a href=\"winnow/trait.Parser.html#method.parse_peek\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.by_ref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/winnow/parser.rs.html#138-143\">source</a><a href=\"#method.by_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"winnow/trait.Parser.html#method.by_ref\" class=\"fn\">by_ref</a>(&amp;mut self) -&gt; <a class=\"struct\" href=\"winnow/combinator/struct.ByRef.html\" title=\"struct winnow::combinator::ByRef\">ByRef</a>&lt;'_, Self&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Treat <code>&amp;mut Self</code> as a parser <a href=\"winnow/trait.Parser.html#method.by_ref\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.value\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/winnow/parser.rs.html#162-168\">source</a><a href=\"#method.value\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"winnow/trait.Parser.html#method.value\" class=\"fn\">value</a>&lt;O2&gt;(self, val: O2) -&gt; <a class=\"struct\" href=\"winnow/combinator/struct.Value.html\" title=\"struct winnow::combinator::Value\">Value</a>&lt;Self, I, O, O2, E&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    O2: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h4></section></summary><div class='docblock'>Produce the provided value <a href=\"winnow/trait.Parser.html#method.value\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.default_value\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/winnow/parser.rs.html#186-192\">source</a><a href=\"#method.default_value\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"winnow/trait.Parser.html#method.default_value\" class=\"fn\">default_value</a>&lt;O2&gt;(self) -&gt; <a class=\"struct\" href=\"winnow/combinator/struct.DefaultValue.html\" title=\"struct winnow::combinator::DefaultValue\">DefaultValue</a>&lt;Self, I, O, O2, E&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    O2: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h4></section></summary><div class='docblock'>Produce a type’s default value <a href=\"winnow/trait.Parser.html#method.default_value\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.void\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/winnow/parser.rs.html#210-215\">source</a><a href=\"#method.void\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"winnow/trait.Parser.html#method.void\" class=\"fn\">void</a>(self) -&gt; <a class=\"struct\" href=\"winnow/combinator/struct.Void.html\" title=\"struct winnow::combinator::Void\">Void</a>&lt;Self, I, O, E&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Discards the output of the <code>Parser</code> <a href=\"winnow/trait.Parser.html#method.void\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.output_into\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/winnow/parser.rs.html#239-245\">source</a><a href=\"#method.output_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"winnow/trait.Parser.html#method.output_into\" class=\"fn\">output_into</a>&lt;O2&gt;(self) -&gt; <a class=\"struct\" href=\"winnow/combinator/struct.OutputInto.html\" title=\"struct winnow::combinator::OutputInto\">OutputInto</a>&lt;Self, I, O, O2, E&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    O: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;O2&gt;,</div></h4></section></summary><div class='docblock'>Convert the parser’s output to another type using <a href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.From.html\" title=\"trait core::convert::From\"><code>std::convert::From</code></a> <a href=\"winnow/trait.Parser.html#method.output_into\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.take\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/winnow/parser.rs.html#266-272\">source</a><a href=\"#method.take\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"winnow/trait.Parser.html#method.take\" class=\"fn\">take</a>(self) -&gt; <a class=\"struct\" href=\"winnow/combinator/struct.Take.html\" title=\"struct winnow::combinator::Take\">Take</a>&lt;Self, I, O, E&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    I: <a class=\"trait\" href=\"winnow/stream/trait.Stream.html\" title=\"trait winnow::stream::Stream\">Stream</a>,</div></h4></section></summary><div class='docblock'>Produce the consumed input as produced value. <a href=\"winnow/trait.Parser.html#method.take\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.recognize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/winnow/parser.rs.html#277-283\">source</a><a href=\"#method.recognize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"winnow/trait.Parser.html#method.recognize\" class=\"fn\">recognize</a>(self) -&gt; <a class=\"struct\" href=\"winnow/combinator/struct.Take.html\" title=\"struct winnow::combinator::Take\">Take</a>&lt;Self, I, O, E&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    I: <a class=\"trait\" href=\"winnow/stream/trait.Stream.html\" title=\"trait winnow::stream::Stream\">Stream</a>,</div></h4></section></summary><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated since 0.6.14: Replaced with <code>Parser::take</code></span></div></span><div class='docblock'>Replaced with <a href=\"winnow/trait.Parser.html#method.take\" title=\"method winnow::Parser::take\"><code>Parser::take</code></a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_taken\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/winnow/parser.rs.html#324-330\">source</a><a href=\"#method.with_taken\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"winnow/trait.Parser.html#method.with_taken\" class=\"fn\">with_taken</a>(self) -&gt; <a class=\"struct\" href=\"winnow/combinator/struct.WithTaken.html\" title=\"struct winnow::combinator::WithTaken\">WithTaken</a>&lt;Self, I, O, E&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    I: <a class=\"trait\" href=\"winnow/stream/trait.Stream.html\" title=\"trait winnow::stream::Stream\">Stream</a>,</div></h4></section></summary><div class='docblock'>Produce the consumed input with the output <a href=\"winnow/trait.Parser.html#method.with_taken\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.with_recognized\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/winnow/parser.rs.html#335-341\">source</a><a href=\"#method.with_recognized\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"winnow/trait.Parser.html#method.with_recognized\" class=\"fn\">with_recognized</a>(self) -&gt; <a class=\"struct\" href=\"winnow/combinator/struct.WithTaken.html\" title=\"struct winnow::combinator::WithTaken\">WithTaken</a>&lt;Self, I, O, E&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    I: <a class=\"trait\" href=\"winnow/stream/trait.Stream.html\" title=\"trait winnow::stream::Stream\">Stream</a>,</div></h4></section></summary><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated since 0.6.14: Replaced with <code>Parser::with_taken</code></span></div></span><div class='docblock'>Replaced with <a href=\"winnow/trait.Parser.html#method.with_taken\" title=\"method winnow::Parser::with_taken\"><code>Parser::with_taken</code></a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.map\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/winnow/parser.rs.html#436-442\">source</a><a href=\"#method.map\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"winnow/trait.Parser.html#method.map\" class=\"fn\">map</a>&lt;G, O2&gt;(self, map: G) -&gt; <a class=\"struct\" href=\"winnow/combinator/struct.Map.html\" title=\"struct winnow::combinator::Map\">Map</a>&lt;Self, G, I, O, O2, E&gt;<div class=\"where\">where\n    G: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(O) -&gt; O2,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Maps a function over the output of a parser <a href=\"winnow/trait.Parser.html#method.map\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_map\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/winnow/parser.rs.html#466-474\">source</a><a href=\"#method.try_map\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"winnow/trait.Parser.html#method.try_map\" class=\"fn\">try_map</a>&lt;G, O2, E2&gt;(self, map: G) -&gt; <a class=\"struct\" href=\"winnow/combinator/struct.TryMap.html\" title=\"struct winnow::combinator::TryMap\">TryMap</a>&lt;Self, G, I, O, O2, E, E2&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    G: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(O) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;O2, E2&gt;,\n    I: <a class=\"trait\" href=\"winnow/stream/trait.Stream.html\" title=\"trait winnow::stream::Stream\">Stream</a>,\n    E: <a class=\"trait\" href=\"winnow/error/trait.FromExternalError.html\" title=\"trait winnow::error::FromExternalError\">FromExternalError</a>&lt;I, E2&gt;,</div></h4></section></summary><div class='docblock'>Applies a function returning a <code>Result</code> over the output of a parser. <a href=\"winnow/trait.Parser.html#method.try_map\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.flat_map\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/winnow/parser.rs.html#544-551\">source</a><a href=\"#method.flat_map\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"winnow/trait.Parser.html#method.flat_map\" class=\"fn\">flat_map</a>&lt;G, H, O2&gt;(self, map: G) -&gt; <a class=\"struct\" href=\"winnow/combinator/struct.FlatMap.html\" title=\"struct winnow::combinator::FlatMap\">FlatMap</a>&lt;Self, G, H, I, O, O2, E&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    G: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(O) -&gt; H,\n    H: <a class=\"trait\" href=\"winnow/trait.Parser.html\" title=\"trait winnow::Parser\">Parser</a>&lt;I, O2, E&gt;,</div></h4></section></summary><div class='docblock'>Creates a parser from the output of this one <a href=\"winnow/trait.Parser.html#method.flat_map\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.context\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/winnow/parser.rs.html#652-660\">source</a><a href=\"#method.context\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"winnow/trait.Parser.html#method.context\" class=\"fn\">context</a>&lt;C&gt;(self, context: C) -&gt; <a class=\"struct\" href=\"winnow/combinator/struct.Context.html\" title=\"struct winnow::combinator::Context\">Context</a>&lt;Self, I, O, E, C&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    I: <a class=\"trait\" href=\"winnow/stream/trait.Stream.html\" title=\"trait winnow::stream::Stream\">Stream</a>,\n    E: <a class=\"trait\" href=\"winnow/error/trait.AddContext.html\" title=\"trait winnow::error::AddContext\">AddContext</a>&lt;I, C&gt;,\n    C: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h4></section></summary><div class='docblock'>If parsing fails, add context to the error <a href=\"winnow/trait.Parser.html#method.context\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.complete_err\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/winnow/parser.rs.html#678-683\">source</a><a href=\"#method.complete_err\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"winnow/trait.Parser.html#method.complete_err\" class=\"fn\">complete_err</a>(self) -&gt; <a class=\"struct\" href=\"winnow/combinator/struct.CompleteErr.html\" title=\"struct winnow::combinator::CompleteErr\">CompleteErr</a>&lt;Self&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Transforms <a href=\"winnow/error/enum.ErrMode.html#variant.Incomplete\" title=\"variant winnow::error::ErrMode::Incomplete\"><code>Incomplete</code></a> into <a href=\"winnow/error/enum.ErrMode.html#variant.Backtrack\" title=\"variant winnow::error::ErrMode::Backtrack\"><code>Backtrack</code></a> <a href=\"winnow/trait.Parser.html#method.complete_err\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.err_into\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/winnow/parser.rs.html#687-693\">source</a><a href=\"#method.err_into\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"winnow/trait.Parser.html#method.err_into\" class=\"fn\">err_into</a>&lt;E2&gt;(self) -&gt; <a class=\"struct\" href=\"winnow/combinator/struct.ErrInto.html\" title=\"struct winnow::combinator::ErrInto\">ErrInto</a>&lt;Self, I, O, E, E2&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,\n    E: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;E2&gt;,</div></h4></section></summary><div class='docblock'>Convert the parser’s error to another type using <a href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.From.html\" title=\"trait core::convert::From\"><code>std::convert::From</code></a></div></details></div></details>","Parser<I, (O, <I as Stream>::Slice), E>","winnow::combinator::parser::WithRecognized"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()