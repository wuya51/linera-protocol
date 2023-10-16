// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

use crate::{
    batch::{Batch, WriteOperation},
    common::{KeyIterable, KeyValueIterable, KeyValueStoreClient},
    memory::{create_memory_client, MemoryClient},
};
use async_lock::RwLock;
use async_trait::async_trait;
use std::sync::Arc;

/// Array containing metric data for this client
/// This can be used for storage fees or for other
/// benchmarking purposes.
#[derive(Clone, Copy, Default, Debug, Eq, PartialEq)]
pub struct MetricStat {
    /// The total number of keys read in calls to `read_key` and `read_multi_key`
    pub n_reads: usize,
    /// The number of missed cases in read_key and read_multi_key
    pub n_miss_reads: usize,
    /// The number of Put in the batches
    pub n_puts: usize,
    /// The total number of Delete in the batches
    pub n_deletes: usize,
    /// The total number of DeletePrefix in the batches
    pub n_delete_prefix: usize,
    /// The total data that went into the Batches
    pub size_writes: usize,
    /// The total data being read from
    pub size_reads: usize,
}

/// The `MetricKeyValueClient` encapsulates a client and creates a new one that
/// measures the operations being done
#[derive(Clone)]
pub struct MetricKeyValueClient<K> {
    /// The inner client that is called by the metric one
    pub client: K,
    /// The data contained in the running of this container
    pub metric_stat: Arc<RwLock<MetricStat>>,
}

#[async_trait]
impl<K> KeyValueStoreClient for MetricKeyValueClient<K>
where
    K: KeyValueStoreClient + Send + Sync,
{
    const MAX_VALUE_SIZE: usize = K::MAX_VALUE_SIZE;
    type Error = K::Error;
    type Keys = K::Keys;
    type KeyValues = K::KeyValues;

    fn max_stream_queries(&self) -> usize {
        self.client.max_stream_queries()
    }

    async fn read_key_bytes(&self, key: &[u8]) -> Result<Option<Vec<u8>>, Self::Error> {
        let read = self.client.read_key_bytes(key).await?;
        let mut metric_stat = self.metric_stat.write().await;
        metric_stat.n_reads += 1;
        match &read {
            None => {
                metric_stat.n_miss_reads += 1;
            }
            Some(value) => {
                metric_stat.size_reads += value.len();
            }
        }
        Ok(read)
    }

    async fn read_multi_key_bytes(
        &self,
        keys: Vec<Vec<u8>>,
    ) -> Result<Vec<Option<Vec<u8>>>, Self::Error> {
        let n_keys = keys.len();
        let multi_read = self.client.read_multi_key_bytes(keys).await?;
        let mut metric_stat = self.metric_stat.write().await;
        metric_stat.n_reads += n_keys;
        for read in &multi_read {
            match read {
                None => {
                    metric_stat.n_miss_reads += 1;
                }
                Some(value) => {
                    metric_stat.size_reads += value.len();
                }
            }
        }
        Ok(multi_read)
    }

    async fn find_keys_by_prefix(&self, key_prefix: &[u8]) -> Result<Self::Keys, Self::Error> {
        let mut metric_stat = self.metric_stat.write().await;
        let keys = self.client.find_keys_by_prefix(key_prefix).await?;
        for key in keys.iterator() {
            metric_stat.size_reads += key?.len();
        }
        Ok(keys)
    }

    async fn find_key_values_by_prefix(
        &self,
        key_prefix: &[u8],
    ) -> Result<Self::KeyValues, Self::Error> {
        let mut metric_stat = self.metric_stat.write().await;
        let key_values = self.client.find_key_values_by_prefix(key_prefix).await?;
        for key_value in key_values.iterator() {
            let key_value = key_value?;
            metric_stat.size_reads += key_value.0.len() + key_value.1.len();
        }
        Ok(key_values)
    }

    async fn write_batch(&self, batch: Batch, base_key: &[u8]) -> Result<(), Self::Error> {
        let mut metric_stat = self.metric_stat.write().await;
        for operation in &batch.operations {
            match operation {
                WriteOperation::Delete { key } => {
                    metric_stat.n_deletes += 1;
                    metric_stat.size_writes += key.len();
                }
                WriteOperation::Put { key, value } => {
                    metric_stat.n_puts += 1;
                    metric_stat.size_writes += key.len() + value.len();
                }
                WriteOperation::DeletePrefix { key_prefix } => {
                    metric_stat.n_delete_prefix += 1;
                    metric_stat.size_writes += key_prefix.len();
                }
            }
        }
        self.client.write_batch(batch, base_key).await
    }

    async fn clear_journal(&self, base_key: &[u8]) -> Result<(), Self::Error> {
        self.client.clear_journal(base_key).await
    }
}

