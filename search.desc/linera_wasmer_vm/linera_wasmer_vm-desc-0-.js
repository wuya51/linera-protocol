searchState.loadedDescShard("linera_wasmer_vm", 0, "Runtime library support for Wasmer.\nThe memory does not support atomic operations.\nFailed float-to-int conversion.\nSignature mismatch on indirect call.\nSignatures are stored in the table and checked in the …\nceil.f32\nceil.f64\nThe operation would cause the size of the memory to exceed …\ndata.drop\nA dynamic function has the native signature: …\nThe actual memory can be resized and moved.\nelem.drop\nOpaque pointer to arbitrary host data.\nfloor.f32\nfloor.f64\nPointer to function: contains enough information to call …\nref.func\nA function export value.\nA safe wrapper around <code>VMFunctionBody</code>.\nA user defined error value, used for error cases not …\nA global export value.\nA <code>heap_addr</code> instruction detected an out-of-bounds error.\nA <code>heap_addr</code> instruction was misaligned.\nThe data is owned here.\nmemory.atomic.botify for imported memories\nmemory.atomic.wait32 for imported memories\nmemory.atomic.wait64 for imported memories\nmemory.copy for imported memories\nmemory.fill for imported memories\nmemory.size for imported functions\ntable.get for imported tables\ntable.grow for imported tables\ntable.set for imported tables\ntable.size for imported tables\nResolved import pointers.\nIndirect call to a null table entry.\nThe data is stored inline in the <code>VMContext</code> of an instance.\nThis is an intermediate type that manages the raw …\nAn integer division by zero.\nAn integer arithmetic operation caused an overflow.\nInternal handle to an object owned by the current context.\nInvalid memory was provided.\nA trap raised from a wasm libcall\nThe name of a runtime library routine.\nRepresents memory that is used by the WebAsssembly module\nCaller asked for a maximum memory greater than we can give …\nData used by the generated code is generally located …\nA memory export value.\nmemory.atomic.notify for local memories\nmemory.atomic.wait32 for local memories\nmemory.atomic.wait64 for local memories\nmemory.copy for local memories\nmemory.fill for local memories\nmemory.init\nmemory.size for local functions\nError type describing things that can go wrong when …\nReturned when a shared memory is required, but the given …\nImplementation styles for WebAssembly linear memory.\nCaller asked for more minimum memory than we can give them.\nA simple struct consisting of a page-aligned pointer to …\nThe type of mmap to create\nnearest.f32\nnearest.f64\nA location in memory for a Waiter\nA trap indicating that the runtime was unable to allocate …\nThe probestack based on the Rust probestack\nThe memory is private to the process and not shared with …\nprobe for stack overflow. These are emitted for functions …\nA custom trap\nLow level error with mmap.\nPointers to section data.\nThe memory is shared with other processes. This is only …\nWebAssembly requires that the caller and callee signatures …\nThe current stack space was exhausted.\nA static function has the native signature: …\nAddress space is allocated up front.\nHandle to an object managed by a context.\nUnique ID to identify a context.\nSet of objects managed by a context.\nA table export value.\nA <code>table_addr</code> instruction detected an out-of-bounds error.\ntable.copy\nA reference stored in a table. Can be either an externref …\ntable.fill\ntable.get for local tables\ntable.grow for local tables\ntable.init\ntable.set for local tables\ntable.size for local tables\nImplementation styles for WebAssembly tables.\nTarget specific type for shared signature index.\nStores trace message with backtrace.\nA trap code describing the reason for a trap.\nFunction which may handle custom signals while processing …\ntrunc.f32\ntrunc.f64\nAn atomic memory access was attempted with an unaligned …\nCode that was supposed to have been unreachable was …\nReturned when trying to call a memory operation that is …\nA user-raised trap through <code>raise_user_trap</code>.\nVersion number of this crate.\nAn index type for builtin functions.\nThe VM caller-checked “anyfunc” record, for …\nConfiguration for the runtime VM Currently only the stack …\nThe VM “context”, which is pointed to by the <code>vmctx</code> arg …\nThe <code>VMDynamicFunctionContext</code> is the context that dynamic …\nThe value of an export passed from one instance to another.\nUnderlying object referenced by a <code>VMExternRef</code>.\nRepresents an opaque reference to any data within …\nA function reference. A single word that points to …\nA function export value.\nA placeholder byte-sized type which is just used to …\nUnion representing the first parameter passed when calling …\nUnderlying FunctionEnvironment used by a <code>VMFunction</code>.\nAn imported function.\nA function kind is a calling convention into and out of …\nA Global instance\nThe storage for a WebAssembly global defined within the …\nThe fields compiled code needs to access to utilize a …\nA handle holding an <code>Instance</code> of a WebAssembly module.\nRepresents linear memory that can be either owned or shared\nThe fields compiled code needs to access to utilize a …\nThe fields compiled code needs to access to utilize a …\nThis class computes offsets to fields within VMContext and …\nA linear memory instance.\nA shared linear memory instance.\nAn index into the shared signature registry, usable for …\nA table instance.\nThe fields compiled code needs to access to utilize a …\nThe fields compiled code needs to access to utilize a …\nA trap raised from the Wasm generated code\nCreate a new <code>Mmap</code> pointing to <code>accessible_size</code> bytes of …\nThe address of the inner dynamic function.\nThe address of the Waiter location\nPointer to the <code>VMCallerCheckedAnyfunc</code> which contains data …\nReturns a mutable reference to the underlying value.\nReturn the allocated memory as a mutable pointer to u8.\nReturn the allocated memory as a mutable slice of u8.\nReturn the allocated memory as a mutable slice of u8.\nReturn the allocated memory as a mutable slice of u8.\nReturns underlying pointer to the VM data.\nReturn the allocated memory as a pointer to u8.\nReturns a reference to the underlying value.\nReturns a reference to the underlying value.\nReturn the allocated memory as a slice of u8.\nReturn the allocated memory as a slice of u8.\nReturn the allocated memory as a slice of u8.\nReturn an vector of all globals and converted to u128\nPointer to the table data.\nThe start address which is always valid, even if the …\nA pointer to the imported function body.\nReturns the total number of builtin functions.\nAddress of the function call trampoline to invoke this …\nCatches any wasm traps that happen within the execution of …\nCopies this memory to a new memory\nCopies this memory to a new memory\nCopies this memory to a new memory\nCopies this memory to a new memory\nCopies this memory to a new memory\nCopies this memory to a new memory\nCopies this memory to a new memory\nDuplicate in a new memory mapping.\nCopy <code>len</code> elements from <code>src_table[src_index..]</code> into …\nCopies this global\nCopies the table into a new table\nCopy <code>len</code> elements from <code>table[src_index..]</code> to …\nThe context that the inner dynamic function will receive.\nThe current number of elements in the table.\nThe current logical size of this linear memory in bytes.\nA pointer to the imported table description.\nA pointer to the imported memory description.\nA pointer to the imported global variable description.\nNotify waiters from the wait list. Return the number of …\nNotify waiters from the wait list. Return the number of …\nNotify waiters from the wait list. Return the number of …\nNotify waiters from the wait list. Return the number of …\nAdd current thread to the waiter hash, and wait until …\nAdd current thread to the waiter hash, and wait until …\nAttempts to downcast the <code>Trap</code> to a concrete type.\nAttempts to downcast the <code>Trap</code> to a concrete type.\nDuplicate in a new memory mapping.\nA pointer to the <code>VMContext</code> that owns the function or host …\nReturn an iterator over the exports of this instance.\nFinishes the instantiation process started by <code>Instance::new</code>…\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates VMMemory from a custom implementation - the …\nCreate a new linear memory instance with specified minimum …\nCreate a new linear memory instance with specified minimum …\nCreate a new linear memory instance with specified minimum …\nCreate a new linear table instance with specified minimum …\nCreate a new linear memory instance with specified minimum …\nCreate a new linear memory instance with specified minimum …\nConstructs a <code>StoreHandle</code> from a <code>StoreId</code> and an …\nExtracts a <code>VMExternRef</code> from a <code>RawValue</code>.\nExtracts a <code>VMFuncRef</code> from a <code>RawValue</code>.\nFunction body.\nResolved addresses for imported functions.\nReturns a reference to the object that this handle points …\nReturns a reference to the object that this handle points …\nGet reference to the specified element.\nReturns a pair of mutable references from two handles.\nReturns an index for wasm’s <code>data.drop</code> instruction.\nReturns an index for wasm’s <code>elem.drop</code>.\nReturns an index for wasm’s <code>func.ref</code> instruction.\nReturns an index for wasm’s imported <code>memory.grow</code> builtin …\nReturns an index for wasm’s imported <code>memory.size</code> builtin …\nReturns an index for wasm’s imported <code>memory.atomic.notify</code>…\nReturns an index for wasm’s imported <code>memory.atomic.wait32</code>…\nReturns an index for wasm’s imported <code>memory.atomic.wait64</code>…\nReturns an index for wasm’s <code>memory.copy</code> for imported …\nReturns an index for wasm’s <code>memory.fill</code> for imported …\nReturns an index for wasm’s <code>table.get</code> instruction for …\nReturns an index for wasm’s <code>table.grow</code> instruction for …\nReturns an index for wasm’s <code>table.set</code> instruction for …\nReturns an index for wasm’s <code>table.size</code> instruction for …\nGet a table defined locally within this module.\nReturns an index for wasm’s <code>memory.grow</code> builtin function.\nReturns an index for wasm’s <code>memory.size</code> builtin function.\nReturns an index for wasm’s local <code>memory.atomic.notify</code> …\nReturns an index for wasm’s local <code>memory.atomic.wait32</code> …\nReturns an index for wasm’s local <code>memory.atomic.wait64</code> …\nReturns an index for wasm’s <code>memory.copy</code> for locally …\nReturns an index for wasm’s <code>memory.fill</code> for locally …\nReturns an index for wasm’s <code>memory.init</code> instruction.\nReturns a mutable reference to the object that this handle …\nReturns a mutable reference to the object that this handle …\nReturns an index for wasm’s <code>raise_trap</code> instruction.\nReturns the number of pages in the allocated memory block\nReturns the size of the table\nReturns an index for wasm’s <code>table.copy</code> when both tables …\nReturns an index for wasm’s <code>table.fill</code> instruction for …\nReturns an index for wasm’s <code>table.get</code> instruction for …\nReturns an index for wasm’s <code>table.grow</code> instruction for …\nReturns an index for wasm’s <code>table.init</code>.\nReturns an index for wasm’s <code>table.set</code> instruction for …\nReturns an index for wasm’s <code>table.size</code> instruction for …\nResolved addresses for imported globals.\nGrow memory by the specified amount of wasm pages.\nGrow memory by the specified amount of wasm pages.\nGrow memory by the specified amount of wasm pages.\nGrow memory by the specified amount of wasm pages.\nGrow table by the specified amount of elements.\nGrows the memory to at least a minimum size. If the memory …\nGrows the memory to at least a minimum size. If the memory …\nGrows the memory to at least a minimum size. If the memory …\nGrows the memory to at least a minimum size. If the memory …\nGrows the memory to at least a minimum size. If the memory …\nHandle to the <code>VMFunction</code> in the context.\nHandle to the <code>VMTable</code> in the context.\nA handle to the <code>Memory</code> that owns the memory description.\nA handle to the <code>Global</code> that owns the global description.\nAssociated data owned by a host function.\nHost functions can have custom environments.\nReturns the ID of this context.\nReturn the index as an u32 number.\nReturns index value.\nThis function is required to be called before any …\nReturns the internal handle contains within this handle.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConverts the <code>VMExternRef</code> into a <code>RawValue</code>.\nConverts the <code>VMFuncRef</code> into a <code>RawValue</code>.\nReturns true if the <code>Trap</code> is the same as T\nReturn whether any memory has been allocated.\nCheck whether the pointer stored is null or not.\nReturn an immutable iterator over all globals\nThe function kind (specifies the calling convention for the\nReturn the length of the allocated memory.\nConstruct a new Wasm trap with the given trap code.\nRuntime library calls.\nLookup an export with the given name.\nLooks up a shared signature index within this registry.\nLookup an export with the given export declaration.\nMake the memory starting at <code>start</code> and extending for <code>len</code> …\nResolved addresses for imported memories.\nGrow memory in this instance by the specified amount of …\nReturn the memory index for the given <code>VMMemoryDefinition</code> …\nGets the message for this trap code\nReturn a reference-counting pointer to a module.\nReturn a reference to a module.\nAllocates instance data for use with <code>VMInstance::new</code>.\nMoves the given object into a context and returns a handle …\nMoves the given object into a context and returns a handle …\nWraps the given value to expose it to Wasm code as an …\nWraps the given value to expose it to Wasm code as a …\nCreate a new, zero bit-pattern initialized global from a …\nConstruct a new <code>Imports</code> instance.\nCreate a new <code>VMInstance</code> pointing at a new <code>Instance</code>.\nCreate a new linear memory instance with specified minimum …\nCreate a new linear memory instance with specified minimum …\nCreates a new linear memory instance of the correct type …\nConstruct a new empty instance of <code>Mmap</code>.\nCreate a new <code>SignatureRegistry</code>.\nCreate a new linear table instance with specified minimum …\nConstruct a <code>VMGlobalDefinition</code>.\nCreate a new <code>VMSharedSignatureIndex</code>.\nReturn a new <code>VMOffsets</code> instance, for a given pointer size.\nConstructs <code>TargetSharedSignatureIndex</code>.\nReturn a new <code>VMOffsets</code> instance, for a given pointer size …\nCreate a new linear memory instance with specified minimum …\nCreate a new linear memory instance with specified minimum …\nConstruct a new <code>Imports</code> instance with no imports.\nNumber of local memories defined in the module\nNumber of local tables defined in the module\nReturns the offset-guard size\nWhen executing on the Wasm stack, temporarily switch back …\nConstruct a new OOM trap with the given source location …\nRaises a trap from inside library code immediately.\nRaises a user-defined trap immediately.\nRegister a signature and return its unique index.\nResets the memory back to zero length\nResets the memory back to zero length\nResets the memory down to a zero size\nResets the memory down to a zero size\nResets the memory down to a zero size\nCarries a Rust panic across wasm code and resumes the …\nSet reference to the specified element.\nSet a global, at index idx. Will panic if idx is out of …\nSets the ID of this store\nDefault stack size is 1MB.\nOverrides the store id with a new ID\nThe function type, used for compatibility checking.\nReturns the size of hte memory in pages\nReturns the size of hte memory in pages\nReturns the size of hte memory in pages\nReturns the size of hte memory in pages\nReturns the number of allocated elements.\nReturn the size of <code>VMFuncRef</code>.\nReturn the size of <code>VMCallerCheckedAnyfunc</code>.\nReturn the size of the <code>VMContext</code> allocation.\nReturn the size of <code>VMDynamicFunctionContext</code>.\nThe size of the <code>current_elements</code> field.\nReturn the size of <code>VMFunctionImport</code>.\nReturn the size of <code>VMGlobalImport</code>.\nReturn the size of a pointer to a <code>VMGlobalDefinition</code>;\nReturn the size of <code>VMMemoryDefinition</code>.\nThe size of the <code>current_length</code> field.\nReturn the size of <code>VMMemoryImport</code>.\nReturn the size of <code>VMSharedSignatureIndex</code>.\nReturn the size of <code>VMTableDefinition</code>.\nThe size of the <code>current_elements</code> field.\nReturn the size of <code>VMTableImport</code>.\nReturns the ID of the context associated with the handle.\nReturns the memory style for this memory.\nReturns the memory style for this memory.\nReturns the memory style for this memory.\nReturns the memory style for this memory.\nReturns the style for this Table.\nGet table element reference.\nGrow table in this instance by the specified amount of …\nReturn the table index for the given <code>VMTableDefinition</code> in …\nSet table element reference.\nResolved addresses for imported tables.\nAccess the internal atomics handler.\nAccess the internal atomics handler.\nReturn the function name associated to the libcall.\nConverts this owned memory into shared memory\nReturns trap code, if it’s a Trap\nAttempts to clone this memory (if its clonable)\nOwned memory can not be cloned (this will always return …\nShared memory can always be cloned\nAttempts to clone this memory (if its clonable)\nReturns the type for this memory.\nGet the type of the global.\nReturns the type for this memory.\nReturns the type for this memory.\nReturns the type for this memory.\nReturns the type for this Table.\nFunction signature id.\nConstruct a new Error with the given a user error.\nRaw value of the global.\nThe offset to the pointer to the anyfunc inside the ref.\nThe offset of the <code>call_trampoline</code> field.\nThe offset of the <code>func_ptr</code> field.\nThe offset of the <code>type_index</code> field.\nThe offset of the <code>vmctx</code> field.\nReturn a reference to the vmctx used by compiled wasm code.\nWasm functions take a pointer to <code>VMContext</code>.\nFunction <code>VMContext</code> or host env.\nReturn the offset to builtin function in …\nThe offset of the builtin functions array.\nThe offset of the <code>globals</code> array.\nThe offset of the <code>tables</code> array.\nThe offset of the <code>globals</code> array.\nThe offset of the <code>memories</code> array.\nThe offset of the <code>tables</code> array.\nThe offset of the <code>memories</code> array.\nReturn a raw pointer to the vmctx used by compiled wasm …\nThe offset of the <code>signature_ids</code> array.\nThe offset of the <code>tables</code> array.\nReturn the offset to <code>VMFunctionImport</code> index <code>index</code>.\nReturn the offset to the <code>body</code> field in …\nReturn the offset to the <code>vmctx</code> field in …\nReturn the offset to the <code>VMGlobalDefinition</code> index <code>index</code>.\nReturn the offset to <code>VMGlobalImport</code> index <code>index</code>.\nReturn the offset to the <code>from</code> field in <code>VMGlobalImport</code> …\nReturn the offset to <code>VMMemoryDefinition</code> index <code>index</code>.\nReturn the offset to the <code>base</code> field in <code>VMMemoryDefinition</code> …\nReturn the offset to the <code>current_length</code> field in …\nReturn the offset to <code>VMMemoryImport</code> index <code>index</code>.\nReturn the offset to the <code>from</code> field in <code>VMMemoryImport</code> …\nReturn the offset to the <code>vmctx</code> field in <code>VMMemoryImport</code> …\nReturn the offset to <code>VMSharedSignatureIndex</code> index <code>index</code>.\nReturn the offset to <code>VMTableDefinition</code> index <code>index</code>.\nReturn the offset to the <code>base</code> field in <code>VMTableDefinition</code> …\nReturn the offset to the <code>current_elements</code> field in …\nReturn the offset to <code>VMTableImport</code> index <code>index</code>.\nReturn the offset to the <code>definition</code> field in <code>VMTableImport</code> …\nThe offset of the <code>address</code> field.\nThe offset of the <code>ctx</code> field.\nThe offset of the <code>body</code> field.\nThe offset of the <code>handle</code> field.\nThe offset of the <code>vmctx</code> field.\nGet a pointer to the underlying definition used by the …\nThe offset of the <code>definition</code> field.\nThe offset of the <code>handle</code> field.\nReturn a <code>VMMemoryDefinition</code> for exposing the memory to …\nReturn a <code>VMMemoryDefinition</code> for exposing the memory to …\nReturn a <code>VMMemoryDefinition</code> for exposing the memory to …\nReturn a <code>VMMemoryDefinition</code> for exposing the memory to …\nThe offset of the <code>base</code> field.\nThe offset of the <code>current_length</code> field.\nThe offset of the <code>from</code> field.\nThe offset of the <code>handle</code> field.\nReturn a reference to the <code>VMOffsets</code> to get offsets in the …\nReturn a <code>VMTableDefinition</code> for exposing the table to …\nThe offset of the <code>base</code> field.\nThe offset of the <code>current_elements</code> field.\nThe offset of the <code>definition</code> field.\nThe offset of the <code>handle</code> field.\nConstruct a new Wasm trap with the given source location …\nOptionnal stack size (in byte) of the VM. Value lower than …\nCall the wasm function pointed to by <code>callee</code>.\nCreate a new <code>Mmap</code> pointing to at least <code>size</code> bytes of …\nThe attempted amount to grow by in pages.\nThe current size in pages.\nThe maximum amount of memory we can allocate.\nThe number of pages requested as the maximum amount of …\nThe number of pages requested as the maximum amount of …\nMessage describing the unsupported operation.\nThe number of pages requested as the minimum amount of …\nThe reason why the provided memory is invalid.\nThe number of mapped and unmapped pages.\nOur chosen offset-guard size.\nOur chosen offset-guard size.\nNative stack backtrace at the time the trap occurred\nNative stack backtrace at the time the trap occurred\nNative stack backtrace at the time the OOM occurred\nThe program counter in generated code where this trap …\nOptional trapcode associated to the signal that caused the …\nCode of the trap.\nceil.f32\nceil.f64\ndata.drop\nelem.drop\nfloor.f32\nfloor.f64\nref.func\nmemory.atomic.botify for imported memories\nmemory.atomic.wait32 for imported memories\nmemory.atomic.wait64 for imported memories\nmemory.copy for imported memories\nmemory.fill for imported memories\nmemory.size for imported functions\ntable.get for imported tables\ntable.grow for imported tables\ntable.set for imported tables\ntable.size for imported tables\nThe name of a runtime library routine.\nmemory.atomic.notify for local memories\nmemory.atomic.wait32 for local memories\nmemory.atomic.wait64 for local memories\nmemory.copy for local memories\nmemory.fill for local memories\nmemory.init\nmemory.size for local functions\nnearest.f32\nnearest.f64\nprobe for stack overflow. These are emitted for functions …\nA custom trap\ntable.copy\ntable.fill\ntable.get for local tables\ntable.grow for local tables\ntable.init\ntable.set for local tables\ntable.size for local tables\ntrunc.f32\ntrunc.f64\nThe function pointer to a libcall\nImplementation of <code>data.drop</code>.\nImplementation of <code>elem.drop</code>.\nImplementation of f32.ceil\nImplementation of f32.floor\nImplementation of f32.nearest\nImplementation of f32.trunc\nImplementation of f64.ceil\nImplementation of f64.floor\nImplementation of f64.nearest\nImplementation of f64.trunc\nImplementation of <code>func.ref</code>.\nImplementation of memory.notfy for imported 32-bit …\nImplementation of memory.wait32 for imported 32-bit …\nImplementation of memory.wait64 for imported 32-bit …\nImplementation of <code>memory.copy</code> for imported memories.\nImplementation of <code>memory.fill</code> for imported memories.\nImplementation of memory.grow for imported 32-bit memories.\nImplementation of memory.size for imported 32-bit memories.\nImplementation of <code>table.get</code> for imported tables.\nImplementation of <code>table.grow</code> for imported tables.\nImplementation of <code>table.set</code> for imported tables.\nImplementation of <code>table.size</code> for imported tables.\nImplementation of memory.notfy for locally-defined 32-bit …\nImplementation of memory.wait32 for locally-defined 32-bit …\nImplementation of memory.wait64 for locally-defined 32-bit …\nImplementation of <code>memory.copy</code> for locally defined memories.\nImplementation of <code>memory.fill</code> for locally defined memories.\nImplementation of memory.grow for locally-defined 32-bit …\nImplementation of <code>memory.init</code>.\nImplementation of memory.size for locally-defined 32-bit …\nProbestack check\nImplementation for raising a trap\nImplementation of <code>table.copy</code>.\nImplementation of <code>table.fill</code>.\nImplementation of <code>table.get</code>.\nImplementation of <code>table.grow</code> for locally-defined tables.\nImplementation of <code>table.init</code>.\nImplementation of <code>table.set</code>.\nImplementation of <code>table.size</code>.")