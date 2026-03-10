# Unary negation (-)

Source: https://devdocs.io/javascript/operators/unary_negation

The - operator precedes its operand and negates it.

## Try it

```
const x = 4;
const y = -x;

console.log(y);
// Expected output: -4

const a = "4";
const b = -a;

console.log(b);
// Expected output: -4
```

## Syntax

```
-x
```

## Description

The - operator is overloaded for two types of operands: number and BigInt. It first coerces the operand to a numeric value and tests the type of it. It performs BigInt negation if the operand becomes a BigInt; otherwise, it performs number negation.

## Examples

### Negating numbers

```
const x = 3;
const y = -x;
// y is -3; x is 3
```

### Negating non-numbers

The unary negation operator can convert a non-number into a number.

```
const x = "4";
const y = -x;

// y is -4
```

BigInts can be negated using the unary negation operator.

```
const x = 4n;
const y = -x;

// y is -4n
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
- Unary plus (+)

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_negation
