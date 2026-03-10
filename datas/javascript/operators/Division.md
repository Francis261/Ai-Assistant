# Division (/)

Source: https://devdocs.io/javascript/operators/division

The / operator produces the quotient of its operands where the left operand is the dividend and the right operand is the divisor.

## Try it

```
console.log(12 / 2);
// Expected output: 6

console.log(3 / 2);
// Expected output: 1.5

console.log(6 / "3");
// Expected output: 2

console.log(2 / 0);
// Expected output: Infinity
```

## Syntax

```
x / y
```

## Description

The / operator is overloaded for two types of operands: number and BigInt. It first coerces both operands to numeric values and tests the types of them. It performs BigInt division if both operands become BigInts; otherwise, it performs number division. A TypeError is thrown if one operand becomes a BigInt but the other becomes a number.

For BigInt division, the result is the quotient of the two operands truncated towards zero, and the remainder is discarded. A RangeError is thrown if the divisor y is 0n. This is because number division by zero returns Infinity or -Infinity, but BigInt has no concept of infinity.

## Examples

### Division using numbers

```
1 / 2; // 0.5
Math.floor(3 / 2); // 1
1.0 / 2.0; // 0.5

2 / 0; // Infinity
2.0 / 0.0; // Infinity, because 0.0 === 0
2.0 / -0.0; // -Infinity
```

Other non-BigInt values are coerced to numbers:

```
5 / "2"; // 2.5
5 / "foo"; // NaN
```

### Division using BigInts

```
1n / 2n; // 0n
5n / 3n; // 1n
-1n / 3n; // 0n
1n / -3n; // 0n

2n / 0n; // RangeError: BigInt division by zero
```

You cannot mix BigInt and number operands in division.

```
2n / 2; // TypeError: Cannot mix BigInt and other types, use explicit conversions
2 / 2n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

To do division with a BigInt and a non-BigInt, convert either operand:

```
2n / BigInt(2); // 1n
Number(2n) / 2; // 1
```

## Specifications

## Browser compatibility

## See also

- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Remainder (%)
- Exponentiation (**)
- Increment (++)
- Decrement (--)
- Unary negation (-)
- Unary plus (+)

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division