/// Create a new client
pub fn get_metric_memory_client() -> MetricKeyValueClient<MemoryClient> {
    let client = create_memory_client();
    let metric_stat = MetricStat::default();
    let metric_stat = Arc::new(RwLock::new(metric_stat));
    MetricKeyValueClient {
        client,
        metric_stat,
    }
}

/// Returning the current metric information
pub async fn metric(client: &MetricKeyValueClient<MemoryClient>) -> MetricStat {
    let metric_stat = &client.metric_stat;
    let metric_stat = metric_stat.read().await;
    *metric_stat
}

#[cfg(test)]
mod tests {
    use linera_views::{
        batch::Batch,
        common::KeyValueStoreClient,
        memory::MemoryClient,
        storage_metric::{get_metric_memory_client, metric, MetricKeyValueClient, MetricStat},
    };

    async fn get_memory_test_state() -> MetricKeyValueClient<MemoryClient> {
        let client = get_metric_memory_client();
        assert_eq!(metric(&client).await, MetricStat::default());
        let mut batch = Batch::new();
        batch.put_key_value_bytes(vec![1, 2, 3], vec![1]);
        batch.put_key_value_bytes(vec![1, 2, 4], vec![2, 2]);
        batch.put_key_value_bytes(vec![1, 2, 5], vec![3, 3, 3]);
        batch.put_key_value_bytes(vec![1, 3, 3], vec![4, 4, 4, 4]);
        batch.delete_key(vec![1, 3, 7]);
        batch.delete_key_prefix(vec![2, 3]);
        client.write_batch(batch, &[]).await.unwrap();
        assert_eq!(
            metric(&client).await,
            MetricStat {
                n_reads: 0,
                n_miss_reads: 0,
                n_puts: 4,
                n_deletes: 1,
                n_delete_prefix: 1,
                size_writes: 27,
                size_reads: 0
            }
        );
        client
    }

    #[tokio::test]
    async fn test_metric_read_existing_key() {
        let client = get_memory_test_state().await;
        client.read_key_bytes(&[1, 3, 3]).await.unwrap();
        assert_eq!(
            metric(&client).await,
            MetricStat {
                n_reads: 1,
                n_miss_reads: 0,
                n_puts: 4,
                n_deletes: 1,
                n_delete_prefix: 1,
                size_writes: 27,
                size_reads: 4
            }
        );
    }

    #[tokio::test]
    async fn test_metric_read_missing_key() {
        let client = get_memory_test_state().await;
        client.read_key_bytes(&[1, 4, 4]).await.unwrap();
        assert_eq!(
            metric(&client).await,
            MetricStat {
                n_reads: 1,
                n_miss_reads: 1,
                n_puts: 4,
                n_deletes: 1,
                n_delete_prefix: 1,
                size_writes: 27,
                size_reads: 0
            }
        );
    }

    #[tokio::test]
    async fn test_metric_read_multi_key() {
        let client = get_memory_test_state().await;
        client
            .read_multi_key_bytes(vec![vec![1, 3, 3], vec![1, 2, 5]])
            .await
            .unwrap();
        assert_eq!(
            metric(&client).await,
            MetricStat {
                n_reads: 2,
                n_miss_reads: 0,
                n_puts: 4,
                n_deletes: 1,
                n_delete_prefix: 1,
                size_writes: 27,
                size_reads: 7
            }
        );
    }

    #[tokio::test]
    async fn test_metric_find_keys() {
        let client = get_memory_test_state().await;
        client.find_keys_by_prefix(&[1, 2]).await.unwrap();
        assert_eq!(
            metric(&client).await,
            MetricStat {
                n_reads: 0,
                n_miss_reads: 0,
                n_puts: 4,
                n_deletes: 1,
                n_delete_prefix: 1,
                size_writes: 27,
                size_reads: 3
            }
        );
    }

    #[tokio::test]
    async fn test_metric_find_key_values() {
        let client = get_memory_test_state().await;
        client.find_key_values_by_prefix(&[1, 2]).await.unwrap();
        assert_eq!(
            metric(&client).await,
            MetricStat {
                n_reads: 0,
                n_miss_reads: 0,
                n_puts: 4,
                n_deletes: 1,
                n_delete_prefix: 1,
                size_writes: 27,
                size_reads: 9
            }
        );
    }
}
