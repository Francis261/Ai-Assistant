# Uint32Array

Source: https://devdocs.io/javascript/global_objects/uint32array

The Uint32Array typed array represents an array of 32-bit unsigned integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0 unless initialization data is explicitly provided. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).

Uint32Array is a subclass of the hidden TypedArray class.

## Constructor

Creates a new Uint32Array object.

## Static properties

Also inherits static properties from its parent TypedArray.

Returns a number value of the element size. 4 in the case of Uint32Array.

## Static methods

Inherits static methods from its parent TypedArray.

## Instance properties

Also inherits instance properties from its parent TypedArray.

These properties are defined on Uint32Array.prototype and shared by all Uint32Array instances.

Returns a number value of the element size. 4 in the case of a Uint32Array.

The constructor function that created the instance object. For Uint32Array instances, the initial value is the Uint32Array constructor.

## Instance methods

Inherits instance methods from its parent TypedArray.

## Examples

### Different ways to create a Uint32Array

```
// From a length
const uint32 = new Uint32Array(2);
uint32[0] = 42;
console.log(uint32[0]); // 42
console.log(uint32.length); // 2
console.log(uint32.BYTES_PER_ELEMENT); // 4

// From an array
const x = new Uint32Array([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Uint32Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(32);
const z = new Uint32Array(buffer, 4, 4);
console.log(z.byteOffset); // 4

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const uint32FromIterable = new Uint32Array(iterable);
console.log(uint32FromIterable);
// Uint32Array [1, 2, 3]
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Uint32Array in core-js
- JavaScript typed arrays guide
- TypedArray
- ArrayBuffer
- DataView

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint32Array
