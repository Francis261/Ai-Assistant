# DataView.prototype.getInt32()

Source: https://devdocs.io/javascript/global_objects/dataview/getint32

The getInt32() method of DataView instances reads 4 bytes starting at the specified byte offset of this DataView and interprets them as a 32-bit signed integer. There is no alignment constraint; multi-byte values may be fetched from any offset within bounds.

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
getInt32(byteOffset)
getInt32(byteOffset, littleEndian)
```

### Parameters

The offset, in bytes, from the start of the view to read the data from.

Indicates whether the data is stored in little- or big-endian format. If false or undefined, a big-endian value is read.

### Return value

An integer from -2147483648 to 2147483647, inclusive.

### Exceptions

Thrown if the byteOffset is set such that it would read beyond the end of the view.

## Examples

### Using getInt32()

```
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getInt32(1)); // 16909060
```

## Specifications

## Browser compatibility

## See also

- JavaScript typed arrays guide
- DataView
- ArrayBuffer
- Int32Array

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getInt32
