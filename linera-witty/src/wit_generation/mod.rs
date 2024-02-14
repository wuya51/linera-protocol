// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

//! Generation of WIT files.

pub use crate::type_traits::RegisterWitTypes;

use std::collections::HashMap;
#[cfg(feature = "wit-generation")]
use {
    std::{io, path::Path},
    tokio::{
        fs::File,
        io::{AsyncWriteExt, BufWriter},
    },
};

/// Generates WIT snippets for an interface.
pub trait WitInterface {
    /// The [`WitType`]s that this interface uses.
    type Dependencies: RegisterWitTypes;

    /// The name of the package the interface belongs to.
    fn wit_package() -> &'static str;

    /// The name of the interface.
    fn wit_name() -> &'static str;

    /// The WIT definitions of each function in this interface.
    fn wit_functions() -> Vec<String>;
}

/// Helper type to write a [`WitInterface`] to a file.
#[derive(Clone, Debug)]
pub struct WitInterfaceWriter {
    package: &'static str,
    name: &'static str,
    types: HashMap<String, String>,
    functions: Vec<String>,
}

impl WitInterfaceWriter {
    /// Prepares a new [`WitInterfaceWriter`] to write the provided `Interface`.
    pub fn new<Interface>() -> Self
    where
        Interface: WitInterface,
    {
        let mut types = HashMap::new();

        Interface::Dependencies::register_wit_types(&mut types);

        WitInterfaceWriter {
            package: Interface::wit_package(),
            name: Interface::wit_name(),
            types,
            functions: Interface::wit_functions(),
        }
    }

    /// Creates a file at `path` with the interface definition, optionally including a `package`
    /// header.
    #[cfg(feature = "wit-generation")]
    pub async fn write_to_file(&self, path: impl AsRef<Path>) -> Result<(), io::Error> {
        let mut file = BufWriter::new(File::create(path).await?);

        file.write_all(b"package ").await?;
        file.write_all(self.package.as_bytes()).await?;
        file.write_all(b";\n\n").await?;

        file.write_all(b"interface ").await?;
        file.write_all(self.name.as_bytes()).await?;
        file.write_all(b" {\n").await?;

        for function in &self.functions {
            file.write_all(function.as_bytes()).await?;
            file.write_all(b"\n").await?;
        }

        for type_declaration in self.types.values() {
            if !type_declaration.is_empty() {
                file.write_all(b"\n").await?;
                file.write_all(type_declaration.as_bytes()).await?;
            }
        }

        file.write_all(b"}\n").await?;
        file.flush().await?;

        Ok(())
    }
}

/// Helper type to write a WIT file declaring a
/// [world](https://github.com/WebAssembly/component-model/blob/main/design/mvp/WIT.md#wit-worlds).
#[derive(Clone, Debug)]
pub struct WitWorldWriter {
    package: Option<&'static str>,
    name: String,
    imports: Vec<&'static str>,
    exports: Vec<&'static str>,
}

impl WitWorldWriter {
    /// Creates a new [`WitWorldWriter`] to write a world with the provided `name`.
    pub fn new(package: impl Into<Option<&'static str>>, name: impl Into<String>) -> Self {
        WitWorldWriter {
            package: package.into(),
            name: name.into(),
            imports: Vec::new(),
            exports: Vec::new(),
        }
    }

    /// Registers a [`WitInterface`] to be imported into this world.
    pub fn import<Interface>(&mut self) -> &mut Self
    where
        Interface: WitInterface,
    {
        self.imports.push(Interface::wit_name());
        self
    }

    /// Registers a [`WitInterface`] to be exported from this world.
    pub fn export<Interface>(&mut self) -> &mut Self
    where
        Interface: WitInterface,
    {
        self.exports.push(Interface::wit_name());
        self
    }

    /// Creates a file at `path` with the world definition, optionally including a `package`
    /// header.
    #[cfg(feature = "wit-generation")]
    pub async fn write_to_file(&self, path: impl AsRef<Path>) -> Result<(), io::Error> {
        let mut file = BufWriter::new(File::create(path).await?);

        if let Some(package) = &self.package {
            file.write_all(b"package ").await?;
            file.write_all(package.as_bytes()).await?;
            file.write_all(b";\n\n").await?;
        }

        file.write_all(b"world ").await?;
        file.write_all(self.name.as_bytes()).await?;
        file.write_all(b" {\n").await?;

        for import in &self.imports {
            file.write_all(b"    import ").await?;
            file.write_all(import.as_bytes()).await?;
            file.write_all(b";\n").await?;
        }

        file.write_all(b"\n").await?;

        for export in &self.exports {
            file.write_all(b"    export ").await?;
            file.write_all(export.as_bytes()).await?;
            file.write_all(b";\n").await?;
        }

        file.write_all(b"}\n").await?;
        file.flush().await?;

        Ok(())
    }
}
