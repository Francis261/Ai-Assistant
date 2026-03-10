# Uint8Array.prototype.toHex()

Source: https://devdocs.io/javascript/global_objects/uint8array/tohex

The toHex() method of Uint8Array instances returns a hex-encoded string based on the data in this Uint8Array object.

This method creates strings from a byte array. To convert individual numbers into hex, use the Number.prototype.toString() method with radix set to 16 instead.

## Syntax

```
toHex()
```

### Parameters

None.

### Return value

A hex-encoded string representing the data in the Uint8Array.

## Examples

### Encoding binary data

This example encodes data from a Uint8Array into a hex string.

```
const uint8Array = new Uint8Array([202, 254, 208, 13]);
console.log(uint8Array.toHex()); // "cafed00d"

const data = new Uint8Array([255, 0, 0, 0, 255, 0, 0, 0, 255]);
for (let i = 0; i < data.length; i += 3) {
  console.log(data.slice(i, i + 3).toHex());
}
// "ff0000"
// "00ff00"
// "0000ff"
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Uint8Array.prototype.toHex in core-js
- es-shims polyfill of Uint8Array.prototype.toHex
- Uint8Array
- Uint8Array.fromHex()
- Uint8Array.prototype.setFromHex()
- Number.prototype.toString()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array/toHex
