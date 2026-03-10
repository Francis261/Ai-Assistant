# SuppressedError() constructor

Source: https://devdocs.io/javascript/global_objects/suppressederror/suppressederror

The SuppressedError() constructor creates SuppressedError objects.

## Syntax

```
new SuppressedError(error, suppressed)
new SuppressedError(error, suppressed, message)

SuppressedError(error, suppressed)
SuppressedError(error, suppressed, message)
```

Note: SuppressedError() can be called with or without new. Both create a new SuppressedError instance.

### Parameters

The new error that results in the suppression of suppressed.

The error that was originally thrown and is now suppressed.

An optional human-readable description of the aggregate error.

Note: SuppressedError() does not accept options like Error() and other subclasses do, because the semantics of cause overlaps with suppressed.

## Examples

### Creating a SuppressedError

```
try {
  throw new SuppressedError(
    new Error("New error"),
    new Error("Original error"),
    "Hello",
  );
} catch (e) {
  console.log(e.suppressed); // Error: "Original error"
  console.log(e.error); // Error: "New error"
}
```

## Specifications

## Browser compatibility

## See also

- Polyfill of SuppressedError in core-js

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SuppressedError/SuppressedError
