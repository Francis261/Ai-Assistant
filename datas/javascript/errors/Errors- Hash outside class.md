# SyntaxError: Unexpected '#' used outside of class body

Source: https://devdocs.io/javascript/errors/hash_outside_class

The JavaScript exception "Unexpected '#' used outside of class body" occurs when a hash ("#") is encountered in an unexpected context, most notably outside of a class declaration. Hashes are valid at the beginning of a file as a hashbang comment, or inside of a class as part of a private field. You may encounter this error if you forget the quotation marks when trying to access a DOM identifier as well.

## Message

```
SyntaxError: Unexpected '#' used outside of class body.
```

## Error type

## What went wrong?

We encountered a # somewhere unexpected. This may be due to code moving around and no longer being part of a class, a hashbang comment found on a line other than the first line of a file, or accidentally forgetting the quotation marks around a DOM identifier.

## Examples

### Missing quotation marks

For each case, there might be something slightly wrong. For example

```
document.querySelector(#some-element)
```

This can be fixed via

```
document.querySelector("#some-element");
```

### Outside of a class

```
class ClassWithPrivateField {
  #privateField;

  constructor() {}
}

this.#privateField = 42;
```

This can be fixed by moving the private field back into the class

```
class ClassWithPrivateField {
  #privateField;

  constructor() {
    this.#privateField = 42;
  }
}
```

## See also

- SyntaxError

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Hash_outside_class
