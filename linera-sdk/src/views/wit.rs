// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

//! Imports for the service system APIs.

use linera_views::batch::WriteOperation;
use linera_witty::{
    guest::Guest, hlist_pat, GuestPointer, InstanceWithMemory, Layout, WitLoad, WitStore, WitType,
};
use std::mem::MaybeUninit;

#[link(wasm_import_module = "linera:app/view-system-api")]
extern "C" {
    #[link_name = "contains-key-new"]
    pub fn wit_contains_key_new(key_address: i32, key_length: i32) -> i32;

    #[link_name = "contains-key-wait"]
    pub fn wit_contains_key_wait(promise_id: i32) -> i32;

    #[link_name = "read-multi-values-bytes-new"]
    pub fn wit_read_multi_values_bytes_new(keys_address: i32, keys_length: i32) -> i32;

    #[link_name = "read-multi-values-bytes-wait"]
    pub fn wit_read_multi_values_bytes_wait(promise_id: i32, return_area: i32);

    #[link_name = "read-value-bytes-new"]
    pub fn wit_read_value_bytes_new(key_address: i32, key_length: i32) -> i32;

    #[link_name = "read-value-bytes-wait"]
    pub fn wit_read_value_bytes_wait(promise_id: i32, return_area: i32);

    #[link_name = "find-keys-new"]
    pub fn wit_find_keys_new(key_prefix_address: i32, key_prefix_length: i32) -> i32;

    #[link_name = "find-keys-wait"]
    pub fn wit_find_keys_wait(promise_id: i32, return_area: i32);

    #[link_name = "find-key-values-new"]
    pub fn wit_find_key_values_new(key_prefix_address: i32, key_prefix_length: i32) -> i32;

    #[link_name = "find-key-values-wait"]
    pub fn wit_find_key_values_wait(promise_id: i32, return_area: i32);

    #[link_name = "write-batch"]
    pub fn wit_write_batch(operations_address: i32, operations_length: i32);
}

macro_rules! stack_buffer_for {
    ($wit_type:ty) => {
        MaybeUninit::<
            [u8; <$wit_type as WitType>::SIZE as usize
                + <$wit_type as WitType>::Layout::ALIGNMENT as usize],
        >::uninit()
    };
}

macro_rules! stack_buffer_address {
    ($buffer:ident, $wit_type:ty) => {
        GuestPointer::from($buffer.as_mut_ptr()).after_padding_for::<$wit_type>()
    };
}

pub fn contains_key_new(key: &[u8]) -> u32 {
    let key_address = key.as_ptr() as i32;
    let key_length = key.len() as i32;

    unsafe { wit_contains_key_new(key_address, key_length) as u32 }
}

pub fn contains_key_wait(promise_id: u32) -> bool {
    unsafe { wit_contains_key_wait(promise_id as i32) != 0 }
}

pub fn read_multi_values_bytes_new(keys: Vec<Vec<u8>>) -> u32 {
    let mut guest = Guest::default();
    let mut memory = guest.memory().expect("Failed to obtain `Memory` instance");

    let hlist_pat![keys_address, keys_length] = keys
        .lower(&mut memory)
        .expect("Failed to lower keys parameter");

    unsafe { wit_read_multi_values_bytes_new(keys_address, keys_length) as u32 }
}

pub fn read_multi_values_bytes_wait(promise_id: u32) -> Vec<Option<Vec<u8>>> {
    let mut return_area = stack_buffer_for!(Vec<Option<Vec<u8>>>);
    let return_area_address = stack_buffer_address!(return_area, Vec<Option<Vec<u8>>>);
    let mut guest = Guest::default();
    let memory = guest.memory().expect("Failed to obtain `Memory` instance");

    unsafe { wit_read_multi_values_bytes_wait(promise_id as i32, return_area_address.as_i32()) };

    Vec::load(&memory, return_area_address).expect("Failed to load lock result")
}

pub fn read_value_bytes_new(key: &[u8]) -> u32 {
    let key_address = key.as_ptr() as i32;
    let key_length = key.len() as i32;

    unsafe { wit_read_value_bytes_new(key_address, key_length) as u32 }
}

pub fn read_value_bytes_wait(promise_id: u32) -> Option<Vec<u8>> {
    let mut return_area = stack_buffer_for!(Option<Vec<u8>>);
    let return_area_address = stack_buffer_address!(return_area, Option<Vec<u8>>);
    let mut guest = Guest::default();
    let memory = guest.memory().expect("Failed to obtain `Memory` instance");

    unsafe { wit_read_value_bytes_wait(promise_id as i32, return_area_address.as_i32()) };

    Option::load(&memory, return_area_address).expect("Failed to load lock result")
}

pub fn find_keys_new(key_prefix: &[u8]) -> u32 {
    let key_prefix_address = key_prefix.as_ptr() as i32;
    let key_prefix_length = key_prefix.len() as i32;

    unsafe { wit_find_keys_new(key_prefix_address, key_prefix_length) as u32 }
}

pub fn find_keys_wait(promise_id: u32) -> Vec<Vec<u8>> {
    let mut return_area = stack_buffer_for!(Vec<Vec<u8>>);
    let return_area_address = stack_buffer_address!(return_area, Vec<Vec<u8>>);
    let mut guest = Guest::default();
    let memory = guest.memory().expect("Failed to obtain `Memory` instance");

    unsafe { wit_find_keys_wait(promise_id as i32, return_area_address.as_i32()) };

    Vec::load(&memory, return_area_address).expect("Failed to load lock result")
}

pub fn find_key_values_new(key_prefix: &[u8]) -> u32 {
    let key_prefix_address = key_prefix.as_ptr() as i32;
    let key_prefix_length = key_prefix.len() as i32;

    unsafe { wit_find_key_values_new(key_prefix_address, key_prefix_length) as u32 }
}

pub fn find_key_values_wait(promise_id: u32) -> Vec<(Vec<u8>, Vec<u8>)> {
    let mut return_area = stack_buffer_for!(Vec<(Vec<u8>, Vec<u8>)>);
    let return_area_address = stack_buffer_address!(return_area, Vec<(Vec<u8>, Vec<u8>)>);
    let mut guest = Guest::default();
    let memory = guest.memory().expect("Failed to obtain `Memory` instance");

    unsafe { wit_find_key_values_wait(promise_id as i32, return_area_address.as_i32()) };

    Vec::load(&memory, return_area_address).expect("Failed to load lock result")
}

pub fn write_batch(operations: Vec<WriteOperation>) {
    let mut guest = Guest::default();
    let mut memory = guest.memory().expect("Failed to obtain `Memory` instance");

    let hlist_pat![operations_address, operations_length] = operations
        .lower(&mut memory)
        .expect("Failed to lower batch operations parameter");

    unsafe { wit_write_batch(operations_address, operations_length) };
}
