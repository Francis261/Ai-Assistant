# TypedArray.prototype.reverse()

Source: https://devdocs.io/javascript/global_objects/typedarray/reverse

The reverse() method of TypedArray instances reverses a typed array in place and returns the reference to the same typed array, the first typed array element now becoming the last, and the last typed array element becoming the first. In other words, elements order in the typed array will be turned towards the direction opposite to that previously stated. This method has the same algorithm as Array.prototype.reverse().

## Try it

```
const uint8 = new Uint8Array([1, 2, 3]);
uint8.reverse();

console.log(uint8);
// Expected output: Uint8Array [3, 2, 1]
```

## Syntax

```
reverse()
```

### Parameters

None.

### Return value

The reference to the original typed array, now reversed. Note that the typed array is reversed in place, and no copy is made.

## Description

See Array.prototype.reverse() for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Using reverse()

```
const uint8 = new Uint8Array([1, 2, 3]);
uint8.reverse();

console.log(uint8); // Uint8Array [3, 2, 1]
```

## Specifications

## Browser compatibility

## See also

- Polyfill of TypedArray.prototype.reverse in core-js
- JavaScript typed arrays guide
- TypedArray
- TypedArray.prototype.join()
- TypedArray.prototype.sort()
- TypedArray.prototype.toReversed()
- Array.prototype.reverse()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/reverse
