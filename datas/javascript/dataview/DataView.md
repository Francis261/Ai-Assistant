# DataView

Source: https://devdocs.io/javascript/global_objects/dataview

The DataView view provides a low-level interface for reading and writing multiple number types in a binary ArrayBuffer, without having to care about the platform's endianness.

## Description

### Endianness

Multi-byte number formats are represented in memory differently depending on machine architecture — see Endianness for an explanation. DataView accessors provide explicit control of how data is accessed, regardless of the executing computer's endianness. For example, WebAssembly memory is always little-endian, so you should use DataView instead of typed arrays to read and write multi-byte values. See WebAssembly.Memory for an example.

```
const littleEndian = (() => {
  const buffer = new ArrayBuffer(2);
  new DataView(buffer).setInt16(0, 256, true /* littleEndian */);
  // Int16Array uses the platform's endianness.
  return new Int16Array(buffer)[0] === 256;
})();
console.log(littleEndian); // true or false
```

Note: DataView defaults to big-endian read and write, but most platforms use little-endian.

## Constructor

Creates a new DataView object.

## Instance properties

These properties are defined on DataView.prototype and shared by all DataView instances.

Returns the ArrayBuffer referenced by the DataView.

Returns the length (in bytes) of the DataView.

Returns the offset (in bytes) of the DataView from the start of its ArrayBuffer.

The constructor function that created the instance object. For DataView instances, the initial value is the DataView constructor.

The initial value of the [Symbol.toStringTag] property is the string "DataView". This property is used in Object.prototype.toString().

## Instance methods

Reads 8 bytes starting at the specified byte offset of this DataView and interprets them as a 64-bit signed integer.

Reads 8 bytes starting at the specified byte offset of this DataView and interprets them as a 64-bit unsigned integer.

Reads 2 bytes starting at the specified byte offset of this DataView and interprets them as a 16-bit floating point number.

Reads 4 bytes starting at the specified byte offset of this DataView and interprets them as a 32-bit floating point number.

Reads 8 bytes starting at the specified byte offset of this DataView and interprets them as a 64-bit floating point number.

Reads 2 bytes starting at the specified byte offset of this DataView and interprets them as a 16-bit signed integer.

Reads 4 bytes starting at the specified byte offset of this DataView and interprets them as a 32-bit signed integer.

Reads 1 byte at the specified byte offset of this DataView and interprets it as an 8-bit signed integer.

Reads 2 bytes starting at the specified byte offset of this DataView and interprets them as a 16-bit unsigned integer.

Reads 4 bytes starting at the specified byte offset of this DataView and interprets them as a 32-bit unsigned integer.

Reads 1 byte at the specified byte offset of this DataView and interprets it as an 8-bit unsigned integer.

Takes a BigInt and stores it as a 64-bit signed integer in the 8 bytes starting at the specified byte offset of this DataView.

Takes a BigInt and stores it as a 64-bit unsigned integer in the 8 bytes starting at the specified byte offset of this DataView.

Takes a number and stores it as a 16-bit float in the 2 bytes starting at the specified byte offset of this DataView.

Takes a number and stores it as a 32-bit float in the 4 bytes starting at the specified byte offset of this DataView.

Takes a number and stores it as a 64-bit float in the 8 bytes starting at the specified byte offset of this DataView.

Takes a number and stores it as a 16-bit signed integer in the 2 bytes at the specified byte offset of this DataView.

Takes a number and stores it as a 32-bit signed integer in the 4 bytes at the specified byte offset of this DataView.

Takes a number and stores it as an 8-bit signed integer in the byte at the specified byte offset of this DataView.

Takes a number and stores it as a 16-bit unsigned integer in the 2 bytes at the specified byte offset of this DataView.

Takes a number and stores it as a 32-bit unsigned integer in the 4 bytes at the specified byte offset of this DataView.

Takes a number and stores it as an 8-bit unsigned integer in the byte at the specified byte offset of this DataView.

## Examples

### Using DataView

```
const buffer = new ArrayBuffer(16);
const view = new DataView(buffer, 0);

view.setInt16(1, 42);
view.getInt16(1); // 42
```

## Specifications

## Browser compatibility

## See also

- Polyfill of DataView in core-js
- ArrayBuffer
- SharedArrayBuffer

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView
