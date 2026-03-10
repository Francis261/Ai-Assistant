# Atomics.exchange()

Source: https://devdocs.io/javascript/global_objects/atomics/exchange

The Atomics.exchange() static method exchanges a given value at a given position in the array and returns the old value at that position. This atomic operation guarantees that no other write happens between the read of the old value and the write of the new value.

## Try it

```
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 5;

console.log(Atomics.load(uint8, 0));
// Expected output: 5

Atomics.exchange(uint8, 0, 2); // Returns 5
console.log(Atomics.load(uint8, 0));
// Expected output: 2
```

## Syntax

```
Atomics.exchange(typedArray, index, value)
```

### Parameters

An integer typed array. One of Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, BigInt64Array, or BigUint64Array.

The position in the typedArray to exchange a value.

The number to exchange.

### Return value

The old value at the given position (typedArray[index]).

### Exceptions

Thrown if typedArray is not one of the allowed integer types.

Thrown if index is out of bounds in the typedArray.

## Examples

### Using exchange()

```
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

Atomics.exchange(ta, 0, 12); // returns 0, the old value
Atomics.load(ta, 0); // 12
```

## Specifications

## Browser compatibility

## See also

- Atomics
- Atomics.compareExchange()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/exchange
