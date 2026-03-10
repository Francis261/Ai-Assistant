# Intl.DisplayNames.prototype.resolvedOptions()

Source: https://devdocs.io/javascript/global_objects/intl/displaynames/resolvedoptions

The resolvedOptions() method of Intl.DisplayNames instances returns a new object with properties reflecting the options computed during initialization of this DisplayNames object.

## Syntax

```
resolvedOptions()
```

### Parameters

None.

### Return value

A new object with properties reflecting the options computed during the initialization of this DisplayNames object. The object has the following properties, in the order they are listed:

The BCP 47 language tag for the locale actually used, determined by the locale negotiation process. No Unicode extension key will be included in the output.

The value provided for this property in the options argument, with default filled in as needed. It is either "narrow", "short", or "long". The default is "long".

The value provided for this property in the options argument. It is either "language", "region", "script", "currency", "calendar", or "dateTimeField". It is required so there is no default.

The value provided for this property in the options argument. It is either "code" or "none". The default is "code".

The value provided for this property in the options argument. It is either "dialect" or "standard". The default is "dialect".

## Examples

### Using resolvedOptions

```
const displayNames = new Intl.DisplayNames(["de-DE"], { type: "region" });

const usedOptions = displayNames.resolvedOptions();
console.log(usedOptions.locale); // "de-DE"
console.log(usedOptions.style); // "long"
console.log(usedOptions.type); // "region"
console.log(usedOptions.fallback); // "code"
```

```
const displayNames = new Intl.DisplayNames("en", {
  type: "language",
  languageDisplay: "standard",
});

const usedOptions = displayNames.resolvedOptions();
console.log(usedOptions.type); // "language"
console.log(usedOptions.languageDisplay); // "standard"
```

## Specifications

## Browser compatibility

## See also

- Intl.DisplayNames

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/resolvedOptions
