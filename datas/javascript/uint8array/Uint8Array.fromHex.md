# Uint8Array.fromHex()

Source: https://devdocs.io/javascript/global_objects/uint8array/fromhex

The Uint8Array.fromHex() static method creates a new Uint8Array object from a hexadecimal string.

This method parses the string into a byte array. To convert the string into a single number, use the parseInt() function with radix set to 16 instead.

## Syntax

```
Uint8Array.fromHex(string)
```

### Parameters

A hexadecimal string encoding bytes to convert to a Uint8Array. The string must:

- Have an even number of characters because two characters encode one byte.
- Only contain characters in the hexadecimal alphabet, which includes 0–9 and A–F (case-insensitive).
- Not contain whitespace (unlike Uint8Array.prototype.setFromBase64()).

### Return value

A new Uint8Array object containing the decoded bytes from the hexadecimal string.

### Exceptions

Thrown if the input string contains characters outside the hex alphabet, or its length is odd.

Thrown if the input string is not a string.

## Examples

### Decoding a hexadecimal string

This example decodes a hexadecimal string into a Uint8Array.

```
const hexString = "cafed00d";
const bytes = Uint8Array.fromHex(hexString);
console.log(bytes); // Uint8Array [ 202, 254, 208, 13 ]
```

Uppercase characters are also supported:

```
const hexString = "CAFEd00d";
const bytes = Uint8Array.fromHex(hexString);
console.log(bytes); // Uint8Array [ 202, 254, 208, 13 ]
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Uint8Array.fromHex in core-js
- es-shims polyfill of Uint8Array.fromHex
- Uint8Array
- Uint8Array.prototype.setFromHex()
- Uint8Array.prototype.toHex()
- parseInt()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/fromHex
