# Atomics.store()

Source: https://devdocs.io/javascript/global_objects/atomics/store

The Atomics.store() static method stores a given value at the given position in the array and returns that value.

## Try it

```
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 5;

console.log(Atomics.store(uint8, 0, 2));
// Expected output: 2

console.log(Atomics.load(uint8, 0));
// Expected output: 2
```

## Syntax

```
Atomics.store(typedArray, index, value)
```

### Parameters

An integer typed array. One of Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, BigInt64Array, or BigUint64Array.

The position in the typedArray to store a value in.

The number to store.

### Return value

The value that has been stored.

### Exceptions

Thrown if typedArray is not one of the allowed integer types.

Thrown if index is out of bounds in the typedArray.

## Examples

### Using store()

```
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

Atomics.store(ta, 0, 12); // 12
```

## Specifications

## Browser compatibility

## See also

- Atomics
- Atomics.load()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/store
