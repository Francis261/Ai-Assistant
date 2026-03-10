# AsyncIterator.prototype[Symbol.asyncIterator]()

Source: https://devdocs.io/javascript/global_objects/asynciterator/symbol.asynciterator

The [Symbol.asyncIterator]() method of AsyncIterator instances implements the async iterable protocol and allows built-in async iterators to be consumed by most syntaxes expecting async iterables, such as for await...of loops. It returns the value of this, which is the async iterator object itself.

## Syntax

```
asyncIterator[Symbol.asyncIterator]()
```

### Parameters

None.

### Return value

The value of this, which is the async iterator object itself.

## Examples

### Iteration using for await...of loop

Note that you seldom need to call this method directly. The existence of the [Symbol.asyncIterator]() method makes all built-in async iterators async iterable, and iterating syntaxes like the for await...of loop automatically calls this method to obtain the async iterator to loop over.

```
const asyncIterator = (async function* () {
  yield 1;
  yield 2;
  yield 3;
})();
(async () => {
  for await (const value of asyncIterator) {
    console.log(value);
  }
})();
// Logs: 1, 2, 3
```

## Specifications

## Browser compatibility

## See also

- for await...of

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncIterator
