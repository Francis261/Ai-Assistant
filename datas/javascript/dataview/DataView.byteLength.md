# DataView.prototype.byteLength

Source: https://devdocs.io/javascript/global_objects/dataview/bytelength

The byteLength accessor property of DataView instances returns the length (in bytes) of this view.

## Try it

```
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view1 = new DataView(buffer);
const view2 = new DataView(buffer, 12, 4); // From byte 12 for the next 4 bytes

console.log(view1.byteLength + view2.byteLength); // 16 + 4
// Expected output: 20
```

## Description

The byteLength property is an accessor property whose set accessor function is undefined, meaning that you can only read this property. If the DataView is length-tracking, then its length depends on the length of the underlying buffer, and may change if the buffer is resized. Otherwise, the value is established when the DataView is constructed and cannot be changed. Whether length-tracking or not, the byteLength becomes 0 if the underlying buffer is resized such that the viewed range is no longer valid.

## Examples

### Using the byteLength property

```
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.byteLength; // 8 (matches the byteLength of the buffer)

const dataview2 = new DataView(buffer, 1, 5);
dataview2.byteLength; // 5 (as specified when constructing the DataView)

const dataview3 = new DataView(buffer, 2);
dataview3.byteLength; // 6 (due to the offset of the constructed DataView)

const buffer2 = new ArrayBuffer(16, { maxByteLength: 32 });
const dataviewLengthTracking = new DataView(buffer2, 4);
dataviewLengthTracking.byteLength; // 12 (16 - 4)
buffer2.resize(20);
dataviewLengthTracking.byteLength; // 16 (20 - 4)
buffer2.resize(3);
dataviewLengthTracking.byteLength; // 0 (viewed range is no longer valid)
```

## Specifications

## Browser compatibility

## See also

- JavaScript typed arrays guide
- DataView
- ArrayBuffer
- SharedArrayBuffer

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/byteLength
