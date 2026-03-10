# Math.log2()

Source: https://devdocs.io/javascript/global_objects/math/log2

The Math.log2() static method returns the base 2 logarithm of a number. That is

## Try it

```
console.log(Math.log2(3));
// Expected output: 1.584962500721156

console.log(Math.log2(2));
// Expected output: 1

console.log(Math.log2(1));
// Expected output: 0

console.log(Math.log2(0));
// Expected output: -Infinity
```

## Syntax

```
Math.log2(x)
```

### Parameters

A number greater than or equal to 0.

### Return value

The base 2 logarithm of x. If x < 0, returns NaN.

## Description

Because log2() is a static method of Math, you always use it as Math.log2(), rather than as a method of a Math object you created (Math is not a constructor).

This function is the equivalent of Math.log(x) / Math.log(2). For log2(e), use the constant Math.LOG2E, which is 1 / Math.LN2.

## Examples

### Using Math.log2()

```
Math.log2(-2); // NaN
Math.log2(-0); // -Infinity
Math.log2(0); // -Infinity
Math.log2(1); // 0
Math.log2(2); // 1
Math.log2(3); // 1.584962500721156
Math.log2(1024); // 10
Math.log2(Infinity); // Infinity
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Math.log2 in core-js
- Math.exp()
- Math.log()
- Math.log10()
- Math.log1p()
- Math.pow()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log2
