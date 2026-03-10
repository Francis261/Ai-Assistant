# Array.prototype.keys()

Source: https://devdocs.io/javascript/global_objects/array/keys

The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array.

## Try it

```
const array = ["a", "b", "c"];
const iterator = array.keys();

for (const key of iterator) {
  console.log(key);
}

// Expected output: 0
// Expected output: 1
// Expected output: 2
```

## Syntax

```
keys()
```

### Parameters

None.

### Return value

A new iterable iterator object.

## Description

When used on sparse arrays, the keys() method iterates empty slots as if they have the value undefined.

The keys() method is generic. It only expects the this value to have a length property and integer-keyed properties.

## Examples

### Using keys() on sparse arrays

Unlike Object.keys(), which only includes keys that actually exist in the array, the keys() iterator doesn't ignore holes representing missing properties.

```
const arr = ["a", , "c"];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys); // [0, 1, 2]
```

### Calling keys() on non-array objects

The keys() method reads the length property of this and then yields all integer indices between 0 and length - 1. No index access actually happens.

```
const arrayLike = {
  length: 3,
};
for (const entry of Array.prototype.keys.call(arrayLike)) {
  console.log(entry);
}
// 0
// 1
// 2
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Array.prototype.keys in core-js
- es-shims polyfill of Array.prototype.keys
- Indexed collections guide
- Array
- Array.prototype.entries()
- Array.prototype.values()
- Array.prototype[Symbol.iterator]()
- TypedArray.prototype.keys()
- Iteration protocols

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys
