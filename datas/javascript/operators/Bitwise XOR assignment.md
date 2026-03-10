# Bitwise XOR assignment (^=)

Source: https://devdocs.io/javascript/operators/bitwise_xor_assignment

The ^= operator performs bitwise XOR on the two operands and assigns the result to the left operand.

## Try it

```
let a = 5; // 00000000000000000000000000000101
a ^= 3; // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000110
// Expected output: 6
```

## Syntax

```
x ^= y
```

## Description

x ^= y is equivalent to x = x ^ y, except that the expression x is only evaluated once.

## Examples

### Using bitwise XOR assignment

```
let a = 5; // (00000000000000000000000000000101)
a ^= 3; // (00000000000000000000000000000011)

console.log(a); // 6 (00000000000000000000000000000110)

let b = 5; // (00000000000000000000000000000101)
b ^= 0; // (00000000000000000000000000000000)

console.log(b); // 5 (00000000000000000000000000000101)

let c = 5n;
c ^= 3n;
console.log(c); // 6n
```

## Specifications

## Browser compatibility

## See also

- Assignment operators in the JS guide
- Bitwise XOR (^)

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment
