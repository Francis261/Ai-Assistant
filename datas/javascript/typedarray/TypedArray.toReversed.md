# TypedArray.prototype.toReversed()

Source: https://devdocs.io/javascript/global_objects/typedarray/toreversed

The toReversed() method of TypedArray instances is the copying counterpart of the reverse() method. It returns a new typed array with the elements in reversed order. This method has the same algorithm as Array.prototype.toReversed().

## Syntax

```
toReversed()
```

### Parameters

None.

### Return value

A new typed array containing the elements in reversed order.

## Description

See Array.prototype.toReversed() for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Using toReversed()

```
const uint8 = new Uint8Array([1, 2, 3]);
const reversedUint8 = uint8.toReversed();
console.log(reversedUint8); // Uint8Array [3, 2, 1]
console.log(uint8); // Uint8Array [1, 2, 3]
```

## Specifications

## Browser compatibility

## See also

- Polyfill of TypedArray.prototype.toReversed in core-js
- JavaScript typed arrays guide
- TypedArray.prototype.reverse()
- TypedArray.prototype.toSorted()
- TypedArray.prototype.with()
- Array.prototype.toReversed()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toReversed
