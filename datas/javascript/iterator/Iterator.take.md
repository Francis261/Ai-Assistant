# Iterator.prototype.take()

Source: https://devdocs.io/javascript/global_objects/iterator/take

The take() method of Iterator instances returns a new iterator helper object that yields the given number of elements in this iterator and then terminates.

## Syntax

```
take(limit)
```

### Parameters

The number of elements to take from the start of the iteration.

### Return value

A new iterator helper object. The returned iterator helper yields the elements in the original iterator one-by-one, and then completes (the next() method produces { value: undefined, done: true }) once limit elements have been yielded, or when the original iterator is exhausted, whichever comes first.

### Exceptions

Thrown if limit becomes NaN or negative when converted to an integer.

## Examples

### Using take()

The following example creates an iterator that yields terms in the Fibonacci sequence, and then logs the first three terms:

```
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const seq = fibonacci().take(3);
console.log(seq.next().value); // 1
console.log(seq.next().value); // 1
console.log(seq.next().value); // 2
console.log(seq.next().value); // undefined
```

### Using take() with a for...of loop

take() is most convenient when you are not hand-rolling the iterator. Because iterators are also iterable, you can iterate the returned helper with a for...of loop:

```
for (const n of fibonacci().take(5)) {
  console.log(n);
}

// Logs:
// 1
// 1
// 2
// 3
// 5
```

Because fibonacci() is an infinite iterator, using a for loop to iterate it without any logic to exit early (such as a break statement) would result in an infinite loop.

### Combining drop() with take()

You can combine take() with Iterator.prototype.drop() to get a slice of an iterator:

```
for (const n of fibonacci().drop(2).take(5)) {
  // Drops the first two elements, then takes the next five
  console.log(n);
}
// Logs:
// 2
// 3
// 5
// 8
// 13

for (const n of fibonacci().take(5).drop(2)) {
  // Takes the first five elements, then drops the first two
  console.log(n);
}
// Logs:
// 2
// 3
// 5
```

### Lower and upper bounds of take count

When the limit is negative or NaN, a RangeError is thrown:

```
fibonacci().take(-1); // RangeError: -1 must be positive
fibonacci().take(undefined); // RangeError: undefined must be positive
```

When the limit is larger than the total number of elements the iterator can produce (such as Infinity), the returned iterator helper has essentially the same behavior as the original iterator:

```
for (const n of new Set([1, 2, 3]).values().take(Infinity)) {
  console.log(n);
}

// Logs:
// 1
// 2
// 3
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Iterator.prototype.take in core-js
- es-shims polyfill of Iterator.prototype.take
- Iterator
- Iterator.prototype.drop()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/take
