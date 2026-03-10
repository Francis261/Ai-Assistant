# Iterator.prototype.forEach()

Source: https://devdocs.io/javascript/global_objects/iterator/foreach

The forEach() method of Iterator instances is similar to Array.prototype.forEach(): it executes a provided function once for each element produced by the iterator.

## Syntax

```
forEach(callbackFn)
```

### Parameters

A function to execute for each element produced by the iterator. Its return value is discarded. The function is called with the following arguments:

The current element being processed.

The index of the current element being processed.

### Return value

undefined.

## Description

forEach() iterates the iterator and invokes the callbackFn function once for each element. Unlike most other iterator helper methods, it does not work with infinite iterators, because it is not lazy.

## Examples

### Using forEach()

```
new Set([1, 2, 3]).values().forEach((v) => console.log(v));

// Logs:
// 1
// 2
// 3
```

This is equivalent to:

```
for (const v of new Set([1, 2, 3]).values()) {
  console.log(v);
}
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Iterator.prototype.forEach in core-js
- es-shims polyfill of Iterator.prototype.forEach
- Iterator
- Iterator.prototype.find()
- Iterator.prototype.map()
- Iterator.prototype.filter()
- Iterator.prototype.every()
- Iterator.prototype.some()
- Array.prototype.forEach()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/forEach
