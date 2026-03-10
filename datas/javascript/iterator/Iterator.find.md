# Iterator.prototype.find()

Source: https://devdocs.io/javascript/global_objects/iterator/find

The find() method of Iterator instances is similar to Array.prototype.find(): it returns the first element produced by the iterator that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

## Syntax

```
find(callbackFn)
```

### Parameters

A function to execute for each element produced by the iterator. It should return a truthy value to indicate a matching element has been found, and a falsy value otherwise. The function is called with the following arguments:

The current element being processed.

The index of the current element being processed.

### Return value

The first element produced by the iterator that satisfies the provided testing function. Otherwise, undefined is returned.

## Description

find() iterates the iterator and invokes the callbackFn function once for each element. It returns the element immediately if the callback function returns a truthy value. Otherwise, it iterates until the end of the iterator and returns undefined. If find() returns an element, the underlying iterator is closed by calling its return() method.

The main advantage of iterator helpers over array methods is that they are lazy, meaning that they only produce the next value when requested. This avoids unnecessary computation and also allows them to be used with infinite iterators. With infinite iterators, find() returns the first satisfying element as soon as it is found. If the callbackFn always returns a falsy value, the method never returns.

## Examples

### Using find()

```
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const isEven = (x) => x % 2 === 0;
console.log(fibonacci().find(isEven)); // 2

const isNegative = (x) => x < 0;
console.log(fibonacci().take(10).find(isNegative)); // undefined
console.log(fibonacci().find(isNegative)); // Never completes
```

Calling find() always closes the underlying iterator, even if the method early-returns. The iterator is never left in a half-way state.

```
const seq = fibonacci();
console.log(seq.find(isEven)); // 2
console.log(seq.next()); // { value: undefined, done: true }
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Iterator.prototype.find in core-js
- es-shims polyfill of Iterator.prototype.find
- Iterator
- Iterator.prototype.every()
- Iterator.prototype.some()
- Array.prototype.find()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/find
