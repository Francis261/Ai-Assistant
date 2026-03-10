# Math.asin()

Source: https://devdocs.io/javascript/global_objects/math/asin

The Math.asin() static method returns the inverse sine (in radians) of a number. That is,

## Try it

```
// Calculates angle of a right-angle triangle in radians
function calcAngle(opposite, hypotenuse) {
  return Math.asin(opposite / hypotenuse);
}

console.log(calcAngle(6, 10));
// Expected output: 0.6435011087932844

console.log(calcAngle(5, 3));
// Expected output: NaN
```

## Syntax

```
Math.asin(x)
```

### Parameters

A number between -1 and 1, inclusive, representing the angle's sine value.

### Return value

The inverse sine (angle in radians between -π2-\frac{\pi}{2} and π2\frac{\pi}{2}, inclusive) of x. If x is less than -1 or greater than 1, returns NaN.

## Description

Because asin() is a static method of Math, you always use it as Math.asin(), rather than as a method of a Math object you created (Math is not a constructor).

## Examples

### Using Math.asin()

```
Math.asin(-2); // NaN
Math.asin(-1); // -1.5707963267948966 (-π/2)
Math.asin(-0); // -0
Math.asin(0); // 0
Math.asin(0.5); // 0.5235987755982989 (π/6)
Math.asin(1); // 1.5707963267948966 (π/2)
Math.asin(2); // NaN
```

## Specifications

## Browser compatibility

## See also

- Math.acos()
- Math.atan()
- Math.atan2()
- Math.cos()
- Math.sin()
- Math.tan()
- CSS asin() function

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/asin
