// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

#[cfg(feature = "serde")]
use serde::de::DeserializeOwned;

#[cfg(feature = "serde")]
pub trait FromBcsBytes: Sized {
    fn from_bcs_bytes(bytes: &[u8]) -> Result<Self, bcs::Error>;
}

#[cfg(feature = "serde")]
impl<AnyType> FromBcsBytes for AnyType
where
    AnyType: DeserializeOwned,
{
    fn from_bcs_bytes(bytes: &[u8]) -> Result<Self, bcs::Error> {
        bcs::from_bytes(bytes)
    }
}
