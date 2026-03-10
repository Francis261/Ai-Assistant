# TypeError: calling a builtin X constructor without new is forbidden

Source: https://devdocs.io/javascript/errors/builtin_ctor_no_new

The JavaScript exception "calling a builtin X constructor without new is forbidden" occurs when you try to call a builtin constructor without using the new keyword. All modern constructors, such as Promise and Map, must be called with new.

## Message

```
TypeError: Constructor X requires 'new' (V8-based)
TypeError: Promise constructor cannot be invoked without 'new' (V8-based)
TypeError: calling a builtin X constructor without new is forbidden (Firefox)
TypeError: calling X constructor without new is invalid (Safari)
```

## Error type

## What went wrong?

In JavaScript, calling a function without new and constructing a function with new are two distinct operations, and functions can behave differently depending on how they are called.

Apart from the following legacy constructors, all modern constructors must be called with new:

- Object()
- Function() (and its subclasses)
- Error() (and its subclasses)
- RegExp()
- Array()

Some other constructors, such as Date(), and primitive wrappers, such as String(), Number(), and Boolean(), can also be called with or without new, but the return types differ in the two cases.

On every constructor page, you can find information about whether the constructor must be called with new.

## Examples

### Invalid cases

```
const m = Map(); // TypeError: calling a builtin Map constructor without new is forbidden
```

### Valid cases

```
const m = new Map();
```

## See also

- new

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Builtin_ctor_no_new
