# Number.prototype.toExponential()

Source: https://devdocs.io/javascript/global_objects/number/toexponential

The toExponential() method of Number values returns a string representing this number in exponential notation.

## Try it

```
function expo(x, f) {
  return Number.parseFloat(x).toExponential(f);
}

console.log(expo(123456, 2));
// Expected output: "1.23e+5"

console.log(expo("123456"));
// Expected output: "1.23456e+5"

console.log(expo("oink"));
// Expected output: "NaN"
```

## Syntax

```
toExponential()
toExponential(fractionDigits)
```

### Parameters

Optional. An integer specifying the number of digits after the decimal point. Defaults to as many digits as necessary to specify the number.

### Return value

A string representing the given Number object in exponential notation with one digit before the decimal point, rounded to fractionDigits digits after the decimal point.

### Exceptions

Thrown if fractionDigits is not between 0 and 100 (inclusive).

Thrown if this method is invoked on an object that is not a Number.

## Description

If the fractionDigits argument is omitted, the number of digits after the decimal point defaults to the number of digits necessary to represent the value uniquely.

If you use the toExponential() method for a numeric literal and the numeric literal has no exponent and no decimal point, leave whitespace(s) before the dot that precedes the method call to prevent the dot from being interpreted as a decimal point.

If a number has more digits than requested by the fractionDigits parameter, the number is rounded to the nearest number represented by fractionDigits digits. See the discussion of rounding in the description of the toFixed() method, which also applies to toExponential().

## Examples

### Using toExponential

```
const numObj = 77.1234;

console.log(numObj.toExponential()); // 7.71234e+1
console.log(numObj.toExponential(4)); // 7.7123e+1
console.log(numObj.toExponential(2)); // 7.71e+1
console.log((77.1234).toExponential()); // 7.71234e+1
console.log((77).toExponential()); // 7.7e+1
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Number.prototype.toExponential with many bug fixes in core-js
- es-shims polyfill of Number.prototype.toExponential
- Number.prototype.toFixed()
- Number.prototype.toPrecision()
- Number.prototype.toString()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential
