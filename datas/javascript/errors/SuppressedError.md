# SuppressedError

Source: https://devdocs.io/javascript/global_objects/suppressederror

The SuppressedError object represents an error generated while handing another error. It is generated during resource disposal using using or await using.

Compared to AggregateError, SuppressedError is used to represent a single error that is suppressed by another error, while AggregateError represents a list of unrelated errors. It is possible, though, for a SuppressedError to contain a chain of suppressed errors (e.suppressed.suppressed.suppressed...). It is also semantically different from cause because the error is not caused by another error, but happens when handling another error.

SuppressedError is a subclass of Error.

## Constructor

Creates a new SuppressedError object.

## Instance properties

Also inherits instance properties from its parent Error.

These properties are defined on SuppressedError.prototype and shared by all SuppressedError instances.

The constructor function that created the instance object. For SuppressedError instances, the initial value is the SuppressedError constructor.

Represents the name for the type of error. For SuppressedError.prototype.name, the initial value is "SuppressedError".

Note: SuppressedError never has the cause property, because the semantics of cause overlaps with suppressed.

These properties are own properties of each SuppressedError instance.

A reference to the error that results in the suppression.

A reference to the error that is suppressed by error.

## Instance methods

Inherits instance methods from its parent Error.

## Examples

### Catching a SuppressedError

A SuppressedError is thrown when an error occurs during resource disposal. Throwing an error causes scope cleanup, and each disposer during the cleanup can throw its own error. All these errors are collected into a chain of SuppressedError instances, with the original error as the suppressed property and the new error thrown by the next disposer as the error property.

```
try {
  using resource1 = {
    [Symbol.dispose]() {
      throw new Error("Error while disposing resource1");
    },
  };
  using resource2 = {
    [Symbol.dispose]() {
      throw new Error("Error while disposing resource2");
    },
  };
  throw new Error("Original error");
} catch (e) {
  console.log(e instanceof SuppressedError); // true
  console.log(e.message); // "An error was suppressed during disposal"
  console.log(e.name); // "SuppressedError"
  console.log(e.error); // Error: Error while disposing resource1
  console.log(e.suppressed); // SuppressedError: An error was suppressed during disposal
  console.log(e.suppressed.error); // Error: Error while disposing resource2
  console.log(e.suppressed.suppressed); // Error: Original error
}
```

The chain looks like this:

```
       SuppressedError --suppressed--> SuppressedError --suppressed--> Original error
              |                               |
            error                           error
              v                               v
Error while disposing resource1   Error while disposing resource2
    (Disposal happens later)        (Disposal happens earlier)
```

### Creating a SuppressedError

```
try {
  throw new SuppressedError(
    new Error("New error"),
    new Error("Original error"),
    "Hello",
  );
} catch (e) {
  console.log(e instanceof SuppressedError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "SuppressedError"
  console.log(e.error); // Error: "New error"
  console.log(e.suppressed); // Error: "Original error"
}
```

## Specifications

## Browser compatibility

## See also

- Polyfill of SuppressedError in core-js
- Error
- using
- await using
- DisposableStack
- AsyncDisposableStack

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SuppressedError
