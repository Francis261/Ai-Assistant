# Atomics.notify()

Source: https://devdocs.io/javascript/global_objects/atomics/notify

The Atomics.notify() static method notifies up some agents that are sleeping in the wait queue.

Note: This operation only works with an Int32Array or BigInt64Array that views a SharedArrayBuffer. It will return 0 on non-shared ArrayBuffer objects.

## Syntax

```
Atomics.notify(typedArray, index, count)
```

### Parameters

An Int32Array or BigInt64Array that views a SharedArrayBuffer.

The position in the typedArray to wake up on.

The number of sleeping agents to notify. Defaults to Infinity.

### Return value

Returns the number of woken up agents, or 0 if typedArray is a view on a non-shared ArrayBuffer.

### Exceptions

Thrown if typedArray is not an Int32Array or BigInt64Array.

Thrown if index is out of bounds in the typedArray.

## Examples

### Using notify

Given a shared Int32Array:

```
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

A reading thread is sleeping and waiting on location 0 because the provided value matches what is stored at the provided index. The reading thread will not move on until the writing thread has called Atomics.notify() on position 0 of the provided typedArray. Note that if, after being woken up, the value of location 0 has not been changed by the writing thread, the reading thread will not go back to sleep, but will continue on.

```
Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123
```

A writing thread stores a new value and notifies the waiting thread once it has written:

```
console.log(int32[0]); // 0;
Atomics.store(int32, 0, 123);
Atomics.notify(int32, 0, 1);
```

## Specifications

## Browser compatibility

## See also

- Atomics
- Atomics.wait()
- Atomics.waitAsync()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/notify
