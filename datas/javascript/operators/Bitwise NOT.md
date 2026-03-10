# Bitwise NOT (~)

Source: https://devdocs.io/javascript/operators/bitwise_not

The ~ operator returns a number or BigInt whose binary representation has a 1 in each bit position for which the corresponding bit of the operand is 0, and a 0 otherwise.

## Try it

```
const a = 5; // 00000000000000000000000000000101
const b = -3; // 11111111111111111111111111111101

console.log(~a); // 11111111111111111111111111111010
// Expected output: -6

console.log(~b); // 00000000000000000000000000000010
// Expected output: 2
```

## Syntax

```
~x
```

## Description

The ~ operator is overloaded for two types of operands: number and BigInt. For numbers, the operator returns a 32-bit integer. For BigInts, the operator returns a BigInt. It first coerces the operand to a numeric value and tests the type of it. It performs BigInt NOT if the operand becomes a BigInt; otherwise, it converts the operand to a 32-bit integer and performs number bitwise NOT.

The operator operates on the operands' bit representations in two's complement. The operator is applied to each bit, and the result is constructed bitwise.

The truth table for the NOT operation is:

```
 9 (base 10) = 00000000000000000000000000001001 (base 2)
               --------------------------------
~9 (base 10) = 11111111111111111111111111110110 (base 2) = -10 (base 10)
```

Bitwise NOTing any 32-bit integer x yields -(x + 1). For example, ~-5 yields 4.

Numbers with more than 32 bits get their most significant bits discarded. For example, the following integer with more than 32 bits will be converted to a 32-bit integer:

```
Before: 11100110111110100000000000000110000000000001
After:              10100000000000000110000000000001
```

Warning: You may see people using ~~ to truncate numbers to integers. Bitwise NOTing any number x twice returns x converted to a 32-bit integer, which additionally removes leading bits for numbers outside the range -2147483648 to 2147483647. Use Math.trunc() instead.

For BigInts, there's no truncation. Conceptually, understand positive BigInts as having an infinite number of leading 0 bits, and negative BigInts having an infinite number of leading 1 bits.

## Examples

### Using bitwise NOT

```
~0; // -1
~-1; // 0
~1; // -2

~0n; // -1n
~4294967295n; // -4294967296n
```

## Specifications

## Browser compatibility

## See also

- Bitwise operators in the JS guide

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT
