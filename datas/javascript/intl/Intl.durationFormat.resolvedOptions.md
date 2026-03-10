# Intl.DurationFormat.prototype.resolvedOptions()

Source: https://devdocs.io/javascript/global_objects/intl/durationformat/resolvedoptions

The resolvedOptions() method of Intl.DurationFormat instances returns a new object with properties reflecting the options computed during initialization of this DurationFormat object.

## Syntax

```
resolvedOptions()
```

### Parameters

None.

### Return value

A new object with properties reflecting the options computed during the initialization of this DurationFormat object. The object has the following properties, in the order they are listed:

The BCP 47 language tag for the locale actually used, determined by the locale negotiation process. Only the nu Unicode extension key, if requested, may be included in the output.

The value provided for this property in the options argument, or using the Unicode extension key "nu", with default filled in as needed. It is a supported numbering system for this locale. The default is locale dependent.

The value provided for this property in the options argument, with default filled in as needed. It is either "long", "short", "narrow", or "digital". The default is "short".

The values provided for these properties in the options argument, with defaults filled in as needed. For the valid values and defaults for each, see the options argument of the constructor.

The value provided for this property in the options argument. It is only present if specified in options. It is an integer from 0 to 9, inclusive.

## Examples

### Using the resolvedOptions method

```
const duration = new Intl.DurationFormat("en");
const usedOptions = duration.resolvedOptions();

usedOptions.locale; // "en"
usedOptions.numberingSystem; // "latn"
usedOptions.years; // "long"
usedOptions.yearsDisplay; // "auto"
usedOptions.style; // "long"
```

## Specifications

## Browser compatibility

## See also

- Intl.DurationFormat
- Intl.supportedValuesOf()
- Intl

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/resolvedOptions
