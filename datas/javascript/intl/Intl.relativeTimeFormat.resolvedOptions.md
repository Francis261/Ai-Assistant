# Intl.RelativeTimeFormat.prototype.resolvedOptions()

Source: https://devdocs.io/javascript/global_objects/intl/relativetimeformat/resolvedoptions

The resolvedOptions() method of Intl.RelativeTimeFormat instances returns a new object with properties reflecting the options computed during initialization of this RelativeTimeFormat object.

## Try it

```
const rtf1 = new Intl.RelativeTimeFormat("en", { style: "narrow" });
const options1 = rtf1.resolvedOptions();

const rtf2 = new Intl.RelativeTimeFormat("es", { numeric: "auto" });
const options2 = rtf2.resolvedOptions();

console.log(`${options1.locale}, ${options1.style}, ${options1.numeric}`);
// Expected output: "en, narrow, always"

console.log(`${options2.locale}, ${options2.style}, ${options2.numeric}`);
// Expected output: "es, long, auto"
```

## Syntax

```
resolvedOptions()
```

### Parameters

None.

### Return value

A new object with properties reflecting the options computed during the initialization of this RelativeTimeFormat object. The object has the following properties, in the order they are listed:

The BCP 47 language tag for the locale actually used, determined by the locale negotiation process. Only the nu Unicode extension key, if requested, may be included in the output.

The value provided for this property in the options argument, with default filled in as needed. It is either "long", "short", or "narrow". The default is "long".

The value provided for this property in the options argument, with default filled in as needed. It is either "always" or "auto". The default is "always".

The value provided for this property in the options argument, or using the Unicode extension key "nu", with default filled in as needed. It is a supported numbering system for this locale. The default is locale dependent.

## Examples

### Using the resolvedOptions() method

```
const de = new Intl.RelativeTimeFormat("de-DE");
const usedOptions = de.resolvedOptions();

usedOptions.locale; // "de-DE"
usedOptions.style; // "long"
usedOptions.numeric; // "always"
usedOptions.numberingSystem; // "latn"
```

## Specifications

## Browser compatibility

## See also

- Intl.RelativeTimeFormat

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions
