# AggregateError

Source: https://devdocs.io/javascript/global_objects/aggregateerror

The AggregateError object represents an error when several errors need to be wrapped in a single error. It is thrown when multiple errors need to be reported by an operation, for example by Promise.any(), when all promises passed to it reject.

AggregateError is a subclass of Error.

## Constructor

Creates a new AggregateError object.

## Instance properties

Also inherits instance properties from its parent Error.

These properties are defined on AggregateError.prototype and shared by all AggregateError instances.

The constructor function that created the instance object. For AggregateError instances, the initial value is the AggregateError constructor.

Represents the name for the type of error. For AggregateError.prototype.name, the initial value is "AggregateError".

These properties are own properties of each AggregateError instance.

An array representing the errors that were aggregated.

## Instance methods

Inherits instance methods from its parent Error.

## Examples

### Catching an AggregateError

```
Promise.any([Promise.reject(new Error("some error"))]).catch((e) => {
  console.log(e instanceof AggregateError); // true
  console.log(e.message); // "All Promises rejected"
  console.log(e.name); // "AggregateError"
  console.log(e.errors); // [ Error: "some error" ]
});
```

### Creating an AggregateError

```
try {
  throw new AggregateError([new Error("some error")], "Hello");
} catch (e) {
  console.log(e instanceof AggregateError); // true
  console.log(e.message); // "Hello"
  console.log(e.name); // "AggregateError"
  console.log(e.errors); // [ Error: "some error" ]
}
```

## Specifications

## Browser compatibility

## See also

- Polyfill of AggregateError in core-js
- es-shims polyfill of AggregateError
- Error
- Promise.any

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError
