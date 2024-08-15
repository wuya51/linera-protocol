searchState.loadedDescShard("protobuf", 0, "Library to read and write protocol buffers data\nCached size field used in generated code. It is always …\nanything that can be cleared\nBuffered read with handy utilities.\nBuffered write with handy utilities\n32-bit unknown\n32-bit unknown (e. g. <code>fixed32</code> or <code>float</code>)\n64-bit unknown\n64-bit unknown (e. g. <code>fixed64</code> or <code>double</code>)\nLength-delimited unknown\nLength-delimited unknown (e. g. <code>message</code> or <code>string</code>)\nTrait implemented for all generated structs for protobuf …\nTrait implemented by all protobuf enum types.\nWrapper around vector to avoid deallocations on clear.\nLike <code>Option&lt;T&gt;</code>, but keeps the actual element on <code>clear</code>.\nLike <code>Option&lt;Box&lt;T&gt;&gt;</code>, but keeps the actual element on <code>clear</code>.\nHold “unknown” fields in parsed message.\nIterator over <code>UnknownFields</code>\nUnknown value.\nReference to unknown value.\nField unknown values.\nIterator over unknown values\nprotobuf crate version\nThis symbol can be referenced to assert that proper …\nVarint unknown\nVarint unknown (e. g. <code>int32</code> or <code>bool</code>)\nAdd unknown fixed 32-bit\nAdd unknown fixed 64-bit\nAdd unknown length delimited\nAdd unknown value\nAdd unknown value\nAdd unknown varint\nView self as <code>Any</code>.\nView self as mutable <code>Any</code>.\nView self as mutable <code>Any</code>.\nView data as mutable <code>Option</code>.\nView data as mutable reference option.\nGet data a mutable raw pointer.\nView data as mutable slice.\nGet data as raw pointer.\nView data as <code>Option</code>.\nView data as reference option.\nView data as slice.\n<code>CodedOutputStream</code> which writes directly to bytes.\nHow many bytes until current limit\nReturn current capacity.\nCheck we are at EOF.\nCheck if EOF is reached.\nCheck if all required fields of this object are …\nCheck if all required fields of this object are …\nClear this make, make it equivalent to newly created …\nClear.\nClear this object. Note, contained object destructor is …\nClear this object, but do not call destructor of …\nCompute and cache size of this message and all nested …\nTrue iff this container contains given element.\nReturn a pointer to default immutable message with static …\nGenerated file from <code>google/protobuf/descriptor.proto</code>\nMessage descriptor for this message, used for reflection.\nGet enum value descriptor.\nGet enum value descriptor.\nGet message descriptor for message type.\nGet message descriptor for message type.\nGet enum descriptor.\nGet enum descriptor.\nGet enum descriptor by type.\nGet enum descriptor by type.\nAre we at EOF?\nProtobuf error type\nUtilities to support “extension” fields.\nThe map.\n32-bit unknowns\n64-bit unknowns\nFlush the buffer to underlying write\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate from <code>BufRead</code>.\nRead from byte slice\nTry to create an enum from <code>i32</code> value. Return <code>None</code> if value …\nConstruct <code>SingularField</code> from <code>Option</code>.\nConstruct <code>SingularPtrField</code> from optional.\nCopy slice data to <code>RepeatedField</code>\nCopy slice data to <code>RepeatedField</code>\nCreate a contained with data from given vec.\nGet cached size\nFind unknown field by number\nGet size previously computed by <code>compute_size</code>.\nGet data as mutable reference. Panics if empty.\nGet data as reference. Panics if empty.\nAs ref\nGet a reference to unknown fields.\nView all but last elements of this container.\nInsert an element at specified position.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConvert boxed self to boxed <code>Any</code>.\nConvert boxed self to boxed <code>Any</code>.\nInto owned iterator.\nConvert this object into <code>Option</code>.\nConvert into <code>Option&lt;T&gt;</code>.\nConvert data into vec.\nTrue iff all required fields are initialized. Always …\nTrue iff this object contains no data.\nTrue iff this object contains no data.\nTrue iff this object contains data.\nTrue iff this object contains data.\nImmutable data iterator.\nView as iterator over references.\nView data as iterator.\nIterate over unknown values\nIterate over all unknowns\nMutable data iterator.\nJSON serialization and deserialization.\nLast element of this container.\nMutable last element of this container.\nLazily initialized data. Used in generated code.\nReturn number of elements in this container.\nLength-delimited unknowns\nApply a function to contained element and store result in …\nApply given function to contained data to construct …\nUpdate this message object with fields read from given …\nUpdate this message object with fields read from given …\nUpdate this message object with fields read from given …\nRead message, do not check if message is initialized\nView as iterator over mutable references.\nView data as mutable iterator.\nGet a mutable reference to unknown fields.\nCreate an empty message object.\nWrap a <code>Read</code>.\nConstruct from given <code>Write</code>.\nCreate new empty container.\nEmpty unknown fields\nConstruct a <code>SingularField</code> with no data.\nConstruct an empty <code>SingularPtrField</code>.\nParse message from stream.\nParse message from stream.\nParse message from byte array.\nParse message from byte array.\nParse message from byte array.\nParse message from reader. Parse stops on EOF or when …\nParse message from reader. Parse stops on EOF or when …\nParse message from reader. Parse stops on EOF or when …\nParse length-delimited message from stream.\nParse length-delimited message from bytes.\nParse length-delimited message from <code>Read</code>.\nGenerated file from <code>google/protobuf/compiler/plugin.proto</code>\nPop last element.\nRestore previous limit.\nHow many bytes processed\nPush an element to the end.\nPush default value. This operation could be faster than …\nPush new limit, return previous limit.\nRead bytes into given <code>buf</code>.\nRead <code>bool</code>\nRead <code>bytes</code> field, length delimited\nRead <code>bytes</code> field, length delimited\nRead <code>double</code>\nRead <code>enum</code> as <code>ProtobufEnum</code>\nRead <code>fixed32</code>\nRead <code>fixed64</code>\nRead <code>float</code>\nRead <code>int32</code>\nRead <code>int64</code>\nRead message\nRead one byte\nRead exact number of bytes\nRead raw bytes into the supplied vector.  The vector will …\nRead little-endian 32-bit integer\nRead little-endian 64-bit integer\nRead varint\nRead varint\nRead repeated packed <code>bool</code>\nRead <code>repeated</code> packed <code>double</code>\nRead repeated packed <code>enum</code> into <code>ProtobufEnum</code>\nRead repeated packed <code>fixed32</code>\nRead repeated packed <code>fixed64</code>\nRead <code>repeated</code> packed <code>float</code>\nRead repeated packed <code>int32</code>\nRead <code>repeated</code> packed <code>int64</code>\nRead repeated packed <code>sfixed32</code>\nRead repeated packed <code>sfixed64</code>\nRead repeated packed <code>sint32</code>\nRead repeated packed <code>sint64</code>\nRead repeated packed <code>uint32</code>\nRead repeated packed <code>uint64</code>\nRead <code>sfixed32</code>\nRead <code>sfixed64</code>\nRead <code>sint32</code>\nRead <code>sint64</code>\nRead <code>string</code> field, length delimited\nRead <code>string</code> field, length delimited\nRead tag\nRead tag, return it is pair (field number, wire type)\nRead <code>uint32</code>\nRead <code>uint64</code>\nRead <code>UnknownValue</code>\nReflection implementation for protobuf types.\nRemove an element from specified position.\nRemove unknown field by number\nRetains only the elements specified by the predicate.\nReverse in place.\nFunctions used by generated protobuf code. Should not be …\nGenerated file from <code>rustproto.proto</code>\nSet cached size\nInitialize this object with default value. This operation …\nInitialize this object with default value. This operation …\nSet the recursion limit.\nConstruct unknown value from <code>sint32</code> value.\nConstruct unknown value from <code>sint64</code> value.\nSkip field\nSkip exact number of bytes\nGet subslice of this container.\nGet slice from given index.\nGet mutable slice from given index.\nGet mutable subslice of this container.\nGet slice to given index.\nGet mutable slice to given index.\nConstruct this object from given value.\nConstruct <code>SingularPtrField</code> from given object.\nSort elements with given comparator.\nView this container as two slices split at given index.\nView this container as two mutable slices split at given …\nView all but first elements of this container.\nReturn data as option, clear this object.\nTake data as option, leaving this object empty.\nProtobuf “text format” implementation.\nCopy this data into new vec.\nTruncate at specified length.\nGet type id for downcasting.\nGet type id for downcasting.\nImplementations of <code>ProtobufType</code> for all types.\nUnwrap data, panic if not set.\nTake the data. Panics if empty\nUnwrap data as mutable reference.\nUnwrap data or return given default value.\nTake the data or return supplied default element if empty.\nGet contained data, consume self. Return default value for …\nGet contained data, consume self. Return default value for …\nUnwrap data or return given default value.\nTake the data or return supplied default element if empty.\nUnwrap data as reference.\nGet enum <code>i32</code> value.\nGet all enum values for enum type.\nGet all enum values for enum type.\nVarint unknowns\n<code>CodedOutputStream</code> which writes directly to <code>Vec&lt;u8&gt;</code>.\nGenerated code for “well known types”\nSerialization constants.\nWire-type to serialize this unknown\nWire type for this unknown\nWrite <code>bool</code> field\nWrite <code>bool</code>\nWrite <code>bytes</code> field\nWrite bytes\nWrite <code>double</code> field\nWrite <code>double</code>\nWrite <code>enum</code> field\nWrite <code>enum</code>\nWrite <code>enum</code> field\nWrite <code>enum</code>\nWrite <code>fixed32</code> field\nWrite <code>fixed32</code>\nWrite <code>fixed64</code> field\nWrite <code>fixed64</code>\nWrite <code>float</code> field\nWrite <code>float</code>\nWrite <code>int32</code> field\nWrite varint\nWrite <code>int64</code> field\nWrite varint\nWrite the message to the stream prepending the message …\nWrite the message to the stream prepending the message …\nWrite the message to the bytes vec, prepend the message …\nWrite the message to the bytes vec, prepend the message …\nWrite the message to the vec, prepend the message with …\nWrite the message to the vec, prepend the message with …\nWrite the message to the writer, prepend the message with …\nWrite the message to the writer, prepend the message with …\nWrite <code>message</code> field\nWrite message\nWrite a byte\nWrite bytes\nWrite 32-bit integer little endian\nWrite 64-bit integer little endian\nWrite varint\nWrite varint\nWrite <code>sfixed32</code> field\nWrite <code>sfixed32</code>\nWrite <code>sfixed64</code> field\nWrite <code>sfixed64</code>\nWrite <code>sint32</code> field\nWrite zigzag varint\nWrite <code>sint64</code> field\nWrite zigzag varint\nWrite <code>string</code> field\nWrite string\nWrite a tag\nWrite the message to the stream.\nWrite the message to the stream.\nWrite the message to bytes vec.\nWrite the message to bytes vec.\nWrite the message to bytes vec.\nWrite the message to bytes vec.\nWrite message to the stream.\nWrite the message to the writer.\nWrite the message to the writer.\nWrite <code>uint32</code> field\nWrite varint\nWrite <code>uint64</code> field\nWrite varint\nWrite unknown field\nWrite unknown fields\nWrite unknown value\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nContains the error value\nMalformed map field\nIncorrect tag value\nMalformed varint\nEnum value is unknown\nI/O error when reading or writing\nNot all required fields set\nContains the success value\nOther error\nMessage is too nested\nGeneric protobuf error\n<code>Result</code> alias for <code>ProtobufError</code>\nCould not read complete message because stream is EOF\nCould not read complete message because stream is EOF\nWrong wire type for given field\nProtocol contains a string which is not valid UTF-8 string\nString is not valid UTD-8\nEnum values added here for diagnostic purposes. Users …\nMalformed input\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nMessage name\nOptional ext field\nRepeated ext field\nExtension field number\nExtension field number\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a copy of value from a message.\nGet a copy of value from a message (<strong>not implemented</strong>).\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nMarker\nExtension field number\nUninitialized <code>Lazy</code> object.\nLasily initialized data.\nUsed to initialize <code>lock</code> field in <code>Lazy</code> struct.\nReturns the argument unchanged.\nGet lazy field value, initialize it with given function if …\nCalls <code>U::from(self)</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\n<code>bool</code>\n<code>bytes</code>\n<code>enum</code>\nDynamic representation of enum type.\nDescription for enum variant.\n<code>f32</code>\n<code>f64</code>\nField descriptor.\n<code>i32</code>\n<code>i64</code>\nMap field\n<code>message</code>\nDynamic message type\nSingular field, optional or required in proto3 and just …\nType implemented by all protobuf elementary types (ints, …\nReference to a value stored in a field, optional, repeated …\nA reference to a value\nRepeated field\n<code>string</code>\n<code>u32</code>\n<code>u64</code>\nConvert to <code>Any</code>\nConvert to <code>Any</code>\nAs ref\nReturn <code>ProtobufValueRef</code> if self is <code>Copy</code>.\nReturn <code>ProtobufValueRef</code> if self is <code>Copy</code>.\nFind field by name\nFind field by number\nMessage field descriptors.\n<code>EnumDescriptor</code> for enum type\nGet a message descriptor for given message type\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nFully qualified protobuf message name\nGet <code>bool</code> field.\nGet <code>bytes</code> field.\nGet <code>enum</code> field.\nGet <code>float</code> field.\nGet <code>double</code> field.\nFind message field by protobuf field name\nFind message field by field name or field JSON name\nFind message field by field name\nGet <code>i32</code> field.\nGet <code>i64</code> field.\nGet message field or default instance if field is unset.\nGet underlying <code>DescriptorProto</code> object.\nGet field of any type.\nGet <code>string</code> field.\nGet <code>u32</code> field.\nGet <code>u64</code> field.\nCheck if field is set in given message.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nIs value non-zero?\nIs value non-zero?\nIf this field repeated?\nJSON field name.\nReturn length of repeated field.\nEnum name as given in <code>.proto</code> file\nField name as specified in <code>.proto</code> file\nMessage name as given in <code>.proto</code> file\nName of enum variant as specified in proto file\nCreate new enum descriptor.\nNew empty message\nCreate new enum descriptor.\nGet <code>.proto</code> description of field\n<code>i32</code> value of the enum variant\nFind enum value by name\nFind enum value by number\nUninitialized <code>Lazy</code> object.\nLazily initialized data.\nHelper trait implemented by integer types which could be …\nHelper trait implemented by integer types which could be …\nSize of encoded bytes field.\nCompute serialized size of <code>map</code> field and cache nested …\nGiven <code>u32</code> value compute varint encoded length.\nGiven <code>u64</code> value compute varint encoded length.\nSize of encoded enum field value.\nReturns the argument unchanged.\nGet lazy field value, initialize it with given function if …\nCalls <code>U::from(self)</code>.\nSize of self when encoded as varint.\nSize of self when encoded as zigzag varint.\nRead <code>map</code> field.\nRead repeated <code>enum</code> field into given vec, and when value is …\nRead repeated <code>enum</code> field into given vec, and when value is …\nRead repeated <code>bool</code> field into given vec.\nRead repeated <code>bytes</code> field into given vec.\nRead repeated <code>double</code> field into given vec.\nRead repeated <code>enum</code> field into given vec. This function is …\nRead repeated <code>enum</code> field into given vec, and when value is …\nRead repeated <code>fixed32</code> field into given vec.\nRead repeated <code>fixed64</code> field into given vec.\nRead repeated <code>float</code> field into given vec.\nRead repeated <code>int32</code> field into given vec.\nRead repeated <code>int64</code> field into given vec.\nRead repeated <code>message</code> field.\nRead repeated <code>sfixed32</code> field into given vec.\nRead repeated <code>sfixed64</code> field into given vec.\nRead repeated <code>sint32</code> field into given vec.\nRead repeated <code>sint64</code> field into given vec.\nRead repeated <code>string</code> field into given vec.\nRead repeated <code>uint32</code> field into given vec.\nRead repeated <code>uint64</code> field into given vec.\nRead singular <code>bytes</code> field.\nRead singular <code>message</code> field.\nRead singular <code>bytes</code> field for proto3.\nRead singular <code>string</code> field for proto3.\nRead singular <code>string</code> field.\nHandle unknown field in generated code. Either store a …\nSize of encoded string field.\nCompute tag size. Size of tag does not depend on wire type.\nCreate an error for unexpected wire type.\nSize of encoded unknown fields size.\nInteger value size when encoded as specified wire type.\nLength of value when encoding with zigzag encoding with tag\nInteger value size when encoded as specified wire type.\nSize of serialized repeated packed enum field, excluding …\nSize of serialized data with length prefix and tag\nSize of serialized repeated packed field, excluding length …\nSize of serialized data with length prefix and tag\nSize of serialized repeated packed field, excluding length …\nSize of serialized data with length prefix and tag\nWrite map, message sizes must be already known.\nExtension fields\nText-format to <code>fmt::Formatter</code>.\nText-format\nText-format\nProtobuf elementary type as generic trait\n<code>bool</code>\n<code>bytes</code>\nSomething which should be deleted\n<code>double</code>\n<code>enum</code>\n<code>fixed32</code>\n<code>fixed64</code>\n<code>float</code>\n<code>uint32</code>\n<code>int64</code>\n<code>message</code>\n<code>sfixed32</code>\n<code>sfixed64</code>\n<code>sint32</code>\n<code>sint64</code>\n<code>string</code>\n<code>uint32</code>\n<code>uint64</code>\nRust type of value\nCompute wire size\nCompute size adding length prefix if wire type is length …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet previously computed size\nGet previously cached size with length prefix\nGet value from <code>UnknownValues</code>\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nRead value from <code>CodedInputStream</code>\nWire type when writing to stream\nWrite a value with previously cached size\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCheck if <code>Any</code> contains a message of given type.\nCheck if <code>Any</code> contains a message of given type.\nPack any message into <code>well_known_types::Any</code> value.\nPack any message into <code>well_known_types::Any</code> value.\nExtract a message from this <code>Any</code>.\nExtract a message from this <code>Any</code>.\nMax possible field number\nTag occupies 3 bits\nTag mask\nParsed protobuf tag, which is a pair of field number and …\nOne of six defined protobuf wire types\nGroups are not supported by rust-protobuf\nFixed size 64 bit (e. g. <code>fixed32</code> or <code>float</code>)\nFixed size 64 bit (e. g. <code>fixed64</code> or <code>double</code>)\nLength-delimited (e. g. <code>message</code> or <code>string</code>)\nGroups are not supported by rust-protobuf\nVarint (e. g. <code>int32</code> or <code>sint64</code>)\nProtobuf field number\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCreate a tag from a field number and wire type.\nParse wire type\nParse integer into <code>Tag</code> object\nTag as pair of (field number, wire type)\nPack a tag to integer")