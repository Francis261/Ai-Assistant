# Math.tan()

Source: https://devdocs.io/javascript/global_objects/math/tan

The Math.tan() static method returns the tangent of a number in radians.

## Try it

```
function getTanFromDegrees(degrees) {
  return Math.tan((degrees * Math.PI) / 180);
}

console.log(getTanFromDegrees(0));
// Expected output: 0

console.log(getTanFromDegrees(45));
// Expected output: 0.9999999999999999

console.log(getTanFromDegrees(90));
// Expected output: 16331239353195370
```

## Syntax

```
Math.tan(x)
```

### Parameters

A number representing an angle in radians.

### Return value

The tangent of x. If x is Infinity, -Infinity, or NaN, returns NaN.

Note: Due to floating point precision, it's not possible to obtain the exact value π/2, so the result is always finite if not NaN.

## Description

Because tan() is a static method of Math, you always use it as Math.tan(), rather than as a method of a Math object you created (Math is not a constructor).

## Examples

### Using Math.tan()

```
Math.tan(-Infinity); // NaN
Math.tan(-0); // -0
Math.tan(0); // 0
Math.tan(1); // 1.5574077246549023
Math.tan(Math.PI / 4); // 0.9999999999999999 (Floating point error)
Math.tan(Infinity); // NaN
```

### Math.tan() and π/2

It's not possible to calculate tan(π/2) exactly.

```
Math.tan(Math.PI / 2); // 16331239353195370
Math.tan(Math.PI / 2 + Number.EPSILON); // -6218431163823738
```

### Using Math.tan() with a degree value

Because the Math.tan() function accepts radians, but it is often easier to work with degrees, the following function accepts a value in degrees, converts it to radians and returns the tangent.

```
function getTanDeg(deg) {
  const rad = (deg * Math.PI) / 180;
  return Math.tan(rad);
}
```

## Specifications

## Browser compatibility

## See also

- Math.acos()
- Math.asin()
- Math.atan()
- Math.atan2()
- Math.cos()
- Math.sin()
- CSS tan() function

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tan
