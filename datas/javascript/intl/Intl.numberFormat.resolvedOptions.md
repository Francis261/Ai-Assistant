# Intl.NumberFormat.prototype.resolvedOptions()

Source: https://devdocs.io/javascript/global_objects/intl/numberformat/resolvedoptions

The resolvedOptions() method of Intl.NumberFormat instances returns a new object with properties reflecting the options computed during initialization of this NumberFormat object.

## Try it

```
const numberFormat = new Intl.NumberFormat("de-DE");
const options = numberFormat.resolvedOptions();

console.log(options.locale);
// Expected output: "de-DE"

console.log(options.numberingSystem);
// Expected output: "latn"

console.log(options.style);
// Expected output: "decimal"
```

## Syntax

```
resolvedOptions()
```

### Parameters

None.

### Return value

A new object with properties reflecting the options computed during the initialization of this NumberFormat object. The object has the following properties, in the order they are listed:

The BCP 47 language tag for the locale actually used, determined by the locale negotiation process. Only the nu Unicode extension key, if requested, may be included in the output.

The value provided for this property in the options argument, or using the Unicode extension key "nu", with default filled in as needed. It is a supported numbering system for this locale. The default is locale dependent.

The value provided for this property in the options argument, with default filled in as needed. It is either "decimal", "percent", "currency", or "unit". The default is "decimal".

The value provided for this property in the options argument. It is only present if style is "currency". It is an ISO 4217 currency code; see Intl.supportedValuesOf(). It is required if style is "currency" so there is no default.

The value provided for this property in the options argument, with default filled in as needed. It is only present if style is "currency". It is either "code", "symbol", "narrowSymbol", or "name". The default is "symbol".

The value provided for this property in the options argument, with default filled in as needed. It is only present if style is "currency". It is either "standard" or "accounting". The default is "standard".

The value provided for this property in the options argument. It is only present if style is "unit". It is a sanctioned unit identifier from the full CLDR list. It is required if style is "unit" so there is no default.

The value provided for this property in the options argument, with default filled in as needed. It is only present if style is "unit". It is either "short", "narrow", or "long". The default is "short".

The value provided for this property in the options argument, with default filled in as needed. It is an integer between 1 and 21. The default is 1.

The value provided for these properties in the options argument, with defaults filled in as needed. They are only present if necessary; see digit options. It is an integer between 0 and 100.

The value provided for these properties in the options argument, with defaults filled in as needed. They are only present if necessary; see digit options. It is an integer between 1 and 21.

The value provided for this property in the options argument, with default filled in as needed, and with some values normalized. It is either "always", "auto", "min2", or the boolean false. The default is "min2" if notation is "compact", and "auto" otherwise.

The value provided for this property in the options argument, with default filled in as needed. It is either "standard", "scientific", "engineering", or "compact". The default is "standard".

The value provided for this property in the options argument, with default filled in as needed. It is only present if notation is "compact". It is either "short" or "long". The default is "short".

The value provided for this property in the options argument, with default filled in as needed. It is either "auto", "always", "exceptZero", "negative", or "never". The default is "auto".

The value provided for this property in the options argument, with default filled in as needed. It is one of 1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 2500, and 5000. The default is 1.

The value provided for this property in the options argument, with default filled in as needed. It is one of "ceil", "floor", "expand", "trunc", "halfCeil", "halfFloor", "halfExpand", "halfTrunc", and "halfEven". The default is "halfExpand".

The value provided for this property in the options argument, with default filled in as needed. It is either "auto", "morePrecision", or "lessPrecision". The default is "auto".

The value provided for this property in the options argument, with default filled in as needed. It is either "auto" or "stripIfInteger". The default is "auto".

## Examples

### Using the resolvedOptions method

```
// Create a NumberFormat
const de = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2,
  roundingIncrement: 5,
  roundingMode: "halfCeil",
});

// Resolve the options
const usedOptions = de.resolvedOptions();
console.log(usedOptions.locale); // "de-DE"
console.log(usedOptions.numberingSystem); // "latn"
console.log(usedOptions.compactDisplay); // undefined ("notation" not set to "compact")
console.log(usedOptions.currency); // "USD"
console.log(usedOptions.currencyDisplay); // "symbol"
console.log(usedOptions.currencySign); // "standard"
console.log(usedOptions.minimumIntegerDigits); // 1
console.log(usedOptions.minimumFractionDigits); // 2
console.log(usedOptions.maximumFractionDigits); // 2
console.log(usedOptions.minimumSignificantDigits); // undefined (maximumFractionDigits is set)
console.log(usedOptions.maximumSignificantDigits); // undefined (maximumFractionDigits is set)
console.log(usedOptions.notation); // "standard"
console.log(usedOptions.roundingIncrement); // 5
console.log(usedOptions.roundingMode); // halfCeil
console.log(usedOptions.roundingPriority); // auto
console.log(usedOptions.signDisplay); // "auto"
console.log(usedOptions.style); // "currency"
console.log(usedOptions.trailingZeroDisplay); // auto
console.log(usedOptions.useGrouping); // auto
```

## Specifications

## Browser compatibility

## See also

- Intl.NumberFormat

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/resolvedOptions
