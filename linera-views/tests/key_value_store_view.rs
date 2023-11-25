// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

use linera_views::{
    key_value_store_view::KeyValueStoreView,
    memory::create_memory_context,
    views::{CryptoHashRootView, RootView, View},
};
use rand::{distributions::Uniform, Rng, SeedableRng};
use std::collections::{BTreeMap, BTreeSet};
use std::fmt::Debug;

#[derive(CryptoHashRootView)]
pub struct StateView<C> {
    pub store: KeyValueStoreView<C>,
}

fn remove_by_prefix<V: Debug>(map: &mut BTreeMap<Vec<u8>, V>, key_prefix: Vec<u8>) {
    map.retain(|key, _| !key.starts_with(&key_prefix));
}

fn total_size(vec: &Vec<(Vec<u8>,Vec<u8>)>) -> (u64, u64) {
    let mut total_key_size = 0;
    let mut total_value_size = 0;
    for (key, value) in vec {
        total_key_size += key.len();
        total_value_size += value.len();
    }
    (total_key_size as u64, total_value_size as u64)
}

#[tokio::test]
async fn key_value_store_view_mutability() {
    let context = create_memory_context();
    let mut rng = rand::rngs::StdRng::seed_from_u64(2);
    let mut state_map = BTreeMap::new();
    let n = 200;
    let mut all_keys = BTreeSet::new();
    for _ in 0..n {
        let mut view = StateView::load(context.clone()).await.unwrap();
        let save = rng.gen::<bool>();
        let read_state = view.store.index_values().await.unwrap();
        let state_vec = state_map.clone().into_iter().collect::<Vec<_>>();
        assert_eq!(state_vec, read_state);
        assert_eq!(total_size(&state_vec), view.store.total_size());
        //
        let count_oper = rng.gen_range(0..25);
        let mut new_state_map = state_map.clone();
        let mut new_state_vec = state_vec.clone();
        for _ in 0..count_oper {
            let choice = rng.gen_range(0..5);
            let count = view.store.count().await.unwrap();
            if choice == 0 {
                // inserting random stuff
                let n_ins = rng.gen_range(0..10);
                for _ in 0..n_ins {
                    let len = rng.gen_range(1..6);
                    let key = rng
                        .clone()
                        .sample_iter(Uniform::from(0..4))
                        .take(len)
                        .collect::<Vec<_>>();
                    all_keys.insert(key.clone());
                    let value = Vec::new();
                    view.store.insert(key.clone(), value.clone()).await.unwrap();
                    new_state_map.insert(key, value);
                    //
                    new_state_vec = new_state_map.clone().into_iter().collect();
                    let new_key_values = view.store.index_values().await.unwrap();
                    assert_eq!(new_state_vec, new_key_values);
                    assert_eq!(total_size(&new_state_vec), view.store.total_size());
                }
            }
            if choice == 1 && count > 0 {
                // deleting some entries
                let n_remove = rng.gen_range(0..count);
                for _ in 0..n_remove {
                    let pos = rng.gen_range(0..count);
                    let vec = new_state_vec[pos].clone();
                    view.store.remove(vec.0.clone()).await.unwrap();
                    new_state_map.remove(&vec.0);
                }
            }
            if choice == 2 && count > 0 {
                // deleting a prefix
                let val = rng.gen_range(0..5) as u8;
                let key_prefix = vec![val];
                view.store.remove_by_prefix(key_prefix.clone()).await.unwrap();
                remove_by_prefix(&mut new_state_map, key_prefix);
            }
            if choice == 3 {
                // Doing the clearing
                view.clear();
                new_state_map.clear();
            }
            if choice == 4 {
                // Doing the rollback
                view.rollback();
                new_state_map = state_map.clone();
            }
            new_state_vec = new_state_map.clone().into_iter().collect();
            let new_key_values = view.store.index_values().await.unwrap();
            assert_eq!(new_state_vec, new_key_values);
            assert_eq!(total_size(&new_state_vec), view.store.total_size());
            let all_keys_vec = all_keys.clone().into_iter().collect::<Vec<_>>();
            let tests_multi_get = view.store.multi_get(all_keys_vec).await.unwrap();
            for (i, key) in all_keys.clone().into_iter().enumerate() {
                let test_map = new_state_map.contains_key(&key);
                let test_view = view.store.get(&key).await.unwrap().is_some();
                let test_multi_get = tests_multi_get[i].is_some();
                assert_eq!(test_map, test_view);
                assert_eq!(test_map, test_multi_get);
            }
        }
        if save {
            state_map = new_state_map.clone();
            view.save().await.unwrap();
        }
    }
}
