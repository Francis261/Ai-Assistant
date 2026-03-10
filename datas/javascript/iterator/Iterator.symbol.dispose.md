# Iterator.prototype[Symbol.dispose]()

Source: https://devdocs.io/javascript/global_objects/iterator/symbol.dispose

The [Symbol.dispose]() method of Iterator instances implements the disposable protocol and allows it to be disposed when used with using. It calls the return() method of this, if it exists.

## Syntax

```
iterator[Symbol.dispose]()
```

### Parameters

None.

### Return value

None (undefined).

## Examples

### Declaring an iterator with using

The Symbol.dispose method is intended to be automatically called in a using declaration. This is useful if you have an iterator that you manually iterate over by calling its next() method; if you iterate it with for...of or something similar, then error handling and cleanup is done automatically.

```
function* generateNumbers() {
  try {
    yield 1;
    yield 2;
    yield 3;
  } finally {
    console.log("Cleaning up");
  }
}

function doSomething() {
  using numbers = generateNumbers();
  const res1 = numbers.next();
  // Not iterating the rest of the numbers
  // Before the function exits, the async iterator is disposed
  // Logs "Cleaning up"
}

doSomething();
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Iterator.prototype[Symbol.dispose] in core-js
- JavaScript resource management
- Symbol.dispose
- using

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator/Symbol.dispose
