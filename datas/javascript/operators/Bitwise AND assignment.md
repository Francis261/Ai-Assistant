# Bitwise AND assignment (&=)

Source: https://devdocs.io/javascript/operators/bitwise_and_assignment

The &= operator performs bitwise AND on the two operands and assigns the result to the left operand.

## Try it

```
let a = 5; // 00000000000000000000000000000101
a &= 3; // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000001
// Expected output: 1
```

## Syntax

```
x &= y
```

## Description

x &= y is equivalent to x = x & y, except that the expression x is only evaluated once.

## Examples

### Using bitwise AND assignment

```
let a = 5;
// 5:     00000000000000000000000000000101
// 2:     00000000000000000000000000000010
a &= 2; // 0

let b = 5n;
b &= 2n; // 0n
```

## Specifications

## Browser compatibility

## See also

- Assignment operators in the JS guide
- Bitwise AND (&)

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment
