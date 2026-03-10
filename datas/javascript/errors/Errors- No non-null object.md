# TypeError: "x" is not a non-null object

Source: https://devdocs.io/javascript/errors/no_non-null_object

The JavaScript exception "is not a non-null object" occurs when an object is expected somewhere and wasn't provided. null is not an object and won't work.

## Message

```
TypeError: Property description must be an object: x (V8-based)
TypeError: Property descriptor must be an object, got "x" (Firefox)
TypeError: Property description must be an object. (Safari)
```

## Error type

## What went wrong?

An object is expected somewhere and wasn't provided. null is not an object and won't work. You must provide a proper object in the given situation.

## Examples

### Property descriptor expected

When methods like Object.create() or Object.defineProperty() and Object.defineProperties() are used, the optional descriptor parameter expects a property descriptor object. Providing no object (like just a number), will throw an error:

```
Object.defineProperty({}, "key", 1);
// TypeError: 1 is not a non-null object

Object.defineProperty({}, "key", null);
// TypeError: null is not a non-null object
```

A valid property descriptor object might look like this:

```
Object.defineProperty({}, "key", { value: "foo", writable: false });
```

## See also

- Object.create()
- Object.defineProperty()
- Object.defineProperties()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/No_non-null_object
