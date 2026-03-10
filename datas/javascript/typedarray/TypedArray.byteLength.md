# TypedArray.prototype.byteLength

Source: https://devdocs.io/javascript/global_objects/typedarray/bytelength

The byteLength accessor property of TypedArray instances returns the length (in bytes) of this typed array.

## Try it

```
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(8);
const uint8 = new Uint8Array(buffer, 2);

console.log(uint8.byteLength);
// Expected output: 6
```

## Description

The byteLength property is an accessor property whose set accessor function is undefined, meaning that you can only read this property. If the typed array is length-tracking, then its length depends on the length of the underlying buffer, and may change if the buffer is resized. Otherwise, the value is established when the typed array is constructed and cannot be changed. Whether length-tracking or not, the byteLength becomes 0 if the underlying buffer is resized such that the viewed range is no longer valid.

## Examples

### Using the byteLength property

```
const buffer = new ArrayBuffer(8);

const uint8 = new Uint8Array(buffer);
uint8.byteLength; // 8 (matches the byteLength of the buffer)

const uint8newLength = new Uint8Array(buffer, 1, 5);
uint8newLength.byteLength; // 5 (as specified when constructing the Uint8Array)

const uint8offset = new Uint8Array(buffer, 2);
uint8offset.byteLength; // 6 (due to the offset of the constructed Uint8Array)

const buffer2 = new ArrayBuffer(16, { maxByteLength: 32 });
const uint8lengthTracking = new Uint8Array(buffer2, 4);
uint8lengthTracking.byteLength; // 12 (16 - 4)
buffer2.resize(20);
uint8lengthTracking.byteLength; // 16 (20 - 4)
buffer2.resize(3);
uint8lengthTracking.byteLength; // 0 (viewed range is no longer valid)
```

## Specifications

## Browser compatibility

## See also

- JavaScript typed arrays guide
- TypedArray

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength
