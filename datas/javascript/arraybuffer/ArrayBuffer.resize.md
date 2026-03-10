# ArrayBuffer.prototype.resize()

Source: https://devdocs.io/javascript/global_objects/arraybuffer/resize

The resize() method of ArrayBuffer instances resizes the ArrayBuffer to the specified size, in bytes.

## Try it

```
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

console.log(buffer.byteLength);
// Expected output: 8

buffer.resize(12);

console.log(buffer.byteLength);
// Expected output: 12
```

## Syntax

```
resize(newLength)
```

### Parameters

The new length, in bytes, to resize the ArrayBuffer to.

### Return value

None (undefined).

### Exceptions

Thrown if the ArrayBuffer is detached or is not resizable.

Thrown if newLength is larger than the maxByteLength of the ArrayBuffer.

## Description

The resize() method resizes an ArrayBuffer to the size specified by the newLength parameter, provided that the ArrayBuffer is resizable and the new size is less than or equal to the maxByteLength of the ArrayBuffer. New bytes are initialized to 0.

Note that you can use resize() to shrink as well as grow an ArrayBuffer — it is permissible for newLength to be smaller than the ArrayBuffer's current byteLength.

## Examples

### Using resize()

In this example, we create a 8-byte buffer that is resizable to a max length of 16 bytes, then check its resizable property, resizing it if resizable returns true:

```
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

if (buffer.resizable) {
  console.log("Buffer is resizable!");
  buffer.resize(12);
}
```

## Specifications

## Browser compatibility

## See also

- ArrayBuffer
- ArrayBuffer.prototype.resizable
- ArrayBuffer.prototype.maxByteLength

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/resize
