# Right shift assignment (>>=)

Source: https://devdocs.io/javascript/operators/right_shift_assignment

The >>= operator performs right shift on the two operands and assigns the result to the left operand.

## Try it

```
let a = 5; //  00000000000000000000000000000101

a >>= 2; //  00000000000000000000000000000001
console.log(a);
// Expected output: 1

let b = -5; //  11111111111111111111111111111011

b >>= 2; //  11111111111111111111111111111110
console.log(b);
// Expected output: -2
```

## Syntax

```
x >>= y
```

## Description

x >>= y is equivalent to x = x >> y, except that the expression x is only evaluated once.

## Examples

### Using right shift assignment

```
let a = 5; //   (00000000000000000000000000000101)
a >>= 2; //   1 (00000000000000000000000000000001)

let b = -5; //  (-00000000000000000000000000000101)
b >>= 2; //  -2 (-00000000000000000000000000000010)

let c = 5n;
c >>= 2n; // 1n
```

## Specifications

## Browser compatibility

## See also

- Assignment operators in the JS guide
- Right shift (>>)

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment
