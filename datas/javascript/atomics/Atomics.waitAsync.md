# Atomics.waitAsync()

Source: https://devdocs.io/javascript/global_objects/atomics/waitasync

The Atomics.waitAsync() static method verifies that a shared memory location contains a given value, immediately returning an object with the value property containing the string "not-equal" if the memory location does not match the given value, or "timed-out" if the timeout was set to zero. Otherwise the method returns an object where the value property is a Promise that fulfills with either "ok" when Atomics.notify() is called, or "timed-out" if the timeout expires.

Atomics.waitAsync() and Atomics.notify() are used together to enable thread synchronization based on a value in shared memory. A thread can proceed immediately if the synchronization value has changed, or it can wait for notification from another thread when it reaches the synchronization point.

This method only works with an Int32Array or BigInt64Array that views a SharedArrayBuffer. It is non-blocking and, unlike Atomics.wait(), can be used on the main thread. Because it does not block the whole thread, you still need to be careful not to access the shared memory before the promise settles.

## Syntax

```
Atomics.waitAsync(typedArray, index, value)
Atomics.waitAsync(typedArray, index, value, timeout)
```

### Parameters

An Int32Array or BigInt64Array that views a SharedArrayBuffer.

The position in the typedArray to wait on.

The expected value to test.

Time to wait in milliseconds. NaN (and values that get converted to NaN, such as undefined) becomes Infinity. Negative values become 0.

### Return value

An Object with the following properties:

A boolean indicating whether the value property is a Promise or not.

If async is false, it will be a string which is either "not-equal" or "timed-out" (only when the timeout parameter is 0). If async is true, it will be a Promise which is fulfilled with a string value, either "ok" or "timed-out". The promise is never rejected.

### Exceptions

Thrown if typedArray is not an Int32Array or BigInt64Array that views a SharedArrayBuffer.

Thrown if index is out of bounds in the typedArray.

## Examples

### Using waitAsync()

Given a shared Int32Array.

```
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

A reading thread is sleeping and waiting on location 0 which is expected to be 0. The result.value will be a promise.

```
const result = Atomics.waitAsync(int32, 0, 0, 1000);
// { async: true, value: Promise {<pending>} }
```

In the reading thread or in another thread, the memory location 0 is called and the promise can be resolved with "ok".

```
Atomics.notify(int32, 0);
// { async: true, value: Promise {<fulfilled>: 'ok'} }
```

If it isn't resolving to "ok", the value in the shared memory location wasn't the expected (the value would be "not-equal" instead of a promise) or the timeout was reached (the promise will resolve to "time-out").

## Specifications

## Browser compatibility

## See also

- Atomics
- Atomics.wait()
- Atomics.notify()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/waitAsync
