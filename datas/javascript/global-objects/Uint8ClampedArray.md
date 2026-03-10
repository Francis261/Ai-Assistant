# Uint8ClampedArray

Source: https://devdocs.io/javascript/global_objects/uint8clampedarray

The Uint8ClampedArray typed array represents an array of 8-bit unsigned integers clamped to 0–255. The contents are initialized to 0 unless initialization data is explicitly provided. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).

Uint8ClampedArray is a subclass of the hidden TypedArray class.

## Constructor

Creates a new Uint8ClampedArray object.

## Static properties

Also inherits static properties from its parent TypedArray.

Returns a number value of the element size. 1 in the case of Uint8ClampedArray.

## Static methods

Inherits static methods from its parent TypedArray.

## Instance properties

Also inherits instance properties from its parent TypedArray.

These properties are defined on Uint8ClampedArray.prototype and shared by all Uint8ClampedArray instances.

Returns a number value of the element size. 1 in the case of a Uint8ClampedArray.

The constructor function that created the instance object. For Uint8ClampedArray instances, the initial value is the Uint8ClampedArray constructor.

## Instance methods

Inherits instance methods from its parent TypedArray.

## Examples

### Different ways to create a Uint8ClampedArray

```
// From a length
const uint8c = new Uint8ClampedArray(2);
uint8c[0] = 42;
uint8c[1] = 1337;
console.log(uint8c[0]); // 42
console.log(uint8c[1]); // 255 (clamped)
console.log(uint8c.length); // 2
console.log(uint8c.BYTES_PER_ELEMENT); // 1

// From an array
const x = new Uint8ClampedArray([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Uint8ClampedArray(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(8);
const z = new Uint8ClampedArray(buffer, 1, 4);
console.log(z.byteOffset); // 1

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const uint8cFromIterable = new Uint8ClampedArray(iterable);
console.log(uint8cFromIterable);
// Uint8ClampedArray [1, 2, 3]
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Uint8ClampedArray in core-js
- JavaScript typed arrays guide
- TypedArray
- ArrayBuffer
- DataView

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray
