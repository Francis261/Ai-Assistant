# SyntaxError: getter and setter for private name #x should either be both static or non-static

Source: https://devdocs.io/javascript/errors/either_be_both_static_or_non-static

The JavaScript exception "mismatched placement" occurs when a private getter and setter are mismatched in whether or not they are static.

## Message

```
SyntaxError: Identifier '#x' has already been declared (V8-based)
SyntaxError: getter and setter for private name #x should either be both static or non-static (Firefox)
SyntaxError: Cannot declare a private non-static getter if there is a static private setter with used name. (Safari)
```

## Error type

## What went wrong?

Private getters and setters for the same name must either be both static, or both non-static. This limitation does not exist for public methods.

## Examples

### Mismatched placement

```
class Test {
  static set #foo(_) {}
  get #foo() {}
}

// SyntaxError: getter and setter for private name #foo should either be both static or non-static
```

Since foo is private, the methods must be either both static:

```
class Test {
  static set #foo(_) {}
  static get #foo() {}
}
```

or non-static:

```
class Test {
  set #foo(_) {}
  get #foo() {}
}
```

## See also

- get
- set
- static
- Private elements

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Either_be_both_static_or_non-static
