# Math.expm1()

Source: https://devdocs.io/javascript/global_objects/math/expm1

The Math.expm1() static method returns e raised to the power of a number, subtracted by 1. That is

## Try it

```
console.log(Math.expm1(0));
// Expected output: 0

console.log(Math.expm1(1));
// Expected output: 1.718281828459045

console.log(Math.expm1(-1));
// Expected output: -0.6321205588285577

console.log(Math.expm1(2));
// Expected output: 6.38905609893065
```

## Syntax

```
Math.expm1(x)
```

### Parameters

A number.

### Return value

A number representing ex - 1, where e is the base of the natural logarithm.

## Description

For very small values of x, adding 1 can reduce or eliminate precision. The double floats used in JS give you about 15 digits of precision. 1 + 1e-15 = 1.000000000000001, but 1 + 1e-16 = 1.000000000000000 and therefore exactly 1.0 in that arithmetic, because digits past 15 are rounded off.

When you calculate ex\mathrm{e}^x, where x is a number very close to 0, you should get an answer very close to 1 + x because: limx→0ex−1x=1\lim_{x \to 0} \frac{\mathrm{e}^x - 1}{x} = 1. If you calculate Math.exp(1.1111111111e-15) - 1, you should get an answer close to 1.1111111111e-15. Instead, due to the highest significant figure in the result of Math.exp being the units digit 1, the final value ends up being 1.1102230246251565e-15, with only 3 correct digits. If you calculate Math.expm1(1.1111111111e-15) instead, you will get a much more accurate answer, 1.1111111111000007e-15, with 11 correct digits of precision.

Because expm1() is a static method of Math, you always use it as Math.expm1(), rather than as a method of a Math object you created (Math is not a constructor).

## Examples

### Using Math.expm1()

```
Math.expm1(-Infinity); // -1
Math.expm1(-1); // -0.6321205588285577
Math.expm1(-0); // -0
Math.expm1(0); // 0
Math.expm1(1); // 1.718281828459045
Math.expm1(Infinity); // Infinity
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Math.expm1 in core-js
- Math.E
- Math.exp()
- Math.log()
- Math.log10()
- Math.log1p()
- Math.log2()
- Math.pow()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/expm1
