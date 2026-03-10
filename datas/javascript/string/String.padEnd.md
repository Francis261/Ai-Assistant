# String.prototype.padEnd()

Source: https://devdocs.io/javascript/global_objects/string/padend

The padEnd() method of String values pads this string with a given string (repeated and/or truncated, if needed) so that the resulting string has a given length. The padding is applied from the end of this string.

## Try it

```
const str1 = "Breaded Mushrooms";

console.log(str1.padEnd(25, "."));
// Expected output: "Breaded Mushrooms........"

const str2 = "200";

console.log(str2.padEnd(5));
// Expected output: "200  "
```

## Syntax

```
padEnd(targetLength)
padEnd(targetLength, padString)
```

### Parameters

The length of the resulting string once the current str has been padded. If the value is less than or equal to str.length, then str is returned as-is.

The string to pad the current str with. If padString is too long to stay within targetLength, it will be truncated from the end. The default value is the space character (U+0020).

### Return value

A String of the specified targetLength with padString applied at the end.

## Examples

### Using String.prototype.padEnd()

```
"abc".padEnd(10); // "abc       "
"abc".padEnd(10, "foo"); // "abcfoofoof"
"abc".padEnd(6, "123456"); // "abc123"
"abc".padEnd(1); // "abc"
```

## Specifications

## Browser compatibility

## See also

- Polyfill of String.prototype.padEnd in core-js
- es-shims polyfill of String.prototype.padEnd
- String.prototype.padStart()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd
