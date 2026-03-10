# BigInt64Array

Source: https://devdocs.io/javascript/global_objects/bigint64array

The BigInt64Array typed array represents an array of 64-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0n unless initialization data is explicitly provided. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).

BigInt64Array is a subclass of the hidden TypedArray class.

## Try it

```
const buffer = new ArrayBuffer(24);
const bigint64 = new BigInt64Array(buffer);
bigint64[0] = 5886014448488689n;
bigint64[1] = 1881938909131133n;
bigint64[2] = 1898875537769492n;

bigint64[0] = 6118793953620967n;
console.log(bigint64);
// Expected Output: BigInt64Array [6118793953620967n, 1881938909131133n, 1898875537769492n]

console.log(bigint64[2]);
// Expected Output: 1898875537769492n

console.log("Array length:", bigint64.length);
// Expected Output: Array length: 3

console.log("Array byte length:", bigint64.byteLength);
// Expected Output: Array byte length: 24

console.log("Array byte offset:", bigint64.byteOffset);
// Expected Output: Array byte offset: 0

bigint64.set([100n, 200n], 1);
console.log(bigint64);
// Expected Output: BigInt64Array [6118793953620967n, 100n, 200n]
```

## Constructor

Creates a new BigInt64Array object.

## Static properties

Also inherits static properties from its parent TypedArray.

Returns a number value of the element size. 8 in the case of BigInt64Array.

## Static methods

Inherits static methods from its parent TypedArray.

## Instance properties

Also inherits instance properties from its parent TypedArray.

These properties are defined on BigInt64Array.prototype and shared by all BigInt64Array instances.

Returns a number value of the element size. 8 in the case of a BigInt64Array.

The constructor function that created the instance object. For BigInt64Array instances, the initial value is the BigInt64Array constructor.

## Instance methods

Inherits instance methods from its parent TypedArray.

## Examples

### Different ways to create a BigInt64Array

```
// From a length
const bigint64 = new BigInt64Array(2);
bigint64[0] = 42n;
console.log(bigint64[0]); // 42n
console.log(bigint64.length); // 2
console.log(bigint64.BYTES_PER_ELEMENT); // 8

// From an array
const x = new BigInt64Array([21n, 31n]);
console.log(x[1]); // 31n

// From another TypedArray
const y = new BigInt64Array(x);
console.log(y[0]); // 21n

// From an ArrayBuffer
const buffer = new ArrayBuffer(64);
const z = new BigInt64Array(buffer, 8, 4);
console.log(z.byteOffset); // 8

// From an iterable
const iterable = (function* () {
  yield* [1n, 2n, 3n];
})();
const bigint64FromIterable = new BigInt64Array(iterable);
console.log(bigint64FromIterable);
// BigInt64Array [1n, 2n, 3n]
```

## Specifications

## Browser compatibility

## See also

- JavaScript typed arrays guide
- TypedArray
- ArrayBuffer
- DataView

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt64Array
