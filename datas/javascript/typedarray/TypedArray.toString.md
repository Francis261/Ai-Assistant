# TypedArray.prototype.toString()

Source: https://devdocs.io/javascript/global_objects/typedarray/tostring

The toString() method of TypedArray instances returns a string representing the specified typed array and its elements. This method has the same algorithm as Array.prototype.toString().

## Try it

```
const uint8 = new Uint8Array([10, 20, 30, 40, 50]);

const uint8String = uint8.toString();

console.log(uint8String.startsWith("10"));
// Expected output: true
```

## Syntax

```
toString()
```

### Parameters

None.

### Return value

A string representing the elements of the typed array.

## Description

See Array.prototype.toString() for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Converting a typed array to a string

```
const uint8 = new Uint8Array([1, 2, 3]);
// Explicit conversion
console.log(uint8.toString()); // 1,2,3
// Implicit conversion
console.log(`${uint8}`); // 1,2,3
```

## Specifications

## Browser compatibility

## See also

- JavaScript typed arrays guide
- TypedArray
- TypedArray.prototype.join()
- TypedArray.prototype.toLocaleString()
- Array.prototype.toString()
- String.prototype.toString()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toString
