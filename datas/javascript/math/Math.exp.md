# Math.exp()

Source: https://devdocs.io/javascript/global_objects/math/exp

The Math.exp() static method returns e raised to the power of a number. That is

## Try it

```
console.log(Math.exp(0));
// Expected output: 1

console.log(Math.exp(1));
// Expected output: 2.718281828459 (approximately)

console.log(Math.exp(-1));
// Expected output: 0.36787944117144233

console.log(Math.exp(2));
// Expected output: 7.38905609893065
```

## Syntax

```
Math.exp(x)
```

### Parameters

A number.

### Return value

A nonnegative number representing ex, where e is the base of the natural logarithm.

## Description

Because exp() is a static method of Math, you always use it as Math.exp(), rather than as a method of a Math object you created (Math is not a constructor).

Beware that e to the power of a number very close to 0 will be very close to 1 and suffer from loss of precision. In this case, you may want to use Math.expm1 instead, and obtain a much higher-precision fractional part of the answer.

## Examples

### Using Math.exp()

```
Math.exp(-Infinity); // 0
Math.exp(-1); // 0.36787944117144233
Math.exp(0); // 1
Math.exp(1); // 2.718281828459045
Math.exp(Infinity); // Infinity
```

## Specifications

## Browser compatibility

## See also

- Math.E
- Math.expm1()
- Math.log()
- Math.log10()
- Math.log1p()
- Math.log2()
- Math.pow()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/exp
