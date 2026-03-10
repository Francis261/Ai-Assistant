# TypedArray.prototype.byteOffset

Source: https://devdocs.io/javascript/global_objects/typedarray/byteoffset

The byteOffset accessor property of TypedArray instances returns the offset (in bytes) of this typed array from the start of its ArrayBuffer or SharedArrayBuffer.

## Description

The byteOffset property is an accessor property whose set accessor function is undefined, meaning that you can only read this property. The value is established when the typed array is constructed and cannot be changed. However, the byteOffset becomes 0 if the underlying buffer is resized such that the viewed range is no longer valid.

## Examples

### Using the byteOffset property

```
const buffer = new ArrayBuffer(8);

const uint8array1 = new Uint8Array(buffer);
uint8array1.byteOffset; // 0 (no offset specified)

const uint8array2 = new Uint8Array(buffer, 3);
uint8array2.byteOffset; // 3 (as specified when constructing Uint8Array)

const buffer2 = new ArrayBuffer(16, { maxByteLength: 32 });
const uint8lengthTracking = new Uint8Array(buffer2, 4);
uint8lengthTracking.byteOffset; // 4
buffer2.resize(3);
uint8lengthTracking.byteOffset; // 0 (viewed range is no longer valid)
```

## Specifications

## Browser compatibility

## See also

- JavaScript typed arrays guide
- TypedArray

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteOffset
