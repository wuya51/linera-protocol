searchState.loadedDescShard("histogram", 0, "A native rust implementation of a histogram and …\nvalue-quantized section of <code>Histogram</code>\nA configuration struct for building custom <code>Histogram</code>s.\nthe main datastructure\nIterator over a Histogram’s buckets.\nreturn the number of buckets in the Histogram\nBuild a new histogram based on the current configuration …\nclear the histogram data\nconfigure a Histogram\nreturn the sample counts for the bucket\ndecrement the count for a value. This functionality is best\nremove count for value from histogram. This functionality …\nreturn the number of entries in the Histogram\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nget the count for a value\nreturn the bucket id\nincrement the count for a value\nrecord additional counts for value\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nset HistogramConfig memory limit\nset HistogramConfig value limit\nconvenience function for max\narithmetic mean approximation across the histogram\nmerge one Histogram into another Histogram\nconvenience function for min\ncreate a new Histogram Config with defaults\ncreate a new Histogram\nreturn the value for the given percentile\nset HistogramConfig precision\nstandard deviation approximation across the histogram\nstandard variance approximation across the histogram\nreturn the sample value for the bucket\nreturn the width of the bucket")