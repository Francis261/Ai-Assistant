# String.prototype.toLocaleLowerCase()

Source: https://devdocs.io/javascript/global_objects/string/tolocalelowercase

The toLocaleLowerCase() method of String values returns this string converted to lower case, according to any locale-specific case mappings.

## Try it

```
const dotted = "İstanbul";

console.log(`EN-US: ${dotted.toLocaleLowerCase("en-US")}`);
// Expected output: "i̇stanbul"

console.log(`TR: ${dotted.toLocaleLowerCase("tr")}`);
// Expected output: "istanbul"
```

## Syntax

```
toLocaleLowerCase()
toLocaleLowerCase(locales)
```

### Parameters

A string with a BCP 47 language tag, or an array of such strings. Indicates the locale to be used to convert to lower case according to any locale-specific case mappings. For the general form and interpretation of the locales argument, see the parameter description on the Intl main page.

Unlike other methods that use the locales argument, toLocaleLowerCase() does not allow locale matching. Therefore, after checking the validity of the locales argument, toLocaleLowerCase() always uses the first locale in the list (or the default locale if the list is empty), even if this locale is not supported by the implementation.

### Return value

A new string representing the calling string converted to lower case, according to any locale-specific case mappings.

## Description

The toLocaleLowerCase() method returns the value of the string converted to lower case according to any locale-specific case mappings. toLocaleLowerCase() does not affect the value of the string itself. In most cases, this will produce the same result as toLowerCase(), but for some locales, such as Turkish, whose case mappings do not follow the default case mappings in Unicode, there may be a different result.

## Examples

### Using toLocaleLowerCase()

```
"ALPHABET".toLocaleLowerCase(); // 'alphabet'

"\u0130".toLocaleLowerCase("tr") === "i"; // true
"\u0130".toLocaleLowerCase("en-US") === "i"; // false

const locales = ["tr", "TR", "tr-TR", "tr-u-co-search", "tr-x-turkish"];
"\u0130".toLocaleLowerCase(locales) === "i"; // true
```

## Specifications

## Browser compatibility

## See also

- String.prototype.toLocaleUpperCase()
- String.prototype.toLowerCase()
- String.prototype.toUpperCase()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase
