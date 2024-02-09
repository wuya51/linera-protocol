// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

#![cfg(any(feature = "rocksdb", feature = "aws", feature = "scylladb"))]

// We exercise the functionality of the `AdminKeyValueStore`. We use a prefix
// to the list of tables created so that this test can be run in parallel to
// other tests.

use linera_views::{common::AdminKeyValueStore, test_utils::{get_namespace, generate_random_alphanumeric_string}};
use rand::{Rng, SeedableRng};
use std::{collections::BTreeSet, fmt::Debug};

#[cfg(feature = "rocksdb")]
use linera_views::rocks_db::{create_rocks_db_test_config, RocksDbContextError, RocksDbStore};

#[cfg(feature = "aws")]
use linera_views::dynamo_db::{create_dynamo_db_test_config, DynamoDbContextError, DynamoDbStore};

#[cfg(feature = "scylladb")]
use linera_views::scylla_db::{create_scylla_db_test_config, ScyllaDbContextError, ScyllaDbStore};

#[cfg(test)]
async fn get_table_matching_prefix<E: Debug, S: AdminKeyValueStore<E>>(
    config: &S::Config,
    prefix: &str,
) -> BTreeSet<String> {
    let namespaces = S::list_all(config).await.expect("namespaces");
    namespaces
        .into_iter()
        .filter(|x| x.starts_with(prefix))
        .collect::<BTreeSet<_>>()
}

#[cfg(test)]
async fn admin_test<E: Debug, S: AdminKeyValueStore<E>>(config: &S::Config) {
    let prefix = get_namespace();
    let namespaces = get_table_matching_prefix::<E, S>(config, &prefix).await;
    assert_eq!(namespaces.len(), 0);
    let mut rng = rand::rngs::StdRng::seed_from_u64(2);
    for size in [1, 3, 9] {
        // Creating the initial list of namespaces
        let mut working_namespaces = BTreeSet::new();
        for _i in 0..size {
            let pre_namespace = generate_random_alphanumeric_string(10);
            let namespace = format!("{}_{}", prefix, pre_namespace);
            let test = S::exists(config, &namespace).await.expect("test");
            assert!(!test);
            working_namespaces.insert(namespace);
        }
        // Creating the namespaces
        for namespace in &working_namespaces {
            S::create(config, namespace)
                .await
                .expect("creation of a namespace");
        }
        // Checking that they exists
        for namespace in &working_namespaces {
            let test = S::exists(config, namespace).await.expect("test");
            assert!(test);
        }
        // Listing all of them
        let namespaces = get_table_matching_prefix::<E, S>(config, &prefix).await;
        assert_eq!(namespaces, working_namespaces);
        // Selecting at random some for deletion
        let mut deleted_namespaces = BTreeSet::new();
        let mut kept_namespaces = BTreeSet::new();
        for namespace in working_namespaces {
            let delete = rng.gen::<bool>();
            if delete {
                S::delete(config, &namespace)
                    .await
                    .expect("A successful deletion");
                deleted_namespaces.insert(namespace);
            } else {
                kept_namespaces.insert(namespace);
            }
        }
        // Checking that the status is as we expect
        for namespace in &deleted_namespaces {
            let test = S::exists(config, namespace).await.expect("test");
            assert!(!test);
        }
        for namespace in &kept_namespaces {
            let test = S::exists(config, namespace).await.expect("test");
            assert!(test);
        }
        let namespaces = get_table_matching_prefix::<E, S>(config, &prefix).await;
        assert_eq!(namespaces, kept_namespaces);
        for namespace in kept_namespaces {
            S::delete(config, &namespace)
                .await
                .expect("A successful deletion");
        }
    }
}

#[cfg(feature = "rocksdb")]
#[tokio::test]
async fn admin_test_rocks_db() {
    let (config, _dir) = create_rocks_db_test_config().await;
    admin_test::<RocksDbContextError, RocksDbStore>(&config).await;
}

#[cfg(feature = "aws")]
#[tokio::test]
async fn admin_test_dynamo_db() {
    let config = create_dynamo_db_test_config().await;
    admin_test::<DynamoDbContextError, DynamoDbStore>(&config).await;
}

#[cfg(feature = "scylladb")]
#[tokio::test]
async fn admin_test_scylla_db() {
    let config = create_scylla_db_test_config().await;
    admin_test::<ScyllaDbContextError, ScyllaDbStore>(&config).await;
}
