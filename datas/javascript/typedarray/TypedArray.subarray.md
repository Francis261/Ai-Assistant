# TypedArray.prototype.subarray()

Source: https://devdocs.io/javascript/global_objects/typedarray/subarray

The subarray() method of TypedArray instances returns a new typed array on the same ArrayBuffer store and with the same element types as for this typed array. The begin offset is inclusive and the end offset is exclusive.

## Try it

```
const uint8 = new Uint8Array([10, 20, 30, 40, 50]);

console.log(uint8.subarray(1, 3));
// Expected output: Uint8Array [20, 30]

console.log(uint8.subarray(1));
// Expected output: Uint8Array [20, 30, 40, 50]
```

## Syntax

```
subarray()
subarray(begin)
subarray(begin, end)
```

### Parameters

Element to begin at. The offset is inclusive. The whole array will be included in the new view if this value is not specified.

Element to end at. The offset is exclusive. If not specified, all elements from the one specified by begin to the end of the array are included in the new view.

### Return value

A new TypedArray object.

## Description

The range specified by begin and end is clamped to the valid index range for the current array; if the computed length of the new array would be negative, it's clamped to zero. If either begin or end is negative, it refers to an index from the end of the array instead of from the beginning.

Also note that this is creating a new view on the existing buffer; changes to the new object's contents will impact the original object and vice versa.

## Examples

### Using the subarray() method

```
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer);
uint8.set([1, 2, 3]);

console.log(uint8); // Uint8Array [ 1, 2, 3, 0, 0, 0, 0, 0 ]

const sub = uint8.subarray(0, 4);

console.log(sub); // Uint8Array [ 1, 2, 3, 0 ]
```

## Specifications

## Browser compatibility

## See also

- Polyfill of TypedArray.prototype.subarray in core-js
- JavaScript typed arrays guide
- TypedArray
- ArrayBuffer

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/subarray
