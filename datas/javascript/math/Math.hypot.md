# Math.hypot()

Source: https://devdocs.io/javascript/global_objects/math/hypot

The Math.hypot() static method returns the square root of the sum of squares of its arguments. That is,

## Try it

```
console.log(Math.hypot(3, 4));
// Expected output: 5

console.log(Math.hypot(5, 12));
// Expected output: 13

console.log(Math.hypot(3, 4, 5));
// Expected output: 7.0710678118654755

console.log(Math.hypot(-5));
// Expected output: 5
```

## Syntax

```
Math.hypot()
Math.hypot(value1)
Math.hypot(value1, value2)
Math.hypot(value1, value2, /* …, */ valueN)
```

### Parameters

Numbers.

### Return value

The square root of the sum of squares of the given arguments. Returns Infinity if any of the arguments is ±Infinity. Otherwise, if at least one of the arguments is or is converted to NaN, returns NaN. Returns 0 if no arguments are given or all arguments are ±0.

## Description

Calculating the hypotenuse of a right triangle, or the magnitude of a complex number, uses the formula Math.sqrt(v1*v1 + v2*v2), where v1 and v2 are the lengths of the triangle's legs, or the complex number's real and complex components. The corresponding distance in 2 or more dimensions can be calculated by adding more squares under the square root: Math.sqrt(v1*v1 + v2*v2 + v3*v3 + v4*v4).

This function makes this calculation easier and faster; you call Math.hypot(v1, v2), or Math.hypot(v1, /* …, */, vN).

Math.hypot also avoids overflow/underflow problems if the magnitude of your numbers is very large. The largest number you can represent in JS is Number.MAX_VALUE, which is around 10308. If your numbers are larger than about 10154, taking the square of them will result in Infinity. For example, Math.sqrt(1e200*1e200 + 1e200*1e200) = Infinity. If you use hypot() instead, you get a better answer: Math.hypot(1e200, 1e200) = 1.4142...e+200. This is also true with very small numbers. Math.sqrt(1e-200*1e-200 + 1e-200*1e-200) = 0, but Math.hypot(1e-200, 1e-200) = 1.4142...e-200.

With one argument, Math.hypot() is equivalent to Math.abs(). Math.hypot.length is 2, which weakly signals that it's designed to handle at least two parameters.

Because hypot() is a static method of Math, you always use it as Math.hypot(), rather than as a method of a Math object you created (Math is not a constructor).

## Examples

### Using Math.hypot()

```
Math.hypot(3, 4); // 5
Math.hypot(3, 4, 5); // 7.0710678118654755
Math.hypot(); // 0
Math.hypot(NaN); // NaN
Math.hypot(NaN, Infinity); // Infinity
Math.hypot(3, 4, "foo"); // NaN, since +'foo' => NaN
Math.hypot(3, 4, "5"); // 7.0710678118654755, +'5' => 5
Math.hypot(-3); // 3, the same as Math.abs(-3)
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Math.hypot in core-js
- Math.abs()
- Math.pow()
- Math.sqrt()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot
