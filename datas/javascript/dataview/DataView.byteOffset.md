# DataView.prototype.byteOffset

Source: https://devdocs.io/javascript/global_objects/dataview/byteoffset

The byteOffset accessor property of DataView instances returns the offset (in bytes) of this view from the start of its ArrayBuffer or SharedArrayBuffer.

## Try it

```
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer, 12, 4); // From byte 12 for the next 4 bytes

console.log(view.byteOffset);
// Expected output: 12
```

## Description

The byteOffset property is an accessor property whose set accessor function is undefined, meaning that you can only read this property. The value is established when the DataView is constructed and cannot be changed. However, the byteOffset becomes 0 if the underlying buffer is resized such that the viewed range is no longer valid.

## Examples

### Using the byteOffset property

```
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.byteOffset; // 0 (no offset specified)

const dataview2 = new DataView(buffer, 3);
dataview2.byteOffset; // 3 (as specified when constructing the DataView)

const buffer2 = new ArrayBuffer(16, { maxByteLength: 32 });
const dataviewLengthTracking = new DataView(buffer2, 4);
dataviewLengthTracking.byteOffset; // 4
buffer2.resize(3);
dataviewLengthTracking.byteOffset; // 0 (viewed range is no longer valid)
```

## Specifications

## Browser compatibility

## See also

- JavaScript typed arrays guide
- DataView
- ArrayBuffer
- SharedArrayBuffer

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/byteOffset
