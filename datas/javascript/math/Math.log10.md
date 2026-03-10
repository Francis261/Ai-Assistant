# Math.log10()

Source: https://devdocs.io/javascript/global_objects/math/log10

The Math.log10() static method returns the base 10 logarithm of a number. That is

## Try it

```
console.log(Math.log10(100000));
// Expected output: 5

console.log(Math.log10(2));
// Expected output: 0.3010299956639812

console.log(Math.log10(1));
// Expected output: 0

console.log(Math.log10(0));
// Expected output: -Infinity
```

## Syntax

```
Math.log10(x)
```

### Parameters

A number greater than or equal to 0.

### Return value

The base 10 logarithm of x. If x < 0, returns NaN.

## Description

Because log10() is a static method of Math, you always use it as Math.log10(), rather than as a method of a Math object you created (Math is not a constructor).

This function is the equivalent of Math.log(x) / Math.log(10). For log10(e), use the constant Math.LOG10E, which is 1 / Math.LN10.

## Examples

### Using Math.log10()

```
Math.log10(-2); // NaN
Math.log10(-0); // -Infinity
Math.log10(0); // -Infinity
Math.log10(1); // 0
Math.log10(2); // 0.3010299956639812
Math.log10(100000); // 5
Math.log10(Infinity); // Infinity
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Math.log10 in core-js
- es-shims polyfill of Math.log10
- Math.exp()
- Math.log()
- Math.log1p()
- Math.log2()
- Math.pow()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log10
