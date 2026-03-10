# Intl.ListFormat.prototype.resolvedOptions()

Source: https://devdocs.io/javascript/global_objects/intl/listformat/resolvedoptions

The resolvedOptions() method of Intl.ListFormat instances returns a new object with properties reflecting the options computed during initialization of this ListFormat object.

## Try it

```
const deListFormatter = new Intl.ListFormat("de-DE", { type: "disjunction" });
const options = deListFormatter.resolvedOptions();

console.log(options.locale);
// Expected output: "de-DE"

console.log(options.style);
// Expected output: "long"

console.log(options.type);
// Expected output: "disjunction"
```

## Syntax

```
resolvedOptions()
```

### Parameters

None.

### Return value

A new object with properties reflecting the options computed during the initialization of this ListFormat object. The object has the following properties, in the order they are listed:

The BCP 47 language tag for the locale actually used, determined by the locale negotiation process. No Unicode extension key will be included in the output.

The value provided for this property in the options argument, with default filled in as needed. It is either "conjunction", "disjunction", or "unit". The default is "conjunction".

The value provided for this property in the options argument, with default filled in as needed. It is either "long", "short", or "narrow". The default is "long".

## Examples

### Using resolvedOptions

```
const deListFormatter = new Intl.ListFormat("de-DE", { style: "short" });

const usedOptions = de.resolvedOptions();
console.log(usedOptions.locale); // "de-DE"
console.log(usedOptions.style); // "short"
console.log(usedOptions.type); // "conjunction" (the default value)
```

## Specifications

## Browser compatibility

## See also

- Intl.ListFormat
- Intl.NumberFormat.prototype.resolvedOptions()
- Intl.Collator.prototype.resolvedOptions()
- Intl.DateTimeFormat.prototype.resolvedOptions()
- Intl.PluralRules.prototype.resolvedOptions()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/resolvedOptions
