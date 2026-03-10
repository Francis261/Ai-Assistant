# TypeError: "x" is (not) "y"

Source: https://devdocs.io/javascript/errors/unexpected_type

The JavaScript exception "x is (not) y" occurs when there was an unexpected type. Oftentimes, unexpected undefined or null values.

## Message

```
TypeError: Cannot read properties of undefined (reading 'x') (V8-based)
TypeError: "x" is undefined (Firefox)
TypeError: "undefined" is not an object (Firefox)
TypeError: undefined is not an object (evaluating 'obj.x') (Safari)

TypeError: "x" is not a symbol (V8-based & Firefox)
TypeError: Symbol.keyFor requires that the first argument be a symbol (Safari)
```

## Error type

TypeError.

## What went wrong?

There was an unexpected type. This occurs oftentimes with undefined or null values.

Also, certain methods, such as Object.create() or Symbol.keyFor(), require a specific type, that must be provided.

## Examples

### Invalid cases

You cannot invoke a method on an undefined or null variable.

```
const foo = undefined;
foo.substring(1); // TypeError: foo is undefined

const foo2 = null;
foo2.substring(1); // TypeError: foo2 is null
```

Certain methods might require a specific type.

```
const foo = {};
Symbol.keyFor(foo); // TypeError: foo is not a symbol

const foo2 = "bar";
Object.create(foo2); // TypeError: "foo2" is not an object or null
```

### Fixing the issue

To fix null pointer to undefined or null values, you can test if the value is undefined or null first.

```
if (foo !== undefined && foo !== null) {
  // Now we know that foo is defined, we are good to go.
}
```

Or, if you are confident that foo will not be another falsy value like "" or 0, or if filtering those cases out is not an issue, you can simply test for its truthiness.

```
if (foo) {
  // Now we know that foo is truthy, it will necessarily not be null/undefined.
}
```

## See also

- undefined
- null

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Unexpected_type
