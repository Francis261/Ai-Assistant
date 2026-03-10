# TypeError: class constructors must be invoked with 'new'

Source: https://devdocs.io/javascript/errors/class_ctor_no_new

The JavaScript exception "class constructors must be invoked with 'new'" occurs when a class constructor is called without the new keyword. All class constructors must be called with new.

## Message

```
TypeError: Class constructor X cannot be invoked without 'new' (V8-based)
TypeError: Class constructors cannot be invoked without 'new' (V8-based)
TypeError: class constructors must be invoked with 'new' (Firefox)
TypeError: Cannot call a class constructor without |new| (Safari)
```

## Error type

## What went wrong?

In JavaScript, calling a function without new and constructing a function with new are two distinct operations, and functions can behave differently depending on how they are called.

Traditionally, JavaScript functions have been used as both constructors and normal functions, and can detect how they were called using new.target. However, class constructors are always constructors and cannot be called as normal functions.

## Examples

### Invalid cases

```
class X {}

X(); // TypeError: class constructors must be invoked with 'new'
```

### Valid cases

```
class X {}

new X();
```

## See also

- Classes
- new

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Class_ctor_no_new
