# Strict equality (===)

Source: https://devdocs.io/javascript/operators/strict_equality

The === operator checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.

## Try it

```
console.log(1 === 1);
// Expected output: true

console.log("hello" === "hello");
// Expected output: true

console.log("1" === 1);
// Expected output: false

console.log(0 === false);
// Expected output: false
```

## Syntax

```
x === y
```

## Description

The strict equality operators (=== and !==) provide the IsStrictlyEqual semantic.

- If the operands are of different types, return false.
- If both operands are objects, return true only if they refer to the same object.
- If both operands are null or both operands are undefined, return true.
- If either operand is NaN, return false.
- Otherwise, compare the two operand's values:
  - Numbers must have the same numeric values. +0 and -0 are considered to be the same value.
  - Strings must have the same characters in the same order.
  - Booleans must be both true or both false.

- Numbers must have the same numeric values. +0 and -0 are considered to be the same value.
- Strings must have the same characters in the same order.
- Booleans must be both true or both false.

The most notable difference between this operator and the equality (==) operator is that if the operands are of different types, the == operator attempts to convert them to the same type before comparing.

## Examples

### Comparing operands of the same type

```
"hello" === "hello"; // true
"hello" === "hola"; // false

3 === 3; // true
3 === 4; // false

true === true; // true
true === false; // false

null === null; // true
```

### Comparing operands of different types

```
"3" === 3; // false
true === 1; // false
null === undefined; // false
3 === new Number(3); // false
```

### Comparing objects

```
const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 === object2); // false
console.log(object1 === object1); // true
```

## Specifications

## Browser compatibility

## See also

- Equality (==)
- Inequality (!=)
- Strict inequality (!==)

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
