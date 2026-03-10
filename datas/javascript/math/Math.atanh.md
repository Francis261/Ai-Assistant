# Math.atanh()

Source: https://devdocs.io/javascript/global_objects/math/atanh

The Math.atanh() static method returns the inverse hyperbolic tangent of a number. That is,

## Try it

```
console.log(Math.atanh(-1));
// Expected output: -Infinity

console.log(Math.atanh(0));
// Expected output: 0

console.log(Math.atanh(0.5));
// Expected output: 0.549306144334055 (approximately)

console.log(Math.atanh(1));
// Expected output: Infinity
```

## Syntax

```
Math.atanh(x)
```

### Parameters

A number between -1 and 1, inclusive.

### Return value

The inverse hyperbolic tangent of x. If x is 1, returns Infinity. If x is -1, returns -Infinity. If x is less than -1 or greater than 1, returns NaN.

## Description

Because atanh() is a static method of Math, you always use it as Math.atanh(), rather than as a method of a Math object you created (Math is not a constructor).

## Examples

### Using Math.atanh()

```
Math.atanh(-2); // NaN
Math.atanh(-1); // -Infinity
Math.atanh(-0); // -0
Math.atanh(0); // 0
Math.atanh(0.5); // 0.5493061443340548
Math.atanh(1); // Infinity
Math.atanh(2); // NaN
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Math.atanh in core-js
- es-shims polyfill of Math.atanh
- Math.acosh()
- Math.asinh()
- Math.cosh()
- Math.sinh()
- Math.tanh()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atanh
