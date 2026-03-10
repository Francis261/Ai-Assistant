# Intl.Collator.prototype.resolvedOptions()

Source: https://devdocs.io/javascript/global_objects/intl/collator/resolvedoptions

The resolvedOptions() method of Intl.Collator instances returns a new object with properties reflecting the options computed during initialization of this Collator object.

## Try it

```
const numberDe = new Intl.NumberFormat("de-DE");
const numberAr = new Intl.NumberFormat("ar");

console.log(numberDe.resolvedOptions().numberingSystem);
// Expected output: "latn"

console.log(numberAr.resolvedOptions().numberingSystem);
// Expected output: "arab"
```

## Syntax

```
resolvedOptions()
```

### Parameters

None.

### Return value

A new object with properties reflecting the options computed during the initialization of this Collator object. The object has the following properties, in the order they are listed:

The BCP 47 language tag for the locale actually used, determined by the locale negotiation process. Only the co, kn, and kf Unicode extension keys, if requested and supported, may be included in the output.

The value provided for this property in the options argument, with default filled in as needed. It is either "sort" or "search". The default is "sort".

The value provided for this property in the options argument, with default filled in as needed. It is either "base", "accent", "case", or "variant". The default is "variant" for usage "sort"; it's locale dependent for usage "search".

The value provided for this property in the options argument, with default filled in as needed. It is a boolean. The default is true for Thai (th) and false for all other languages.

The value provided for this property in the options argument, or using the Unicode extension key "co", with default filled in as needed. It is a supported collation type for this locale. The default is "default".

The value provided for this property in the options argument, or using the Unicode extension key "kn", with default filled in as needed. It is a boolean. The default is false. If the implementation does not support this Unicode extension key, this property is omitted.

The value provided for this property in the options argument, or using the Unicode extension key "kf", with default filled in as needed. It is either "upper", "lower", or "false". The default is "false". If the implementation does not support this Unicode extension key, this property is omitted.

## Examples

### Using the resolvedOptions method

```
const de = new Intl.Collator("de", { sensitivity: "base" });
const usedOptions = de.resolvedOptions();

usedOptions.locale; // "de"
usedOptions.usage; // "sort"
usedOptions.sensitivity; // "base"
usedOptions.ignorePunctuation; // false
usedOptions.collation; // "default"
usedOptions.numeric; // false
```

## Specifications

## Browser compatibility

## See also

- Intl.Collator

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/resolvedOptions
