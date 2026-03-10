# DataView.prototype.setInt8()

Source: https://devdocs.io/javascript/global_objects/dataview/setint8

The setInt8() method of DataView instances takes a number and stores it as an 8-bit signed integer in the byte at the specified byte offset of this DataView.

## Try it

```
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setInt8(1, 127); // Max signed 8-bit integer

console.log(view.getInt8(1));
// Expected output: 127
```

## Syntax

```
setInt8(byteOffset, value)
```

### Parameters

The offset, in bytes, from the start of the view to store the data in.

The value to set. For how the value is encoded in bytes, see Value encoding and normalization.

### Return value

undefined.

### Exceptions

Thrown if the byteOffset is set such that it would store beyond the end of the view.

## Examples

### Using setInt8()

```
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setInt8(0, 3);
dataview.getInt8(0); // 3
```

## Specifications

## Browser compatibility

## See also

- JavaScript typed arrays guide
- DataView
- ArrayBuffer
- Int8Array

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/setInt8
