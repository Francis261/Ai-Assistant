# TypedArray.prototype.values()

Source: https://devdocs.io/javascript/global_objects/typedarray/values

The values() method of TypedArray instances returns a new array iterator object that iterates the value of each item in the typed array. This method has the same algorithm as Array.prototype.values().

## Try it

```
const bytes = new Uint8Array([10, 20, 30, 40, 50]);
const iterator = bytes.values();

iterator.next();
iterator.next();

console.log(iterator.next().value);
// Expected output: 30
```

## Syntax

```
values()
```

### Parameters

None.

### Return value

A new iterable iterator object.

## Description

See Array.prototype.values() for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Iteration using for...of loop

```
const arr = new Uint8Array([10, 20, 30, 40, 50]);
const values = arr.values();
for (const n of values) {
  console.log(n);
}
```

### Alternative iteration

```
const arr = new Uint8Array([10, 20, 30, 40, 50]);
const values = arr.values();
console.log(values.next().value); // 10
console.log(values.next().value); // 20
console.log(values.next().value); // 30
console.log(values.next().value); // 40
console.log(values.next().value); // 50
```

## Specifications

## Browser compatibility

## See also

- Polyfill of TypedArray.prototype.values in core-js
- JavaScript typed arrays guide
- TypedArray
- TypedArray.prototype.entries()
- TypedArray.prototype.keys()
- TypedArray.prototype[Symbol.iterator]()
- Array.prototype.values()
- Iteration protocols

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/values
