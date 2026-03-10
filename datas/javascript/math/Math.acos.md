# Math.acos()

Source: https://devdocs.io/javascript/global_objects/math/acos

The Math.acos() static method returns the inverse cosine (in radians) of a number. That is,

## Try it

```
// Calculates angle of a right-angle triangle in radians
function calcAngle(adjacent, hypotenuse) {
  return Math.acos(adjacent / hypotenuse);
}

console.log(calcAngle(8, 10));
// Expected output: 0.6435011087932843

console.log(calcAngle(5, 3));
// Expected output: NaN
```

## Syntax

```
Math.acos(x)
```

### Parameters

A number between -1 and 1, inclusive, representing the angle's cosine value.

### Return value

The inverse cosine (angle in radians between 0 and π, inclusive) of x. If x is less than -1 or greater than 1, returns NaN.

## Description

Because acos() is a static method of Math, you always use it as Math.acos(), rather than as a method of a Math object you created (Math is not a constructor).

## Examples

### Using Math.acos()

```
Math.acos(-2); // NaN
Math.acos(-1); // 3.141592653589793 (π)
Math.acos(0); // 1.5707963267948966 (π/2)
Math.acos(0.5); // 1.0471975511965979 (π/3)
Math.acos(1); // 0
Math.acos(2); // NaN
```

## Specifications

## Browser compatibility

## See also

- Math.asin()
- Math.atan()
- Math.atan2()
- Math.cos()
- Math.sin()
- Math.tan()
- CSS acos() function

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/acos
