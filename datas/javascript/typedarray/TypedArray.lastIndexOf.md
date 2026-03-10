# TypedArray.prototype.lastIndexOf()

Source: https://devdocs.io/javascript/global_objects/typedarray/lastindexof

The lastIndexOf() method of TypedArray instances returns the last index at which a given element can be found in the typed array, or -1 if it is not present. The typed array is searched backwards, starting at fromIndex. This method has the same algorithm as Array.prototype.lastIndexOf().

## Try it

```
const uint8 = new Uint8Array([10, 20, 50, 50, 50, 60]);

console.log(uint8.lastIndexOf(50, 5));
// Expected output: 4

console.log(uint8.lastIndexOf(50, 3));
// Expected output: 3
```

## Syntax

```
lastIndexOf(searchElement)
lastIndexOf(searchElement, fromIndex)
```

### Parameters

Element to locate in the typed array.

Zero-based index at which to start searching backwards, converted to an integer.

### Return value

The last index of searchElement in the typed array; -1 if not found.

## Description

See Array.prototype.lastIndexOf() for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Using lastIndexOf()

```
const uint8 = new Uint8Array([2, 5, 9, 2]);
uint8.lastIndexOf(2); // 3
uint8.lastIndexOf(7); // -1
uint8.lastIndexOf(2, 3); // 3
uint8.lastIndexOf(2, 2); // 0
uint8.lastIndexOf(2, -2); // 0
uint8.lastIndexOf(2, -1); // 3
```

## Specifications

## Browser compatibility

## See also

- Polyfill of TypedArray.prototype.lastIndexOf in core-js
- JavaScript typed arrays guide
- TypedArray
- TypedArray.prototype.findIndex()
- TypedArray.prototype.findLastIndex()
- TypedArray.prototype.indexOf()
- Array.prototype.lastIndexOf()
- String.prototype.lastIndexOf()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/lastIndexOf
