# TypedArray.prototype.findIndex()

Source: https://devdocs.io/javascript/global_objects/typedarray/findindex

The findIndex() method of TypedArray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned. This method has the same algorithm as Array.prototype.findIndex().

## Try it

```
function isNegative(element, index, array) {
  return element < 0;
}

const int8 = new Int8Array([10, -20, 30, -40, 50]);

console.log(int8.findIndex(isNegative));
// Expected output: 1
```

## Syntax

```
findIndex(callbackFn)
findIndex(callbackFn, thisArg)
```

### Parameters

A function to execute for each element in the typed array. It should return a truthy value to indicate a matching element has been found, and a falsy value otherwise. The function is called with the following arguments:

The current element being processed in the typed array.

The index of the current element being processed in the typed array.

The typed array findIndex() was called upon.

A value to use as this when executing callbackFn. See iterative methods.

### Return value

The index of the first element in the typed array that passes the test. Otherwise, -1.

## Description

See Array.prototype.findIndex() for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Find the index of the first prime number in a typed array

The following example returns the index of the first element in the typed array that is a prime number, or -1 if there is no prime number.

```
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  if (n % 2 === 0) {
    return n === 2;
  }
  for (let factor = 3; factor * factor <= n; factor += 2) {
    if (n % factor === 0) {
      return false;
    }
  }
  return true;
}

const uint8 = new Uint8Array([4, 6, 8, 12]);
const uint16 = new Uint16Array([4, 6, 7, 12]);

console.log(uint8.findIndex(isPrime)); // -1, not found
console.log(uint16.findIndex(isPrime)); // 2
```

Note: The isPrime() implementation is for demonstration only. For a real-world application, you would want to use a heavily memoized algorithm such as the Sieve of Eratosthenes to avoid repeated calculations.

## Specifications

## Browser compatibility

## See also

- Polyfill of TypedArray.prototype.findIndex in core-js
- JavaScript typed arrays guide
- TypedArray
- TypedArray.prototype.find()
- TypedArray.prototype.findLast()
- TypedArray.prototype.findLastIndex()
- TypedArray.prototype.indexOf()
- TypedArray.prototype.lastIndexOf()
- Array.prototype.findIndex()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex
