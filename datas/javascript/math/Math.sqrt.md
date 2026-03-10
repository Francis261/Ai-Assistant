# Math.sqrt()

Source: https://devdocs.io/javascript/global_objects/math/sqrt

The Math.sqrt() static method returns the square root of a number. That is

## Try it

```
function calcHypotenuse(a, b) {
  return Math.sqrt(a * a + b * b);
}

console.log(calcHypotenuse(3, 4));
// Expected output: 5

console.log(calcHypotenuse(5, 12));
// Expected output: 13

console.log(calcHypotenuse(0, 0));
// Expected output: 0
```

## Syntax

```
Math.sqrt(x)
```

### Parameters

A number greater than or equal to 0.

### Return value

The square root of x, a nonnegative number. If x < 0, returns NaN.

## Description

Because sqrt() is a static method of Math, you always use it as Math.sqrt(), rather than as a method of a Math object you created (Math is not a constructor).

## Examples

### Using Math.sqrt()

```
Math.sqrt(-1); // NaN
Math.sqrt(-0); // -0
Math.sqrt(0); // 0
Math.sqrt(1); // 1
Math.sqrt(2); // 1.414213562373095
Math.sqrt(9); // 3
Math.sqrt(Infinity); // Infinity
```

## Specifications

## Browser compatibility

## See also

- Math.cbrt()
- Math.exp()
- Math.log()
- Math.pow()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt
