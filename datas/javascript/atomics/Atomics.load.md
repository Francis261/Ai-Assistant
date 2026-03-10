# Atomics.load()

Source: https://devdocs.io/javascript/global_objects/atomics/load

The Atomics.load() static method returns a value at a given position in the array.

## Try it

```
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 5;

// 5 + 2 = 7
console.log(Atomics.add(uint8, 0, 2));
// Expected output: 5

console.log(Atomics.load(uint8, 0));
// Expected output: 7
```

## Syntax

```
Atomics.load(typedArray, index)
```

### Parameters

An integer typed array. One of Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, BigInt64Array, or BigUint64Array.

The position in the typedArray to load from.

### Return value

The value at the given position (typedArray[index]).

### Exceptions

Thrown if typedArray is not one of the allowed integer types.

Thrown if index is out of bounds in the typedArray.

## Examples

### Using load

```
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

Atomics.add(ta, 0, 12);
Atomics.load(ta, 0); // 12
```

## Specifications

## Browser compatibility

## See also

- Atomics
- Atomics.store()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/load
