// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

use linera_views::{
    memory::create_memory_context,
    map_view::ByteMapView,
    views::{CryptoHashRootView, RootView, View},
};
use rand::{Rng, SeedableRng};
use std::collections::BTreeMap;
use linera_views::common::get_interval;

#[derive(CryptoHashRootView)]
pub struct StateView<C> {
    pub map: ByteMapView<C, u8>,
}

fn remove_by_prefix<V>(map: &mut BTreeMap<Vec<u8>, V>, key_prefix: Vec<u8>) {
    let key_list = map
        .range(get_interval(key_prefix.clone()))
        .map(|x| x.0.to_vec())
        .collect::<Vec<_>>();
    for key in key_list {
        map.remove(&key);
    }
}

fn convert_map<V>(map: BTreeMap<Vec<u8>,V>) -> Vec<(Vec<u8>, V)> {
    let mut vec = Vec::new();
    for (key, value) in map {
        vec.push((key, value));
    }
    vec
}






#[tokio::test]
async fn map_view_mutability_check() {
    let context = create_memory_context();
    let mut rng = rand::rngs::StdRng::seed_from_u64(2);
    let mut state_map = BTreeMap::new();
    let n = 20;
    for _ in 0..n {
        let mut view = StateView::load(context.clone()).await.unwrap();
        let save = rng.gen::<bool>();
        let read_state = view.map.key_values().await.unwrap();
        let state_vec = convert_map(state_map.clone());
        assert_eq!(state_vec, read_state);
        //
        let count_oper = rng.gen_range(0..25);
        let mut new_state_map = state_map.clone();
        let mut new_state_vec = convert_map(new_state_map.clone());
        for _ in 0..count_oper {
            let thr = rng.gen_range(0..5);
            let count = view.map.count().await.unwrap();
            if thr == 0 {
                // inserting random stuff
                let n_ins = rng.gen_range(0..10);
                for _ in 0..n_ins {
                    let len = rng.gen_range(0..4);
                    let mut key = Vec::new();
                    for _ in 0..len {
                        let val = rng.gen_range(0..4) as u8;
                        key.push(val);
                    }
                    let value = rng.gen::<u8>();
                    view.map.insert(key.clone(), value);
                    new_state_map.insert(key, value);
                }
            }
            if thr == 1 {
                // deleting some entries
                if count > 0 {
                    let n_remove = rng.gen_range(0..count);
                    for _ in 0..n_remove {
                        let pos = rng.gen_range(0..count);
                        println!("|new_state_vec|={} pos={}", new_state_vec.len(), pos);
                        let vec = new_state_vec[pos].clone();
                        view.map.remove(vec.0.clone());
                        new_state_map.remove(&vec.0);
                    }
                }
            }
            if thr == 2 && count > 0 {
                // deleting a prefix
                let val = rng.gen_range(0..4) as u8;
                let key_prefix = vec![val];
                view.map.remove_by_prefix(key_prefix.clone());
                remove_by_prefix(&mut new_state_map, key_prefix);
            }
            if thr == 3 {
                // Doing the clearing
                view.clear();
                new_state_map.clear();
            }
            if thr == 4 {
                // Doing the rollback
                view.rollback();
                new_state_map = state_map.clone();
            }
            new_state_vec = convert_map(new_state_map.clone());
            let new_key_values = view.map.key_values().await.unwrap();
            assert_eq!(new_state_vec, new_key_values);
        }
        if save {
            state_map = new_state_map.clone();
            view.save().await.unwrap();
        }
    }
}
