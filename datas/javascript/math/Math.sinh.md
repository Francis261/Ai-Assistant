# Math.sinh()

Source: https://devdocs.io/javascript/global_objects/math/sinh

The Math.sinh() static method returns the hyperbolic sine of a number. That is,

## Try it

```
console.log(Math.sinh(0));
// Expected output: 0

console.log(Math.sinh(1));
// Expected output: 1.1752011936438014

console.log(Math.sinh(-1));
// Expected output: -1.1752011936438014

console.log(Math.sinh(2));
// Expected output: 3.626860407847019
```

## Syntax

```
Math.sinh(x)
```

### Parameters

A number.

### Return value

The hyperbolic sine of x.

## Description

Because sinh() is a static method of Math, you always use it as Math.sinh(), rather than as a method of a Math object you created (Math is not a constructor).

## Examples

### Using Math.sinh()

```
Math.sinh(-Infinity); // -Infinity
Math.sinh(-0); // -0
Math.sinh(0); // 0
Math.sinh(1); // 1.1752011936438014
Math.sinh(Infinity); // Infinity
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Math.sinh in core-js
- Math.acosh()
- Math.asinh()
- Math.atanh()
- Math.cosh()
- Math.tanh()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sinh
