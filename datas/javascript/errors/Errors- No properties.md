# TypeError: null/undefined has no properties

Source: https://devdocs.io/javascript/errors/no_properties

The JavaScript exception "null (or undefined) has no properties" occurs when you attempt to access properties of null and undefined. They don't have any.

## Message

```
TypeError: Cannot read properties of undefined (reading 'x') (V8-based)
TypeError: Cannot destructure 'x' as it is undefined. (V8-based)
TypeError: Cannot destructure property 'x' of 'y' as it is undefined. (V8-based)
TypeError: null has no properties (Firefox)
TypeError: undefined has no properties (Firefox)
TypeError: undefined is not an object (evaluating 'undefined.x') (Safari)
TypeError: Right side of assignment cannot be destructured (Safari)
```

## Error type

TypeError.

## What went wrong?

Both null and undefined have no properties you could access. Therefore, you cannot use property accessors on them, or destructure them.

## Examples

### null and undefined have no properties

```
null.foo;
// TypeError: null has no properties

undefined.bar;
// TypeError: undefined has no properties
```

## See also

- null
- undefined

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/No_properties
