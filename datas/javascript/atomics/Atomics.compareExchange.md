# Atomics.compareExchange()

Source: https://devdocs.io/javascript/global_objects/atomics/compareexchange

The Atomics.compareExchange() static method exchanges a given replacement value at a given position in the array, if a given expected value equals the old value. It returns the old value at that position whether it was equal to the expected value or not. This atomic operation guarantees that no other write happens until the modified value is written back.

## Try it

```
// Create a SharedArrayBuffer with a size in bytes
const buffer = new SharedArrayBuffer(16);
const uint8 = new Uint8Array(buffer);
uint8[0] = 5;

Atomics.compareExchange(uint8, 0, 5, 2); // Returns 5
console.log(Atomics.load(uint8, 0));
// Expected output: 2

Atomics.compareExchange(uint8, 0, 5, 4); // Returns 2
console.log(Atomics.load(uint8, 0));
// Expected output: 2
```

## Syntax

```
Atomics.compareExchange(typedArray, index, expectedValue, replacementValue)
```

### Parameters

An integer typed array. One of Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, BigInt64Array, or BigUint64Array.

The position in the typedArray to exchange a replacementValue.

The value to check for equality.

The number to exchange.

### Return value

The old value at the given position (typedArray[index]). If the return value is equal to expectedValue, the exchange was successful; otherwise, the exchange failed.

### Exceptions

Thrown if typedArray is not one of the allowed integer types.

Thrown if index is out of bounds in the typedArray.

## Examples

### Using compareExchange()

```
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);
ta[0] = 7;

Atomics.compareExchange(ta, 0, 7, 12); // returns 7, the old value
Atomics.load(ta, 0); // 12
```

### Checking the return value

Compare-and-swap guarantees that the new value is calculated based on up-to-date information; if the value had been updated by another thread in the meantime, the write would fail. Therefore, you should check the return value of compareExchange() to check if it has failed, and retry if necessary.

Here is one example of an atomic adder (same functionality as Atomics.add()), adapted from the linked Wikipedia article:

```
function add(mem, index, a) {
  let done = false;
  while (!done) {
    const value = Atomics.load(mem, index);
    done = Atomics.compareExchange(mem, index, value, value + a) === value;
  }
  return value + a;
}
```

It first reads the value at the given index, then tries to update it with the new value. It keeps retrying until it successfully updates the value.

## Specifications

## Browser compatibility

## See also

- Atomics
- Atomics.exchange()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/compareExchange
