# Error: columnNumber

Source: https://devdocs.io/javascript/global_objects/error/columnnumber

Non-standard: This feature is not standardized. We do not recommend using non-standard features in production, as they have limited browser support, and may change or be removed. However, they can be a suitable alternative in specific cases where no standard option exists.

The columnNumber data property of an Error instance contains the column number in the line of the file that raised this error.

## Value

A positive integer.

## Examples

### Using columnNumber

```
try {
  throw new Error("Could not parse input");
} catch (err) {
  console.log(err.columnNumber); // 9
}
```

## Specifications

Not part of any standard.

## Browser compatibility

## See also

- Error.prototype.stack
- Error.prototype.lineNumber
- Error.prototype.fileName

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber
