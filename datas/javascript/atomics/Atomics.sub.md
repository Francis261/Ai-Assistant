# Atomics.sub()

Source: https://devdocs.io/javascript/global_objects/atomics/sub

The Atomics.sub() static method subtracts a given value at a given position in the array and returns the old value at that position. This atomic operation guarantees that no other write happens until the modified value is written back.

## Try it

```
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 7;

// 7 - 2 = 5
console.log(Atomics.sub(uint8, 0, 2));
// Expected output: 7

console.log(Atomics.load(uint8, 0));
// Expected output: 5
```

## Syntax

```
Atomics.sub(typedArray, index, value)
```

### Parameters

An integer typed array. One of Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, BigInt64Array, or BigUint64Array.

The position in the typedArray to subtract a value from.

The number to subtract.

### Return value

The old value at the given position (typedArray[index]).

### Exceptions

Thrown if typedArray is not one of the allowed integer types.

Thrown if index is out of bounds in the typedArray.

## Examples

### Using sub

```
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 48;

Atomics.sub(ta, 0, 12); // returns 48, the old value
Atomics.load(ta, 0); // 36
```

## Specifications

## Browser compatibility

## See also

- Atomics
- Atomics.add()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/sub
