# DataView.prototype.buffer

Source: https://devdocs.io/javascript/global_objects/dataview/buffer

The buffer accessor property of DataView instances returns the ArrayBuffer or SharedArrayBuffer referenced by this view at construction time.

## Try it

```
// Create an ArrayBuffer
const buffer = new ArrayBuffer(123);

// Create a view
const view = new DataView(buffer);

console.log(view.buffer.byteLength);
// Expected output: 123
```

## Description

The buffer property is an accessor property whose set accessor function is undefined, meaning that you can only read this property. The value is established when the DataView is constructed and cannot be changed.

## Examples

### Using the buffer property

```
const buffer = new ArrayBuffer(8);
const dataview = new DataView(buffer);
dataview.buffer; // ArrayBuffer { byteLength: 8 }
```

## Specifications

## Browser compatibility

## See also

- DataView
- ArrayBuffer
- SharedArrayBuffer

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView/buffer
