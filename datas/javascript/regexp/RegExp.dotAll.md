# RegExp.prototype.dotAll

Source: https://devdocs.io/javascript/global_objects/regexp/dotall

The dotAll accessor property of RegExp instances returns whether or not the s flag is used with this regular expression.

## Try it

```
const regex1 = /f.o/s;

console.log(regex1.dotAll);
// Expected output: true

const regex2 = /bar/;

console.log(regex2.dotAll);
// Expected output: false
```

## Description

RegExp.prototype.dotAll has the value true if the s flag was used; otherwise, false. The s flag indicates that the dot special character (.) should additionally match the following line terminator ("newline") characters in a string, which it would not match otherwise:

- U+000A LINE FEED (LF) (\n)
- U+000D CARRIAGE RETURN (CR) (\r)
- U+2028 LINE SEPARATOR
- U+2029 PARAGRAPH SEPARATOR

This effectively means the dot will match any UTF-16 code unit. However, it will not match characters that are outside of the Unicode Basic Multilingual Plane (BMP), also known as astral characters, which are represented as surrogate pairs and necessitate matching with two . patterns instead of one.

```
"😄".match(/(.)(.)/s);
// Array(3) [ "😄", "\ud83d", "\ude04" ]
```

The u (unicode) flag can be used to allow the dot to match astral characters as a single character.

```
"😄".match(/./su);
// Array [ "😄" ]
```

Note that a pattern such as .* is still capable of consuming astral characters as part of a larger context, even without the u flag.

```
"😄".match(/.*/s);
// Array [ "😄" ]
```

Using both the s and u flags in conjunction allows the dot to match any Unicode character in a more intuitive manner.

The set accessor of dotAll is undefined. You cannot change this property directly.

## Examples

### Using dotAll

```
const str1 = "bar\nexample foo example";

const regex1 = /bar.example/s;

console.log(regex1.dotAll); // true

console.log(str1.replace(regex1, "")); // foo example

const str2 = "bar\nexample foo example";

const regex2 = /bar.example/;

console.log(regex2.dotAll); // false

console.log(str2.replace(regex2, ""));
// bar
// example foo example
```

## Specifications

## Browser compatibility

## See also

- Polyfill of the dotAll flag in core-js
- RegExp.prototype.lastIndex
- RegExp.prototype.global
- RegExp.prototype.hasIndices
- RegExp.prototype.ignoreCase
- RegExp.prototype.multiline
- RegExp.prototype.source
- RegExp.prototype.sticky
- RegExp.prototype.unicode

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll
