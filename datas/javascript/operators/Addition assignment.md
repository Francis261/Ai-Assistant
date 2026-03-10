# Addition assignment (+=)

Source: https://devdocs.io/javascript/operators/addition_assignment

The += operator performs addition (which is either numeric addition or string concatenation) on the two operands and assigns the result to the left operand.

## Try it

```
let a = 2;
let b = "hello";

console.log((a += 3)); // Addition
// Expected output: 5

console.log((b += " world")); // Concatenation
// Expected output: "hello world"
```

## Syntax

```
x += y
```

## Description

x += y is equivalent to x = x + y, except that the expression x is only evaluated once.

## Examples

### Addition assignment using numbers

```
let bar = 5;
bar += 2; // 7
```

Other non-string, non-BigInt values are coerced to numbers:

```
let baz = true;
baz += 1; // 2
baz += false; // 2
```

### Addition assignment using BigInts

```
let x = 1n;
x += 2n; // 3n

x += 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

### Addition assignment using strings

```
let foo = "foo";
foo += false; // "foofalse"
foo += "bar"; // "foofalsebar"

let bar = 5;
bar += "foo"; // "5foo"
```

## Specifications

## Browser compatibility

## See also

- Assignment operators in the JS guide
- Addition (+)

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment
