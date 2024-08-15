searchState.loadedDescShard("cargo_toml", 0, "This crate defines <code>struct</code>s that can be deserialized with …\nThis crate supports reading <code>Cargo.toml</code> not only from a …\nRepresents a TOML array\nIn badges section of Cargo.toml\n<code>[badges]</code> section of <code>Cargo.toml</code>, deprecated by crates-io …\nRepresents a TOML boolean\nRepresents a TOML datetime\nVerbosity of debug info in a <code>Profile</code>\nDependency definition. Note that this struct doesn’t …\nWhen definition of a dependency is more than just a …\nDependencies. The keys in this map are not always crate …\n<code>{ version = &quot;^1.5&quot;, features = [&quot;a&quot;, &quot;b&quot;] }</code> etc.\n2015\n2018\n2021\nEdition setting, which opts in to new Rust/Cargo behaviors.\nIn this crate’s <code>Result</code>s.\nTrue\nThe <code>[features]</code> section. This set may be incomplete!\n<code>AbstractFilesystem</code> implementation for real files.\nOpt-in to default, or explicit opt-out\nRepresents a TOML float\n2 or true\nPlaceholder for a property that may be missing from its …\nIncomplete data\nWhen a dependency is defined as <code>{ workspace = true }</code>, and …\nManifest uses workspace inheritance, and the data hasn’t …\nRepresents a TOML integer\nFilesystem access errors\n1 = line tables only\nLint definition.\nLint groups such as [lints.rust].\nLint level.\nA set of lints.\n<code>[lints]</code> section.\nHandling of LTO in a build profile\nA <code>Badges</code> field with <code>MaintenanceStatus</code>.\nMainly used to deprecate crates.\nThe top-level <code>Cargo.toml</code> structure. <strong>This is the main type </strong>…\n0 or false\nfalse\noff\nA way specify or disable README or <code>build.rs</code>.\n???\nThe <code>[package]</code> section of the <code>Manifest</code>. This is where crate …\nWorkspace can predefine properties that can be inherited …\nTOML parsing errors\nLocally replace dependencies\nExplicit path\nCargo uses the term “target” for both “target …\nCompilation/optimization settings for a workspace\nBuild-in an custom build/optimization settings\nForbids or selects custom registry\n<code>resolver = &quot;2&quot;</code> setting. Needed in <code>Workspace</code>, but implied …\nVersion requirement (e.g. <code>^1.5</code>)\nRepresents a TOML string\nHandling of debug symbols in a build profile\ntrue\nRepresents a TOML table\nDependencies that are platform-specific or enabled through …\nConfig target (see <code>parse_cfg</code> crate) + deps for the target.\nfalse\nRepresentation of a TOML value.\nA manifest can contain both a package and workspace-wide …\nManifest uses workspace inheritance, and the workspace …\nManifest uses workspace inheritance, but the root …\nAppveyor: <code>repository</code> is required. <code>branch</code> is optional; …\nExtracts the array value if it is an array.\nExtracts the array value if it is an array.\nExtracts the boolean value if it is a boolean.\nExtracts the datetime value if it is a datetime.\nExtracts the float value if it is a float.\nExtracts the integer value if it is an integer.\nExtracts the string of this value if it is a string.\nExtracts the table value if it is a table.\nExtracts the table value if it is a table.\nPanics if the field is not available (inherited from a …\nDeprecated\ne.g. [“Author e@mail”, “etc”] Deprecated.\nDiscover benchmarks from the file system\nDiscover binaries from the file system\nDiscover examples from the file system\nDiscover tests from the file system\n<code>[badges]</code> section\nBenchmarks\nUsed for <code>cargo bench</code> (nightly)\nA flag for enabling benchmarks for this product. This is …\nNote that due to autobins feature this is not the complete …\nRead dependency from git branch, not allowed on crates-io.\nBuild script definition\nBuild-time deps\nplatform-specific build-time deps\nProfile overrides for build dependencies, <code>*</code> is special.\nPanics if the field is not available (inherited from a …\nSee https://crates.io/category_slugs\nThis is a list of up to five categories where this crate …\nPanics if the field is not available (inherited from a …\nCircle CI: <code>repository</code> is required. <code>branch</code> is optional; …\nCodecov: <code>repository</code> is required. <code>branch</code> is optional; …\nParallel compilation\n<code>Cargo.toml</code> doesn’t contain explicit information about …\n<code>Cargo.toml</code> doesn’t contain explicit information about …\n<code>Manifest::complete_from_path</code>, but allows passing workspace …\nCoveralls: <code>repository</code> is required. <code>branch</code> is optional; …\nThe available options are “dylib”, “rlib”, “…\nUser-suppiled for <code>cargo --profile=name</code>\n0,1,2 or bool\nExtra assertions\nEnable the <code>default</code> set of features of the dependency …\nMembers to operate on when in the workspace root.\nThe default binary to run by cargo run.\nNormal dependencies\nTemplate for needs_workspace_inheritance\nplatform-specific normal deps\nPanics if the field is not available (inherited from a …\nMulti-line text, some people use Markdown here\nA short blurb about the package. This is not rendered in …\nGet object with special dependency settings if it’s not …\nPanics if inherited value is not available\nUsed by default, weirdly called <code>debug</code> profile.\nDev/test-only deps\nplatform-specific dev-only/test-only deps\nUsed for <code>cargo doc</code>\nA flag for enabling documentation of this product. This is …\nA flag for enabling documentation tests for this product. …\nPanics if the field is not available (inherited from a …\nURL\nPath to your custom docs. Unnecssary if you rely on …\nPanics if the field is not available (inherited from a …\nOpt-in to new Rust behaviors\nIf set then a product can be configured to use a different …\nPackage’s edition opt-in.\nExamples\nPanics if the field is not available (inherited from a …\nIgnore these dirs\nDon’t publish these files, relative to workspace\nDon’t publish these files\nThe <code>[features]</code> section. This set may be incomplete!\nEnable these features of the dependency. <code>default</code> is …\nList all files and directories at the given relative path …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nInherits if <code>None</code>\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nParse contents from a <code>Cargo.toml</code> file on disk.\nParse contents from <code>Cargo.toml</code> file on disk, with custom …\nParse contents of a <code>Cargo.toml</code> file already loaded as a …\nParse <code>Cargo.toml</code>, and parse its <code>[package.metadata]</code> into a …\nParse contents of a <code>Cargo.toml</code> file loaded as a string\nIndex into a TOML array or map. A string index can be used …\nFails if inherited\nMutably index into a TOML array or map. A string index can …\nGit URL of this dependency, if any\nRead dependency from git repo URL, not allowed on …\nGit commit of this dependency, if any\nGitLab: <code>repository</code> is required. <code>branch</code> is optional; …\nLint groups\nIf set to false, <code>cargo test</code> will omit the <code>--test</code> flag to …\nPanics if the field is not available (inherited from a …\nHomepage URL\nProject’s homepage\nPanics if the field is not available (inherited from a …\nPublish these files, relative to workspace\nPublish these files\nSupport for incremental rebuilds\nCopy from workspace if needed\nCopy workspace-inheritable properties from the …\nIf true, the dependency has been defined at the workspace …\nOnly relevant for non-standard profiles\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTests whether this value is an array.\nTests whether this value is a boolean.\n<code>true</code> if it’s an usual crates.io dependency, <code>false</code> if …\nTests whether this value is a datetime.\nFalse if inherited and unknown\nFalse if inherited and unknown\nTests whether this value is a float.\nTests whether this value is an integer.\nIs it maintained resolution time: <code>repository</code> is required.\nIs it maintained percentage of open issues: <code>repository</code> is …\nYou can read the value\nTests if this value is a string.\nTests whether this value is a table.\nPanics if the field is not available (inherited from a …\nFor search\nUp to 5, for search\nNote that due to autolibs feature this is not the complete …\nPanics if the field is not available (inherited from a …\nSPDX\ne.g. “MIT”\nPanics if the field is not available (inherited from a …\nIf not SPDX\nIf <code>license</code> is not standard\nThe property that doesn’t actually link with anything.\nIt doesn’t link to anything\nLints\nWorkspace-level lint groups\nLink-time-optimization\nMaintenance: <code>status</code> is required. Available options are …\nRelative paths of crates in here\nShared info\nArbitrary metadata of any type, an extension point for 3rd …\nName of the package/crate. Libraries and binaries can …\nThe name of a product is the name of the library or binary …\nCareful: some names are uppercase, case-sensitive. <code>-</code> …\nIf <code>true</code>, some fields are unavailable. If <code>false</code>, it’s …\nPrefer creating it by parsing a <code>Manifest</code> instead.\nnum or z, s\nIs it optional. Note that optional deps can be used as …\nNB: Not allowed at workspace level\nCheck integer arithmetic\nPanics if it’s not a package (only a workspace).\n<code>Some</code> if it overrides the package name. If <code>None</code>, use the …\nPackage definition (a cargo crate)\nTemplate for inheritance\nProfile overrides for dependencies, <code>*</code> is special.\nUse this crate name instead of table key.\nHandling of panics/unwinding\nThe <code>rel_path_hint</code> may be specified explicitly by …\nThe <code>rel_path_hint</code> may be specified explicitly by …\n<code>[patch.crates-io]</code> section\nThis field points at where the crate is located, relative …\nThis path is usually relative to the crate’s manifest, …\nIf the product is meant to be a compiler plugin, this …\nIf the product is meant to be a “macros 1.1” …\nCompilation/optimization settings\nPanics if the field is not available (inherited from a …\nBlock publishing or choose custom registries\nDisable publishing or select custom registries.\n<code>parse_root_workspace</code> is preferred.\n<code>parse_root_workspace</code> is preferred.\nPanics if the field is not available (inherited from a …\nOpt-out or custom path, relative to workspace\nThis points to a file under the package root (relative to …\nFetch this dependency from a custom 3rd party registry …\nDirectly define custom 3rd party registry URL (may be …\nUsed for <code>--release</code>\nObsolete\nPanics if the field is not available (inherited from a …\n(HTTPS) repository URL\n(HTTPS) URL to crate’s repository\nVersion requirement\nEnable extra features for this dep, in addition to the …\nThe <code>required-features</code> field specifies which features the …\nCompatibility setting\n“2” is the only useful value\nRead dependency from git commit, not allowed on crates-io.\nFor dynamic libraries\nPanics if the field is not available (inherited from a …\nMinimum required rustc version in format <code>1.99</code>\nMSRV 1.x (beware: does not require semver formatting)\nTests whether this and another value have the same type.\nMove debug info to separate files\nRemove debug info\nRead dependency from git tag, not allowed on crates-io.\n<code>[target.cfg.dependencies]</code>\nIntegration tests\nUsed for <code>cargo test</code>\nA flag for enabling unit tests for this product. This is …\nTravis CI: <code>repository</code> in format <code>&quot;&lt;user&gt;/&lt;project&gt;&quot;</code> is …\nReturns error if inherited value is not available\nConvert a <code>T</code> into <code>toml::Value</code> which is an enum that can …\nInterpret a <code>toml::Value</code> as an instance of type <code>T</code>.\nReturns a human-readable representation of the type of …\nContains the remaining unstable keys and values for the …\nPanics if inherited\nPanics if the field is not available (inherited from a …\nPackage version semver\nSemver requirement. Note that a plain version number …\nMust parse as semver, e.g. “1.9.0”\nWorkspace-wide settings\nWorkspace this package is a member of (<code>None</code> if it’s …\nInherit lint rules from the workspace.\nAlways <code>true</code> (this is for serde)\nControls which lints or lint groups override other lint …")