# Increment (++)

Source: https://devdocs.io/javascript/operators/increment

The ++ operator increments (adds one to) its operand and returns the value before or after the increment, depending on where the operator is placed.

## Try it

```
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
```

## Syntax

```
x++
++x
```

## Description

The ++ operator is overloaded for two types of operands: number and BigInt. It first coerces the operand to a numeric value and tests the type of it. It performs BigInt increment if the operand becomes a BigInt; otherwise, it performs number increment.

If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

The increment operator can only be applied on operands that are references (variables and object properties; i.e., valid assignment targets). ++x itself evaluates to a value, not a reference, so you cannot chain multiple increment operators together.

```
++(++x); // SyntaxError: Invalid left-hand side expression in prefix operation
```

## Examples

### Postfix increment

```
let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n
```

### Prefix increment

```
let x = 3;
const y = ++x;
// x is 4; y is 4

let x2 = 3n;
const y2 = ++x2;
// x2 is 4n; y2 is 4n
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
- Decrement (--)
- Unary negation (-)
- Unary plus (+)

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
