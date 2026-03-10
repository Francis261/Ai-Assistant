# TypedArray.prototype.buffer

Source: https://devdocs.io/javascript/global_objects/typedarray/buffer

The buffer accessor property of TypedArray instances returns the ArrayBuffer or SharedArrayBuffer referenced by this typed array at construction time.

## Try it

```
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(8);
const uint16 = new Uint16Array(buffer);

console.log(uint16.buffer.byteLength);
// Expected output: 8
```

## Description

The buffer property is an accessor property whose set accessor function is undefined, meaning that you can only read this property. The value is established when the TypedArray is constructed and cannot be changed. TypedArray is one of the TypedArray objects.

Because a typed array is a view of a buffer, the underlying buffer may be longer than the typed array itself.

## Examples

### Using the buffer property

```
const buffer = new ArrayBuffer(8);
const uint16 = new Uint16Array(buffer);
uint16.buffer; // ArrayBuffer { byteLength: 8 }
```

### Accessing the underlying buffer from a sliced array view

```
const buffer = new ArrayBuffer(1024);
const arr = new Uint8Array(buffer, 64, 128);
console.log(arr.byteLength); // 128
console.log(arr.buffer.byteLength); // 1024
console.log(arr.buffer === buffer); // true
```

## Specifications

## Browser compatibility

## See also

- JavaScript typed arrays guide
- TypedArray

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/buffer
