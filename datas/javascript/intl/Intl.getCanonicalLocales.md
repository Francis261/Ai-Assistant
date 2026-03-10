# Intl.getCanonicalLocales()

Source: https://devdocs.io/javascript/global_objects/intl/getcanonicallocales

The Intl.getCanonicalLocales() static method returns an array containing the canonical locale names. Duplicates will be omitted and elements will be validated as structurally valid language tags.

## Try it

```
console.log(Intl.getCanonicalLocales("EN-US"));
// Expected output: Array ["en-US"]

console.log(Intl.getCanonicalLocales(["EN-US", "Fr"]));
// Expected output: Array ["en-US", "fr"]

try {
  Intl.getCanonicalLocales("EN_US");
} catch (err) {
  console.log(err.toString());
  // Expected output: RangeError: invalid language tag: "EN_US"
}
```

## Syntax

```
Intl.getCanonicalLocales(locales)
```

### Parameters

A list of String values for which to get the canonical locale names.

### Return value

An array containing the canonical locale names.

## Examples

### Using getCanonicalLocales

```
Intl.getCanonicalLocales("EN-US"); // ["en-US"]
Intl.getCanonicalLocales(["EN-US", "Fr"]); // ["en-US", "fr"]

Intl.getCanonicalLocales("EN_US");
// RangeError: invalid language tag: "EN_US"
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Intl.getCanonicalLocales in FormatJS
- Intl.NumberFormat.supportedLocalesOf()
- Intl.DateTimeFormat.supportedLocalesOf()
- Intl.Collator.supportedLocalesOf()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales
