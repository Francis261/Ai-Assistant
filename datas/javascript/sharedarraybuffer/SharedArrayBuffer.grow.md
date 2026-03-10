# SharedArrayBuffer.prototype.grow()

Source: https://devdocs.io/javascript/global_objects/sharedarraybuffer/grow

The grow() method of SharedArrayBuffer instances grows the SharedArrayBuffer to the specified size, in bytes.

## Syntax

```
grow(newLength)
```

### Parameters

The new length, in bytes, to resize the SharedArrayBuffer to.

### Return value

None (undefined).

### Exceptions

Thrown if the SharedArrayBuffer is not growable.

Thrown if newLength is larger than the maxByteLength of the SharedArrayBuffer or smaller than the byteLength.

## Description

The grow() method grows a SharedArrayBuffer to the size specified by the newLength parameter, provided that the SharedArrayBuffer is growable and the new size is less than or equal to the maxByteLength of the SharedArrayBuffer. New bytes are initialized to 0.

## Examples

### Using grow()

In this example, we create a 8-byte buffer that is growable to a max length of 16 bytes, then check its growable property, growing it if growable returns true:

```
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

if (buffer.growable) {
  console.log("SAB is growable!");
  buffer.grow(12);
}
```

## Specifications

## Browser compatibility

## See also

- SharedArrayBuffer
- SharedArrayBuffer.prototype.growable
- SharedArrayBuffer.prototype.maxByteLength

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/grow
