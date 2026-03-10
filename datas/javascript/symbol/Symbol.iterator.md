# Symbol.iterator

Source: https://devdocs.io/javascript/global_objects/symbol/iterator

The Symbol.iterator static data property represents the well-known symbol Symbol.iterator. The iterable protocol looks up this symbol for the method that returns the iterator for an object. In order for an object to be iterable, it must have a [Symbol.iterator] key.

## Try it

```
const iterable = {};

iterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

console.log([...iterable]);
// Expected output: Array [1, 2, 3]
```

## Value

The well-known symbol Symbol.iterator.

## Description

Whenever an object needs to be iterated (such as at the beginning of a for...of loop), its [Symbol.iterator]() method is called with no arguments, and the returned iterator is used to obtain the values to be iterated.

Some built-in types have a default iteration behavior, while other types (such as Object) do not. Some built-in types with a [Symbol.iterator]() method are:

- Array.prototype[Symbol.iterator]()
- TypedArray.prototype[Symbol.iterator]()
- String.prototype[Symbol.iterator]()
- Map.prototype[Symbol.iterator]()
- Set.prototype[Symbol.iterator]()

See also Iteration protocols for more information.

## Examples

### User-defined iterables

We can make our own iterables like this:

```
const myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
[...myIterable]; // [1, 2, 3]
```

Or iterables can be defined directly inside a class or object using a computed property:

```
class Foo {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
}

const someObj = {
  *[Symbol.iterator]() {
    yield "a";
    yield "b";
  },
};

console.log(...new Foo()); // 1, 2, 3
console.log(...someObj); // 'a', 'b'
```

### Non-well-formed iterables

If an iterable's [Symbol.iterator]() method does not return an iterator object, then it is a non-well-formed iterable. Using it as such is likely to result in runtime exceptions or buggy behavior:

```
const nonWellFormedIterable = {};
nonWellFormedIterable[Symbol.iterator] = () => 1;
[...nonWellFormedIterable]; // TypeError: [Symbol.iterator]() returned a non-object value
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Symbol.iterator in core-js
- Iteration protocols
- Array.prototype[Symbol.iterator]()
- TypedArray.prototype[Symbol.iterator]()
- String.prototype[Symbol.iterator]()
- Map.prototype[Symbol.iterator]()
- Set.prototype[Symbol.iterator]()
- arguments[Symbol.iterator]()
- Segments.prototype[Symbol.iterator]()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
