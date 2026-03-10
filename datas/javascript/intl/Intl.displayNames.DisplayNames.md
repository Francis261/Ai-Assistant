# Intl.DisplayNames() constructor

Source: https://devdocs.io/javascript/global_objects/intl/displaynames/displaynames

The Intl.DisplayNames() constructor creates Intl.DisplayNames objects.

## Try it

```
const regionNamesInEnglish = new Intl.DisplayNames(["en"], { type: "region" });
const regionNamesInTraditionalChinese = new Intl.DisplayNames(["zh-Hant"], {
  type: "region",
});

console.log(regionNamesInEnglish.of("US"));
// Expected output: "United States"

console.log(regionNamesInTraditionalChinese.of("US"));
// Expected output: "美國"
```

## Syntax

```
new Intl.DisplayNames(locales, options)
```

Note: Intl.DisplayNames() can only be constructed with new. Attempting to call it without new throws a TypeError.

### Parameters

A string with a BCP 47 language tag or an Intl.Locale instance, or an array of such locale identifiers. The runtime's default locale is used when undefined is passed or when none of the specified locale identifiers is supported. For the general form and interpretation of the locales argument, see the parameter description on the Intl main page.

An object containing the following properties, in the order they are retrieved:

The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit". For information about this option, see Locale identification and negotiation.

The formatting style to use. Possible values are "narrow", "short", and "long"; the default is "long".

The type of display names to return from of(). Possible values are "language", "region", "script", "currency", "calendar", and "dateTimeField".

What to return from of() if the input is structurally valid but there's no matching display name. Possible values are:

Return the input code itself.

Return undefined.

How language names should be displayed. Only usable along with type: "language". Possible values are:

Display special regional dialects using their own name. E.g. "nl-BE" will be displayed as "Flemish".

Display all languages using standard format. E.g. "nl-BE" will be displayed as "Dutch (Belgium)".

### Exceptions

Thrown if options.type is not provided.

Thrown if locales or options contain invalid values.

## Examples

### Basic usage

In basic use without specifying a locale, a formatted string in the default locale and with default options is returned.

```
console.log(new Intl.DisplayNames([], { type: "language" }).of("US"));
// 'us'
```

### Using type dateTimeField

Example using dateTimeField as a type option, will return the localized date time names strings.

```
const dn = new Intl.DisplayNames("pt", { type: "dateTimeField" });
console.log(dn.of("era")); // 'era'
console.log(dn.of("year")); // 'ano'
console.log(dn.of("month")); // 'mês'
console.log(dn.of("quarter")); // 'trimestre'
console.log(dn.of("weekOfYear")); // 'semana'
console.log(dn.of("weekday")); // 'dia da semana'
console.log(dn.of("dayPeriod")); // 'AM/PM'
console.log(dn.of("day")); // 'dia'
console.log(dn.of("hour")); // 'hora'
console.log(dn.of("minute")); // 'minuto'
console.log(dn.of("second")); // 'segundo'
```

### Using type calendar

Example using calendar as a type option, will return the localized calendar names strings.

```
const dn = new Intl.DisplayNames("en", { type: "calendar" });
console.log(dn.of("roc")); // 'Minguo Calendar'
console.log(dn.of("gregory")); // 'Gregorian Calendar'
console.log(dn.of("chinese")); // 'Chinese Calendar'
```

### Using type language with languageDisplay

Example using language as a type with languageDisplay options.

```
// Using `dialect` option
const dnDialect = new Intl.DisplayNames("en", {
  type: "language",
  languageDisplay: "dialect",
});
console.log(dnDialect.of("en-GB")); // 'British English'

// Using `standard` option
const dnStd = new Intl.DisplayNames("en", {
  type: "language",
  languageDisplay: "standard",
});
console.log(dnStd.of("en-GB")); // 'English (United Kingdom)'
```

## Specifications

## Browser compatibility

## See also

- Intl.DisplayNames
- Intl.supportedValuesOf()
- Intl

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames
