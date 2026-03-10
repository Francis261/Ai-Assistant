# Math.tanh()

Source: https://devdocs.io/javascript/global_objects/math/tanh

The Math.tanh() static method returns the hyperbolic tangent of a number. That is,

## Try it

```
console.log(Math.tanh(-1));
// Expected output: -0.7615941559557649

console.log(Math.tanh(0));
// Expected output: 0

console.log(Math.tanh(Infinity));
// Expected output: 1

console.log(Math.tanh(1));
// Expected output: 0.7615941559557649
```

## Syntax

```
Math.tanh(x)
```

### Parameters

A number.

### Return value

The hyperbolic tangent of x.

## Description

Because tanh() is a static method of Math, you always use it as Math.tanh(), rather than as a method of a Math object you created (Math is not a constructor).

## Examples

### Using Math.tanh()

```
Math.tanh(-Infinity); // -1
Math.tanh(-0); // -0
Math.tanh(0); // 0
Math.tanh(1); // 0.7615941559557649
Math.tanh(Infinity); // 1
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Math.tanh in core-js
- Math.acosh()
- Math.asinh()
- Math.atanh()
- Math.cosh()
- Math.sinh()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/tanh
