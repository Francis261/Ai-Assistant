# Math.asinh()

Source: https://devdocs.io/javascript/global_objects/math/asinh

The Math.asinh() static method returns the inverse hyperbolic sine of a number. That is,

## Try it

```
console.log(Math.asinh(1));
// Expected output: 0.881373587019543

console.log(Math.asinh(0));
// Expected output: 0

console.log(Math.asinh(-1));
// Expected output: -0.881373587019543

console.log(Math.asinh(2));
// Expected output: 1.4436354751788103
```

## Syntax

```
Math.asinh(x)
```

### Parameters

A number.

### Return value

The inverse hyperbolic sine of x.

## Description

Because asinh() is a static method of Math, you always use it as Math.asinh(), rather than as a method of a Math object you created (Math is not a constructor).

## Examples

### Using Math.asinh()

```
Math.asinh(-Infinity); // -Infinity
Math.asinh(-1); // -0.881373587019543
Math.asinh(-0); // -0
Math.asinh(0); // 0
Math.asinh(1); // 0.881373587019543
Math.asinh(Infinity); // Infinity
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Math.asinh in core-js
- es-shims polyfill of Math.asinh
- Math.acosh()
- Math.atanh()
- Math.cosh()
- Math.sinh()
- Math.tanh()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/asinh
