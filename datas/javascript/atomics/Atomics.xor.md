# Atomics.xor()

Source: https://devdocs.io/javascript/global_objects/atomics/xor

The Atomics.xor() static method computes a bitwise XOR with a given value at a given position in the array, and returns the old value at that position. This atomic operation guarantees that no other write happens until the modified value is written back.

## Try it

```
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 7;

// 7 (0111) XOR 2 (0010) = 5 (0101)
console.log(Atomics.xor(uint8, 0, 2));
// Expected output: 7

console.log(Atomics.load(uint8, 0));
// Expected output: 5
```

## Syntax

```
Atomics.xor(typedArray, index, value)
```

### Parameters

An integer typed array. One of Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, BigInt64Array, or BigUint64Array.

The position in the typedArray to compute the bitwise XOR.

The number to compute the bitwise XOR with.

### Return value

The old value at the given position (typedArray[index]).

### Exceptions

Thrown if typedArray is not one of the allowed integer types.

Thrown if index is out of bounds in the typedArray.

## Description

The bitwise XOR operation yields 1, if a and b are different. The truth table for the XOR operation is:

For example, a bitwise XOR of 5 ^ 1 results in 0100 which is 4 in decimal.

```
5  0101
1  0001
   ----
4  0100
```

## Examples

### Using xor

```
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 5;

Atomics.xor(ta, 0, 1); // returns 5, the old value
Atomics.load(ta, 0); // 4
```

## Specifications

## Browser compatibility

## See also

- Atomics
- Atomics.and()
- Atomics.or()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/xor
