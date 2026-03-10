# TypedArray.prototype.entries()

Source: https://devdocs.io/javascript/global_objects/typedarray/entries

The entries() method of TypedArray instances returns a new array iterator object that contains the key/value pairs for each index in the typed array. This method has the same algorithm as Array.prototype.entries().

## Try it

```
const uint8 = new Uint8Array([10, 20, 30, 40, 50]);
const eArr = uint8.entries();

eArr.next();
eArr.next();

console.log(eArr.next().value);
// Expected output: Array [2, 30]
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

See Array.prototype.entries() for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Iteration using for...of loop

```
const array = new Uint8Array([10, 20, 30, 40, 50]);
const arrayEntries = arr.entries();
for (const element of arrayEntries) {
  console.log(element);
}
```

### Alternative iteration

```
const array = new Uint8Array([10, 20, 30, 40, 50]);
const arrayEntries = arr.entries();

console.log(arrayEntries.next().value); // [0, 10]
console.log(arrayEntries.next().value); // [1, 20]
console.log(arrayEntries.next().value); // [2, 30]
console.log(arrayEntries.next().value); // [3, 40]
console.log(arrayEntries.next().value); // [4, 50]
```

## Specifications

## Browser compatibility

## See also

- Polyfill of TypedArray.prototype.entries in core-js
- JavaScript typed arrays guide
- TypedArray
- TypedArray.prototype.keys()
- TypedArray.prototype.values()
- TypedArray.prototype[Symbol.iterator]()
- Array.prototype.entries()
- Iteration protocols

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/entries
