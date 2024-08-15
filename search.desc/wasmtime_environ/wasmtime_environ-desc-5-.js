searchState.loadedDescShard("wasmtime_environ", 5, "Constructs a new <code>GlobalSectionReader</code> for the given data …\nConstructs a new <code>ImportSectionReader</code> for the given data …\nConstructs a new <code>ConstExpr</code> from the given data and offset.\nConstructs a new <code>MemorySectionReader</code> for the given data …\nConstructs a new <code>TableSectionReader</code> for the given data and …\nConstructs a new <code>TagSectionReader</code> for the given data and …\nConstructs a new <code>TypeSectionReader</code> for the given data and …\nCreates a new <code>Validator</code> ready to validate a WebAssembly …\nCreates a new <code>Validator</code> which has the specified set of wasm\nConstructs a <code>BinaryReader</code> with an explicit starting offset.\nReads content of the code section with offsets.\nGet the offset within the Wasm binary where the error …\nA fixed byte-offset that this memory immediate specifies.\nThe relocation offset.\nValidates the next operator in a function.\nGet the current height of the operand stack.\nGets the original position of the reader.\nGets the original position of the reader.\nGets the original position of the reader.\nGets the original position of the reader.\nGets the original position of the reader.\nGets the original position of the reader.\nGets the original position of the reader.\nGets the original position of the section reader.\nGets the original position of the reader.\nGets the original position of the reader.\nGets the original position of the reader.\nGets the original position of the binary reader.\nGets the original position of the section reader.\nGets the original position of the section reader.\nGets the original position of the section reader.\nGets the original position of the section reader.\nGets the original position of the section reader.\nGets the original position of the section reader.\nGets the original position of the section reader.\nGets the original position of the section reader.\nGets the original position of the reader.\nGets the original position of the reader.\nGets the original position of the section reader.\nGets the original position of the section reader.\nGets the original position of the section reader.\nGets the original position of the section reader.\nGets the original position of the section reader.\nGets the original position of the section reader.\nGets the original position of the section reader.\nGets the original position of the name.\nGets the original position of the map.\nGets the original position of the indirect name.\nGets an original position of the map.\nGets the original position of the reader.\nGets the original position of the section reader.\nGets the original position of the section reader.\nGets the original position of the reader.\nReturns the type at given index if any.\nReturns the list of outputs as an iterator.\nThe function parameters.\nThe function parameter types.\nAttempts to parse a chunk of data.\nConvenience function that can be used to parse a module or …\nConvenience function to validate a single <code>Payload</code>.\nGets the range of the reader.\nReturns a range from the starting offset to the end of the …\nGets the range of the function body.\nThe range of bytes that specify this whole custom section …\nThe range of the data segment.\nThe range of the the element segment.\nReads an item from the section.\nReads an item from the reader.\nReads content of the code section.\nReads an element item from the segment.\nReads an item from the section.\nReads a name from the names custom section.\nReads an indirect name from the reader.\nReads a name from the section.\nReads a field from the reader.\nReads an item from the reader.\nReads an item from the reader.\nReads content of the core alias section.\nReads content of the alias section.\nReads function type index from the function section.\nReads content of the export section.\nReads content of the import section.\nReads content of the instance section.\nReads content of the instance section.\nReads the start function from the section.\nReads content of the type section.\nReads content of the type section.\nReads content of the data section.\nReads content of the element section.\nReads content of the export section.\nReads function type index from the function section.\nReads content of the global section.\nReads content of the import section.\nReads content of the memory section.\nReads an operator from the reader.\nReads content of the table section.\nReads content of the tag section.\nReads content of the type section.\nAdvances the <code>BinaryReader</code> <code>size</code> bytes, and returns a slice …\nAdvances the <code>BinaryReader</code> up to four bytes to parse a …\nAdvances the <code>BinaryReader</code> up to four bytes to parse a …\nReads the local defintions from the given <code>BinaryReader</code>, …\nReads the next available <code>Operator</code>.\nReads a WebAssembly string from the module.\nAdvances the <code>BinaryReader</code> four bytes and returns a <code>u32</code>.\nAdvances the <code>BinaryReader</code> eight bytes and returns a <code>u64</code>.\nAdvances the <code>BinaryReader</code> a single byte.\nReads a core WebAssembly value type from the binary reader.\nAdvances the <code>BinaryReader</code> up to four bytes to parse a …\nAdvances the <code>BinaryReader</code> up to eight bytes to parse a …\nAdvances the <code>BinaryReader</code> up to four bytes to parse a …\nAdvances the <code>BinaryReader</code> up to four bytes to parse a …\nAdvances the <code>BinaryReader</code> up to four bytes to parse a …\nReads an operator with its offset.\nThe WebAssembly reference types proposal (enabled by …\nThe index of the variant case that is refined by this one.\nThe WebAssembly Relaxed SIMD proposal\nReturns the underlying module resources that this …\nThe function results.\nThe function result types.\nThe WebAssembly <code>nontrapping-float-to-int-conversions</code> …\nWhether or not this is a “shared” memory, indicating …\nThe WebAssembly <code>sign-extension-ops</code> proposal (enabled by …\nThe WebAssembly SIMD proposal\nAdvances the <code>BinaryReader</code> <code>len</code> bytes, skipping the result.\nSkip parsing the code section entirely.\nAdvances the <code>BinaryReader</code> past a WebAssembly string. This …\nValidates <code>Payload::StartSection</code>.\nReturns the table at given index if any.\nValidates <code>Payload::TableSection</code>.\nReturns the tag at given index.\nValidates <code>Payload::TagSection</code>.\nThe WebAssembly tail-call proposal\nReturns the list of targets that this <code>br_table</code> instruction …\nThe WebAssembly threads proposal\nThe type reference for the import.\nThe value type of the variant case.\nThe type of the elements.\nThe global’s type.\nThe type of the imported item.\nThe relocation type.\nReturns the <code>FuncType</code> associated with the given function …\nValidates <code>Payload::TypeSection</code>.\nTypes relating to type information provided by validation.\nGets the types known by the validator so far within the …\nValidates <code>Payload::UnknownSection</code>.\nWhether or not initialization expressions are used.\nTest whether the given buffer contains a valid WebAssembly …\nConvenience function to validate an entire function’s …\nValidates an entire in-memory module or component with …\nValidates <code>Payload::Version</code>.\nThe field version.\nVisits the <code>Operator</code> <code>op</code> using the given <code>offset</code>.\nReads the next available <code>Operator</code> and calls the respective …\nVisits an operator with its offset.\nThe outward count, starting at zero for the current …\nThe index of the item within the outer component.\nThe instance index.\nThe alias kind.\nThe alias kind.\nThe export name.\nThe index of the core WebAssembly function to lift.\nThe index of the function to lower.\nThe canonical options for the function.\nThe canonical options for the function.\nThe index of the lifted function’s type.\nThis many bytes of the <code>data</code> input to <code>Parser::parse</code> were …\nThe value that we actually parsed.\nThe outward count, starting at zero for the current …\nThe index of the item within the outer component.\nThe instance index.\nThe alias kind.\nThe alias kind.\nThe export name.\nThe type returned for failure.\nThe type returned for success.\nThe component’s instantiation arguments.\nThe component index.\nThe name of the export.\nThe type reference for the export.\nThe memory index for the data segment.\nThe initialization expression for the data segment.\nThe initial expression of the element segment.\nThe index of the table being initialized.\nThe module’s instantiation arguments.\nThe module index.\nThe name of the export.\nThe type reference for the export.\nThe name of the exported item.\nThe type reference of the export.\nThe contents of this subsection.\nThe range of bytes, relative to the start of the original …\nThe identifier for this subsection.\nThe contents of this section.\nThe number of data segments.\nThe number of functions in this section.\nThe encoding format being parsed.\nThe start function index\nThe 8-bit identifier for this section.\nThe version number found in the header.\nThe parser for the nested module.\nThe parser for the nested component.\nThe range of bytes that were parsed to consume the header …\nThe range of bytes that specify the <code>func</code> field, specified …\nThe range of bytes that specify the <code>count</code> field, specified …\nThe range of bytes that represent this section, specified …\nThe range of bytes that represent the nested module in the …\nThe range of bytes that represent the nested component in …\nThe range of bytes, relative to the start of the original …\nThe size, in bytes, of the remaining contents of this …\nThe kind of the custom section.\nThe name of the custom section.\nThe definition is for a component type.\nThe entity is a component.\nRepresents a component defined type.\nThe entity type for imports and exports of a component.\nThe definition is for a component function type.\nRepresents a type of a component function.\nThe definition is for a component instance type.\nRepresents a type of a component instance.\nRepresents the kind of a component instance.\nRepresents a type of a component.\nA component value type.\nThe definition is for a component defined type.\nThe instance type is from a definition.\nThe entity type for imports and exports of a module.\nThe type is an enumeration.\nThe instance type is the result of instantiating from …\nThe instance type is the result of instantiating from …\nThe type is a set of flags.\nThe definition is for a core function type.\nThe entity is a function.\nThe entity is a function.\nThe entity is a global.\nThe definition is for a core module instance type.\nThe entity is a component instance.\nRepresents a module instance type.\nRepresents the kind of module instance type.\nThe instance type is the result of instantiating a module …\nThe instance type is the result of instantiating a …\nThe type is a list.\nThe entity is a memory.\nThe definition is for a core module type.\nThe entity is a core module.\nRepresents a core module type.\nThe type is an <code>option</code>.\nThe value type is one of the primitive types.\nThe type is a primitive value type.\nThe type is a record.\nRepresents a record type.\nThe type is a <code>result</code>.\nThe entity is a table.\nThe entity is a tag.\nThe type is a tuple.\nRepresents a tuple type.\nA unified type definition for validating WebAssembly …\nThe type is represented with the given type identifier.\nThe entity is a type.\nRepresents a unique identifier for a type known to a …\nRepresents the types known to a <code>crate::Validator</code> once …\nRepresents the types known to a <code>crate::Validator</code> during …\nThe type is a union.\nRepresents a union type.\nThe entity is a value.\nThe type is a variant.\nRepresents a variant case.\nRepresents a variant type.\nConverts the type to a component function type.\nConverts the type to a component instance type.\nConverts the type to a component type.\nConverts the type to a component defined type.\nConverts the type to a core function type.\nConverts the type to a core module instance type.\nConverts the type to a core module type.\nGets a reference to this validation type information.\nThe map of variant cases.\nGets the type of a component at the given component index.\nGets the type of a component at the given component index.\nGets the count of imported, exported, or aliased …\nGets the component entity type from the given component …\nGets the component entity type from the given component …\nGets the component entity type for the given component …\nGets the component entity type for the given component …\nGets the type of a component function at the given …\nGets the type of a component function at the given …\nGets the count of imported, exported, or aliased component …\nGets the type of an component instance at the given …\nGets the type of an component instance at the given …\nGets the count of imported, exported, or aliased component …\nGets the type of an element segment at the given element …\nGets the type of an element segment at the given element …\nGets the count of element segments.\nGets the entity type from the given export.\nGets the entity type from the given export.\nGets the entity type from the given import.\nGets the entity type for the given import.\nGets the exports of the instance type.\nGets the exports of the instance type.\nThe exports of the module type.\nThe exports of the component type.\nThe map of record fields.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGets a defined core function type at the given type index.\nGets a defined core function type at the given type index.\nGets the type of a core function at the given function …\nGets the type of a core function at the given function …\nGets the count of imported and defined core functions.\nGets the type of a global at the given global index.\nGets the type of a global at the given global index.\nGets the count of imported and defined globals.\nGets a type id from a type index.\nGets a type id from a type index.\nThe imports of the module type.\nThe imports of the component type.\nGets the type of a module instance at the given module …\nGets the type of a module instance at the given module …\nGets the count of imported, exported, or aliased core …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nDetermines if component value type <code>a</code> is a subtype of <code>b</code>.\nDetermines if entity type <code>a</code> is a subtype of <code>b</code>.\nDetermines if module type <code>a</code> is a subtype of <code>b</code>.\nDetermines if component entity type <code>a</code> is a subtype of <code>b</code>.\nDetermines if component type <code>a</code> is a subtype of <code>b</code>.\nDetermines if component instance type <code>a</code> is a subtype of <code>b</code>.\nDetermines if component function type <code>a</code> is a subtype of <code>b</code>.\nDetermines if component defined type <code>a</code> is a subtype of <code>b</code>.\nThe kind of module instance type.\nThe kind of instance type.\nLooks up an import by its module and name.\nGets the type of a memory at the given memory index.\nGets the type of a memory at the given memory index.\nGets the count of imported and defined memories.\nGets the type of a module at the given module index.\nGets the type of a module at the given module index.\nGets the count of imported, exported, or aliased modules.\nThe function parameters.\nThe name of the variant case refined by this one.\nThe function’s results.\nGets the type of a table at the given table index.\nGets the type of a table at the given table index.\nGets the count of imported and defined tables.\nGets the type of a tag at the given tag index.\nGets the type of a tag at the given tag index.\nGets the count of imported and defined tags.\nThe variant case type.\nGets a type at the given type index.\nGets a type at the given type index.\nGets the count of core types.\nGets a type based on its type id.\nGets a type based on its type id.\nThe types of the tuple.\nThe types of the union.\nGets the type of a value at the given value index.\nGets the type of a value at the given value index.\nGets the count of imported, exported, or aliased values.\nThe <code>error</code> type.\nThe <code>ok</code> type.")