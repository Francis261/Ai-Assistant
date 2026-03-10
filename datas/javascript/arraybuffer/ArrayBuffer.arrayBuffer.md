# ArrayBuffer() constructor

Source: https://devdocs.io/javascript/global_objects/arraybuffer/arraybuffer

The ArrayBuffer() constructor creates ArrayBuffer objects.

## Try it

```
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(8);

console.log(buffer.byteLength);
// Expected output: 8
```

## Syntax

```
new ArrayBuffer(length)
new ArrayBuffer(length, options)
```

Note: ArrayBuffer() can only be constructed with new. Attempting to call it without new throws a TypeError.

### Parameters

The size, in bytes, of the array buffer to create.

An object, which can contain the following properties:

The maximum size, in bytes, that the array buffer can be resized to.

### Return value

A new ArrayBuffer object of the specified size, with its maxByteLength property set to the specified maxByteLength if one was specified. Its contents are initialized to 0.

### Exceptions

Thrown in one of the following cases:

- length or maxByteLength is larger than Number.MAX_SAFE_INTEGER (≥ 253) or negative.
- length is larger than maxByteLength.

## Examples

### Creating an ArrayBuffer

In this example, we create a 8-byte buffer with an Int32Array view referring to the buffer:

```
const buffer = new ArrayBuffer(8);
const view = new Int32Array(buffer);
```

### Creating a resizable ArrayBuffer

In this example, we create a 8-byte buffer that is resizable to a max length of 16 bytes, then resize() it to 12 bytes:

```
const buffer = new ArrayBuffer(8, { maxByteLength: 16 });

buffer.resize(12);
```

Note: It is recommended that maxByteLength is set to the smallest value possible for your use case. It should never exceed 1073741824 (1GB) to reduce the risk of out-of-memory errors.

## Specifications

## Browser compatibility

## See also

- Polyfill of ArrayBuffer in core-js
- JavaScript typed arrays guide
- SharedArrayBuffer

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/ArrayBuffer
