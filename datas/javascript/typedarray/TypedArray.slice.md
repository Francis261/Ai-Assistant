# TypedArray.prototype.slice()

Source: https://devdocs.io/javascript/global_objects/typedarray/slice

The slice() method of TypedArray instances returns a copy of a portion of a typed array into a new typed array object selected from start to end (end not included) where start and end represent the index of items in that typed array. The original typed array will not be modified. This method has the same algorithm as Array.prototype.slice().

## Try it

```
const bytes = new Uint8Array([10, 20, 30, 40, 50]);
const byteSlice = bytes.slice(1, 3);

console.log(byteSlice);
// Expected output: Uint8Array [20, 30]
```

## Syntax

```
slice()
slice(start)
slice(start, end)
```

### Parameters

Zero-based index at which to start extraction, converted to an integer.

Zero-based index at which to end extraction, converted to an integer. slice() extracts up to but not including end.

### Return value

A new typed array containing the extracted elements.

## Description

See Array.prototype.slice() for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Return a portion of an existing typed array

```
const bytes = new Uint8Array([1, 2, 3]);
bytes.slice(1); // Uint8Array [ 2, 3 ]
bytes.slice(2); // Uint8Array [ 3 ]
bytes.slice(-2); // Uint8Array [ 2, 3 ]
bytes.slice(0, 1); // Uint8Array [ 1 ]
```

## Specifications

## Browser compatibility

## See also

- Polyfill of TypedArray.prototype.slice in core-js
- es-shims polyfill of TypedArray.prototype.slice
- JavaScript typed arrays guide
- TypedArray
- Array.prototype.slice()
- String.prototype.slice()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/slice
