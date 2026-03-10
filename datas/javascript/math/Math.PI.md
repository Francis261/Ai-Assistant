# Math.PI

Source: https://devdocs.io/javascript/global_objects/math/pi

The Math.PI static data property represents the ratio of the circumference of a circle to its diameter, approximately 3.14159.

## Try it

```
function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

console.log(Math.PI);
// Expected output: 3.141592653589793

console.log(calculateCircumference(10));
// Expected output: 62.83185307179586
```

## Value

## Description

Because PI is a static property of Math, you always use it as Math.PI, rather than as a property of a Math object you created (Math is not a constructor).

## Examples

### Using Math.PI

The following function uses Math.PI to calculate the circumference of a circle with a passed radius.

```
function calculateCircumference(radius) {
  return Math.PI * (radius + radius);
}

calculateCircumference(1); // 6.283185307179586
```

## Specifications

## Browser compatibility

## See also

- Math

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
