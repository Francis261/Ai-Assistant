# BigUint64Array

Source: https://devdocs.io/javascript/global_objects/biguint64array

The BigUint64Array typed array represents an array of 64-bit unsigned integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0n unless initialization data is explicitly provided. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).

BigUint64Array is a subclass of the hidden TypedArray class.

## Constructor

Creates a new BigUint64Array object.

## Static properties

Also inherits static properties from its parent TypedArray.

Returns a number value of the element size. 8 in the case of BigUint64Array.

## Static methods

Inherits static methods from its parent TypedArray.

## Instance properties

Also inherits instance properties from its parent TypedArray.

These properties are defined on BigUint64Array.prototype and shared by all BigUint64Array instances.

Returns a number value of the element size. 8 in the case of a BigUint64Array.

The constructor function that created the instance object. For BigUint64Array instances, the initial value is the BigUint64Array constructor.

## Instance methods

Inherits instance methods from its parent TypedArray.

## Examples

### Different ways to create a BigUint64Array

```
// From a length
const biguint64 = new BigUint64Array(2);
biguint64[0] = 42n;
console.log(biguint64[0]); // 42n
console.log(biguint64.length); // 2
console.log(biguint64.BYTES_PER_ELEMENT); // 8

// From an array
const x = new BigUint64Array([21n, 31n]);
console.log(x[1]); // 31n

// From another TypedArray
const y = new BigUint64Array(x);
console.log(y[0]); // 21n

// From an ArrayBuffer
const buffer = new ArrayBuffer(64);
const z = new BigUint64Array(buffer, 8, 4);
console.log(z.byteOffset); // 8

// From an iterable
const iterable = (function* () {
  yield* [1n, 2n, 3n];
})();
const biguint64FromIterable = new BigUint64Array(iterable);
console.log(biguint64FromIterable);
// BigUint64Array [1n, 2n, 3n]
```

## Specifications

## Browser compatibility

## See also

- JavaScript typed arrays guide
- TypedArray
- ArrayBuffer
- DataView

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigUint64Array
