# TypeError

Source: https://devdocs.io/javascript/global_objects/typeerror

The TypeError object represents an error when an operation could not be performed, typically (but not exclusively) when a value is not of the expected type.

A TypeError may be thrown when:

- an operand or argument passed to a function is incompatible with the type expected by that operator or function; or
- when attempting to modify a value that cannot be changed; or
- when attempting to use a value in an inappropriate way.

TypeError is a serializable object, so it can be cloned with structuredClone() or copied between Workers using postMessage().

TypeError is a subclass of Error.

## Constructor

Creates a new TypeError object.

## Instance properties

Also inherits instance properties from its parent Error.

These properties are defined on TypeError.prototype and shared by all TypeError instances.

The constructor function that created the instance object. For TypeError instances, the initial value is the TypeError constructor.

Represents the name for the type of error. For TypeError.prototype.name, the initial value is "TypeError".

## Instance methods

Inherits instance methods from its parent Error.

## Examples

### Catching a TypeError

```
try {
  null.f();
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "null has no properties"
  console.log(e.name); // "TypeError"
  console.log(e.stack); // Stack of the error
}
```

### Creating a TypeError

```
try {
  throw new TypeError("Hello");
} catch (e) {
  console.log(e instanceof TypeError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "TypeError"
  console.log(e.stack); // Stack of the error
}
```

## Specifications

## Browser compatibility

## See also

- Error

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError
