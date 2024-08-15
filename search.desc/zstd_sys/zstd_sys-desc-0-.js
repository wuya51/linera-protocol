searchState.loadedDescShard("zstd_sys", 0, "Low-level bindings to the zstd library.\nZDICT_finalizeDictionary(): Given a custom content as a …\nZDICT_trainFromBuffer(): Train a dictionary from an array …\nExplicit context\nZSTD_CCtx_loadDictionary() : Requires v1.4.0+ Create an …\nZSTD_CCtx_refCDict() : Requires v1.4.0+ Reference a …\nZSTD_CCtx_refPrefix() : Requires v1.4.0+ Reference a …\nZSTD_CCtx_reset() : There are 2 different things that can …\nZSTD_CCtx_setParameter() : Set one compression parameter, …\nZSTD_CCtx_setPledgedSrcSize() : Total input data size to …\nBulk processing dictionary API\nZSTD_DCtx_loadDictionary() : Requires v1.4.0+ Create an …\nZSTD_DCtx_refDDict() : Requires v1.4.0+ Reference a …\nZSTD_DCtx_refPrefix() : Requires v1.4.0+ Reference a …\nZSTD_DCtx_reset() : Return a DCtx to clean state. Session …\nZSTD_DCtx_setParameter() : Set one compression parameter, …\nZSTD_cParam_getBounds() : All parameters must belong to an …\nSimple API / /*! ZSTD_compress() : Compresses <code>src</code> content …\nZSTD_compress2() : Behave the same as ZSTD_compressCCtx(), …\nZSTD_compressCCtx() : Same as ZSTD_compress(), using an …\nAlternative for ZSTD_compressStream2(zcs, output, input, …\nZSTD_compressStream2() : Requires v1.4.0+ Behaves about …\nZSTD_compress_usingCDict() : Compression using a digested …\nSimple dictionary API / /*! ZSTD_compress_usingDict() : …\nZSTD_createCDict() : When compressing multiple messages or …\nZSTD_createDDict() : Create a digested dictionary, ready …\nZSTD_dParam_getBounds() : All parameters must belong to an …\nAdvanced decompression API (Requires v1.4.0+)\nZSTD_decompress() : <code>compressedSize</code> : must be the <em>exact</em> …\nZSTD_decompressDCtx() : Same as ZSTD_decompress(), …\nZSTD_decompressStream() : Streaming decompression function.\nZSTD_decompress_usingDDict() : Decompression using a …\nZSTD_decompress_usingDict() : Decompression using a known …\nEquivalent to ZSTD_compressStream2(zcs, output, …\nZSTD_findFrameCompressedSize() : Requires v1.4.0+ <code>src</code> …\nEquivalent to ZSTD_compressStream2(zcs, output, …\nZSTD_freeCDict() : Function frees memory allocated by …\nZSTD_freeDDict() : Function frees memory allocated with …\nZSTD_getDecompressedSize() : NOTE: This function is now …\nZSTD_getDictID_fromCDict() : Requires v1.5.0+ Provides the …\nZSTD_getDictID_fromDDict() : Requires v1.4.0+ Provides the …\nZSTD_getDictID_fromDict() : Requires v1.4.0+ Provides the …\nZSTD_getDictID_fromFrame() : Requires v1.4.0+ Provides the …\nStreaming\nStreaming\nEquivalent to:\nZSTD_initDStream() : Initialize/reset DStream state for …\nZSTD_sizeof_*() : Requires v1.4.0+ These functions give …\nAdvanced compression API (Requires v1.4.0+)\nZSTD_versionNumber() : Return runtime library version, the …\nZSTD_versionString() : Return runtime library version, …\n&lt; optimize for a specific zstd compression level; 0 means …\n&lt; force dictID value; 0 means auto mode (32-bits random …\n&lt; start of output buffer\n&lt; start of output buffer\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\n&lt; Write log to stderr; 0 = none (default); 1 = errors; 2 = …\n&lt; position where reading stopped. Will be updated. …\n&lt; position where writing stopped. Will be updated. …\n&lt; position where reading stopped. Will be updated. …\n&lt; position where writing stopped. Will be updated. …\n&lt; size of input buffer\n&lt; size of output buffer\n&lt; size of input buffer\n&lt; size of output buffer\n&lt; start of input buffer\n&lt; start of input buffer")