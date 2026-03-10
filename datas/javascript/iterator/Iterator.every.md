# Iterator.prototype.every()

Source: https://devdocs.io/javascript/global_objects/iterator/every

The every() method of Iterator instances is similar to Array.prototype.every(): it tests whether all elements produced by the iterator pass the test implemented by the provided function. It returns a boolean value.

## Syntax

```
every(callbackFn)
```

### Parameters

A function to execute for each element produced by the iterator. It should return a truthy value to indicate the element passes the test, and a falsy value otherwise. The function is called with the following arguments:

The current element being processed.

The index of the current element being processed.

### Return value

true if callbackFn returns a truthy value for every element. Otherwise, false.

## Description

every() iterates the iterator and invokes the callbackFn function once for each element. It returns false immediately if the callback function returns a falsy value. Otherwise, it iterates until the end of the iterator and returns true. If every() returns false, the underlying iterator is closed by calling its return() method.

The main advantage of iterator helpers over array methods is that they are lazy, meaning that they only produce the next value when requested. This avoids unnecessary computation and also allows them to be used with infinite iterators. With infinite iterators, every() returns false as soon as the first falsy value is found. If the callbackFn always returns a truthy value, the method never returns.

## Examples

### Using every()

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
console.log(fibonacci().every(isEven)); // false

const isPositive = (x) => x > 0;
console.log(fibonacci().take(10).every(isPositive)); // true
console.log(fibonacci().every(isPositive)); // Never completes
```

Calling every() always closes the underlying iterator, even if the method early-returns. The iterator is never left in a half-way state.

```
const seq = fibonacci();
console.log(seq.every(isEven)); // false
console.log(seq.next()); // { value: undefined, done: true }
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Iterator.prototype.every in core-js
- es-shims polyfill of Iterator.prototype.every
- Iterator
- Iterator.prototype.find()
- Iterator.prototype.some()
- Array.prototype.every()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/every
