# DataView() constructor

Source: https://devdocs.io/javascript/global_objects/dataview/dataview

The DataView() constructor creates DataView objects.

## Try it

```
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

// Create a couple of views
const view1 = new DataView(buffer);
const view2 = new DataView(buffer, 12, 4); // From byte 12 for the next 4 bytes
view1.setInt8(12, 42); // Put 42 in slot 12

console.log(view2.getInt8(0));
// Expected output: 42
```

## Syntax

```
new DataView(buffer)
new DataView(buffer, byteOffset)
new DataView(buffer, byteOffset, byteLength)
```

Note: DataView() can only be constructed with new. Attempting to call it without new throws a TypeError.

### Parameters

An existing ArrayBuffer or SharedArrayBuffer to use as the storage backing the new DataView object.

The offset, in bytes, to the first byte in the above buffer for the new view to reference. If unspecified, the buffer view starts with the first byte.

The number of elements in the byte array. If unspecified, the view's length will match the buffer's length.

### Return value

A new DataView object representing the specified data buffer.

### Exceptions

Thrown if the byteOffset or byteLength parameter values result in the view extending past the end of the buffer. In other words, byteOffset + byteLength > buffer.byteLength.

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
- DataView

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/DataView
