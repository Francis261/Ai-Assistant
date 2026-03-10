# TypedArray.prototype.indexOf()

Source: https://devdocs.io/javascript/global_objects/typedarray/indexof

The indexOf() method of TypedArray instances returns the first index at which a given element can be found in the typed array, or -1 if it is not present. This method has the same algorithm as Array.prototype.indexOf().

## Try it

```
const uint8 = new Uint8Array([10, 20, 30, 40, 50]);

console.log(uint8.indexOf(50));
// Expected output: 4

// From position 3
console.log(uint8.indexOf(20, 3));
// Expected output: -1

console.log(uint8.indexOf(51));
// Expected output: -1
```

## Syntax

```
indexOf(searchElement)
indexOf(searchElement, fromIndex)
```

### Parameters

Element to locate in the typed array.

Zero-based index at which to start searching, converted to an integer.

### Return value

The first index of searchElement in the typed array; -1 if not found.

## Description

See Array.prototype.indexOf() for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Using indexOf()

```
const uint8 = new Uint8Array([2, 5, 9]);
uint8.indexOf(2); // 0
uint8.indexOf(7); // -1
uint8.indexOf(9, 2); // 2
uint8.indexOf(2, -1); // -1
uint8.indexOf(2, -3); // 0
```

## Specifications

## Browser compatibility

## See also

- Polyfill of TypedArray.prototype.indexOf in core-js
- JavaScript typed arrays guide
- TypedArray
- TypedArray.prototype.findIndex()
- TypedArray.prototype.findLastIndex()
- TypedArray.prototype.lastIndexOf()
- Array.prototype.indexOf()
- String.prototype.indexOf()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/indexOf
