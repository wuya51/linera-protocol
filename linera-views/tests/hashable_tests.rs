// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

use linera_views::{
    common::{Context, HashOutput},
    hashable_wrapper::WrappedHashableContainerView,
    memory::create_test_context,
    register_view::RegisterView,
    views::{HashableView, View},
};
pub use linera_views_derive::{CryptoHashRootView, CryptoHashView, GraphQLView, RootView};

#[derive(CryptoHashRootView)]
struct TestType<C> {
    pub inner: RegisterView<C, String>,
    pub wrap: WrappedHashableContainerView<C, RegisterView<C, String>, HashOutput>,
}

// TODO(Implement the same for CryptoHash)
#[tokio::test]
async fn check_hashable_container_hash() {
    let context = create_test_context().await;
    let test = TestType::load(context).await.unwrap();
    let hash1 = test.inner.hash().await.unwrap();
    let hash2 = test.wrap.hash().await.unwrap();
    assert_eq!(hash1, hash2);
}
