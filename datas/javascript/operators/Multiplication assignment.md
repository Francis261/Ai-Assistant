# Multiplication assignment (*=)

Source: https://devdocs.io/javascript/operators/multiplication_assignment

The *= operator performs multiplication on the two operands and assigns the result to the left operand.

## Try it

```
let a = 2;

console.log((a *= 3));
// Expected output: 6

console.log((a *= "hello"));
// Expected output: NaN
```

## Syntax

```
x *= y
```

## Description

x *= y is equivalent to x = x * y, except that the expression x is only evaluated once.

## Examples

### Multiplication assignment using numbers

```
let bar = 5;
bar *= 2; // 10
```

Other non-BigInt values are coerced to numbers:

```
let bar = 5;
bar *= "foo"; // NaN
```

### Multiplication assignment using BigInts

```
let foo = 3n;
foo *= 2n; // 6n
foo *= 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

## Specifications

## Browser compatibility

## See also

- Assignment operators in the JS guide
- Multiplication (*)

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment
