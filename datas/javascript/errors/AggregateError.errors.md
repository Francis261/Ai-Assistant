# AggregateError: errors

Source: https://devdocs.io/javascript/global_objects/aggregateerror/errors

The errors data property of an AggregateError instance contains an array representing the errors that were aggregated.

## Value

An Array containing values in the same order as the iterable passed as the first argument of the AggregateError() constructor.

## Examples

### Using errors

```
try {
  throw new AggregateError(
    // An iterable of errors
    new Set([new Error("some error"), new Error("another error")]),
    "Multiple errors thrown",
  );
} catch (err) {
  console.log(err.errors);
  // [
  //   Error: some error,
  //   Error: another error
  // ]
}
```

## Specifications

## Browser compatibility

## See also

- Control flow and error handling guide
- AggregateError
- Error: cause

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError/errors
