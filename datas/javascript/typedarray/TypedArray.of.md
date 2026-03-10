# TypedArray.of()

Source: https://devdocs.io/javascript/global_objects/typedarray/of

The TypedArray.of() static method creates a new typed array from a variable number of arguments. This method is nearly the same as Array.of().

## Try it

```
const int16array = Int16Array.of("10", "20", "30", "40", "50");

console.log(int16array);
// Expected output: Int16Array [10, 20, 30, 40, 50]
```

## Syntax

```
TypedArray.of()
TypedArray.of(element1)
TypedArray.of(element1, element2)
TypedArray.of(element1, element2, /* …, */ elementN)
```

Where TypedArray is one of:

- Int8Array
- Uint8Array
- Uint8ClampedArray
- Int16Array
- Uint16Array
- Int32Array
- Uint32Array
- Float16Array
- Float32Array
- Float64Array
- BigInt64Array
- BigUint64Array

### Parameters

Elements used to create the typed array.

### Return value

A new TypedArray instance.

## Description

See Array.of() for more details. There are some subtle distinctions between Array.of() and TypedArray.of():

- If the this value passed to TypedArray.of() is not a constructor, TypedArray.of() will throw a TypeError, while Array.of() defaults to creating a new Array.
- TypedArray.of() uses [[Set]] while Array.of() uses [[DefineOwnProperty]]. Hence, when working with Proxy objects, it calls handler.set() to create new elements rather than handler.defineProperty().

## Examples

### Using of()

```
Uint8Array.of(1); // Uint8Array [ 1 ]
Int8Array.of("1", "2", "3"); // Int8Array [ 1, 2, 3 ]
Float32Array.of(1, 2, 3); // Float32Array [ 1, 2, 3 ]
Int16Array.of(undefined); // Int16Array [ 0 ]
```

## Specifications

## Browser compatibility

## See also

- Polyfill of TypedArray.of in core-js
- JavaScript typed arrays guide
- TypedArray
- TypedArray.from()
- Array.of()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/of
