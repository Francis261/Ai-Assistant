# Iterator

Source: https://devdocs.io/javascript/global_objects/iterator

An Iterator object is an object that conforms to the iterator protocol by providing a next() method that returns an iterator result object. All built-in iterators inherit from the Iterator class. The Iterator class provides a [Symbol.iterator]() method that returns the iterator object itself, making the iterator also iterable. It also provides some helper methods for working with iterators.

## Description

The following are all built-in JavaScript iterators:

- The Array Iterator returned by Array.prototype.values(), Array.prototype.keys(), Array.prototype.entries(), Array.prototype[Symbol.iterator](), TypedArray.prototype.values(), TypedArray.prototype.keys(), TypedArray.prototype.entries(), TypedArray.prototype[Symbol.iterator](), and arguments[Symbol.iterator]().
- The String Iterator returned by String.prototype[Symbol.iterator]().
- The Map Iterator returned by Map.prototype.values(), Map.prototype.keys(), Map.prototype.entries(), and Map.prototype[Symbol.iterator]().
- The Set Iterator returned by Set.prototype.values(), Set.prototype.keys(), Set.prototype.entries(), and Set.prototype[Symbol.iterator]().
- The RegExp String Iterator returned by RegExp.prototype[Symbol.matchAll]() and String.prototype.matchAll().
- The Generator object returned by generator functions.
- The Segments Iterator returned by the [Symbol.iterator]() method of the Segments object returned by Intl.Segmenter.prototype.segment().
- The Iterator Helper returned by iterator helper methods such as Iterator.prototype.filter() and Iterator.prototype.map().

Web APIs may return iterators too. Some reuse core JavaScript iterators while others define their own iterators. For example:

- Array-Like objects such as NodeList return an Array Iterator from their respective methods keys(), values(), entries(), and [Symbol.iterator]().
- Map-Like objects from Web APIs such as Headers return their own iterator type like Headers Iterator from their respective methods keys(), values(), entries(), and [Symbol.iterator]().
- Set-Like objects from Web APIs such as FontFaceSet return their own iterator type like FontFaceSet Iterator from their respective methods keys(), values(), entries(), and [Symbol.iterator]().

Note: NodeIterator and other old interfaces are named as such but do not conform to the iterator protocol or iterable protocol.

Each of these iterators have a distinct prototype object, which defines the next() method used by the particular iterator. For example, all string iterator objects inherit from a hidden object StringIteratorPrototype, which has a next() method that iterates this string by code points. StringIteratorPrototype also has a [Symbol.toStringTag] property whose initial value is the string "String Iterator". This property is used in Object.prototype.toString(). Similarly, other iterator prototypes also have their own [Symbol.toStringTag] values, which are the same as the names given above.

All of these prototype objects inherit from Iterator.prototype, which provides a [Symbol.iterator]() method that returns the iterator object itself, making the iterator also iterable.

### Iterator helper methods

Note: These methods are iterator helpers, not iterable helpers, because the only requirement for an object to be iterable is just the presence of a [Symbol.iterator]() method. There is no shared prototype to install these methods on.

The Iterator class itself provides some helper methods for working with iterators. For example, you may be tempted to do the following:

```
const nameToDeposit = new Map([
  ["Anne", 1000],
  ["Bert", 1500],
  ["Carl", 2000],
]);

const totalDeposit = [...nameToDeposit.values()].reduce((a, b) => a + b);
```

This first converts the iterator returned by Map.prototype.values() to an array, then uses the Array.prototype.reduce() method to calculate the sum. However, this both creates an intermediate array and iterates the array twice. Instead, you can use the reduce() method of the iterator itself:

```
const totalDeposit = nameToDeposit.values().reduce((a, b) => a + b);
```

This method may be more efficient, especially memory-wise, because it only iterates the iterator once, without memorizing any intermediate values. Iterator helper methods are necessary to work with infinite iterators:

```
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const seq = fibonacci();
const firstThreeDigitTerm = seq.find((n) => n >= 100);
```

You cannot convert seq to an array, because it is infinite. Instead, you can use the find() method of the iterator itself, which only iterates seq as far as necessary to find the first value that satisfies the condition.

