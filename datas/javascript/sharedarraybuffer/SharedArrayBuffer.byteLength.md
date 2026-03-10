# SharedArrayBuffer.prototype.byteLength

Source: https://devdocs.io/javascript/global_objects/sharedarraybuffer/bytelength

The byteLength accessor property of SharedArrayBuffer instances returns the length (in bytes) of this SharedArrayBuffer.

## Try it

```
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(8);

console.log(buffer.byteLength);
// Expected output: 8
```

## Description

The byteLength property is an accessor property whose set accessor function is undefined, meaning that you can only read this property. The value is established when the shared array is constructed and cannot be changed.

## Examples

### Using byteLength

```
const sab = new SharedArrayBuffer(1024);
sab.byteLength; // 1024
```

## Specifications

## Browser compatibility

## See also

- SharedArrayBuffer

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/byteLength
