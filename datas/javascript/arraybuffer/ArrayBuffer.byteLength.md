# ArrayBuffer.prototype.byteLength

Source: https://devdocs.io/javascript/global_objects/arraybuffer/bytelength

The byteLength accessor property of ArrayBuffer instances returns the length (in bytes) of this array buffer.

## Try it

```
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(8);

// Use byteLength to check the size
const bytes = buffer.byteLength;

console.log(bytes);
// Expected output: 8
```

## Description

The byteLength property is an accessor property whose set accessor function is undefined, meaning that you can only read this property. The value is established when the array is constructed and cannot be changed. This property returns 0 if this ArrayBuffer has been detached.

## Examples

### Using byteLength

```
const buffer = new ArrayBuffer(8);
buffer.byteLength; // 8
```

## Specifications

## Browser compatibility

## See also

- ArrayBuffer

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/byteLength
