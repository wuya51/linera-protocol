(function() {var implementors = {
"ecdsa":[["impl&lt;C, D&gt; <a class=\"trait\" href=\"signature/signer/trait.RandomizedDigestSigner.html\" title=\"trait signature::signer::RandomizedDigestSigner\">RandomizedDigestSigner</a>&lt;D, <a class=\"struct\" href=\"ecdsa/der/struct.Signature.html\" title=\"struct ecdsa::der::Signature\">Signature</a>&lt;C&gt;&gt; for <a class=\"struct\" href=\"ecdsa/struct.SigningKey.html\" title=\"struct ecdsa::SigningKey\">SigningKey</a>&lt;C&gt;<div class=\"where\">where\n    C: <a class=\"trait\" href=\"ecdsa/trait.PrimeCurve.html\" title=\"trait ecdsa::PrimeCurve\">PrimeCurve</a> + <a class=\"trait\" href=\"elliptic_curve/arithmetic/trait.CurveArithmetic.html\" title=\"trait elliptic_curve::arithmetic::CurveArithmetic\">CurveArithmetic</a> + <a class=\"trait\" href=\"ecdsa/hazmat/trait.DigestPrimitive.html\" title=\"trait ecdsa::hazmat::DigestPrimitive\">DigestPrimitive</a>,\n    D: <a class=\"trait\" href=\"digest/digest/trait.Digest.html\" title=\"trait digest::digest::Digest\">Digest</a> + <a class=\"trait\" href=\"digest/trait.FixedOutput.html\" title=\"trait digest::FixedOutput\">FixedOutput</a>&lt;OutputSize = <a class=\"type\" href=\"elliptic_curve/field/type.FieldBytesSize.html\" title=\"type elliptic_curve::field::FieldBytesSize\">FieldBytesSize</a>&lt;C&gt;&gt;,\n    <a class=\"type\" href=\"elliptic_curve/scalar/type.Scalar.html\" title=\"type elliptic_curve::scalar::Scalar\">Scalar</a>&lt;C&gt;: <a class=\"trait\" href=\"elliptic_curve/ops/trait.Invert.html\" title=\"trait elliptic_curve::ops::Invert\">Invert</a>&lt;Output = <a class=\"struct\" href=\"subtle/struct.CtOption.html\" title=\"struct subtle::CtOption\">CtOption</a>&lt;<a class=\"type\" href=\"elliptic_curve/scalar/type.Scalar.html\" title=\"type elliptic_curve::scalar::Scalar\">Scalar</a>&lt;C&gt;&gt;&gt; + <a class=\"trait\" href=\"ecdsa/hazmat/trait.SignPrimitive.html\" title=\"trait ecdsa::hazmat::SignPrimitive\">SignPrimitive</a>&lt;C&gt;,\n    <a class=\"type\" href=\"ecdsa/type.SignatureSize.html\" title=\"type ecdsa::SignatureSize\">SignatureSize</a>&lt;C&gt;: <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>&gt;,\n    <a class=\"type\" href=\"ecdsa/der/type.MaxSize.html\" title=\"type ecdsa::der::MaxSize\">MaxSize</a>&lt;C&gt;: <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>&gt;,\n    &lt;<a class=\"type\" href=\"elliptic_curve/field/type.FieldBytesSize.html\" title=\"type elliptic_curve::field::FieldBytesSize\">FieldBytesSize</a>&lt;C&gt; as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.80.0/core/ops/arith/trait.Add.html#associatedtype.Output\" title=\"type core::ops::arith::Add::Output\">Output</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.80.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"type\" href=\"ecdsa/der/type.MaxOverhead.html\" title=\"type ecdsa::der::MaxOverhead\">MaxOverhead</a>&gt; + <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>&gt;,</div>"],["impl&lt;C, D&gt; <a class=\"trait\" href=\"signature/signer/trait.RandomizedDigestSigner.html\" title=\"trait signature::signer::RandomizedDigestSigner\">RandomizedDigestSigner</a>&lt;D, <a class=\"struct\" href=\"ecdsa/struct.Signature.html\" title=\"struct ecdsa::Signature\">Signature</a>&lt;C&gt;&gt; for <a class=\"struct\" href=\"ecdsa/struct.SigningKey.html\" title=\"struct ecdsa::SigningKey\">SigningKey</a>&lt;C&gt;<div class=\"where\">where\n    C: <a class=\"trait\" href=\"ecdsa/trait.PrimeCurve.html\" title=\"trait ecdsa::PrimeCurve\">PrimeCurve</a> + <a class=\"trait\" href=\"elliptic_curve/arithmetic/trait.CurveArithmetic.html\" title=\"trait elliptic_curve::arithmetic::CurveArithmetic\">CurveArithmetic</a> + <a class=\"trait\" href=\"ecdsa/hazmat/trait.DigestPrimitive.html\" title=\"trait ecdsa::hazmat::DigestPrimitive\">DigestPrimitive</a>,\n    D: <a class=\"trait\" href=\"digest/digest/trait.Digest.html\" title=\"trait digest::digest::Digest\">Digest</a> + <a class=\"trait\" href=\"digest/trait.FixedOutput.html\" title=\"trait digest::FixedOutput\">FixedOutput</a>&lt;OutputSize = <a class=\"type\" href=\"elliptic_curve/field/type.FieldBytesSize.html\" title=\"type elliptic_curve::field::FieldBytesSize\">FieldBytesSize</a>&lt;C&gt;&gt;,\n    <a class=\"type\" href=\"elliptic_curve/scalar/type.Scalar.html\" title=\"type elliptic_curve::scalar::Scalar\">Scalar</a>&lt;C&gt;: <a class=\"trait\" href=\"elliptic_curve/ops/trait.Invert.html\" title=\"trait elliptic_curve::ops::Invert\">Invert</a>&lt;Output = <a class=\"struct\" href=\"subtle/struct.CtOption.html\" title=\"struct subtle::CtOption\">CtOption</a>&lt;<a class=\"type\" href=\"elliptic_curve/scalar/type.Scalar.html\" title=\"type elliptic_curve::scalar::Scalar\">Scalar</a>&lt;C&gt;&gt;&gt; + <a class=\"trait\" href=\"ecdsa/hazmat/trait.SignPrimitive.html\" title=\"trait ecdsa::hazmat::SignPrimitive\">SignPrimitive</a>&lt;C&gt;,\n    <a class=\"type\" href=\"ecdsa/type.SignatureSize.html\" title=\"type ecdsa::SignatureSize\">SignatureSize</a>&lt;C&gt;: <a class=\"trait\" href=\"generic_array/trait.ArrayLength.html\" title=\"trait generic_array::ArrayLength\">ArrayLength</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.80.0/std/primitive.u8.html\">u8</a>&gt;,</div>"]],
"linera_alloy":[]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()