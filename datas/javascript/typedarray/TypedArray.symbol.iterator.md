# TypedArray.prototype[Symbol.iterator]()

Source: https://devdocs.io/javascript/global_objects/typedarray/symbol.iterator

The [Symbol.iterator]() method of TypedArray instances implements the iterable protocol and allows typed arrays to be consumed by most syntaxes expecting iterables, such as the spread syntax and for...of loops. It returns an array iterator object that yields the value of each index in the typed array.

The initial value of this property is the same function object as the initial value of the TypedArray.prototype.values property.

## Try it

```
const uint8 = new Uint8Array([10, 20, 30]);
const iterator = uint8[Symbol.iterator]();

for (const value of iterator) {
  console.log(value);
}

// Expected output: 10
// Expected output: 20
// Expected output: 30
```

## Syntax

```
typedArray[Symbol.iterator]()
```

### Parameters

None.

### Return value

The same return value as TypedArray.prototype.values(): a new iterable iterator object that yields the value of each index in the typed array.

## Examples

### Iteration using for...of loop

Note that you seldom need to call this method directly. The existence of the [Symbol.iterator]() method makes typed arrays iterable, and iterating syntaxes like the for...of loop automatically call this method to obtain the iterator to loop over.

```
const arr = new Uint8Array([10, 20, 30, 40, 50]);
for (const n of arr) {
  console.log(n);
}
```

### Manually hand-rolling the iterator

You may still manually call the next() method of the returned iterator object to achieve maximum control over the iteration process.

```
const arr = new Uint8Array([10, 20, 30, 40, 50]);
const arrIter = arr[Symbol.iterator]();
console.log(arrIter.next().value); // 10
console.log(arrIter.next().value); // 20
console.log(arrIter.next().value); // 30
console.log(arrIter.next().value); // 40
console.log(arrIter.next().value); // 50
```

## Specifications

## Browser compatibility

## See also

- Polyfill of TypedArray.prototype[Symbol.iterator] in core-js
- JavaScript typed arrays guide
- TypedArray
- TypedArray.prototype.entries()
- TypedArray.prototype.keys()
- TypedArray.prototype.values()
- Symbol.iterator
- Iteration protocols

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator
