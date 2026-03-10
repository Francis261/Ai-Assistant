# Exponentiation assignment (**=)

Source: https://devdocs.io/javascript/operators/exponentiation_assignment

The **= operator performs exponentiation on the two operands and assigns the result to the left operand.

## Try it

```
let a = 3;

console.log((a **= 2));
// Expected output: 9

console.log((a **= 0));
// Expected output: 1

console.log((a **= 'hello'));
// Expected output: NaN
```

## Syntax

```
x **= y
```

## Description

x **= y is equivalent to x = x ** y, except that the expression x is only evaluated once.

## Examples

### Exponentiation assignment using numbers

```
let bar = 5;
bar **= 2; // 25
```

Other non-BigInt values are coerced to numbers:

```
let baz = 5;
baz **= "foo"; // NaN
```

### Exponentiation assignment using BigInts

```
let foo = 3n;
foo **= 2n; // 9n
foo **= 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

## Specifications

## Browser compatibility

## See also

- Assignment operators in the JS guide
- Exponentiation (**)

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment
