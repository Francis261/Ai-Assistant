# Iterator.prototype.some()

Source: https://devdocs.io/javascript/global_objects/iterator/some

The some() method of Iterator instances is similar to Array.prototype.some(): it tests whether at least one element produced by the iterator passes the test implemented by the provided function. It returns a boolean value.

## Syntax

```
some(callbackFn)
```

### Parameters

A function to execute for each element produced by the iterator. It should return a truthy value to indicate the element passes the test, and a falsy value otherwise. The function is called with the following arguments:

The current element being processed.

The index of the current element being processed.

### Return value

true if the callback function returns a truthy value for at least one element. Otherwise, false.

## Description

some() iterates the iterator and invokes the callbackFn function once for each element. It returns true immediately if the callback function returns a truthy value. Otherwise, it iterates until the end of the iterator and returns false. If some() returns true, the underlying iterator is closed by calling its return() method.

The main advantage of iterator helpers over array methods is that they are lazy, meaning that they only produce the next value when requested. This avoids unnecessary computation and also allows them to be used with infinite iterators. With infinite iterators, some() returns true as soon as the first truthy value is found. If the callbackFn always returns a falsy value, the method never returns.

## Examples

### Using some()

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
console.log(fibonacci().some(isEven)); // true

const isNegative = (x) => x < 0;
console.log(fibonacci().take(10).some(isNegative)); // false
console.log(fibonacci().some(isNegative)); // Never completes
```

Calling some() always closes the underlying iterator, even if the method early-returns. The iterator is never left in a half-way state.

```
const seq = fibonacci();
console.log(seq.some(isEven)); // true
console.log(seq.next()); // { value: undefined, done: true }
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Iterator.prototype.some in core-js
- es-shims polyfill of Iterator.prototype.some
- Iterator
- Iterator.prototype.every()
- Iterator.prototype.find()
- Array.prototype.some()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/some
