# Left shift assignment (<<=)

Source: https://devdocs.io/javascript/operators/left_shift_assignment

The <<= operator performs left shift on the two operands and assigns the result to the left operand.

## Try it

```
let a = 5; // 00000000000000000000000000000101

a <<= 2; // 00000000000000000000000000010100

console.log(a);
// Expected output: 20
```

## Syntax

```
x <<= y
```

## Description

x <<= y is equivalent to x = x << y, except that the expression x is only evaluated once.

## Examples

### Using left shift assignment

```
let a = 5;
// 00000000000000000000000000000101

a <<= 2; // 20
// 00000000000000000000000000010100

let b = 5n;
b <<= 2n; // 20n
```

## Specifications

## Browser compatibility

## See also

- Assignment operators in the JS guide
- Left shift (<<)

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment
