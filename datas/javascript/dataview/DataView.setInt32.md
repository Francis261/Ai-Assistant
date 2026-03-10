# DataView.prototype.setInt32()

Source: https://devdocs.io/javascript/global_objects/dataview/setint32

The setInt32() method of DataView instances takes a number and stores it as a 32-bit signed integer in the 4 bytes starting at the specified byte offset of this DataView. There is no alignment constraint; multi-byte values may be stored at any offset within bounds.

## Try it

```
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setInt32(1, 2147483647); // Max signed 32-bit integer

console.log(view.getInt32(1));
// Expected output: 2147483647
```

## Syntax

```
setInt32(byteOffset, value)
setInt32(byteOffset, value, littleEndian)
```

### Parameters

The offset, in bytes, from the start of the view to store the data in.

The value to set. For how the value is encoded in bytes, see Value encoding and normalization.

Indicates whether the data is stored in little- or big-endian format. If false or undefined, a big-endian value is written.

### Return value

undefined.

### Exceptions

Thrown if the byteOffset is set such that it would store beyond the end of the view.

## Examples

### Using setInt32()

```
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setInt32(0, 3);
dataview.getInt32(1); // 768
```

## Specifications

## Browser compatibility

## See also

- JavaScript typed arrays guide
- DataView
- ArrayBuffer
- Int32Array

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt32
