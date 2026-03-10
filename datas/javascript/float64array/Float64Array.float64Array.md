# Float64Array() constructor

Source: https://devdocs.io/javascript/global_objects/float64array/float64array

The Float64Array() constructor creates Float64Array objects. The contents are initialized to 0 unless initialization data is explicitly provided.

## Syntax

```
new Float64Array()
new Float64Array(length)
new Float64Array(typedArray)
new Float64Array(object)

new Float64Array(buffer)
new Float64Array(buffer, byteOffset)
new Float64Array(buffer, byteOffset, length)
```

Note: Float64Array() can only be constructed with new. Attempting to call it without new throws a TypeError.

### Parameters

See TypedArray.

### Exceptions

See TypedArray.

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
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float64Array/Float64Array
