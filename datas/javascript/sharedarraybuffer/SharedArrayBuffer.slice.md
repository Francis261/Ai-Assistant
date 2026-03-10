# SharedArrayBuffer.prototype.slice()

Source: https://devdocs.io/javascript/global_objects/sharedarraybuffer/slice

The slice() method of SharedArrayBuffer instances returns a new SharedArrayBuffer whose contents are a copy of this SharedArrayBuffer's bytes from start, inclusive, up to end, exclusive. If either start or end is negative, it refers to an index from the end of the array, as opposed to from the beginning.

## Try it

```
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const int32View = new Int32Array(buffer); // Create the view
// Produces Int32Array [0, 0, 0, 0]

int32View[1] = 42;
const sliced = new Int32Array(buffer.slice(4, 12));

console.log(sliced);
// Expected output: Int32Array [42, 0]
```

## Syntax

```
slice()
slice(start)
slice(start, end)
```

### Parameters

Zero-based index at which to start extraction, converted to an integer.

- Negative index counts back from the end of the buffer — if -buffer.length <= start < 0, start + buffer.length is used.
- If start < -buffer.length or start is omitted, 0 is used.
- If start >= buffer.length, an empty buffer is returned.

Zero-based index at which to end extraction, converted to an integer. slice() extracts up to but not including end.

- Negative index counts back from the end of the buffer — if -buffer.length <= end < 0, end + buffer.length is used.
- If end < -buffer.length, 0 is used.
- If end >= buffer.length or end is omitted or undefined, buffer.length is used, causing all elements until the end to be extracted.
- If end implies a position before or at the position that start implies, an empty buffer is returned.

### Return value

A new SharedArrayBuffer containing the extracted elements.

## Examples

### Using slice()

```
const sab = new SharedArrayBuffer(1024);
sab.slice(); // SharedArrayBuffer { byteLength: 1024 }
sab.slice(2); // SharedArrayBuffer { byteLength: 1022 }
sab.slice(-2); // SharedArrayBuffer { byteLength: 2 }
sab.slice(0, 1); // SharedArrayBuffer { byteLength: 1 }
```

## Specifications

## Browser compatibility

## See also

- SharedArrayBuffer
- ArrayBuffer.prototype.slice()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice
