# TypedArray.prototype.toSorted()

Source: https://devdocs.io/javascript/global_objects/typedarray/tosorted

The toSorted() method of TypedArray instances is the copying version of the sort() method. It returns a new typed array with the elements sorted in ascending order. This method has the same algorithm as Array.prototype.toSorted(), except that it sorts the values numerically instead of as strings by default.

## Syntax

```
toSorted()
toSorted(compareFn)
```

### Parameters

A function that determines the order of the elements. If omitted, the typed array elements are sorted according to numeric value. See sort() for more information.

### Return value

A new typed array with the elements sorted in ascending order.

## Description

See Array.prototype.toSorted() for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Sorting an array

For more examples, see also the Array.prototype.sort() method.

```
const numbers = new Uint8Array([40, 1, 5, 200]);
const numberSorted = numbers.toSorted();
console.log(numberSorted); // Uint8Array [ 1, 5, 40, 200 ]
// Unlike plain Arrays, a compare function is not required
// to sort the numbers numerically.
console.log(numbers); // Uint8Array [ 40, 1, 5, 200 ]
```

## Specifications

## Browser compatibility

## See also

- Polyfill of TypedArray.prototype.toSorted in core-js
- JavaScript typed arrays guide
- TypedArray.prototype.sort()
- TypedArray.prototype.toReversed()
- TypedArray.prototype.with()
- Array.prototype.toSorted()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toSorted
