searchState.loadedDescShard("cpp_demangle", 0, "This crate can parse a C++ “mangled” linker symbol …\nA <code>Symbol</code> which borrows the underlying storage for the …\nEntering a  production\nEntering a  production\nThe type of a demangled AST node. This is only partial, …\nOptions to control the demangling process.\nSink for demangled text that reports syntactic structure.\nEntering a  production\nA <code>Symbol</code> which owns the underlying storage for the mangled …\nOptions to control the parsing process.\nEntering a  production\nA mangled symbol that has been parsed into an AST.\nEntering a  production\nEntering a  production\nEntering a  production\nEntering a  production\nEntering a  production that is a vtable.\nAdditional values may be added in the future. Use a _ …\nAbstract syntax tree types for mangled symbols.\nDemangle the symbol and return it as a String.\nCustom <code>Error</code> and <code>Result</code> types for the <code>cpp_demangle</code> crate.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nHide type annotations in template value parameters. These …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConstruct a new <code>DemangleOptions</code> with the default values.\nGiven some raw storage, parse the mangled symbol from it …\nGiven some raw storage, parse the mangled symbol from it.\nDo not display function arguments.\nDo not display the function return type.\nCalled when we are exiting the scope of some AST node for …\nCalled when we are entering the scope of some AST node.\nSet the limit on recursion depth during the parsing phase. …\nSet the limit on recursion depth during the demangling …\nDemangle the symbol to a DemangleWrite, which lets the …\nParse a mangled symbol from input and return it and the …\nParse a mangled symbol from input and return it and the …\nSame as <code>fmt::Write::write_str</code>.\nAn ABI tag.\n+=\n&amp;\n<code>alignof (expression)</code>\n<code>alignof (type)</code>\nAn argument pack.\nAn <code>ArgScopeStack</code> represents the current function and …\nAn array type.\nThe <code>&lt;array-type&gt;</code> production.\n=\nauto\nA back-reference into the substitution table to a …\nA back-reference into the substitution table to a …\nA back-reference into the substitution table to a …\nA back-reference into the substitution table to a …\nA back-reference into the substitution table to a …\nA reference to an entity that already occurred, ie the <code>S_</code> …\nThe <code>&lt;bare-function-type&gt;</code> production.\n“C2”, the “base object constructor”\n“D2”, the “base object destructor”\nThe <code>&lt;base-unresolved-name&gt;</code> production.\nA binary operator expression.\n&amp;\n&amp;=\n~\n|\n|=\n^\n^=\nThe encoding of the mangled symbol name.\nbool\nA braced init list expression.\nA builtin type. These don’t end up in the substitutions …\nThe <code>&lt;builtin-type&gt;</code> production.\n()\nA call with functor and arguments.\nThe <code>&lt;call-offset&gt;</code> production.\nA type cast.\nchar\nchar16_t\nchar32_t\nchar8_t\nA class, union, or enum type.\nThe <code>&lt;class-enum-type&gt;</code> production.\n ::= [ .  ] [ .  ]*\nThe <code>&lt;clone-type-identifier&gt;</code> pseudo-terminal.\nA closure type name\nThe <code>&lt;closure-type-name&gt;</code> production.\n,\n“C3”, the “complete object allocating constructor”\n“C1”, the “complete object constructor”\n“D1”, the “complete object destructor”\nA complex pair of the given type.\n<code>const_cast&lt;type&gt; (expression)</code>\nA construction vtable structure.\nA type conversion.\nA type conversion with many arguments.\nA type conversion with many arguments.\nA type conversion with one argument.\nA global constructor.\nA constructor or destructor name.\nThe <code>&lt;ctor-dtor-name&gt;</code> production.\nThe <code>&lt;CV-qualifiers&gt;</code> production.\nAn encoded static variable.\nA prefix and data member.\nThe <code>&lt;data-member-prefix&gt;</code> production.\ndecimal128\nhalf\ndecimal32\ndecimal64\nThe <code>&lt;decltype&gt;</code> production.\nA decltype.\nA decltype.\ndecltype(auto)\nAn unresolved <code>decltype</code>.\nA default argument in a class definition.\ndelete\nThe <code>delete</code> operator.\ndelete[]\nThe <code>delete[]</code> operator.\n“D0”, the “deleting destructor”\n-&gt;\n<code>expr-&gt;name</code>\n-&gt;*\nAn unresolved destructor name.\nThe <code>&lt;destructor-name&gt;</code> production.\nAn array with an expression for its dimension.\nAn vector with an expression for its dimension.\nAn array with a number-literal dimension.\nAn vector with a number-literal dimension.\nThe <code>&lt;discriminator&gt;</code> production.\n/\n/=\ndouble\nA global destructor.\n<code>dynamic_cast&lt;type&gt; (expression)</code>\nA dependent elaborated type specifier using ‘enum’.\nA dependent elaborated type specifier using ‘struct’ …\nA dependent elaborated type specifier using ‘union’.\n…\nThe <code>&lt;encoding&gt;</code> production.\nThe encoding of the mangled symbol name.\n==\nThe <code>&lt;expr-primary&gt;</code> production.\nThe <code>&lt;expression&gt;</code> production.\nA <code>decltype</code> of an expression (C++0x).\nAn expression.\nA non-standard, vendor extension type.\nAn external name.\nfloat\n__float128\nAn encoded function.\nA function type.\nThe  production.\nA function parameter.\nThe <code>&lt;function-type&gt;</code> production.\n<code>::x</code>\nA global constructor or destructor.\nA global constructor or destructor. This is another de …\nThe global <code>::delete</code> operator.\nThe global <code>::delete[]</code> operator.\n<code>::A::x</code> or <code>::N::y</code> or <code>::A&lt;T&gt;::z</code>\nThe global <code>::new</code> operator.\nThe global <code>::new[]</code> operator.\n=\nAn initialization guard for some static storage.\nA temporary used in the initialization of a static storage …\nA <code>decltype</code> of an id-expression or class member access …\nThe <code>&lt;identifier&gt;</code> pseudo-terminal.\nAn imaginary of the given type.\n[]\nThe <code>&lt;initializer&gt;</code> production.\nint\n__int128\nA Java Resource.\n&amp;\nThe <code>&lt;lambda-sig&gt;</code> production.\n&lt;\n&lt;=\nOperator literal, ie <code>operator &quot;&quot;</code>.\nA type literal.\nA local name.\nThe <code>&lt;local-name&gt;</code> production.\nA local source name.\n&amp;&amp;\n||\nlong\nlong double\nlong long\nAn lvalue reference to a type.\nThe root AST node, and starting production.\n“C4”, the “maybe in-charge constructor”\n“D4”, the “maybe in-charge destructor”\n<code>expr.name</code>\nIn libiberty, Member and DerefMember expressions have …\n*=\nThe <code>&lt;name&gt;</code> production.\n<code>x</code>\nAn unresolved name.\nA destructor for a resolved type name.\nA non-dependent type name, dependent type name, or …\n!=\nA nested name\nSome nested name.\n<code>T::x</code>  or <code>decltype(p)::x</code> or <code>T::N::x</code> or <code>decltype(p)::N::x</code>\n<code>A::x</code> or <code>N::y</code> or <code>A&lt;T&gt;::z</code>\nThe <code>&lt;nested-name&gt;</code> production.\nnew\nThe <code>new</code> operator.\nnew[]\nThe <code>new[]</code> operator.\nAn array with no dimension.\n<code>noexcept (expression)</code>\nA handle to a component that is usually substitutable, and …\nA handle to some <code>&lt;unscoped-name&gt;</code> component that isn’t by …\nA handle to some <code>&lt;prefix&gt;</code> component that isn’t by itself …\nA function declared non-transaction-safe\nA non-virtual offset.\n!\nstd::nullptr_t\nA non-virtual offset, as described by the  production.\nAn operator name.\nAn unresolved function or template function name.\nThe <code>&lt;operator-name&gt;</code> production.\nA pack expansion.\n<code>expression...</code>, pack expansion.\nCommon context needed when parsing.\nA pointer to a type.\nA pointer-to-member type.\n<code>expr.*expr</code>\nThe <code>&lt;pointer-to-member-type&gt;</code> production.\n–\n++\nThe <code>&lt;prefix&gt;</code> production.\nA prefix <code>--</code>.\nA reference to a parsed <code>&lt;prefix&gt;</code> production.\nA prefix <code>++</code>.\nAn <code>&lt;expr-primary&gt;</code> production.\nA const-, restrict-, and/or volatile-qualified type.\nA built-in type with CV-qualifiers.\nA CV-qualified builtin type. These don’t end up in the …\n?:\n&amp;&amp;\nA  production.\n<code>reinterpret_cast&lt;type&gt; (expression)</code>\nThe mangling of the enclosing function, the mangling of …\n%\n%=\nThe <code>&lt;resource name&gt;</code> pseudo-terminal.\n<code>throw</code> with no operand\nAn rvalue reference to a type.\nA  production encoding a base-36 positive number.\n&lt;&lt;\n&lt;&lt;=\nshort\n=\nsigned char\nA simple operator name.\nA simple expression.\nThe <code>&lt;simple-id&gt;</code> production.\nThe <code>&lt;simple-operator-name&gt;</code> production.\n<code>sizeof...(T)</code>, size of a captured template parameter pack …\n<code>sizeof (expression)</code>\n<code>sizeof...(parameter)</code>, size of a function parameter pack.\n<code>sizeof...(T)</code>, size of a template parameter pack.\n<code>sizeof (type)</code>\nA source name.\nThe <code>&lt;source-name&gt;</code> non-terminal.\n&lt;=&gt;\nA special encoding.\nThe <code>&lt;special-name&gt;</code> production.\nA standards compliant builtin type.\nA one of the standard variants of the  production.\n<code>static_cast&lt;type&gt; (expression)</code>\nA name within the <code>std::</code> namespace.\nstd\nstd::allocator\nstd::basic_iostream&lt;char, std::char_traits &gt;\nstd::basic_istream&lt;char, std::char_traits &gt;\nstd::ostream\nstd::basic_string\nstd::string\n-=\nThe <code>&lt;substitution&gt;</code> form: a back-reference to some …\nThe <code>&lt;tagged-name&gt;</code> non-terminal.\nA nested template name. The <code>&lt;template-args&gt;</code> are part of …\nA prefix and template arguments.\nAn unresolved template type.\nA  production.\nThe <code>&lt;template-args&gt;</code> production.\nThe <code>&lt;template-param&gt;</code> production.\nA template parameter.\nA named template parameter type.\nA named template parameter.\nA template template type.\nThe <code>&lt;template-template-param&gt;</code> production.\nA reference to a parsed <code>TemplateTemplateParam</code>.\nA ternary operator expression.\n<code>throw expression</code>\nA TLS initialization function.\nA TLS wrapper function.\nA function declared transaction-safe\nThe <code>&lt;type&gt;</code> production.\nA top-level type. Technically not allowed by the standard, …\nA type or template.\nA reference to a parsed <code>Type</code> production.\n<code>typeid (expression)</code>\n<code>typeid (type)</code>\nA typeinfo structure.\nA typeinfo function.\nA typeinfo name (null-terminated byte string).\nunsigned __int128\nA unary operator expression.\nA generated name for an unnamed type.\nThe <code>&lt;unnamed-type-name&gt;</code> production.\nAn unqualified name.\nA nested name.\nAn unqualified name.\nThe <code>&lt;unqualified-name&gt;</code> production.\nA destructor for an unresolved type.\nThe <code>&lt;unresolved-name&gt;</code> production.\n<code>f(p)</code>, <code>N::f(p)</code>, <code>::f(p)</code>, freestanding dependent name (e.g., …\nThe <code>&lt;unresolved-qualifier-level&gt;</code> production.\nThe <code>&lt;unresolved-type&gt;</code> production.\nA reference to a parsed <code>&lt;unresolved-type&gt;</code> production.\nAn unscoped name.\nThe <code>&lt;unscoped-name&gt;</code> production.\nAn unscoped template.\nThe <code>&lt;unscoped-template-name&gt;</code> production.\nA handle to an <code>UnscopedTemplateName</code>.\nunsigned char\nunsigned int\nunsigned long\nunsigned long long\nunsigned short\nA virtual offset, as described by the  production.\nA vector type.\nThe <code>&lt;vector-type&gt;</code> production.\nA non-standard, vendor extension operator.\nA vendor extended type qualifier.\nA virtual offset.\nA virtual override thunk.\nA virtual override thunk with a covariant return type.\nA virtual table.\nvoid\nA VTT structure (construction vtable index).\nwchar_t\nA reference to a “well-known” component.\nA reference to a “well-known” component.\nA reference to a “well-known” component.\nA reference to a “well-known” component.\nA reference to a “well-known” component.\nA well-known substitution component. These are the …\nThe <code>&lt;substitution&gt;</code> variants that are encoded directly in …\nIf this is a <code>BackReference</code>, get its index.\nIf this is a <code>BackReference</code>, get its index.\nIf this is a <code>BackReference</code>, get its index.\nIf this is a <code>BackReference</code>, get its index.\nIf this is a <code>BackReference</code>, get its index.\nIs this <code>const</code> qualified?\nGet the CV-qualifiers for this name.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nConstruct a new <code>ParseContext</code>.\nGet the current recursion level for this context.\nGet the ref-qualifier for this name, if one exists.\nIs this <code>restrict</code> qualified?\nIs this <code>volatile</code> qualified?\nFound a back reference that is out-of-bounds of the …\nFound a reference to a function arg that is either …\nFound a reference to a leaf name in a context where there …\nFound a reference to a template arg that is either …\nContains the error value\nErrors that can occur while demangling a symbol.\nFound a reference to a template arg from within the arg …\nContains the success value\nAn overflow or underflow would occur when parsing an …\nA demangling result of <code>T</code> or a <code>cpp_demangle::error::Error</code>.\nEncountered too much recursion when demangling symbol.\nThe mangled symbol ends abruptly.\nThe mangled symbol is not well-formed.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.")