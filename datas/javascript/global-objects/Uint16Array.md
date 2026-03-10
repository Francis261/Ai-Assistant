# Uint16Array

Source: https://devdocs.io/javascript/global_objects/uint16array

The Uint16Array typed array represents an array of 16-bit unsigned integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0 unless initialization data is explicitly provided. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).

Uint16Array is a subclass of the hidden TypedArray class.

## Constructor

Creates a new Uint16Array object.

## Static properties

Also inherits static properties from its parent TypedArray.

Returns a number value of the element size. 2 in the case of Uint16Array.

## Static methods

Inherits static methods from its parent TypedArray.

## Instance properties

Also inherits instance properties from its parent TypedArray.

These properties are defined on Uint16Array.prototype and shared by all Uint16Array instances.

Returns a number value of the element size. 2 in the case of a Uint16Array.

The constructor function that created the instance object. For Uint16Array instances, the initial value is the Uint16Array constructor.

## Instance methods

Inherits instance methods from its parent TypedArray.

## Examples

### Different ways to create a Uint16Array

```
// From a length
const uint16 = new Uint16Array(2);
uint16[0] = 42;
console.log(uint16[0]); // 42
console.log(uint16.length); // 2
console.log(uint16.BYTES_PER_ELEMENT); // 2

// From an array
const x = new Uint16Array([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Uint16Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(16);
const z = new Uint16Array(buffer, 2, 4);
console.log(z.byteOffset); // 2

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const uint16FromIterable = new Uint16Array(iterable);
console.log(uint16FromIterable);
// Uint16Array [1, 2, 3]
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Uint16Array in core-js
- JavaScript typed arrays guide
- TypedArray
- ArrayBuffer
- DataView

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint16Array
