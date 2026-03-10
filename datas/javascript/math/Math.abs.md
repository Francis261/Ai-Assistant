# Math.abs()

Source: https://devdocs.io/javascript/global_objects/math/abs

The Math.abs() static method returns the absolute value of a number.

## Try it

```
function difference(a, b) {
  return Math.abs(a - b);
}

console.log(difference(3, 5));
// Expected output: 2

console.log(difference(5, 3));
// Expected output: 2

console.log(difference(1.23456, 7.89012));
// Expected output: 6.6555599999999995
```

## Syntax

```
Math.abs(x)
```

### Parameters

A number.

### Return value

The absolute value of x. If x is negative or -0, returns its opposite number -x (which is non-negative). Otherwise, returns x itself. The result is therefore always a positive number or 0.

## Description

Because abs() is a static method of Math, you always use it as Math.abs(), rather than as a method of a Math object you created (Math is not a constructor).

## Examples

### Using Math.abs()

```
Math.abs(-Infinity); // Infinity
Math.abs(-1); // 1
Math.abs(-0); // 0
Math.abs(0); // 0
Math.abs(1); // 1
Math.abs(Infinity); // Infinity
```

### Coercion of parameter

Math.abs() coerces its parameter to a number. Non-coercible values will become NaN, making Math.abs() also return NaN.

```
Math.abs("-1"); // 1
Math.abs(-2); // 2
Math.abs(null); // 0
Math.abs(""); // 0
Math.abs([]); // 0
Math.abs([2]); // 2
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs("string"); // NaN
Math.abs(); // NaN
```

## Specifications

## Browser compatibility

## See also

- Math.ceil()
- Math.floor()
- Math.round()
- Math.sign()
- Math.trunc()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
