# Array.prototype.entries()

Source: https://devdocs.io/javascript/global_objects/array/entries

The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.

## Try it

```
const array = ["a", "b", "c"];

const iterator = array.entries();

console.log(iterator.next().value);
// Expected output: Array [0, "a"]

console.log(iterator.next().value);
// Expected output: Array [1, "b"]
```

## Syntax

```
entries()
```

### Parameters

None.

### Return value

A new iterable iterator object.

## Description

When used on sparse arrays, the entries() method iterates empty slots as if they have the value undefined.

The entries() method is generic. It only expects the this value to have a length property and integer-keyed properties.

## Examples

### Iterating with index and element

```
const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

// 0 'a'
// 1 'b'
// 2 'c'
```

### Using a for...of loop

```
const array = ["a", "b", "c"];
const arrayEntries = array.entries();

for (const element of arrayEntries) {
  console.log(element);
}

// [0, 'a']
// [1, 'b']
// [2, 'c']
```

### Iterating sparse arrays

entries() will visit empty slots as if they are undefined.

```
for (const element of [, "a"].entries()) {
  console.log(element);
}
// [0, undefined]
// [1, 'a']
```

### Calling entries() on non-array objects

The entries() method reads the length property of this and then accesses each property whose key is a nonnegative integer less than length.

```
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: "d", // ignored by entries() since length is 3
};
for (const entry of Array.prototype.entries.call(arrayLike)) {
  console.log(entry);
}
// [ 0, 'a' ]
// [ 1, 'b' ]
// [ 2, 'c' ]
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Array.prototype.entries in core-js
- es-shims polyfill of Array.prototype.entries
- Indexed collections guide
- Array
- Array.prototype.keys()
- Array.prototype.values()
- Array.prototype[Symbol.iterator]()
- TypedArray.prototype.entries()
- Iteration protocols

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries
