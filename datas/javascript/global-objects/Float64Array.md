# Float64Array

Source: https://devdocs.io/javascript/global_objects/float64array

The Float64Array typed array represents an array of 64-bit floating point numbers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0 unless initialization data is explicitly provided. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).

Float64Array is a subclass of the hidden TypedArray class.

## Constructor

Creates a new Float64Array object.

## Static properties

Also inherits static properties from its parent TypedArray.

Returns a number value of the element size. 8 in the case of Float64Array.

## Static methods

Inherits static methods from its parent TypedArray.

## Instance properties

Also inherits instance properties from its parent TypedArray.

These properties are defined on Float64Array.prototype and shared by all Float64Array instances.

Returns a number value of the element size. 8 in the case of a Float64Array.

The constructor function that created the instance object. For Float64Array instances, the initial value is the Float64Array constructor.

## Instance methods

Inherits instance methods from its parent TypedArray.

## Examples

### Different ways to create a Float64Array

```
// From a length
const float64 = new Float64Array(2);
float64[0] = 42;
console.log(float64[0]); // 42
console.log(float64.length); // 2
console.log(float64.BYTES_PER_ELEMENT); // 8

// From an array
const x = new Float64Array([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Float64Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(64);
const z = new Float64Array(buffer, 8, 4);
console.log(z.byteOffset); // 8

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const float64FromIterable = new Float64Array(iterable);
console.log(float64FromIterable);
// Float64Array [1, 2, 3]
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Float64Array in core-js
- JavaScript typed arrays guide
- TypedArray
- ArrayBuffer
- DataView

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array
