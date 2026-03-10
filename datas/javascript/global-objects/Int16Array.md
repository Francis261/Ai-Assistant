# Int16Array

Source: https://devdocs.io/javascript/global_objects/int16array

The Int16Array typed array represents an array of 16-bit signed integers in the platform byte order. If control over byte order is needed, use DataView instead. The contents are initialized to 0 unless initialization data is explicitly provided. Once established, you can reference elements in the array using the object's methods, or using standard array index syntax (that is, using bracket notation).

Int16Array is a subclass of the hidden TypedArray class.

## Constructor

Creates a new Int16Array object.

## Static properties

Also inherits static properties from its parent TypedArray.

Returns a number value of the element size. 2 in the case of Int16Array.

## Static methods

Inherits static methods from its parent TypedArray.

## Instance properties

Also inherits instance properties from its parent TypedArray.

These properties are defined on Int16Array.prototype and shared by all Int16Array instances.

Returns a number value of the element size. 2 in the case of an Int16Array.

The constructor function that created the instance object. For Int16Array instances, the initial value is the Int16Array constructor.

## Instance methods

Inherits instance methods from its parent TypedArray.

## Examples

### Different ways to create an Int16Array

```
// From a length
const int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42
console.log(int16.length); // 2
console.log(int16.BYTES_PER_ELEMENT); // 2

// From an array
const x = new Int16Array([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Int16Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(16);
const z = new Int16Array(buffer, 2, 4);
console.log(z.byteOffset); // 2

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const int16FromIterable = new Int16Array(iterable);
console.log(int16FromIterable);
// Int16Array [1, 2, 3]
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Int16Array in core-js
- JavaScript typed arrays guide
- TypedArray
- ArrayBuffer
- DataView

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Int16Array
