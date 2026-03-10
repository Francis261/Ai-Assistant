# Division assignment (/=)

Source: https://devdocs.io/javascript/operators/division_assignment

The /= operator performs division on the two operands and assigns the result to the left operand.

## Try it

```
let a = 3;

a /= 2;
console.log(a);
// Expected output: 1.5

a /= 0;
console.log(a);
// Expected output: Infinity

a /= "hello";
console.log(a);
// Expected output: NaN
```

## Syntax

```
x /= y
```

## Description

x /= y is equivalent to x = x / y, except that the expression x is only evaluated once.

## Examples

### Division assignment using numbers

```
let bar = 5;

bar /= 2; // 2.5
bar /= 2; // 1.25
bar /= 0; // Infinity
```

Other non-BigInt values are coerced to numbers:

```
let bar = 5;
bar /= "2"; // 2.5
bar /= "foo"; // NaN
```

### Division assignment using BigInts

```
let foo = 3n;
foo /= 2n; // 1n
foo /= 2n; // 0n

foo /= 0n; // RangeError: BigInt division by zero
foo /= 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

## Specifications

## Browser compatibility

## See also

- Assignment operators in the JS guide
- Division (/)

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division_assignment
