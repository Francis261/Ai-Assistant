# TypedArray.prototype.every()

Source: https://devdocs.io/javascript/global_objects/typedarray/every

The every() method of TypedArray instances returns false if it finds one element in the array that does not satisfy the provided testing function. Otherwise, it returns true. This method has the same algorithm as Array.prototype.every().

## Try it

```
function isNegative(element, index, array) {
  return element < 0;
}

const int8 = new Int8Array([-10, -20, -30, -40, -50]);

console.log(int8.every(isNegative));
// Expected output: true
```

## Syntax

```
every(callbackFn)
every(callbackFn, thisArg)
```

### Parameters

A function to execute for each element in the typed array. It should return a truthy value to indicate the element passes the test, and a falsy value otherwise. The function is called with the following arguments:

The current element being processed in the typed array.

The index of the current element being processed in the typed array.

The typed array every() was called upon.

A value to use as this when executing callbackFn. See iterative methods.

### Return value

true unless callbackFn returns a falsy value for a typed array element, in which case false is immediately returned.

## Description

See Array.prototype.every() for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Testing size of all typed array elements

The following example tests whether all elements in the typed array are 10 or bigger.

```
function isBigEnough(element, index, array) {
  return element >= 10;
}
new Uint8Array([12, 5, 8, 130, 44]).every(isBigEnough); // false
new Uint8Array([12, 54, 18, 130, 44]).every(isBigEnough); // true
```

## Specifications

## Browser compatibility

## See also

- Polyfill of TypedArray.prototype.every in core-js
- JavaScript typed arrays guide
- TypedArray
- TypedArray.prototype.forEach()
- TypedArray.prototype.some()
- TypedArray.prototype.find()
- Array.prototype.every()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/every
