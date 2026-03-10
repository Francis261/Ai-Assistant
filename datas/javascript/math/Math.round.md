# Math.round()

Source: https://devdocs.io/javascript/global_objects/math/round

The Math.round() static method returns the value of a number rounded to the nearest integer.

## Try it

```
console.log(Math.round(0.9));
// Expected output: 1

console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// Expected output: 6 6 5

console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
// Expected output: -5 -5 -6
```

## Syntax

```
Math.round(x)
```

### Parameters

A number.

### Return value

The value of x rounded to the nearest integer.

## Description

If the fractional portion of the argument is greater than 0.5, the argument is rounded to the integer with the next higher absolute value. If it is less than 0.5, the argument is rounded to the integer with the lower absolute value. If the fractional portion is exactly 0.5, the argument is rounded to the next integer in the direction of +∞.

Note: This differs from many languages' round() functions, which often round half-increments away from zero, giving a different result in the case of negative numbers with a fractional part of exactly 0.5.

Math.round(x) is not exactly the same as Math.floor(x + 0.5). When x is -0, or -0.5 ≤ x < 0, Math.round(x) returns -0, while Math.floor(x + 0.5) returns 0. However, neglecting that difference and potential precision errors, Math.round(x) and Math.floor(x + 0.5) are generally equivalent.

Because round() is a static method of Math, you always use it as Math.round(), rather than as a method of a Math object you created (Math has no constructor).

## Examples

### Using round

```
Math.round(-Infinity); // -Infinity
Math.round(-20.51); // -21
Math.round(-20.5); // -20
Math.round(-0.1); // -0
Math.round(0); // 0
Math.round(20.49); // 20
Math.round(20.5); // 21
Math.round(42); // 42
Math.round(Infinity); // Infinity
```

## Specifications

## Browser compatibility

## See also

- Number.prototype.toPrecision()
- Number.prototype.toFixed()
- Math.abs()
- Math.ceil()
- Math.floor()
- Math.sign()
- Math.trunc()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
