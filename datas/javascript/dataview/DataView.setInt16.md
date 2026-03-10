# DataView.prototype.setInt16()

Source: https://devdocs.io/javascript/global_objects/dataview/setint16

The setInt16() method of DataView instances takes a number and stores it as a 16-bit signed integer in the 2 bytes starting at the specified byte offset of this DataView. There is no alignment constraint; multi-byte values may be stored at any offset within bounds.

## Try it

```
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setInt16(1, 32767); // Max signed 16-bit integer

console.log(view.getInt16(1));
// Expected output: 32767
```

## Syntax

```
setInt16(byteOffset, value)
setInt16(byteOffset, value, littleEndian)
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

### Using setInt16()

```
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setInt16(0, 3);
dataview.getInt16(1); // 768
```

## Specifications

## Browser compatibility

## See also

- JavaScript typed arrays guide
- DataView
- ArrayBuffer
- Int16Array

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt16
