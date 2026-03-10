# Atomics.and()

Source: https://devdocs.io/javascript/global_objects/atomics/and

The Atomics.and() static method computes a bitwise AND with a given value at a given position in the array, and returns the old value at that position. This atomic operation guarantees that no other write happens until the modified value is written back.

## Try it

```
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 7;

// 7 (0111) AND 2 (0010) = 2 (0010)
console.log(Atomics.and(uint8, 0, 2));
// Expected output: 7

console.log(Atomics.load(uint8, 0));
// Expected output: 2
```

## Syntax

```
Atomics.and(typedArray, index, value)
```

### Parameters

An integer typed array. One of Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, BigInt64Array, or BigUint64Array.

The position in the typedArray to compute the bitwise AND.

The number to compute the bitwise AND with.

### Return value

The old value at the given position (typedArray[index]).

### Exceptions

Thrown if typedArray is not one of the allowed integer types.

Thrown if index is out of bounds in the typedArray.

## Description

The bitwise AND operation only yields 1, if both a and b are 1. The truth table for the AND operation is:

For example, a bitwise AND of 5 & 1 results in 0001 which is 1 in decimal.

```
5  0101
1  0001
   ----
1  0001
```

## Examples

### Using and()

```
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 5;

Atomics.and(ta, 0, 1); // returns 5, the old value
Atomics.load(ta, 0); // 1
```

## Specifications

## Browser compatibility

## See also

- Atomics
- Atomics.or()
- Atomics.xor()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/and
