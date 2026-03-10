# Symbol.keyFor()

Source: https://devdocs.io/javascript/global_objects/symbol/keyfor

The Symbol.keyFor() static method retrieves a shared symbol key from the global symbol registry for the given symbol.

## Try it

```
const globalSym = Symbol.for("foo"); // Global symbol

console.log(Symbol.keyFor(globalSym));
// Expected output: "foo"

const localSym = Symbol(); // Local symbol

console.log(Symbol.keyFor(localSym));
// Expected output: undefined

console.log(Symbol.keyFor(Symbol.iterator));
// Expected output: undefined
```

## Syntax

```
Symbol.keyFor(sym)
```

### Parameters

Symbol, required. The symbol to find a key for.

### Return value

A string representing the key for the given symbol if one is found on the global registry; otherwise, undefined.

## Examples

### Using keyFor()

```
const globalSym = Symbol.for("foo"); // create a new global symbol
Symbol.keyFor(globalSym); // "foo"

const localSym = Symbol();
Symbol.keyFor(localSym); // undefined

// well-known symbols are not symbols registered
// in the global symbol registry
Symbol.keyFor(Symbol.iterator); // undefined
```

## Specifications

## Browser compatibility

## See also

- Symbol.for()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor
