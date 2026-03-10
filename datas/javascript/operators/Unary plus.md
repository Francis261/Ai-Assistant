# Unary plus (+)

Source: https://devdocs.io/javascript/operators/unary_plus

The + operator precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already.

## Try it

```
const x = 1;
const y = -1;

console.log(+x);
// Expected output: 1

console.log(+y);
// Expected output: -1

console.log(+"");
// Expected output: 0

console.log(+true);
// Expected output: 1

console.log(+false);
// Expected output: 0

console.log(+"hello");
// Expected output: NaN
```

## Syntax

```
+x
```

## Description

Although unary negation (-) also can convert non-numbers, unary plus is the fastest and preferred way of converting something into a number, because it does not perform any other operations on the number.

Unary plus does the exact same steps as normal number coercion used by most built-in methods expecting numbers. It can convert string representations of integers and floats, as well as the non-string values true, false, and null. Integers in both decimal and hexadecimal (0x-prefixed) formats are supported. Negative numbers are supported (though not for hex). If it cannot parse a particular value, it will evaluate to NaN. Unlike other arithmetic operators, which work with both numbers and BigInts, using the + operator on BigInt values throws a TypeError.

## Examples

### Usage with numbers

```
const x = 1;
const y = -1;

console.log(+x);
// 1
console.log(+y);
// -1
```

### Usage with non-numbers

```
+true  // 1
+false // 0
+null  // 0
+[]    // 0
+function (val) { return val; } // NaN
+1n    // throws TypeError: Cannot convert BigInt value to number
```

## Specifications

## Browser compatibility

## See also

- Addition (+)
- Subtraction (-)
- Division (/)
- Multiplication (*)
- Remainder (%)
- Exponentiation (**)
- Increment (++)
- Decrement (--)
- Unary negation (-)

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus
