# DataView.prototype.setBigUint64()

Source: https://devdocs.io/javascript/global_objects/dataview/setbiguint64

The setBigUint64() method of DataView instances takes a BigInt and stores it as a 64-bit unsigned integer in the 8 bytes starting at the specified byte offset of this DataView. There is no alignment constraint; multi-byte values may be stored at any offset within bounds.

## Try it

```
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

// Highest possible BigInt value that fits in an unsigned 64-bit integer
const max = 2n ** 64n - 1n;

const view = new DataView(buffer);
view.setBigUint64(1, max);

console.log(view.getBigUint64(1));
// Expected output: 18446744073709551615n
```

## Syntax

```
setBigUint64(byteOffset, value)
setBigUint64(byteOffset, value, littleEndian)
```

### Parameters

The offset, in bytes, from the start of the view to store the data in.

The value to set as a BigInt. For how the value is encoded in bytes, see Value encoding and normalization.

Indicates whether the data is stored in little- or big-endian format. If false or undefined, a big-endian value is written.

### Return value

undefined.

### Exceptions

Thrown if the byteOffset is set such that it would store beyond the end of the view.

## Examples

### Using setBigUint64()

```
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setBigUint64(0, 3n);
dataview.getBigUint64(1); // 768n
```

## Specifications

## Browser compatibility

## See also

- JavaScript typed arrays guide
- DataView
- ArrayBuffer
- BigUint64Array

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setBigUint64
