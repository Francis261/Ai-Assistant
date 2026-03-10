# DataView.prototype.getFloat16()

Source: https://devdocs.io/javascript/global_objects/dataview/getfloat16

The getFloat16() method of DataView instances reads 2 bytes starting at the specified byte offset of this DataView and interprets them as a 16-bit floating point number. There is no alignment constraint; multi-byte values may be fetched from any offset within bounds.

## Try it

```
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setFloat16(1, Math.PI);

console.log(view.getFloat16(1));
// Expected output: 3.140625
```

## Syntax

```
getFloat16(byteOffset)
getFloat16(byteOffset, littleEndian)
```

### Parameters

The offset, in bytes, from the start of the view to read the data from.

Indicates whether the data is stored in little- or big-endian format. If false or undefined, a big-endian value is read.

### Return value

A floating point number from -65504 to 65504.

### Exceptions

Thrown if the byteOffset is set such that it would read beyond the end of the view.

## Examples

### Using getFloat16()

```
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getFloat16(1)); // 0.00001537799835205078
```

## Specifications

## Browser compatibility

## See also

- Polyfill of DataView.prototype.getFloat16 in core-js
- JavaScript typed arrays guide
- DataView
- ArrayBuffer
- Float16Array

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getFloat16
