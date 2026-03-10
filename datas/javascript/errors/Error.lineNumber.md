# Error: lineNumber

Source: https://devdocs.io/javascript/global_objects/error/linenumber

Non-standard: This feature is not standardized. We do not recommend using non-standard features in production, as they have limited browser support, and may change or be removed. However, they can be a suitable alternative in specific cases where no standard option exists.

The lineNumber data property of an Error instance contains the line number in the file that raised this error.

## Value

A positive integer.

## Examples

### Using lineNumber

```
try {
  throw new Error("Could not parse input");
} catch (err) {
  console.log(err.lineNumber); // 2
}
```

### Alternative example using error event

```
window.addEventListener("error", (e) => {
  console.log(e.lineNumber); // 5
});
const e = new Error("Could not parse input");
throw e;
```

This is not a standard feature and lacks widespread support. See the browser compatibility table below.

## Specifications

Not part of any standard.

## Browser compatibility

## See also

- Error.prototype.stack
- Error.prototype.columnNumber
- Error.prototype.fileName

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber
