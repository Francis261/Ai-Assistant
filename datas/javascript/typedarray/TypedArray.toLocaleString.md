# TypedArray.prototype.toLocaleString()

Source: https://devdocs.io/javascript/global_objects/typedarray/tolocalestring

The toLocaleString() method of TypedArray instances returns a string representing the elements of the typed array. The elements are converted to strings using their toLocaleString methods and these strings are separated by a locale-specific string (such as a comma ","). This method has the same algorithm as Array.prototype.toLocaleString().

## Try it

```
const uint8 = new Uint32Array([500, 8123, 12]);

console.log(uint8.toLocaleString());
// Expected output: "500,8123,12"

console.log(uint8.toLocaleString("en-GB"));
// Expected output: "500,8,123,12"

console.log(
  uint8.toLocaleString("de-DE", { style: "currency", currency: "EUR" }),
);
// Expected output: "500,00 €,8.123,00 €,12,00 €"
```

## Syntax

```
toLocaleString()
toLocaleString(locales)
toLocaleString(locales, options)
```

### Parameters

A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the locales argument, see the parameter description on the Intl main page.

An object with configuration properties. See Number.prototype.toLocaleString().

### Return value

A string representing the elements of the typed array.

## Description

See Array.prototype.toLocaleString() for more details. This method is not generic and can only be called on typed array instances.

## Examples

### Using toLocaleString()

```
const uint = new Uint32Array([2000, 500, 8123, 12, 4212]);

uint.toLocaleString();
// if run in a de-DE locale
// "2.000,500,8.123,12,4.212"

uint.toLocaleString("en-US");
// "2,000,500,8,123,12,4,212"

uint.toLocaleString("ja-JP", { style: "currency", currency: "JPY" });
// "￥2,000,￥500,￥8,123,￥12,￥4,212"
```

## Specifications

## Browser compatibility

## See also

- JavaScript typed arrays guide
- TypedArray
- TypedArray.prototype.toString()
- Array.prototype.toLocaleString()
- Intl
- Intl.ListFormat
- Number.prototype.toLocaleString()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/toLocaleString