You will find many iterator methods analogous to array methods, such as:

Iterator.prototype.drop() and Iterator.prototype.take() combined are somewhat analogous to Array.prototype.slice().

### Iterator helper objects

Note: Iterator helper objects and iterator helper methods are two different concepts. An Iterator helper object is detectable at runtime, while "iterator helper method" is just a name for a set of methods for comprehension. Iterator helper may refer to either the object or the method, depending on the context.

Among the iterator helper methods, filter(), flatMap(), map(), drop(), and take() return a new Iterator Helper object. The iterator helper is also an Iterator instance, making these helper methods chainable. All iterator helper objects inherit from a common prototype object, which implements the iterator protocol:

Calls the next() method of the underlying iterator, applies the helper method to the result, and returns the result.

Calls the return() method of the underlying iterator, and returns the result.

The iterator helper shares the same data source as the underlying iterator, so iterating the iterator helper causes the underlying iterator to be iterated as well. There is no way to "fork" an iterator to allow it to be iterated multiple times.

```
const it = [1, 2, 3].values();
const it2 = it.drop(0); // Essentially a copy
console.log(it.next().value); // 1
console.log(it2.next().value); // 2
console.log(it.next().value); // 3
```

### Proper iterators

There are two kinds of "iterators": objects that conform to the iterator protocol (which, at its minimum, only requires the presence of a next() method), and objects that inherit from the Iterator class, which enjoy the helper methods. They do not entail each other — objects that inherit from Iterator do not automatically become iterators, because the Iterator class does not define a next() method. Instead, the object needs to define a next() method itself. A proper iterator is one that both conforms to the iterator protocol and inherits from Iterator, and most code expect iterators to be proper iterators and iterables to return proper iterators. To create proper iterators, define a class that extends Iterator, or use the Iterator.from() method.

```
class MyIterator extends Iterator {
  next() {
    // …
  }
}

const myIterator = Iterator.from({
  next() {
    // …
  },
});
```

## Constructor

Intended to be extended by other classes that create iterators. Throws an error when constructed by itself.

## Static methods

Creates a new Iterator object from a list of iterable objects. The new iterator yields the values from each of the input iterables in sequence.

Creates a new Iterator object from an iterator or iterable object.

## Instance properties

These properties are defined on Iterator.prototype and shared by all Iterator instances.

The constructor function that created the instance object. For Iterator instances, the initial value is the Iterator constructor.

The initial value of the [Symbol.toStringTag] property is the string "Iterator". This property is used in Object.prototype.toString().

Note: Unlike the [Symbol.toStringTag] on most built-in classes, Iterator.prototype[Symbol.toStringTag] is writable for web compatibility reasons.

## Instance methods

Returns a new iterator helper object that skips the given number of elements at the start of this iterator.

Tests whether all elements produced by the iterator pass the test implemented by the provided function.

Returns a new iterator helper object that yields only those elements of the iterator for which the provided callback function returns true.

Returns the first element produced by the iterator that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

Returns a new iterator helper object that takes each element in the original iterator, runs it through a mapping function, and yields elements returned by the mapping function (which are contained in another iterator or iterable).

Executes a provided function once for each element produced by the iterator.

Returns a new iterator helper object that yields elements of the iterator, each transformed by a mapping function.

Executes a user-supplied "reducer" callback function on each element produced by the iterator, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements is a single value.

Tests whether at least one element in the iterator passes the test implemented by the provided function. It returns a boolean value.

Returns a new iterator helper object that yields the given number of elements in this iterator and then terminates.

Creates a new Array instance populated with the elements yielded from the iterator.

Calls the return() method of this, if it exists. This implements the disposable protocol and allows it to be disposed when used with using or await using.

Returns the iterator object itself. This allows iterator objects to also be iterable.

## Examples

### Using an iterator as an iterable

All built-in iterators are also iterable, so you can use them in a for...of loop:

```
const arrIterator = [1, 2, 3].values();
for (const value of arrIterator) {
  console.log(value);
}
// Logs: 1, 2, 3
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Iterator in core-js
- es-shims polyfill of Iterator and associated helpers
- function*
- Iteration protocols

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator
