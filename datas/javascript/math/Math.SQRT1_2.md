# Math.SQRT1_2

Source: https://devdocs.io/javascript/global_objects/math/sqrt1_2

The Math.SQRT1_2 static data property represents the square root of 1/2, which is approximately 0.707.

## Try it

```
function getRoot1Over2() {
  return Math.SQRT1_2;
}

console.log(getRoot1Over2());
// Expected output: 0.7071067811865476
```

## Value

## Description

Math.SQRT1_2 is a constant and a more performant equivalent to Math.sqrt(0.5).

Because SQRT1_2 is a static property of Math, you always use it as Math.SQRT1_2, rather than as a property of a Math object you created (Math is not a constructor).

## Examples

### Using Math.SQRT1_2

The following function calculates the side length of a square given its diagonal length:

```
function getSquareSideLength(diagonalLength) {
  return diagonalLength * Math.SQRT1_2;
}
```

## Specifications

## Browser compatibility

## See also

- Math.pow()
- Math.sqrt()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/SQRT1_2
