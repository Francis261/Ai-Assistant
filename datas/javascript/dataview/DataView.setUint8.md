# DataView.prototype.setUint8()

Source: https://devdocs.io/javascript/global_objects/dataview/setuint8

The setUint8() method of DataView instances takes a number and stores it as an 8-bit unsigned integer in the byte at the specified byte offset of this DataView.

## Try it

```
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setUint8(1, 255); // Max unsigned 8-bit integer

console.log(view.getUint8(1));
// Expected output: 255
```

## Syntax

```
setUint8(byteOffset, value)
```

### Parameters

The offset, in bytes, from the start of the view to store the data in.

The value to set. For how the value is encoded in bytes, see Value encoding and normalization.

### Return value

undefined.

### Exceptions

Thrown if the byteOffset is set such that it would store beyond the end of the view.

## Examples

### Using setUint8()

```
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setUint8(0, 3);
dataview.getUint8(0); // 3
```

## Specifications

## Browser compatibility

## See also

- JavaScript typed arrays guide
- DataView
- ArrayBuffer
- Uint8Array

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setUint8
