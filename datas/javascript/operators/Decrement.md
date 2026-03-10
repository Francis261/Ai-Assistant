# Decrement (--)

Source: https://devdocs.io/javascript/operators/decrement

The -- operator decrements (subtracts one from) its operand and returns the value before or after the decrement, depending on where the operator is placed.

## Try it

```
let x = 3;
const y = x--;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:2, y:3"

let a = 3;
const b = --a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:2, b:2"
```

## Syntax

```
x--
--x
```

## Description

The -- operator is overloaded for two types of operands: number and BigInt. It first coerces the operand to a numeric value and tests the type of it. It performs BigInt decrement if the operand becomes a BigInt; otherwise, it performs number decrement.

If used postfix, with operator after operand (for example, x--), the decrement operator decrements and returns the value before decrementing.

If used prefix, with operator before operand (for example, --x), the decrement operator decrements and returns the value after decrementing.

The decrement operator can only be applied on operands that are references (variables and object properties; i.e., valid assignment targets). --x itself evaluates to a value, not a reference, so you cannot chain multiple decrement operators together.

```
--(--x); // SyntaxError: Invalid left-hand side expression in prefix operation
```

## Examples

### Postfix decrement

```
let x = 3;
const y = x--;
// x is 2; y is 3

let x2 = 3n;
const y2 = x2--;
// x2 is 2n; y2 is 3n
```

### Prefix decrement

```
let x = 3;
const y = --x;
// x is 2; y = 2

let x2 = 3n;
const y2 = --x2;
// x2 is 2n; y2 is 2n
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
- Unary negation (-)
- Unary plus (+)

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement
