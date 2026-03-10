# RegExp.prototype.flags

Source: https://devdocs.io/javascript/global_objects/regexp/flags

The flags accessor property of RegExp instances returns the flags of this regular expression.

## Try it

```
// Outputs RegExp flags in alphabetical order

console.log(/foo/gi.flags);
// Expected output: "gi"

console.log(/^bar/muy.flags);
// Expected output: "muy"
```

## Description

RegExp.prototype.flags has a string as its value. Flags in the flags property are sorted alphabetically (from left to right, e.g., "dgimsuvy"). It actually invokes the other flag accessors (hasIndices, global, etc.) one-by-one and concatenates the results.

All built-in functions read the flags property instead of reading individual flag accessors.

The set accessor of flags is undefined. You cannot change this property directly.

## Examples

### Using flags

```
/foo/ig.flags; // "gi"
/^bar/myu.flags; // "muy"
```

## Specifications

## Browser compatibility

## See also

- Polyfill of RegExp.prototype.flags in core-js
- es-shims polyfill of RegExp.prototype.flags
- Advanced searching with flags in the Regular expressions guide
- RegExp.prototype.source

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags
