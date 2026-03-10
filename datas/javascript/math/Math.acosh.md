# Math.acosh()

Source: https://devdocs.io/javascript/global_objects/math/acosh

The Math.acosh() static method returns the inverse hyperbolic cosine of a number. That is,

## Try it

```
console.log(Math.acosh(0.999999999999));
// Expected output: NaN

console.log(Math.acosh(1));
// Expected output: 0

console.log(Math.acosh(2));
// Expected output: 1.3169578969248166

console.log(Math.acosh(2.5));
// Expected output: 1.566799236972411
```

## Syntax

```
Math.acosh(x)
```

### Parameters

A number greater than or equal to 1.

### Return value

The inverse hyperbolic cosine of x. If x is less than 1, returns NaN.

## Description

Because acosh() is a static method of Math, you always use it as Math.acosh(), rather than as a method of a Math object you created (Math is no constructor).

## Examples

### Using Math.acosh()

```
Math.acosh(0); // NaN
Math.acosh(1); // 0
Math.acosh(2); // 1.3169578969248166
Math.acosh(Infinity); // Infinity
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Math.acosh in core-js
- es-shims polyfill of Math.acosh
- Math.asinh()
- Math.atanh()
- Math.cosh()
- Math.sinh()
- Math.tanh()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acosh
