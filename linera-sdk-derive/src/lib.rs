// Copyright (c) Zefchain Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

mod utils;

use crate::utils::{concat, snakify};
use proc_macro::TokenStream;
use proc_macro2::Ident;
use syn::{
    parse_macro_input, Fields, ItemEnum,
    __private::{quote::quote, TokenStream2},
};

#[proc_macro_derive(MutationRoot)]
pub fn derive_mutation_root(input: TokenStream) -> TokenStream {
    let input = parse_macro_input!(input as ItemEnum);
    generate_mutation_root_code(input).into()
}

fn generate_mutation_root_code(input: ItemEnum) -> TokenStream2 {
    let enum_name = input.ident;
    let mut methods = vec![];

    for variant in input.variants {
        let variant_name = &variant.ident;
        let function_name = snakify(variant_name);
        match variant.fields {
            Fields::Named(named) => {
                let mut fields = vec![];
                let mut field_names = vec![];
                for field in named.named {
                    let name = field.ident.expect("named fields always have names");
                    let ty = field.ty;
                    fields.push(quote! {#name: #ty});
                    field_names.push(name);
                }
                methods.push(quote! {
                    async fn #function_name(&self, #(#fields,)*) -> Vec<u8> {
                        bcs::to_bytes(&#enum_name::#variant_name { #(#field_names,)* }).unwrap()
                    }
                });
            }
            Fields::Unnamed(unnamed) => {
                let mut fields = vec![];
                let mut field_names = vec![];
                for (i, field) in unnamed.unnamed.iter().enumerate() {
                    let name = concat(&syn::parse_str::<Ident>("field_").unwrap(), &i.to_string());
                    let ty = &field.ty;
                    fields.push(quote! {#name: #ty});
                    field_names.push(name);
                }
                methods.push(quote! {
                    async fn #function_name(&self, #(#fields,)*) -> Vec<u8> {
                        bcs::to_bytes(&#enum_name::#variant_name ( #(#field_names,)* )).unwrap()
                    }
                });
            }
            Fields::Unit => {
                methods.push(quote! {
                    async fn #function_name(&self) -> Vec<u8> {
                        bcs::to_bytes(&#enum_name::#variant_name).unwrap()
                    }
                });
            }
        };
    }

    quote! {
        #[async_graphql::Object]
        impl #enum_name {
            #

            (#methods)

            *
        }
    }
}

#[cfg(test)]
pub mod tests {
    use crate::generate_mutation_root_code;
    use syn::{parse_quote, ItemEnum, __private::quote::quote};

    fn assert_eq_no_whitespace(mut actual: String, mut expected: String) {
        // Intentionally left here for debugging purposes
        println!("{}", actual);

        actual.retain(|c| !c.is_whitespace());
        expected.retain(|c| !c.is_whitespace());

        assert_eq!(actual, expected);
    }

    #[test]
    fn test_derive_mutation_root() {
        let operation: ItemEnum = parse_quote! {
            enum SomeOperation {
                TupleVariant(String),
                StructVariant {
                    a: u32,
                    b: u64
                },
                EmptyVariant
            }
        };

        let output = generate_mutation_root_code(operation);

        let expected = quote! {
            #[async_graphql::Object]
            impl SomeOperation {
                async fn tuple_variant(&self, field_0: String,) -> Vec<u8> {
                    bcs::to_bytes(&SomeOperation::TupleVariant(field_0,)).unwrap()
                }
                async fn struct_variant(&self, a: u32, b: u64,) -> Vec<u8> {
                    bcs::to_bytes(&SomeOperation::StructVariant { a, b, }).unwrap()
                }
                async fn empty_variant(&self) -> Vec<u8> {
                    bcs::to_bytes(&SomeOperation::EmptyVariant).unwrap()
                }
            }
        };

        assert_eq_no_whitespace(output.to_string(), expected.to_string());
    }
}
