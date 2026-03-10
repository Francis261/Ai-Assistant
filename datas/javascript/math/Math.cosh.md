# Math.cosh()

Source: https://devdocs.io/javascript/global_objects/math/cosh

The Math.cosh() static method returns the hyperbolic cosine of a number. That is,

## Try it

```
console.log(Math.cosh(0));
// Expected output: 1

console.log(Math.cosh(1));
// Expected output: 1.543080634815244 (approximately)

console.log(Math.cosh(-1));
// Expected output: 1.543080634815244 (approximately)

console.log(Math.cosh(2));
// Expected output: 3.7621956910836314
```

## Syntax

```
Math.cosh(x)
```

### Parameters

A number.

### Return value

The hyperbolic cosine of x.

## Description

Because cosh() is a static method of Math, you always use it as Math.cosh(), rather than as a method of a Math object you created (Math is not a constructor).

## Examples

### Using Math.cosh()

```
Math.cosh(-Infinity); // Infinity
Math.cosh(-1); // 1.5430806348152437
Math.cosh(-0); // 1
Math.cosh(0); // 1
Math.cosh(1); // 1.5430806348152437
Math.cosh(Infinity); // Infinity
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Math.cosh in core-js
- es-shims polyfill of Math.cosh
- Math.acosh()
- Math.asinh()
- Math.atanh()
- Math.sinh()
- Math.tanh()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cosh
