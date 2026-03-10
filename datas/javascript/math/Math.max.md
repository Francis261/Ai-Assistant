# Math.max()

Source: https://devdocs.io/javascript/global_objects/math/max

The Math.max() static method returns the largest of the numbers given as input parameters, or -Infinity if there are no parameters.

## Try it

```
console.log(Math.max(1, 3, 2));
// Expected output: 3

console.log(Math.max(-1, -3, -2));
// Expected output: -1

const array = [1, 3, 2];

console.log(Math.max(...array));
// Expected output: 3
```

## Syntax

```
Math.max()
Math.max(value1)
Math.max(value1, value2)
Math.max(value1, value2, /* …, */ valueN)
```

### Parameters

Zero or more numbers among which the largest value will be selected and returned.

### Return value

The largest of the given numbers. Returns NaN if any of the parameters is or is converted into NaN. Returns -Infinity if no parameters are provided.

## Description

Because max() is a static method of Math, you always use it as Math.max(), rather than as a method of a Math object you created (Math is not a constructor).

Math.max.length is 2, which weakly signals that it's designed to handle at least two parameters.

## Examples

### Using Math.max()

```
Math.max(10, 20); // 20
Math.max(-10, -20); // -10
Math.max(-10, 20); // 20
```

### Getting the maximum element of an array

Array.prototype.reduce() can be used to find the maximum element in a numeric array, by comparing each value:

```
const arr = [1, 2, 3];
const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
```

The following function uses Function.prototype.apply() to get the maximum of an array. getMaxOfArray([1, 2, 3]) is equivalent to Math.max(1, 2, 3), but you can use getMaxOfArray() on programmatically constructed arrays. This should only be used for arrays with relatively few elements.

```
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
```

The spread syntax is a shorter way of writing the apply solution to get the maximum of an array:

```
const arr = [1, 2, 3];
const max = Math.max(...arr);
```

However, both spread (...) and apply will either fail or return the wrong result if the array has too many elements, because they try to pass the array elements as function parameters. See Using apply and built-in functions for more details. The reduce solution does not have this problem.

## Specifications

## Browser compatibility

## See also

- Math.min()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
