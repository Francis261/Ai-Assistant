# String.prototype.isWellFormed()

Source: https://devdocs.io/javascript/global_objects/string/iswellformed

The isWellFormed() method of String values returns a boolean indicating whether this string contains any lone surrogates.

## Syntax

```
isWellFormed()
```

### Parameters

None.

### Return value

Returns true if this string does not contain any lone surrogates, false otherwise.

## Description

Strings in JavaScript are UTF-16 encoded. UTF-16 encoding has the concept of surrogate pairs, which is introduced in detail in the UTF-16 characters, Unicode code points, and grapheme clusters section.

isWellFormed() allows you to test whether a string is well-formed (i.e., does not contain any lone surrogates). Compared to a custom implementation, isWellFormed() is more efficient, as engines can directly access the internal representation of strings. If you need to convert a string to a well-formed string, use the toWellFormed() method. isWellFormed() allows you to handle ill-formed strings differently from well-formed strings, such as throwing an error or marking it as invalid.

## Examples

### Using isWellFormed()

```
const strings = [
  // Lone leading surrogate
  "ab\uD800",
  "ab\uD800c",
  // Lone trailing surrogate
  "\uDFFFab",
  "c\uDFFFab",
  // Well-formed
  "abc",
  "ab\uD83D\uDE04c",
];

for (const str of strings) {
  console.log(str.isWellFormed());
}
// Logs:
// false
// false
// false
// false
// true
// true
```

### Avoiding errors in encodeURI()

encodeURI throws an error if the string passed is not well-formed. This can be avoided by using isWellFormed() to test the string before passing it to encodeURI().

```
const illFormed = "https://example.com/search?q=\uD800";

try {
  encodeURI(illFormed);
} catch (e) {
  console.log(e); // URIError: URI malformed
}

if (illFormed.isWellFormed()) {
  console.log(encodeURI(illFormed));
} else {
  console.warn("Ill-formed strings encountered."); // Ill-formed strings encountered.
}
```

## Specifications

## Browser compatibility

## See also

- Polyfill of String.prototype.isWellFormed in core-js
- es-shims polyfill of String.prototype.isWellFormed
- String.prototype.toWellFormed()
- String.prototype.normalize()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/isWellFormed
