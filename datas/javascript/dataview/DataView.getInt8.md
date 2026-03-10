# DataView.prototype.getInt8()

Source: https://devdocs.io/javascript/global_objects/dataview/getint8

The getInt8() method of DataView instances reads 1 byte at the specified byte offset of this DataView and interprets it as an 8-bit signed integer.

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
getInt8(byteOffset)
```

### Parameters

The offset, in bytes, from the start of the view to read the data from.

### Return value

An integer from -128 to 127, inclusive.

### Exceptions

Thrown if the byteOffset is set such that it would read beyond the end of the view.

## Examples

### Using getInt8()

```
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getInt8(1)); // 1
```

## Specifications

## Browser compatibility

## See also

- JavaScript typed arrays guide
- DataView
- ArrayBuffer
- Int8Array

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/getInt8
