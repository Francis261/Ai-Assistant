# TypedArray.prototype.forEach()

Source: https://devdocs.io/javascript/global_objects/typedarray/foreach

The forEach() method of TypedArray instances executes a provided function once for each typed array element. This method has the same algorithm as Array.prototype.forEach().

## Try it

```
const uint8 = new Uint8Array([10, 20, 30]);

uint8.forEach((element) => console.log(element));

// Expected output: 10
// Expected output: 20
// Expected output: 30
```

## Syntax

```
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameters

A function to execute for each element in the typed array. Its return value is discarded. The function is called with the following arguments:

The current element being processed in the typed array.

The index of the current element being processed in the typed array.

The typed array forEach() was called upon.

A value to use as this when executing callbackFn. See iterative methods.

### Return value

None (undefined).

## Description

See Array.prototype.forEach() for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Logging the contents of a typed array

The following code logs a line for each element in a typed array:

```
function logArrayElements(element, index, array) {
  console.log(`a[${index}] = ${element}`);
}

new Uint8Array([0, 1, 2, 3]).forEach(logArrayElements);
// Logs:
// a[0] = 0
// a[1] = 1
// a[2] = 2
// a[3] = 3
```

## Specifications

## Browser compatibility

## See also

- Polyfill of TypedArray.prototype.forEach in core-js
- JavaScript typed arrays guide
- TypedArray
- TypedArray.prototype.find()
- TypedArray.prototype.map()
- TypedArray.prototype.filter()
- TypedArray.prototype.every()
- TypedArray.prototype.some()
- Array.prototype.forEach()
- Map.prototype.forEach()
- Set.prototype.forEach()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach
