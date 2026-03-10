# SharedArrayBuffer() constructor

Source: https://devdocs.io/javascript/global_objects/sharedarraybuffer/sharedarraybuffer

Note: The SharedArrayBuffer constructor may not always be globally available unless certain security requirements are met.

The SharedArrayBuffer() constructor creates SharedArrayBuffer objects.

## Try it

```
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(8);

console.log(buffer.byteLength);
// Expected output: 8
```

## Syntax

```
new SharedArrayBuffer(length)
new SharedArrayBuffer(length, options)
```

Note: SharedArrayBuffer() can only be constructed with new. Attempting to call it without new throws a TypeError.

### Parameters

The size, in bytes, of the array buffer to create.

An object, which can contain the following properties:

The maximum size, in bytes, that the shared array buffer can be resized to.

### Return value

A new SharedArrayBuffer object of the specified size, with its maxByteLength property set to the specified maxByteLength if one was specified. Its contents are initialized to 0.

## Examples

### Always use the new operator to create a SharedArrayBuffer

SharedArrayBuffer constructors are required to be constructed with a new operator. Calling a SharedArrayBuffer constructor as a function without new will throw a TypeError.

```
const sab = SharedArrayBuffer(1024);
// TypeError: calling a builtin SharedArrayBuffer constructor
// without new is forbidden
```

```
const sab = new SharedArrayBuffer(1024);
```

### Growing a growable SharedArrayBuffer

In this example, we create an 8-byte buffer that is growable to a max length of 16 bytes, then grow() it to 12 bytes:

```
const buffer = new SharedArrayBuffer(8, { maxByteLength: 16 });

buffer.grow(12);
```

Note: It is recommended that maxByteLength is set to the smallest value possible for your use case. It should never exceed 1073741824 (1GB), to reduce the risk of out-of-memory errors.

## Specifications

## Browser compatibility

## See also

- Atomics
- ArrayBuffer
- JavaScript typed arrays guide

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/SharedArrayBuffer
