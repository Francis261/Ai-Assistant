# TypedArray.prototype.with()

Source: https://devdocs.io/javascript/global_objects/typedarray/with

The with() method of TypedArray instances is the copying version of using the bracket notation to change the value of a given index. It returns a new typed array with the element at the given index replaced with the given value. This method has the same algorithm as Array.prototype.with().

## Syntax

```
arrayInstance.with(index, value)
```

### Parameters

Zero-based index at which to change the typed array, converted to an integer.

Any value to be assigned to the given index.

### Return value

A new typed array with the element at index replaced with value.

### Exceptions

Thrown if index >= array.length or index < -array.length.

## Description

See Array.prototype.with() for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Using with()

```
const arr = new Uint8Array([1, 2, 3, 4, 5]);
console.log(arr.with(2, 6)); // Uint8Array [1, 2, 6, 4, 5]
console.log(arr); // Uint8Array [1, 2, 3, 4, 5]
```

## Specifications

## Browser compatibility

## See also

- Polyfill of TypedArray.prototype.with in core-js
- JavaScript typed arrays guide
- TypedArray.prototype.toReversed()
- TypedArray.prototype.toSorted()
- TypedArray.prototype.at()
- Array.prototype.with()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/with
