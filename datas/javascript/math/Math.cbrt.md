# Math.cbrt()

Source: https://devdocs.io/javascript/global_objects/math/cbrt

The Math.cbrt() static method returns the cube root of a number. That is

## Try it

```
console.log(Math.cbrt(-1));
// Expected output: -1

console.log(Math.cbrt(1));
// Expected output: 1

console.log(Math.cbrt(Infinity));
// Expected output: Infinity

console.log(Math.cbrt(64));
// Expected output: 4
```

## Syntax

```
Math.cbrt(x)
```

### Parameters

A number.

### Return value

The cube root of x.

## Description

Because cbrt() is a static method of Math, you always use it as Math.cbrt(), rather than as a method of a Math object you created (Math is not a constructor).

## Examples

### Using Math.cbrt()

```
Math.cbrt(-Infinity); // -Infinity
Math.cbrt(-1); // -1
Math.cbrt(-0); // -0
Math.cbrt(0); // 0
Math.cbrt(1); // 1
Math.cbrt(2); // 1.2599210498948732
Math.cbrt(Infinity); // Infinity
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Math.cbrt in core-js
- es-shims polyfill of Math.cbrt
- Math.pow()
- Math.sqrt()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/cbrt
