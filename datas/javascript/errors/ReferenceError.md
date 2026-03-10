# ReferenceError

Source: https://devdocs.io/javascript/global_objects/referenceerror

The ReferenceError object represents an error when a variable that doesn't exist (or hasn't yet been initialized) in the current scope is referenced.

ReferenceError is a serializable object, so it can be cloned with structuredClone() or copied between Workers using postMessage().

ReferenceError is a subclass of Error.

## Constructor

Creates a new ReferenceError object.

## Instance properties

Also inherits instance properties from its parent Error.

These properties are defined on ReferenceError.prototype and shared by all ReferenceError instances.

The constructor function that created the instance object. For ReferenceError instances, the initial value is the ReferenceError constructor.

Represents the name for the type of error. For ReferenceError.prototype.name, the initial value is "ReferenceError".

## Instance methods

Inherits instance methods from its parent Error.

## Examples

### Catching a ReferenceError

```
try {
  let a = undefinedVariable;
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "undefinedVariable is not defined"
  console.log(e.name); // "ReferenceError"
  console.log(e.stack); // Stack of the error
}
```

### Creating a ReferenceError

```
try {
  throw new ReferenceError("Hello");
} catch (e) {
  console.log(e instanceof ReferenceError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "ReferenceError"
  console.log(e.stack); // Stack of the error
}
```

## Specifications

## Browser compatibility

## See also

- Error

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError
