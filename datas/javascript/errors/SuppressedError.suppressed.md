# SuppressedError: suppressed

Source: https://devdocs.io/javascript/global_objects/suppressederror/suppressed

The suppressed data property of a SuppressedError instance contains a reference to the original error that got suppressed because a new error was generated while handling it.

## Value

Any value. Like cause, you cannot assume it's an Error instance, although it usually is the case.

## Examples

### Using suppressed

```
try {
  throw new SuppressedError(
    new Error("New error"),
    new Error("Original error"),
    "Hello",
  );
} catch (e) {
  console.log(e.suppressed); // Error: "Original error"
}
```

## Specifications

## Browser compatibility

## See also

- Control flow and error handling guide
- SuppressedError
- Error: cause

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SuppressedError/suppressed
