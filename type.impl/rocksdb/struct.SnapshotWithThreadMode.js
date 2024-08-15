(function() {var type_impls = {
"rocksdb":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Drop-for-SnapshotWithThreadMode%3C'a,+D%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rocksdb/snapshot.rs.html#258-264\">source</a><a href=\"#impl-Drop-for-SnapshotWithThreadMode%3C'a,+D%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, D: <a class=\"trait\" href=\"rocksdb/trait.DBAccess.html\" title=\"trait rocksdb::DBAccess\">DBAccess</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"rocksdb/struct.SnapshotWithThreadMode.html\" title=\"struct rocksdb::SnapshotWithThreadMode\">SnapshotWithThreadMode</a>&lt;'a, D&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.drop\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rocksdb/snapshot.rs.html#259-263\">source</a><a href=\"#method.drop\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.80.0/core/ops/drop/trait.Drop.html#tymethod.drop\" class=\"fn\">drop</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Executes the destructor for this type. <a href=\"https://doc.rust-lang.org/1.80.0/core/ops/drop/trait.Drop.html#tymethod.drop\">Read more</a></div></details></div></details>","Drop","rocksdb::snapshot::Snapshot"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SnapshotWithThreadMode%3C'a,+D%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rocksdb/snapshot.rs.html#44-256\">source</a><a href=\"#impl-SnapshotWithThreadMode%3C'a,+D%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, D: <a class=\"trait\" href=\"rocksdb/trait.DBAccess.html\" title=\"trait rocksdb::DBAccess\">DBAccess</a>&gt; <a class=\"struct\" href=\"rocksdb/struct.SnapshotWithThreadMode.html\" title=\"struct rocksdb::SnapshotWithThreadMode\">SnapshotWithThreadMode</a>&lt;'a, D&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/snapshot.rs.html#46-52\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.SnapshotWithThreadMode.html#tymethod.new\" class=\"fn\">new</a>(db: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.reference.html\">&amp;'a D</a>) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Creates a new <code>SnapshotWithThreadMode</code> of the database <code>db</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.iterator\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/snapshot.rs.html#55-58\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.SnapshotWithThreadMode.html#tymethod.iterator\" class=\"fn\">iterator</a>(\n    &amp;self,\n    mode: <a class=\"enum\" href=\"rocksdb/enum.IteratorMode.html\" title=\"enum rocksdb::IteratorMode\">IteratorMode</a>&lt;'_&gt;,\n) -&gt; <a class=\"struct\" href=\"rocksdb/struct.DBIteratorWithThreadMode.html\" title=\"struct rocksdb::DBIteratorWithThreadMode\">DBIteratorWithThreadMode</a>&lt;'a, D&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"DBIteratorWithThreadMode&lt;&#39;a, D&gt;\">ⓘ</a></h4></section></summary><div class=\"docblock\"><p>Creates an iterator over the data in this snapshot, using the default read options.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.iterator_cf\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/snapshot.rs.html#62-69\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.SnapshotWithThreadMode.html#tymethod.iterator_cf\" class=\"fn\">iterator_cf</a>(\n    &amp;self,\n    cf_handle: &amp;impl <a class=\"trait\" href=\"rocksdb/trait.AsColumnFamilyRef.html\" title=\"trait rocksdb::AsColumnFamilyRef\">AsColumnFamilyRef</a>,\n    mode: <a class=\"enum\" href=\"rocksdb/enum.IteratorMode.html\" title=\"enum rocksdb::IteratorMode\">IteratorMode</a>&lt;'_&gt;,\n) -&gt; <a class=\"struct\" href=\"rocksdb/struct.DBIteratorWithThreadMode.html\" title=\"struct rocksdb::DBIteratorWithThreadMode\">DBIteratorWithThreadMode</a>&lt;'_, D&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"DBIteratorWithThreadMode&lt;&#39;_, D&gt;\">ⓘ</a></h4></section></summary><div class=\"docblock\"><p>Creates an iterator over the data in this snapshot under the given column family, using\nthe default read options.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.iterator_opt\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/snapshot.rs.html#72-79\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.SnapshotWithThreadMode.html#tymethod.iterator_opt\" class=\"fn\">iterator_opt</a>(\n    &amp;self,\n    mode: <a class=\"enum\" href=\"rocksdb/enum.IteratorMode.html\" title=\"enum rocksdb::IteratorMode\">IteratorMode</a>&lt;'_&gt;,\n    readopts: <a class=\"struct\" href=\"rocksdb/struct.ReadOptions.html\" title=\"struct rocksdb::ReadOptions\">ReadOptions</a>,\n) -&gt; <a class=\"struct\" href=\"rocksdb/struct.DBIteratorWithThreadMode.html\" title=\"struct rocksdb::DBIteratorWithThreadMode\">DBIteratorWithThreadMode</a>&lt;'a, D&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"DBIteratorWithThreadMode&lt;&#39;a, D&gt;\">ⓘ</a></h4></section></summary><div class=\"docblock\"><p>Creates an iterator over the data in this snapshot, using the given read options.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.iterator_cf_opt\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/snapshot.rs.html#83-91\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.SnapshotWithThreadMode.html#tymethod.iterator_cf_opt\" class=\"fn\">iterator_cf_opt</a>(\n    &amp;self,\n    cf_handle: &amp;impl <a class=\"trait\" href=\"rocksdb/trait.AsColumnFamilyRef.html\" title=\"trait rocksdb::AsColumnFamilyRef\">AsColumnFamilyRef</a>,\n    readopts: <a class=\"struct\" href=\"rocksdb/struct.ReadOptions.html\" title=\"struct rocksdb::ReadOptions\">ReadOptions</a>,\n    mode: <a class=\"enum\" href=\"rocksdb/enum.IteratorMode.html\" title=\"enum rocksdb::IteratorMode\">IteratorMode</a>&lt;'_&gt;,\n) -&gt; <a class=\"struct\" href=\"rocksdb/struct.DBIteratorWithThreadMode.html\" title=\"struct rocksdb::DBIteratorWithThreadMode\">DBIteratorWithThreadMode</a>&lt;'_, D&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"DBIteratorWithThreadMode&lt;&#39;_, D&gt;\">ⓘ</a></h4></section></summary><div class=\"docblock\"><p>Creates an iterator over the data in this snapshot under the given column family, using\nthe given read options.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.raw_iterator\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/snapshot.rs.html#94-97\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.SnapshotWithThreadMode.html#tymethod.raw_iterator\" class=\"fn\">raw_iterator</a>(&amp;self) -&gt; <a class=\"struct\" href=\"rocksdb/struct.DBRawIteratorWithThreadMode.html\" title=\"struct rocksdb::DBRawIteratorWithThreadMode\">DBRawIteratorWithThreadMode</a>&lt;'_, D&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a raw iterator over the data in this snapshot, using the default read options.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.raw_iterator_cf\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/snapshot.rs.html#101-107\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.SnapshotWithThreadMode.html#tymethod.raw_iterator_cf\" class=\"fn\">raw_iterator_cf</a>(\n    &amp;self,\n    cf_handle: &amp;impl <a class=\"trait\" href=\"rocksdb/trait.AsColumnFamilyRef.html\" title=\"trait rocksdb::AsColumnFamilyRef\">AsColumnFamilyRef</a>,\n) -&gt; <a class=\"struct\" href=\"rocksdb/struct.DBRawIteratorWithThreadMode.html\" title=\"struct rocksdb::DBRawIteratorWithThreadMode\">DBRawIteratorWithThreadMode</a>&lt;'_, D&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a raw iterator over the data in this snapshot under the given column family, using\nthe default read options.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.raw_iterator_opt\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/snapshot.rs.html#110-113\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.SnapshotWithThreadMode.html#tymethod.raw_iterator_opt\" class=\"fn\">raw_iterator_opt</a>(\n    &amp;self,\n    readopts: <a class=\"struct\" href=\"rocksdb/struct.ReadOptions.html\" title=\"struct rocksdb::ReadOptions\">ReadOptions</a>,\n) -&gt; <a class=\"struct\" href=\"rocksdb/struct.DBRawIteratorWithThreadMode.html\" title=\"struct rocksdb::DBRawIteratorWithThreadMode\">DBRawIteratorWithThreadMode</a>&lt;'_, D&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a raw iterator over the data in this snapshot, using the given read options.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.raw_iterator_cf_opt\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/snapshot.rs.html#117-124\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.SnapshotWithThreadMode.html#tymethod.raw_iterator_cf_opt\" class=\"fn\">raw_iterator_cf_opt</a>(\n    &amp;self,\n    cf_handle: &amp;impl <a class=\"trait\" href=\"rocksdb/trait.AsColumnFamilyRef.html\" title=\"trait rocksdb::AsColumnFamilyRef\">AsColumnFamilyRef</a>,\n    readopts: <a class=\"struct\" href=\"rocksdb/struct.ReadOptions.html\" title=\"struct rocksdb::ReadOptions\">ReadOptions</a>,\n) -&gt; <a class=\"struct\" href=\"rocksdb/struct.DBRawIteratorWithThreadMode.html\" title=\"struct rocksdb::DBRawIteratorWithThreadMode\">DBRawIteratorWithThreadMode</a>&lt;'_, D&gt;</h4></section></summary><div class=\"docblock\"><p>Creates a raw iterator over the data in this snapshot under the given column family, using\nthe given read options.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/snapshot.rs.html#127-130\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.SnapshotWithThreadMode.html#tymethod.get\" class=\"fn\">get</a>&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>]&gt;&gt;(&amp;self, key: K) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>&gt;&gt;, <a class=\"struct\" href=\"rocksdb/struct.Error.html\" title=\"struct rocksdb::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the bytes associated with a key value with default read options.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_cf\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/snapshot.rs.html#134-141\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.SnapshotWithThreadMode.html#tymethod.get_cf\" class=\"fn\">get_cf</a>&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>]&gt;&gt;(\n    &amp;self,\n    cf: &amp;impl <a class=\"trait\" href=\"rocksdb/trait.AsColumnFamilyRef.html\" title=\"trait rocksdb::AsColumnFamilyRef\">AsColumnFamilyRef</a>,\n    key: K,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>&gt;&gt;, <a class=\"struct\" href=\"rocksdb/struct.Error.html\" title=\"struct rocksdb::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the bytes associated with a key value and given column family with default read\noptions.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_opt\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/snapshot.rs.html#144-151\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.SnapshotWithThreadMode.html#tymethod.get_opt\" class=\"fn\">get_opt</a>&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>]&gt;&gt;(\n    &amp;self,\n    key: K,\n    readopts: <a class=\"struct\" href=\"rocksdb/struct.ReadOptions.html\" title=\"struct rocksdb::ReadOptions\">ReadOptions</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>&gt;&gt;, <a class=\"struct\" href=\"rocksdb/struct.Error.html\" title=\"struct rocksdb::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the bytes associated with a key value and given read options.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_cf_opt\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/snapshot.rs.html#154-162\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.SnapshotWithThreadMode.html#tymethod.get_cf_opt\" class=\"fn\">get_cf_opt</a>&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>]&gt;&gt;(\n    &amp;self,\n    cf: &amp;impl <a class=\"trait\" href=\"rocksdb/trait.AsColumnFamilyRef.html\" title=\"trait rocksdb::AsColumnFamilyRef\">AsColumnFamilyRef</a>,\n    key: K,\n    readopts: <a class=\"struct\" href=\"rocksdb/struct.ReadOptions.html\" title=\"struct rocksdb::ReadOptions\">ReadOptions</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>&gt;&gt;, <a class=\"struct\" href=\"rocksdb/struct.Error.html\" title=\"struct rocksdb::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the bytes associated with a key value, given column family and read options.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_pinned\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/snapshot.rs.html#167-170\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.SnapshotWithThreadMode.html#tymethod.get_pinned\" class=\"fn\">get_pinned</a>&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>]&gt;&gt;(\n    &amp;self,\n    key: K,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"rocksdb/struct.DBPinnableSlice.html\" title=\"struct rocksdb::DBPinnableSlice\">DBPinnableSlice</a>&lt;'_&gt;&gt;, <a class=\"struct\" href=\"rocksdb/struct.Error.html\" title=\"struct rocksdb::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Return the value associated with a key using RocksDB’s PinnableSlice\nso as to avoid unnecessary memory copy. Similar to get_pinned_opt but\nleverages default options.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_pinned_cf\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/snapshot.rs.html#175-182\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.SnapshotWithThreadMode.html#tymethod.get_pinned_cf\" class=\"fn\">get_pinned_cf</a>&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>]&gt;&gt;(\n    &amp;self,\n    cf: &amp;impl <a class=\"trait\" href=\"rocksdb/trait.AsColumnFamilyRef.html\" title=\"trait rocksdb::AsColumnFamilyRef\">AsColumnFamilyRef</a>,\n    key: K,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"rocksdb/struct.DBPinnableSlice.html\" title=\"struct rocksdb::DBPinnableSlice\">DBPinnableSlice</a>&lt;'_&gt;&gt;, <a class=\"struct\" href=\"rocksdb/struct.Error.html\" title=\"struct rocksdb::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Return the value associated with a key using RocksDB’s PinnableSlice\nso as to avoid unnecessary memory copy. Similar to get_pinned_cf_opt but\nleverages default options.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_pinned_opt\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/snapshot.rs.html#186-193\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.SnapshotWithThreadMode.html#tymethod.get_pinned_opt\" class=\"fn\">get_pinned_opt</a>&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>]&gt;&gt;(\n    &amp;self,\n    key: K,\n    readopts: <a class=\"struct\" href=\"rocksdb/struct.ReadOptions.html\" title=\"struct rocksdb::ReadOptions\">ReadOptions</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"rocksdb/struct.DBPinnableSlice.html\" title=\"struct rocksdb::DBPinnableSlice\">DBPinnableSlice</a>&lt;'_&gt;&gt;, <a class=\"struct\" href=\"rocksdb/struct.Error.html\" title=\"struct rocksdb::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Return the value associated with a key using RocksDB’s PinnableSlice\nso as to avoid unnecessary memory copy.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_pinned_cf_opt\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/snapshot.rs.html#198-206\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.SnapshotWithThreadMode.html#tymethod.get_pinned_cf_opt\" class=\"fn\">get_pinned_cf_opt</a>&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>]&gt;&gt;(\n    &amp;self,\n    cf: &amp;impl <a class=\"trait\" href=\"rocksdb/trait.AsColumnFamilyRef.html\" title=\"trait rocksdb::AsColumnFamilyRef\">AsColumnFamilyRef</a>,\n    key: K,\n    readopts: <a class=\"struct\" href=\"rocksdb/struct.ReadOptions.html\" title=\"struct rocksdb::ReadOptions\">ReadOptions</a>,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"rocksdb/struct.DBPinnableSlice.html\" title=\"struct rocksdb::DBPinnableSlice\">DBPinnableSlice</a>&lt;'_&gt;&gt;, <a class=\"struct\" href=\"rocksdb/struct.Error.html\" title=\"struct rocksdb::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Return the value associated with a key using RocksDB’s PinnableSlice\nso as to avoid unnecessary memory copy. Similar to get_pinned_opt but\nallows specifying ColumnFamily.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.multi_get\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/snapshot.rs.html#209-215\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.SnapshotWithThreadMode.html#tymethod.multi_get\" class=\"fn\">multi_get</a>&lt;K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>]&gt;, I&gt;(\n    &amp;self,\n    keys: I,\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>&gt;&gt;, <a class=\"struct\" href=\"rocksdb/struct.Error.html\" title=\"struct rocksdb::Error\">Error</a>&gt;&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = K&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Returns the bytes associated with the given key values and default read options.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.multi_get_cf\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/snapshot.rs.html#218-226\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.SnapshotWithThreadMode.html#tymethod.multi_get_cf\" class=\"fn\">multi_get_cf</a>&lt;'b, K, I, W&gt;(\n    &amp;self,\n    keys_cf: I,\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>&gt;&gt;, <a class=\"struct\" href=\"rocksdb/struct.Error.html\" title=\"struct rocksdb::Error\">Error</a>&gt;&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>]&gt;,\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = (<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.reference.html\">&amp;'b W</a>, K)&gt;,\n    W: <a class=\"trait\" href=\"rocksdb/trait.AsColumnFamilyRef.html\" title=\"trait rocksdb::AsColumnFamilyRef\">AsColumnFamilyRef</a> + 'b,</div></h4></section></summary><div class=\"docblock\"><p>Returns the bytes associated with the given key values and default read options.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.multi_get_opt\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/snapshot.rs.html#229-240\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.SnapshotWithThreadMode.html#tymethod.multi_get_opt\" class=\"fn\">multi_get_opt</a>&lt;K, I&gt;(\n    &amp;self,\n    keys: I,\n    readopts: <a class=\"struct\" href=\"rocksdb/struct.ReadOptions.html\" title=\"struct rocksdb::ReadOptions\">ReadOptions</a>,\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>&gt;&gt;, <a class=\"struct\" href=\"rocksdb/struct.Error.html\" title=\"struct rocksdb::Error\">Error</a>&gt;&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>]&gt;,\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = K&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Returns the bytes associated with the given key values and given read options.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.multi_get_cf_opt\" class=\"method\"><a class=\"src rightside\" href=\"src/rocksdb/snapshot.rs.html#243-255\">source</a><h4 class=\"code-header\">pub fn <a href=\"rocksdb/struct.SnapshotWithThreadMode.html#tymethod.multi_get_cf_opt\" class=\"fn\">multi_get_cf_opt</a>&lt;'b, K, I, W&gt;(\n    &amp;self,\n    keys_cf: I,\n    readopts: <a class=\"struct\" href=\"rocksdb/struct.ReadOptions.html\" title=\"struct rocksdb::ReadOptions\">ReadOptions</a>,\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.80.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.80.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>&gt;&gt;, <a class=\"struct\" href=\"rocksdb/struct.Error.html\" title=\"struct rocksdb::Error\">Error</a>&gt;&gt;<div class=\"where\">where\n    K: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>]&gt;,\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = (<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.reference.html\">&amp;'b W</a>, K)&gt;,\n    W: <a class=\"trait\" href=\"rocksdb/trait.AsColumnFamilyRef.html\" title=\"trait rocksdb::AsColumnFamilyRef\">AsColumnFamilyRef</a> + 'b,</div></h4></section></summary><div class=\"docblock\"><p>Returns the bytes associated with the given key values, given column family and read options.</p>\n</div></details></div></details>",0,"rocksdb::snapshot::Snapshot"],["<section id=\"impl-Send-for-SnapshotWithThreadMode%3C'a,+D%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rocksdb/snapshot.rs.html#268\">source</a><a href=\"#impl-Send-for-SnapshotWithThreadMode%3C'a,+D%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, D: <a class=\"trait\" href=\"rocksdb/trait.DBAccess.html\" title=\"trait rocksdb::DBAccess\">DBAccess</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"rocksdb/struct.SnapshotWithThreadMode.html\" title=\"struct rocksdb::SnapshotWithThreadMode\">SnapshotWithThreadMode</a>&lt;'a, D&gt;</h3></section><div class=\"docblock\"><p><code>Send</code> and <code>Sync</code> implementations for <code>SnapshotWithThreadMode</code> are safe, because <code>SnapshotWithThreadMode</code> is\nimmutable and can be safely shared between threads.</p>\n</div>","Send","rocksdb::snapshot::Snapshot"],["<section id=\"impl-Sync-for-SnapshotWithThreadMode%3C'a,+D%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rocksdb/snapshot.rs.html#269\">source</a><a href=\"#impl-Sync-for-SnapshotWithThreadMode%3C'a,+D%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, D: <a class=\"trait\" href=\"rocksdb/trait.DBAccess.html\" title=\"trait rocksdb::DBAccess\">DBAccess</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"rocksdb/struct.SnapshotWithThreadMode.html\" title=\"struct rocksdb::SnapshotWithThreadMode\">SnapshotWithThreadMode</a>&lt;'a, D&gt;</h3></section>","Sync","rocksdb::snapshot::Snapshot"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()