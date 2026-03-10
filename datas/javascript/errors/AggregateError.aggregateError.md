# AggregateError() constructor

Source: https://devdocs.io/javascript/global_objects/aggregateerror/aggregateerror

The AggregateError() constructor creates AggregateError objects.

## Syntax

```
new AggregateError(errors)
new AggregateError(errors, message)
new AggregateError(errors, message, options)

AggregateError(errors)
AggregateError(errors, message)
AggregateError(errors, message, options)
```

Note: AggregateError() can be called with or without new. Both create a new AggregateError instance.

### Parameters

An iterable of errors, may not actually be Error instances.

An optional human-readable description of the aggregate error.

An object that has the following properties:

A property indicating the specific cause of the error. When catching and re-throwing an error with a more-specific or useful error message, this property can be used to pass the original error.

## Examples

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
- Promise.any

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError/AggregateError
