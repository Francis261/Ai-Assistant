# Float16Array

Source: https://devdocs.io/javascript/global_objects/float16array

The Float16Array typed array represents an array of 16-bit floating point numbers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0 unless initialization data is explicitly provided. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).

Float16Array is a subclass of the hidden TypedArray class.

Note: Float16 support is not universal, both in the JavaScript API and the underlying CPU architecture. Using it may result in slower performance on some platforms. It is intended for interacting with highly optimized and performance-sensitive systems such as float-backed canvases, WebGPU, WebGL, and deep learning models including stable diffusion.

## Constructor

Creates a new Float16Array object.

## Static properties

Also inherits static properties from its parent TypedArray.

Returns a number value of the element size. 2 in the case of Float16Array.

## Static methods

Inherits static methods from its parent TypedArray.

## Instance properties

Also inherits instance properties from its parent TypedArray.

These properties are defined on Float16Array.prototype and shared by all Float16Array instances.

Returns a number value of the element size. 2 in the case of a Float16Array.

The constructor function that created the instance object. For Float16Array instances, the initial value is the Float16Array constructor.

## Instance methods

Inherits instance methods from its parent TypedArray.

## Examples

### Different ways to create a Float16Array

```
// From a length
const float16 = new Float16Array(2);
float16[0] = 42;
console.log(float16[0]); // 42
console.log(float16.length); // 2
console.log(float16.BYTES_PER_ELEMENT); // 2

// From an array
const x = new Float16Array([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Float16Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(32);
const z = new Float16Array(buffer, 4, 4);
console.log(z.byteOffset); // 4

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const float16FromIterable = new Float16Array(iterable);
console.log(float16FromIterable);
// Float16Array [1, 2, 3]
```

## Specifications

## Browser compatibility

## See also

- JavaScript typed arrays guide
- TypedArray
- ArrayBuffer
- DataView

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float16Array
