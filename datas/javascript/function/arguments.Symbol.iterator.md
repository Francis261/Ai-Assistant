# arguments[Symbol.iterator]()

Source: https://devdocs.io/javascript/functions/arguments/symbol.iterator

The [Symbol.iterator]() method of arguments objects implements the iterable protocol and allows arguments objects to be consumed by most syntaxes expecting iterables, such as the spread syntax and for...of loops. It returns an array iterator object that yields the value of each index in the arguments object.

The initial value of this property is the same function object as the initial value of the Array.prototype.values property (and also the same as Array.prototype[Symbol.iterator]()).

## Syntax

```
arguments[Symbol.iterator]()
```

### Parameters

None.

### Return value

The same return value as Array.prototype.values(): a new iterable iterator object that yields the value of each index in the arguments object.

## Examples

### Iteration using for...of loop

Note that you seldom need to call this method directly. The existence of the [Symbol.iterator]() method makes arguments objects iterable, and iterating syntaxes like the for...of loop automatically call this method to obtain the iterator to loop over.

```
function f() {
  for (const letter of arguments) {
    console.log(letter);
  }
}
f("w", "y", "k", "o", "p");
```

### Manually hand-rolling the iterator

You may still manually call the next() method of the returned iterator object to achieve maximum control over the iteration process.

```
function f() {
  const argsIter = arguments[Symbol.iterator]();
  console.log(argsIter.next().value); // w
  console.log(argsIter.next().value); // y
  console.log(argsIter.next().value); // k
  console.log(argsIter.next().value); // o
  console.log(argsIter.next().value); // p
}
f("w", "y", "k", "o", "p");
```

## Specifications

## Browser compatibility

## See also

- Functions guide
- Functions
- arguments
- Array.prototype.values()
- Symbol.iterator
- Iteration protocols

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments/Symbol.iterator
