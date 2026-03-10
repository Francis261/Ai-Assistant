# Math.log()

Source: https://devdocs.io/javascript/global_objects/math/log

The Math.log() static method returns the natural logarithm (base e) of a number. That is

## Try it

```
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

// 2 x 2 x 2 = 8
console.log(getBaseLog(2, 8));
// Expected output: 3

// 5 x 5 x 5 x 5 = 625
console.log(getBaseLog(5, 625));
// Expected output: 4
```

## Syntax

```
Math.log(x)
```

### Parameters

A number greater than or equal to 0.

### Return value

The natural logarithm (base e) of x. If x is ±0, returns -Infinity. If x < 0, returns NaN.

## Description

Because log() is a static method of Math, you always use it as Math.log(), rather than as a method of a Math object you created (Math is not a constructor).

If you need the natural log of 2 or 10, use the constants Math.LN2 or Math.LN10. If you need a logarithm to base 2 or 10, use Math.log2() or Math.log10(). If you need a logarithm to other bases, use Math.log(x) / Math.log(otherBase) as in the example below; you might want to precalculate 1 / Math.log(otherBase) since multiplication in Math.log(x) * constant is much faster.

Beware that positive numbers very close to 1 can suffer from loss of precision and make its natural logarithm less accurate. In this case, you may want to use Math.log1p instead.

## Examples

### Using Math.log()

```
Math.log(-1); // NaN
Math.log(-0); // -Infinity
Math.log(0); // -Infinity
Math.log(1); // 0
Math.log(10); // 2.302585092994046
Math.log(Infinity); // Infinity
```

### Using Math.log() with a different base

The following function returns the logarithm of y with base x (i.e., logxy\log_x y):

```
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
```

If you run getBaseLog(10, 1000), it returns 2.9999999999999996 due to floating-point rounding, but still very close to the actual answer of 3.

## Specifications

## Browser compatibility

## See also

- Math.exp()
- Math.log1p()
- Math.log10()
- Math.log2()
- Math.pow()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/log
