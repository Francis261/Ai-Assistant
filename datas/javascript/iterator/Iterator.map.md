# Iterator.prototype.map()

Source: https://devdocs.io/javascript/global_objects/iterator/map

The map() method of Iterator instances returns a new iterator helper object that yields elements of the iterator, each transformed by a mapping function.

## Syntax

```
map(callbackFn)
```

### Parameters

A function to execute for each element produced by the iterator. Its return value is yielded by the iterator helper. The function is called with the following arguments:

The current element being processed.

The index of the current element being processed.

### Return value

A new iterator helper object. Each time the iterator helper's next() method is called, it gets the next element from the underlying iterator, applies callbackFn, and yields the return value. When the underlying iterator is completed, the iterator helper is also completed (the next() method produces { value: undefined, done: true }).

## Description

The main advantage of iterator helpers over array methods is that they are lazy, meaning that they only produce the next value when requested. This avoids unnecessary computation and also allows them to be used with infinite iterators. The map() method allows you to create a new iterator that, when iterated, produces transformed elements.

## Examples

### Using map()

The following example creates an iterator that yields terms in the Fibonacci sequence, transforms it into a new sequence with each term squared, and then reads the first few terms:

```
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const seq = fibonacci().map((x) => x ** 2);
console.log(seq.next().value); // 1
console.log(seq.next().value); // 1
console.log(seq.next().value); // 4
```

### Using map() with a for...of loop

map() is most convenient when you are not hand-rolling the iterator. Because iterators are also iterable, you can iterate the returned helper with a for...of loop:

```
for (const n of fibonacci().map((x) => x ** 2)) {
  console.log(n);
  if (n > 30) {
    break;
  }
}

// Logs:
// 1
// 1
// 4
// 9
// 25
// 64
```

This is equivalent to:

```
for (const n of fibonacci()) {
  const n2 = n ** 2;
  console.log(n2);
  if (n2 > 30) {
    break;
  }
}
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Iterator.prototype.map in core-js
- es-shims polyfill of Iterator.prototype.map
- Iterator
- Iterator.prototype.flatMap()
- Array.prototype.reduce()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/map
