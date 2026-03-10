# TypedArray.prototype.filter()

Source: https://devdocs.io/javascript/global_objects/typedarray/filter

The filter() method of TypedArray instances creates a copy of a portion of a given typed array, filtered down to just the elements from the given typed array that pass the test implemented by the provided function. This method has the same algorithm as Array.prototype.filter().

## Try it

```
function isNegative(element, index, array) {
  return element < 0;
}

const int8 = new Int8Array([-10, 20, -30, 40, -50]);
const negInt8 = int8.filter(isNegative);

console.log(negInt8);
// Expected output: Int8Array [-10, -30, -50]
```

## Syntax

```
filter(callbackFn)
filter(callbackFn, thisArg)
```

### Parameters

A function to execute for each element in the typed array. It should return a truthy value to keep the element in the resulting typed array, and a falsy value otherwise. The function is called with the following arguments:

The current element being processed in the typed array.

The index of the current element being processed in the typed array.

The typed array filter() was called upon.

A value to use as this when executing callbackFn. See iterative methods.

### Return value

A copy of the given typed array containing just the elements that pass the test. If no elements pass the test, an empty typed array is returned.

## Description

See Array.prototype.filter() for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Filtering out all small values

The following example uses filter() to create a filtered typed array that has all elements with values less than 10 removed.

```
function isBigEnough(element, index, array) {
  return element >= 10;
}
new Uint8Array([12, 5, 8, 130, 44]).filter(isBigEnough);
// Uint8Array [ 12, 130, 44 ]
```

## Specifications

## Browser compatibility

## See also

- Polyfill of TypedArray.prototype.filter in core-js
- JavaScript typed arrays guide
- TypedArray
- TypedArray.prototype.forEach()
- TypedArray.prototype.every()
- TypedArray.prototype.map()
- TypedArray.prototype.some()
- TypedArray.prototype.reduce()
- Array.prototype.filter()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/filter
