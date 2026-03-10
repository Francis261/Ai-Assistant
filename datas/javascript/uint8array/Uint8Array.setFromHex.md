# Uint8Array.prototype.setFromHex()

Source: https://devdocs.io/javascript/global_objects/uint8array/setfromhex

The setFromHex() method of Uint8Array instances populates this Uint8Array object with bytes from a hex-encoded string, returning an object indicating how many bytes were read and written.

This method parses the string into a byte array. To convert the string into a single number, use the parseInt() function with radix set to 16 instead.

## Syntax

```
setFromHex(string)
```

### Parameters

A hexadecimal string encoding bytes to write into a Uint8Array. The string must:

- Have an even number of characters because two characters encode one byte.
- Only contain characters in the hexadecimal alphabet, which includes 0–9 and A–F (case-insensitive).
- Not contain whitespace (unlike Uint8Array.prototype.setFromBase64()).

Note that the string is only read up to the point where the array is filled, so any invalid hex syntax after that point is ignored.

### Return value

An object containing the following properties:

The number of hex characters read from the input string. If the decoded data fits into the array, it is the length of the input string: otherwise, it is the number of complete hex characters that fit into the array.

The number of bytes written to the Uint8Array. Will never be greater than this Uint8Array's byteLength.

### Exceptions

Thrown if the input string contains characters outside the hex alphabet, or its length is odd.

Thrown if the input string is not a string.

## Examples

### Decoding a hexadecimal string

This example decodes a hexadecimal string into an existing Uint8Array.

```
const uint8Array = new Uint8Array(8);
const result = uint8Array.setFromHex("cafed00d");
console.log(result); // { read: 8, written: 4 }
console.log(uint8Array); // Uint8Array(8) [202, 254, 208, 13, 0, 0, 0, 0]
```

### Decoding a big string into a small array

If the string contains more data than the array can hold, the method will only write as many bytes as the array can hold.

```
const uint8Array = new Uint8Array(4);
const result = uint8Array.setFromHex("cafed00d-some random stuff");
console.log(result); // { read: 8, written: 4 }
console.log(uint8Array); // Uint8Array(4) [202, 254, 208, 13]
```

Excess characters are ignored, even if they are invalid. However the total length of the input string must be even.

### Setting data at a specific offset

The setFromHex() method always starts writing at the beginning of the Uint8Array. If you want to write to the middle of the array, you can write to a TypedArray.prototype.subarray() instead.

```
const uint8Array = new Uint8Array(8);
// Start writing at offset 2
const result = uint8Array.subarray(2).setFromHex("cafed00d");
console.log(result); // { read: 8, written: 4 }
console.log(uint8Array);
// Uint8Array(8) [0, 0, 202, 254, 208, 13, 0, 0]
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Uint8Array.prototype.setFromHex in core-js
- es-shims polyfill of Uint8Array.prototype.setFromHex
- Uint8Array
- Uint8Array.fromHex()
- Uint8Array.prototype.toHex()
- parseInt()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/setFromHex
