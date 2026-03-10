# Remainder assignment (%=)

Source: https://devdocs.io/javascript/operators/remainder_assignment

The %= operator performs remainder on the two operands and assigns the result to the left operand.

## Try it

```
let a = 3;

console.log((a %= 2));
// Expected output: 1

console.log((a %= 0));
// Expected output: NaN

console.log((a %= "hello"));
// Expected output: NaN
```

## Syntax

```
x %= y
```

## Description

x %= y is equivalent to x = x % y, except that the expression x is only evaluated once.

## Examples

### Using remainder assignment

```
let bar = 5;

bar %= 2; // 1
bar %= "foo"; // NaN
bar %= 0; // NaN

let foo = 3n;
foo %= 2n; // 1n
```

## Specifications

## Browser compatibility

## See also

- Assignment operators in the JS guide
- Remainder (%)

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder_assignment
