// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

use rand::{Rng, SeedableRng};
use std::fmt::Debug;
use linera_views::test_utils::get_namespace;
use linera_views::common::AdminKeyValueStore;

#[cfg(feature = "rocksdb")]
use linera_views::rocks_db::create_rocks_db_test_store;

#[cfg(feature = "aws")]
use linera_views::dynamo_db::create_dynamo_db_test_store;

#[cfg(feature = "scylladb")]
use linera_views::scylla_db::{ScyllaDbStore, ScyllaDbContextError, create_scylla_db_initial_config};

#[cfg(test)]
fn is_equal_vect(vec1: &Vec<String>, vec2: &Vec<String>) -> bool {
    if vec1.len() != vec2.len() {
        return false;
    }
    for x1 in vec1 {
        if !vec2.contains(x1) {
            return false;
        }
    }
    true
}

#[cfg(test)]
async fn admin_test<E: Debug, S: AdminKeyValueStore<E>>(config: &S::Config) {
    let mut rng = rand::rngs::StdRng::seed_from_u64(2);
    for size in vec![1, 3, 9] {
        // Creating the initial list of namespaces
        let mut working_namespaces = Vec::new();
        for _i in 1..size {
            let namespace = get_namespace();
            let test = S::exists(config, &namespace).await.expect("test");
            assert!(!test);
            working_namespaces.push(namespace);
        }
        // Creating the namespaces
        for namespace in &working_namespaces {
            S::create(config, namespace).await.expect("creation of a namespace");
        }
        // Checking that they exists
        for namespace in &working_namespaces {
            let test = S::exists(config, namespace).await.expect("test");
            assert!(test);
        }
        // Listing all of them
        let namespaces = S::list_all(config).await.expect("tables");
        assert!(is_equal_vect(&namespaces, &working_namespaces));
        // Selecting at random some for deletion
        let mut deleted_namespaces = Vec::new();
        let mut kept_namespaces = Vec::new();
        for namespace in working_namespaces {
            let delete = rng.gen::<bool>();
            if delete {
                S::delete(config, &namespace).await.expect("A successful deletion");
                deleted_namespaces.push(namespace);
            } else {
                kept_namespaces.push(namespace);
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
        let namespaces = S::list_all(config).await.expect("tables");
        assert!(is_equal_vect(&namespaces, &kept_namespaces));
        // deleting everything
        S::delete_all(config).await.expect("complete deletion");
        let namespaces = S::list_all(config).await.expect("tables");
        assert_eq!(namespaces.len(), 0);
    }
}

#[cfg(feature = "rocksdb")]
#[tokio::test]
async fn test_rocks_db_writes_from_blank() {
    let (key_value_store, _dir) = create_rocks_db_test_store().await;
    run_writes_from_blank(&key_value_store).await;
}

#[cfg(feature = "aws")]
#[tokio::test]
async fn test_dynamo_db_writes_from_blank() {
    let key_value_store = create_dynamo_db_test_store().await;
    run_writes_from_blank(&key_value_store).await;
}

#[cfg(feature = "scylladb")]
#[tokio::test]
async fn test_scylla_db_writes_from_blank() {
    // We need a lock during that test
    let config = create_scylla_db_initial_config().await;
    admin_test::<ScyllaDbContextError,ScyllaDbStore>(&config).await;
}