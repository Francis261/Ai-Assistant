# Intl.DisplayNames.supportedLocalesOf()

Source: https://devdocs.io/javascript/global_objects/intl/displaynames/supportedlocalesof

The Intl.DisplayNames.supportedLocalesOf() static method returns an array containing those of the provided locales that are supported in display names without having to fall back to the runtime's default locale.

## Syntax

```
Intl.DisplayNames.supportedLocalesOf(locales)
Intl.DisplayNames.supportedLocalesOf(locales, options)
```

### Parameters

A string with a BCP 47 language tag, or an array of such strings. For the general form and interpretation of the locales argument, see the parameter description on the Intl main page.

An object that may have the following property:

The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit". For information about this option, see the Intl page.

### Return value

An array of strings representing a subset of the given locale tags that are supported in display names without having to fall back to the runtime's default locale.

## Examples

### Using supportedLocalesOf()

Assuming a runtime that supports Indonesian and German but not Balinese in display names, supportedLocalesOf returns the Indonesian and German language tags unchanged, even though pinyin collation is neither relevant to display names nor used with Indonesian, and a specialized German for Indonesia is unlikely to be supported. Note the specification of the "lookup" algorithm here — a "best fit" matcher might decide that Indonesian is an adequate match for Balinese since most Balinese speakers also understand Indonesian, and therefore return the Balinese language tag as well.

```
const locales = ["ban", "id-u-co-pinyin", "de-ID"];
const options = { localeMatcher: "lookup" };
console.log(Intl.DisplayNames.supportedLocalesOf(locales, options));
// ["id-u-co-pinyin", "de-ID"]
```

## Specifications

## Browser compatibility

## See also

- Intl.DisplayNames

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/supportedLocalesOf
