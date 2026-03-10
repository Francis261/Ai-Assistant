# TypedArray.prototype.keys()

Source: https://devdocs.io/javascript/global_objects/typedarray/keys

The keys() method of TypedArray instances returns a new array iterator object that contains the keys for each index in the typed array. This method has the same algorithm as Array.prototype.keys().

## Try it

```
const uint8 = new Uint8Array([10, 20, 30, 40, 50]);
const keys = uint8.keys();

keys.next();
keys.next();

console.log(keys.next().value);
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

See Array.prototype.keys() for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Iteration using for...of loop

```
const arr = new Uint8Array([10, 20, 30, 40, 50]);
const arrKeys = arr.keys();
for (const n of arrKeys) {
  console.log(n);
}
```

### Alternative iteration

```
const arr = new Uint8Array([10, 20, 30, 40, 50]);
const arrKeys = arr.keys();
console.log(arrKeys.next().value); // 0
console.log(arrKeys.next().value); // 1
console.log(arrKeys.next().value); // 2
console.log(arrKeys.next().value); // 3
console.log(arrKeys.next().value); // 4
```

## Specifications

## Browser compatibility

## See also

- Polyfill of TypedArray.prototype.keys in core-js
- JavaScript typed arrays guide
- TypedArray
- TypedArray.prototype.entries()
- TypedArray.prototype.values()
- TypedArray.prototype[Symbol.iterator]()
- Array.prototype.keys()
- Iteration protocols

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/keys
