# ArrayBuffer.isView()

Source: https://devdocs.io/javascript/global_objects/arraybuffer/isview

The ArrayBuffer.isView() static method determines whether the passed value is one of the ArrayBuffer views, such as typed array objects or a DataView.

## Try it

```
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

console.log(ArrayBuffer.isView(new Int32Array()));
// Expected output: true
```

## Syntax

```
ArrayBuffer.isView(value)
```

### Parameters

The value to be checked.

### Return value

true if the given argument is one of the ArrayBuffer views; otherwise, false.

## Examples

### Using isView

```
ArrayBuffer.isView(); // false
ArrayBuffer.isView([]); // false
ArrayBuffer.isView({}); // false
ArrayBuffer.isView(null); // false
ArrayBuffer.isView(undefined); // false
ArrayBuffer.isView(new ArrayBuffer(10)); // false

ArrayBuffer.isView(new Uint8Array()); // true
ArrayBuffer.isView(new Float32Array()); // true
ArrayBuffer.isView(new Int8Array(10).subarray(0, 3)); // true

const buffer = new ArrayBuffer(2);
const dv = new DataView(buffer);
ArrayBuffer.isView(dv); // true
```

## Specifications

## Browser compatibility

## See also

- JavaScript typed arrays guide

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView
