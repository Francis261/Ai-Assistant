# SyntaxError: private fields can't be deleted

Source: https://devdocs.io/javascript/errors/cant_delete_private_fields

The JavaScript exception "SyntaxError: private fields can't be deleted" occurs when delete is used on a private element of a class or an object.

## Message

```
SyntaxError: Private fields can not be deleted (V8-based)
SyntaxError: private fields can't be deleted (Firefox)
SyntaxError: Cannot delete private field X (Safari)
```

## Error type

## What went wrong?

There's code trying to delete a private element (field or method) of an object or a class. This is forbidden by JavaScript—private elements cannot be added or removed on the fly.

## Examples

```
class MyClass {
  #myPrivateField;
  deleteIt() {
    delete this.#myPrivateField; // SyntaxError: private fields can't be deleted
  }
}
```

```
class MyClass {
  #myPrivateMethod() {
  }
  #deleteIt() {
    delete this.#myPrivateMethod; // SyntaxError: private fields can't be deleted
  }
}
```

## See also

- Classes
- Private elements

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cant_delete_private_fields
