searchState.loadedDescShard("ruint", 0, "Rust <code>uint</code> crate using const-generics\nThe size of this integer type in bits.\nThe size of this integer type in bits.\nThe size of this integer type in bits.\nThe size of this integer type in bytes. Note that some …\nError for <code>from_base_le</code> and <code>from_base_be</code>.\nError from <code>Uint::from_base_be</code>.\nA newtype wrapper around <code>Uint</code> that restricts operations to …\nError for <code>TryFrom&lt;Uint&gt;</code>.\nThe requested number base <code>.0</code> is less than two.\nThe provided digit <code>.0</code> is out of range for requested base <code>.1</code>…\nInvalid digit in string.\nInvalid radix, up to base 64 is supported.\nThe size of this integer type in 64-bit limbs.\nThe size of this integer type in 64-bit limbs.\nBit mask for the last limb.\nThe largest value that can be represented by this integer …\nThe smallest value that can be represented by this integer …\n‘Not a number’ (NaN) can not be represented as Uint\nNumber is equal or larger than the target field modulus.\nThe value is too large to fit the target type.\nThe Uint value is too large for the target type.\nError for <code>from_str_radix</code>.\nError for <code>TryFrom&lt;Uint&gt;</code> for <code>ark_ff</code> and others.\nError for <code>TryFrom&lt;T&gt;</code> for <code>Uint</code>.\nThe ring of numbers modulo $2^{\\mathtt{BITS}}$.\n⚠️ Workaround for Rust issue #50133. Use <code>TryFrom</code> …\n⚠️ Workaround for Rust issue #50133. Use <code>TryFrom</code> …\nNegative values can not be represented as Uint.\nValue is too large to fit the Uint.\nThe value zero. This is the only value that exists in all …\nThe value zero. This is the only value that exists in all …\nComputes the absolute difference between <code>self</code> and <code>other</code>.\nCompute $\\mod{\\mathtt{self} + \\mathtt{rhs}}_…\n⚠️ Collection of bignum algorithms.\nType aliases for common bit sizes of <code>Uint</code> and <code>Bits</code>.\nDouble precision logarithm.\nDouble precision decimal logarithm.\nDouble precision binary logarithm.\nConstruct from double precision binary logarithm.\nArithmetic shift right by <code>rhs</code> bits.\nSee <code>Uint::as_le_bytes</code> for documentation.\nAccess the underlying store as a little-endian bytes.\nAccess the underlying store as a little-endian bytes with …\nAccess the underlying store as a little-endian slice of …\nAccess the underlying store as a mutable little-endian …\nSee <code>Uint::as_limbs</code> for documentation.\nView the array of limbs.\nSee <code>Uint::as_limbs_mut</code> for documentation.\nAccess the array of limbs.\nReturns a reference to the inner Uint.\nReturns a mutable reference to the inner Uint.\nReturns whether a specific bit is set.\nLength of the number in bits ignoring leading zeros.\nReturns a specific byte. The byte at index <code>0</code> is the least …\nLength of the number in bytes ignoring leading zeros.\nComputes <code>self + rhs</code>, returning <code>None</code> if overflow occurred.\nComputes <code>self / rhs</code>, returning <code>None</code> if <code>rhs == 0</code>.\nConstruct a new integer from little-endian a slice of …\nReturns the logarithm of the number, rounded down.\nReturns the base 10 logarithm of the number, rounded down.\nReturns the base 2 logarithm of the number, rounded down.\nComputes <code>self * rhs</code>, returning <code>None</code> if overflow occurred.\nComputes <code>-self</code>, returning <code>None</code> unless <code>self == 0</code>.\nCalculates the smallest value greater than or equal to <code>self</code>…\nReturns the smallest power of two greater than or equal to …\nRaises self to the power of <code>exp</code>.\nComputes <code>self % rhs</code>, returning <code>None</code> if <code>rhs == 0</code>.\nSee <code>Uint::checked_shl</code> for documentation.\nChecked left shift by <code>rhs</code> bits.\nSee <code>Uint::checked_shr</code> for documentation.\nChecked right shift by <code>rhs</code> bits.\nComputes <code>self - rhs</code>, returning <code>None</code> if overflow occurred.\nCompile time for loops with a <code>const</code> variable for testing.\nReturns the number of ones in the binary representation of …\nReturns the number of zeros in the binary representation …\nComputes <code>self / rhs</code> rounding up.\nComputes <code>self / rhs</code> and <code>self % rhs</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConstruct a new <code>Uint</code> from the value.\nConstructs the <code>Uint</code> from digits in the base <code>base</code> in …\nConstructs the <code>Uint</code> from digits in the base <code>base</code> in …\nSee <code>Uint::from_be_bytes</code> for documentation.\nConverts a big-endian byte array of size exactly …\nCreates a new integer from a big endian slice of bytes.\nSee <code>Uint::from_le_bytes</code> for documentation.\nConverts a little-endian byte array of size exactly …\nCreates a new integer from a little endian slice of bytes.\nSee <code>Uint::from_limbs</code> for documentation.\nConstruct a new integer from little-endian a array of …\nConstruct a new integer from little-endian a slice of …\nSee <code>Uint::from_str_radix</code> for documentation.\nParse a string into a <code>Uint</code>.\nCompute the greatest common divisor of two <code>Uint</code>s.\n⚠️ Compute the greatest common divisor and the Bézout …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the inner Uint.\nConvert to a array of limbs.\nCompute $\\mod{\\mathtt{self}^{-1}}_{\\mathtt{modulus}}$.\nComputes the inverse modulo $2^{\\mathtt{BITS}}$ of <code>self</code>, …\nReturns <code>true</code> if and only if <code>self == 2^k</code> for some <code>k</code>.\nReturns true if the value is zero.\nCompute the least common multiple of two <code>Uint</code>s or <code>None</code> if …\nSee <code>Uint::leading_ones</code> for documentation.\nReturns the number of leading ones in the binary …\nSee <code>Uint::leading_zeros</code> for documentation.\nReturns the number of leading zeros in the binary …\nReturns the logarithm of the number, rounded down.\nReturns the base 10 logarithm of the number, rounded down.\nReturns the base 2 logarithm of the number, rounded down.\nMask to apply to the highest limb to get the correct …\nReturns the most significant 64 bits of the number and the …\nCompute $\\mod{\\mathtt{self} ⋅ \\mathtt{rhs}}_…\nMontgomery multiplication.\nNumber of bytes required to represent the given number of …\nCalculates the smallest value greater than or equal to …\nReturns the smallest power of two greater than or equal to …\nNumber of <code>u64</code> limbs required to represent the given number …\nCalculates $\\mod{\\mathtt{self} + \\mathtt{rhs}}_{2^{BITS}}$.\nConstruct a new <code>Uint</code> from a little-endian slice of limbs. …\nCalculates the multiplication of self and rhs.\nCalculates $\\mod{-\\mathtt{self}}_{2^{BITS}}$.\nRaises self to the power of <code>exp</code> and if the result would …\nSee <code>Uint::overflowing_shl</code> for documentation.\nLeft shift by <code>rhs</code> bits with overflow detection.\nSee <code>Uint::overflowing_shr</code> for documentation.\nRight shift by <code>rhs</code> bits with underflow detection.\nCalculates $\\mod{\\mathtt{self} - \\mathtt{rhs}}_{2^{BITS}}$.\nRaises self to the power of <code>exp</code>, wrapping around on …\nCompute $\\mod{\\mathtt{self}^{\\mathtt{rhs}}}_…\n⚠️ Compute $\\mod{\\mathtt{self}}_{\\mathtt{modulus}}$.\nSee <code>Uint::reverse_bits</code> for documentation.\nReverses the order of bits in the integer. The least …\nComputes the floor of the <code>degree</code>-th root of the number.\nSee <code>Uint::rotate_left</code> for documentation.\nShifts the bits to the left by a specified amount, <code>rhs</code>, …\nSee <code>Uint::rotate_right</code> for documentation.\nShifts the bits to the right by a specified amount, <code>rhs</code>, …\nComputes <code>self + rhs</code>, saturating at the numeric bounds …\nConstruct a new <code>Uint</code> from the value saturating the value …\nConstruct a new <code>Uint</code> from a little-endian slice of limbs. …\nComputes <code>self * rhs</code>, saturating at the numeric bounds …\nRaises self to the power of <code>exp</code>, saturating on overflow.\nSaturating left shift by <code>rhs</code> bits.\nComputes <code>self - rhs</code>, saturating at the numeric bounds …\nExamples\nSets a specific bit to a value.\nSupport for external crates.\nPanics\nReturns an iterator over the base <code>base</code> digits of the …\nReturns an iterator over the base <code>base</code> digits of the …\nSee <code>Uint::to_be_bytes</code> for documentation.\nConverts the <code>Uint</code> to a big-endian byte array of size …\nConverts the <code>Uint</code> to a big-endian byte vector with leading …\nSee <code>Uint::to_be_bytes_vec</code> for documentation.\nConverts the <code>Uint</code> to a big-endian byte vector of size …\nSee <code>Uint::to_le_bytes</code> for documentation.\nConverts the <code>Uint</code> to a little-endian byte array of size …\nConverts the <code>Uint</code> to a little-endian byte vector with …\nConverts the <code>Uint</code> to a little-endian byte vector of size …\nSee <code>Uint::trailing_ones</code> for documentation.\nReturns the number of trailing ones in the binary …\nSee <code>Uint::trailing_zeros</code> for documentation.\nReturns the number of trailing zeros in the binary …\nSee <code>Uint::try_from_be_slice</code> for documentation.\nCreates a new integer from a big endian slice of bytes.\nSee <code>Uint::try_from_le_slice</code> for documentation.\nCreates a new integer from a little endian slice of bytes.\nThe <code>uint!</code> macro for <code>Uint</code> and <code>Bits</code> literals\nCalculates the complete product <code>self * rhs</code> without the …\nComputes <code>self + rhs</code>, wrapping around at the boundary of …\nComputes <code>self / rhs</code> rounding down.\nConstruct a new <code>Uint</code> from the value saturating the value …\nConstruct a new <code>Uint</code> from a little-endian slice of limbs. …\nComputes <code>self * rhs</code>, wrapping around at the boundary of …\nComputes <code>-self</code>, wrapping around at the boundary of the …\nRaises self to the power of <code>exp</code>, wrapping around on …\nComputes <code>self % rhs</code>.\nSee <code>Uint::wrapping_shl</code> for documentation.\nLeft shift by <code>rhs</code> bits.\nSee <code>Uint::wrapping_shr</code> for documentation.\nRight shift by <code>rhs</code> bits.\nComputes <code>self - rhs</code>, wrapping around at the boundary of …\nExamples\n⚠️ Lehmer update matrix\n<code>lhs += rhs + carry</code>\nComputes <code>lhs += a</code> and returns the carry.\n⚠️ Computes <code>result += a * b</code> and checks for overflow.\nComputes wrapping <code>lhs += a * b</code> when all arguments are the …\nComputes <code>lhs += a * b</code> and returns the carry.\nApplies the matrix to a <code>Uint</code>.\nApplies the matrix to a <code>u128</code>.\nCompare two <code>u64</code> slices in reverse order.\nReturns the matrix product <code>self * other</code>.\n⚠️ Collection of division algorithms.\nCompute a Lehmer update matrix from two <code>Uint</code>s.\nReturns the argument unchanged.\nCompute the Lehmer update matrix in full 64 bit precision.\nCompute the Lehmer update matrix for small values.\nCompute the largest valid Lehmer update matrix for a …\n⚠️ Lehmer’s GCD algorithms.\n⚠️ Lehmer’s extended GCD.\nCalls <code>U::from(self)</code>.\n⚠️ Modular inversion using extended GCD.\nComputes <code>lhs *= a</code> and returns the carry.\nSee Handbook of Applied Cryptography, Algorithm 14.32, p. …\n<code>lhs -= rhs - borrow</code>\nComputes <code>lhs -= a * b</code> and returns the borrow.\n⚠️ Division with remainder.\n⚠️ Computes the quotient and remainder of a <code>u128</code> …\n⚠️ Computes the quotient and remainder of a <code>u128</code> …\n⚠️ Computes the quotient of a 192 bits divided by a …\n⚠️ Computes the quotient of a 192 bits divided by a …\nTODO: This implementation is off by one.\n⚠️ Compute single limb division.\n⚠️ Compute single limb normalized division.\n⚠️ Compute double limb division.\n⚠️ Compute double limb normalized division.\n⚠️ In-place Knuth long division with implicit …\n⚠️ In-place Knuth normalized long division with …\n⚠️ Computes $\\floor{\\frac{2^{128} - 1}{\\mathsf{d}}} - …\n⚠️ Computes $\\floor{\\frac{2^{192} - 1}{\\mathsf{d}}} - …\n⚠️ Computes $\\floor{\\frac{2^{192} - 1}{\\mathsf{d}}} - …\n⚠️ Computes $\\floor{\\frac{2^{128} - 1}{\\mathsf{d}}} - …\n⚠️ Computes $\\floor{\\frac{2^{128} - 1}{\\mathtt{d}}} - …\n<code>Bits</code> for <code>0</code> bits.\n<code>Bits</code> for <code>1</code> bits.\n<code>Bits</code> for <code>1024</code> bits.\n<code>Bits</code> for <code>128</code> bits.\n<code>Bits</code> for <code>16</code> bits.\n<code>Bits</code> for <code>160</code> bits.\n<code>Bits</code> for <code>192</code> bits.\n<code>Bits</code> for <code>2048</code> bits.\n<code>Bits</code> for <code>256</code> bits.\n<code>Bits</code> for <code>32</code> bits.\n<code>Bits</code> for <code>320</code> bits.\n<code>Bits</code> for <code>384</code> bits.\n<code>Bits</code> for <code>4096</code> bits.\n<code>Bits</code> for <code>448</code> bits.\n<code>Bits</code> for <code>512</code> bits.\n<code>Bits</code> for <code>64</code> bits.\n<code>Bits</code> for <code>768</code> bits.\n<code>Bits</code> for <code>8</code> bits.\n<code>Uint</code> for <code>0</code> bits. Always zero. Similar to <code>()</code>.\n<code>Uint</code> for <code>1</code> bit. Similar to <code>bool</code>.\n<code>Uint</code> for <code>1024</code> bits.\n<code>Uint</code> for <code>128</code> bits. Similar to <code>u128</code>.\n<code>Uint</code> for <code>16</code> bits. Similar to <code>u16</code>.\n<code>Uint</code> for <code>160</code> bits.\n<code>Uint</code> for <code>192</code> bits.\n<code>Uint</code> for <code>2048</code> bits.\n<code>Uint</code> for <code>256</code> bits.\n<code>Uint</code> for <code>32</code> bits. Similar to <code>u32</code>.\n<code>Uint</code> for <code>320</code> bits.\n<code>Uint</code> for <code>384</code> bits.\n<code>Uint</code> for <code>4096</code> bits.\n<code>Uint</code> for <code>448</code> bits.\n<code>Uint</code> for <code>512</code> bits.\n<code>Uint</code> for <code>64</code> bits. Similar to <code>u64</code>.\n<code>Uint</code> for <code>768</code> bits.\n<code>Uint</code> for <code>8</code> bits. Similar to <code>u8</code>.")