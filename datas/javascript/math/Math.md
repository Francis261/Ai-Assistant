# Math

Source: https://devdocs.io/javascript/global_objects/math

The Math namespace object contains static properties and methods for mathematical constants and functions.

Math works with the Number type. It doesn't work with BigInt.

## Description

Unlike most global objects, Math is not a constructor. You cannot use it with the new operator or invoke the Math object as a function. All properties and methods of Math are static.

Note: Many Math functions have a precision that's implementation-dependent.

This means that different browsers can give a different result. Even the same JavaScript engine on a different OS or architecture can give different results!

## Static properties

Euler's number and the base of natural logarithms; approximately 2.718.

Natural logarithm of 10; approximately 2.303.

Natural logarithm of 2; approximately 0.693.

Base-10 logarithm of E; approximately 0.434.

Base-2 logarithm of E; approximately 1.443.

Ratio of a circle's circumference to its diameter; approximately 3.14159.

Square root of ½; approximately 0.707.

Square root of 2; approximately 1.414.

The initial value of the [Symbol.toStringTag] property is the string "Math". This property is used in Object.prototype.toString().

## Static methods

Returns the absolute value of the input.

Returns the arccosine of the input.

Returns the hyperbolic arccosine of the input.

Returns the arcsine of the input.

Returns the hyperbolic arcsine of a number.

Returns the arctangent of the input.

Returns the arctangent of the quotient of its arguments.

Returns the hyperbolic arctangent of the input.

Returns the cube root of the input.

Returns the smallest integer greater than or equal to the input.

Returns the number of leading zero bits of the 32-bit integer input.

Returns the cosine of the input.

Returns the hyperbolic cosine of the input.

Returns ex, where x is the argument, and e is Euler's number (2.718…, the base of the natural logarithm).

Returns subtracting 1 from exp(x).

Returns the largest integer less than or equal to the input.

Returns the nearest half precision float representation of the input.

Returns the nearest single precision float representation of the input.

Returns the square root of the sum of squares of its arguments.

Returns the result of the 32-bit integer multiplication of the inputs.

Returns the natural logarithm (㏒e; also, ㏑) of the input.

Returns the base-10 logarithm of the input.

Returns the natural logarithm (㏒e; also ㏑) of 1 + x for the number x.

Returns the base-2 logarithm of the input.

Returns the largest of zero or more numbers.

Returns the smallest of zero or more numbers.

Returns base x to the exponent power y (that is, xy).

Returns a pseudo-random number between 0 and 1.

Returns the value of the input rounded to the nearest integer.

Returns the sign of the input, indicating whether it is positive, negative, or zero.

Returns the sine of the input.

Returns the hyperbolic sine of the input.

Returns the positive square root of the input.

Returns the sum of a passed iterable of numbers, avoiding floating point precision loss in intermediate results.

Returns the tangent of the input.

Returns the hyperbolic tangent of the input.

Returns the integer portion of the input, removing any fractional digits.

## Examples

### Converting between degrees and radians

The trigonometric functions sin(), cos(), tan(), asin(), acos(), atan(), and atan2() expect (and return) angles in radians.

Since humans tend to think in degrees, and some functions (such as CSS transforms) can accept degrees, it is a good idea to keep functions handy that convert between the two:

```
function degToRad(degrees) {
  return degrees * (Math.PI / 180);
}

function radToDeg(rad) {
  return rad / (Math.PI / 180);
}
```

### Calculating the height of an equilateral triangle

If we want to calculate the height of an equilateral triangle, and we know its side length is 100, we can use the formulae length of the adjacent multiplied by the tangent of the angle is equal to the opposite.

In JavaScript, we can do this with the following:

```
50 * Math.tan(degToRad(60));
```

We use our degToRad() function to convert 60 degrees to radians, as Math.tan() expects an input value in radians.

### Returning a random integer between two bounds

This can be achieved with a combination of Math.random() and Math.floor():

```
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

random(1, 10);
```

## Specifications

## Browser compatibility

## See also

- Number

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
