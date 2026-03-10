# Math.log1p()

Source: https://devdocs.io/javascript/global_objects/math/log1p

The Math.log1p() static method returns the natural logarithm (base e) of 1 + x, where x is the argument. That is:

## Try it

```
console.log(Math.log1p(1));
// Expected output: 0.6931471805599453

console.log(Math.log1p(0));
// Expected output: 0

console.log(Math.log1p(-1));
// Expected output: -Infinity

console.log(Math.log1p(-2));
// Expected output: NaN
```

## Syntax

```
Math.log1p(x)
```

### Parameters

A number greater than or equal to -1.

### Return value

The natural logarithm (base e) of x + 1. If x is -1, returns -Infinity. If x < -1, returns NaN.

## Description

For very small values of x, adding 1 can reduce or eliminate precision. The double floats used in JS give you about 15 digits of precision. 1 + 1e-15 = 1.000000000000001, but 1 + 1e-16 = 1.000000000000000 and therefore exactly 1.0 in that arithmetic, because digits past 15 are rounded off.

When you calculate log(1 + x), where x is a small positive number, you should get an answer very close to x because: limx→0log⁡(1+x)x=1\lim_{x \to 0} \frac{\log(1+x)}{x} = 1. If you calculate Math.log(1 + 1.1111111111e-15), you should get an answer close to 1.1111111111e-15. Instead, you will end up taking the logarithm of 1.00000000000000111022 (the roundoff is in binary, so sometimes it gets ugly), and get the answer 1.11022…e-15, with only 3 correct digits. If you calculate Math.log1p(1.1111111111e-15) instead, you will get a much more accurate answer, 1.1111111110999995e-15, with 15 correct digits of precision (actually 16 in this case).

If the value of x is less than -1, the return value is always NaN.

Because log1p() is a static method of Math, you always use it as Math.log1p(), rather than as a method of a Math object you created (Math is not a constructor).

## Examples

### Using Math.log1p()

```
Math.log1p(-2); // NaN
Math.log1p(-1); // -Infinity
Math.log1p(-0); // -0
Math.log1p(0); // 0
Math.log1p(1); // 0.6931471805599453
Math.log1p(Infinity); // Infinity
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Math.log1p in core-js
- es-shims polyfill of Math.log1p
- Math.exp()
- Math.log()
- Math.expm1()
- Math.log10()
- Math.log2()
- Math.pow()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log1p
