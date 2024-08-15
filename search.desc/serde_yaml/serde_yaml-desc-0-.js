searchState.loadedDescShard("serde_yaml", 0, "github crates-io docs-rs\nRepresents a YAML boolean.\nA structure that deserializes YAML into Rust values.\nContains the error value\nAn error that happened serializing or deserializing YAML …\nA type that can be used to index into a <code>serde_yaml::Value</code>. …\nThe input location that an error occured.\nA YAML mapping in which the keys and values are both …\nRepresents a YAML mapping in which the keys and values are …\nRepresents a YAML null value.\nRepresents a YAML number, whether integer or floating …\nRepresents a YAML numerical value, whether integer or …\nContains the success value\nAlias for a <code>Result</code> with the error type <code>serde_yaml::Error</code>.\nA YAML sequence in which the elements are <code>serde_yaml::Value</code>…\nRepresents a YAML sequence in which the elements are …\nA structure for serializing Rust values into YAML.\nRepresents a YAML string.\nA representation of YAML’s <code>!Tag</code> syntax, used for enums.\nRepresents any valid YAML value.\nThe column of the error\nCompare <code>&amp;str</code> with YAML value\nCompare YAML value with bool\nCompare <code>str</code> with YAML value\nCompare YAML value with String\nCalls <code>.flush()</code> on the underlying <code>io::Write</code> object.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert a slice to <code>Value</code>\nConvert boolean to <code>Value</code>\nConvert a <code>Vec</code> to <code>Value</code>\nReturns the argument unchanged.\nConvert <code>String</code> to <code>Value</code>\nConvert string slice to <code>Value</code>\nConvert map (with string keys) to <code>Value</code>\nConvert copy-on-write string to <code>Value</code>\nConvert an iteratable type to a YAML sequence\nDeserialize an instance of type <code>T</code> from an IO stream of …\nCreates a YAML deserializer from an <code>io::Read</code>.\nDeserialize an instance of type <code>T</code> from bytes of YAML text.\nCreates a YAML deserializer from a <code>&amp;[u8]</code>.\nDeserialize an instance of type <code>T</code> from a string of YAML …\nCreates a YAML deserializer from a <code>&amp;str</code>.\nInterpret a <code>serde_yaml::Value</code> as an instance of type <code>T</code>.\nThe byte index of the error\nIndex into a <code>serde_yaml::Value</code> using the syntax <code>value[0]</code> or\nWrite into a <code>serde_yaml::Value</code> using the syntax …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nUnwrap the underlying <code>io::Write</code> object from the <code>Serializer</code>.\nThe line of the error\nReturns the Location from the error if one exists.\nA YAML mapping and its iterator types.\nCreates a new YAML serializer.\nSerialize the given data structure as a String of YAML.\nConvert a <code>T</code> into <code>serde_yaml::Value</code> which is an enum that …\nSerialize the given data structure as YAML into the IO …\nThe Value enum, a loosely typed way of representing any …\nCustomizations to use with Serde’s <code>#[serde(with = …)]</code> …\nEntry for an existing key-value pair or a vacant location …\nA type that can be used to index into a <code>serde_yaml::Mapping</code>…\nIterator over <code>serde_yaml::Mapping</code> by value.\nIterator of the keys of a <code>serde_yaml::Mapping</code>.\nIterator of the values of a <code>serde_yaml::Mapping</code>.\nIterator over <code>&amp;serde_yaml::Mapping</code>.\nIterator over <code>&amp;mut serde_yaml::Mapping</code>.\nIterator of the keys of a <code>&amp;serde_yaml::Mapping</code>.\nA YAML mapping in which the keys and values are both …\nExisting slot with equivalent key.\nA view into an occupied entry in a <code>Mapping</code>. It is part of …\nVacant slot (no equivalent key in the map).\nA view into a vacant entry in a <code>Mapping</code>. It is part of the …\nIterator of the values of a <code>&amp;serde_yaml::Mapping</code>.\nIterator of the values of a <code>&amp;mut serde_yaml::Mapping</code>.\nProvides in-place mutable access to an occupied entry …\nReturns the maximum number of key-value pairs the map can …\nClears the map of all key-value pairs.\nChecks if the map contains the given key.\nGets the given key’s corresponding entry in the map for …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGets a reference to the value in the entry.\nReturns the value corresponding to the key in the map.\nGets a mutable reference to the value in the entry.\nReturns the mutable reference corresponding to the key in …\nSets the value of the entry with the <code>OccupiedEntry</code>’s …\nSets the value of the entry with the VacantEntry’s key, …\nInserts a key-value pair into the map. If the key already …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTakes ownership of the key, leaving the entry vacant.\nReturn an owning iterator over the keys of the map.\nConverts the entry into a mutable reference to its value.\nReturn an owning iterator over the values of the map.\nReturns whether the map is currently empty.\nReturns a double-ended iterator visiting all key-value …\nReturns a double-ended iterator visiting all key-value …\nReturns a reference to this entry’s key.\nGets a reference to the key in the entry.\nGets a reference to the key that would be used when …\nReturn an iterator over the keys of the map.\nReturns the number of key-value pairs in the map.\nCreates an empty YAML map.\nEnsures a value is in the entry by inserting the default …\nEnsures a value is in the entry by inserting the result of …\nTakes the value of the entry out of the map, and returns …\nRemoves and returns the value corresponding to the key …\nRemove and return the key, value pair stored in the map …\nRemove and return the key-value pair.\nReserves capacity for at least <code>additional</code> more elements to …\nScan through each key-value pair in the map and keep those …\nRemoves and returns the value corresponding to the key …\nRemove and return the key-value pair.\nShrinks the capacity of the map as much as possible. It …\nRemoves and returns the value corresponding to the key …\nRemove and return the key-value pair.\nReturn an iterator over the values of the map.\nReturn an iterator over mutable references to the values …\nCreates an empty YAML map with the given initial capacity.\nRepresents a YAML boolean.\nA type that can be used to index into a <code>serde_yaml::Value</code>. …\nA YAML mapping in which the keys and values are both …\nRepresents a YAML mapping in which the keys and values are …\nRepresents a YAML null value.\nRepresents a YAML number, whether integer or floating …\nRepresents a YAML numerical value, whether integer or …\nA YAML sequence in which the elements are <code>serde_yaml::Value</code>…\nRepresents a YAML sequence in which the elements are …\nSerializer whose output is a <code>Value</code>.\nRepresents a YAML string.\nA representation of YAML’s <code>!Tag</code> syntax, used for enums.\nA representation of YAML’s <code>!Tag</code> syntax, used for enums.\nA <code>Tag</code> + <code>Value</code> representing a tagged YAML scalar, sequence, …\nRepresents any valid YAML value.\nPerforms merging of <code>&lt;&lt;</code> keys into the surrounding mapping.\nIf the <code>Value</code> is a Boolean, returns the associated bool. …\nRepresents the number as f64 if possible. Returns None …\nIf the <code>Value</code> is a number, represent it as f64 if possible. …\nIf the <code>Number</code> is an integer, represent it as i64 if …\nIf the <code>Value</code> is an integer, represent it as i64 if …\nIf the <code>Value</code> is a mapping, return a reference to it if …\nIf the <code>Value</code> is a mapping, return a reference to it if …\nIf the <code>Value</code> is a Null, returns (). Returns None otherwise.\nIf the <code>Value</code> is a sequence, return a reference to it if …\nIf the <code>Value</code> is a sequence, return a mutable reference to …\nIf the <code>Value</code> is a String, returns the associated str. …\nIf the <code>Number</code> is an integer, represent it as u64 if …\nIf the <code>Value</code> is an integer, represent it as u64 if …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nInterpret a <code>serde_yaml::Value</code> as an instance of type <code>T</code>.\nIndex into a YAML sequence or map. A string index can be …\nIndex into a YAML sequence or map. A string index can be …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns true if the <code>Value</code> is a Boolean. Returns false …\nReturns true if the <code>Number</code> can be represented by f64.\nReturns true if the <code>Value</code> is a number that can be …\nReturns true if this number is neither infinite nor NaN.\nReturns true if the <code>Number</code> is an integer between <code>i64::MIN</code> …\nReturns true if the <code>Value</code> is an integer between <code>i64::MIN</code> …\nReturns true if this value is positive infinity or …\nReturns true if the <code>Value</code> is a mapping. Returns false …\nReturns true if this value is NaN and false otherwise.\nReturns true if the <code>Value</code> is a Null. Returns false …\nReturns true if the <code>Value</code> is a Number. Returns false …\nReturns true if the <code>Value</code> is a sequence. Returns false …\nReturns true if the <code>Value</code> is a String. Returns false …\nReturns true if the <code>Number</code> is an integer between zero and …\nReturns true if the <code>Value</code> is an integer between <code>u64::MIN</code> …\nCreate tag.\nConvert a <code>T</code> into <code>serde_yaml::Value</code> which is an enum that …\nSerialize/deserialize an enum using a YAML map containing …\nApply <code>singleton_map</code> to <em>all</em> enums contained within the data …")