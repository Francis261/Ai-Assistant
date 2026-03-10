# Math.atan()

Source: https://devdocs.io/javascript/global_objects/math/atan

The Math.atan() static method returns the inverse tangent (in radians) of a number, that is

## Try it

```
// Calculates angle of a right-angle triangle in radians
function calcAngle(opposite, adjacent) {
  return Math.atan(opposite / adjacent);
}

console.log(calcAngle(8, 10));
// Expected output: 0.6747409422235527

console.log(calcAngle(5, 3));
// Expected output: 1.0303768265243125
```

## Syntax

```
Math.atan(x)
```

### Parameters

A number.

### Return value

The inverse tangent (angle in radians between -π2-\frac{\pi}{2} and π2\frac{\pi}{2}, inclusive) of x. If x is Infinity, it returns π2\frac{\pi}{2}. If x is -Infinity, it returns -π2-\frac{\pi}{2}.

## Description

Because atan() is a static method of Math, you always use it as Math.atan(), rather than as a method of a Math object you created (Math is not a constructor).

## Examples

### Using Math.atan()

```
Math.atan(-Infinity); // -1.5707963267948966 (-π/2)
Math.atan(-0); // -0
Math.atan(0); // 0
Math.atan(1); // 0.7853981633974483  (π/4)
Math.atan(Infinity); // 1.5707963267948966  (π/2)

// The angle that the line (0,0) -- (x,y) forms with the x-axis in a Cartesian coordinate system
const theta = (x, y) => Math.atan(y / x);
```

Note that you may want to avoid the theta function and use Math.atan2() instead, which has a wider range (between -π and π) and avoids outputting NaN for cases such as when x is 0.

## Specifications

## Browser compatibility

## See also

- Math.acos()
- Math.asin()
- Math.atan2()
- Math.cos()
- Math.sin()
- Math.tan()
- CSS atan() function

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/atan
