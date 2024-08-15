searchState.loadedDescShard("serde_wasm_bindgen", 0, "Crates.io docs.rs GitHub Sponsors\nA newtype that allows using any <code>JsValue</code> as a …\nA newtype that represents Serde errors as JavaScript …\nA <code>serde::Serializer</code> that converts supported Rust values …\nSerde expects <code>visit_byte_buf</code> to be called only in response …\nWe can’t take references to JS memory, so forwards to an …\nConverts a JavaScript string to a Rust <code>char</code>.\nHere we try to be compatible with <code>serde-json</code>, which means …\nSupported inputs:\nSupported inputs:\nIgnores any value without calling to the JS side even to …\nSupported inputs:\nForwards to deserializing newtype contents.\nDeserializes <code>undefined</code> or <code>null</code> into <code>None</code> and any other …\nSupported inputs:\nSupported inputs:\nForwards to <code>Self::deserialize_seq</code>.\nForwards to <code>Self::deserialize_tuple</code>.\nSupported inputs:\nSupported inputs:\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConverts <code>JsValue</code> into a Rust type.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreates a JSON compatible serializer. This uses null …\nCreates a JavaScript <code>Error</code> with a given message.\nCreates a new default <code>Serializer</code>.\nSerialization and deserialization functions that pass …\nSerializes <code>bytes</code> into a JS <code>Uint8Array</code> or a plain JS array.\nSet to <code>true</code> to serialize bytes into plain JavaScript …\nSerializes <code>char</code> into a JS string.\nSerializes <code>i128</code> into a <code>BigInt</code>.\nSerializes <code>i64</code> into a <code>BigInt</code> or a JS number.\nSet to <code>true</code> to serialize 64-bit numbers to JavaScript …\nSerializes Rust maps into JS <code>Map</code> or plain JS objects.\nSet to <code>true</code> to serialize maps into plain JavaScript …\nSet to <code>true</code> to serialize <code>()</code>, unit structs and <code>Option::None</code> …\nSerializes newtype structs as their inner values.\nSerializes newtype variants as their inner values.\nSerializes <code>None</code> into <code>undefined</code> or <code>null</code>.\nSerializes any Rust iterable as a JS Array.\nSerializes <code>Some(T)</code> as <code>T</code>.\nSerializes Rust typed structs into plain JS objects.\nSerializes Rust struct-like variants into …\nSerializes Rust tuples as JS arrays.\nSerializes Rust tuple structs as JS arrays.\nSerializes Rust tuple variants as …\nSerializes <code>u128</code> into a <code>BigInt</code>.\nSerializes <code>u64</code> into a <code>BigInt</code> or a JS number.\nSerializes <code>()</code> into <code>undefined</code> or <code>null</code>.\nSerializes unit structs into <code>undefined</code> or <code>null</code>.\nFor compatibility with serde-json, serializes unit …\nConverts a Rust value into a <code>JsValue</code>.\nDeserialize any <code>JsCast</code> value.\nSerialize any <code>JsCast</code> value.")