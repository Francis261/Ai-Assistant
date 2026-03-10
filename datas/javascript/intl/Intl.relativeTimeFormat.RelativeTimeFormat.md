# Intl.RelativeTimeFormat() constructor

Source: https://devdocs.io/javascript/global_objects/intl/relativetimeformat/relativetimeformat

The Intl.RelativeTimeFormat() constructor creates Intl.RelativeTimeFormat objects.

## Syntax

```
new Intl.RelativeTimeFormat()
new Intl.RelativeTimeFormat(locales)
new Intl.RelativeTimeFormat(locales, options)
```

Note: Intl.RelativeTimeFormat() can only be constructed with new. Attempting to call it without new throws a TypeError.

### Parameters

A string with a BCP 47 language tag or an Intl.Locale instance, or an array of such locale identifiers. The runtime's default locale is used when undefined is passed or when none of the specified locale identifiers is supported. For the general form and interpretation of the locales argument, see the parameter description on the Intl main page.

The following Unicode extension key is allowed:

See numberingSystem.

This key can also be set with options (as listed below). When both are set, the options property takes precedence.

An object containing the following properties, in the order they are retrieved (all of them are optional):

The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit". For information about this option, see Locale identification and negotiation.

The numbering system to use for number formatting, such as "arab", "hans", "mathsans", and so on. For a list of supported numbering system types, see Intl.supportedValuesOf(); the default is locale dependent. This option can also be set through the nu Unicode extension key; if both are provided, this options property takes precedence.

The style of the formatted relative time. Possible values are:

E.g., "in 1 month"

E.g., "in 1 mo."

E.g., "in 1 mo.". The narrow style could be similar to the short style for some locales.

Whether to use numeric values in the output. Possible values are "always" and "auto"; the default is "always". When set to "auto", the output may use more idiomatic phrasing such as "yesterday" instead of "1 day ago".

### Exceptions

Thrown if locales or options contain invalid values.

## Examples

### Basic format usage

The following example shows how to create a relative time formatter using the English language.

```
// Create a relative time formatter in your locale
// with default values explicitly passed in.
const rtf = new Intl.RelativeTimeFormat("en-US", {
  numeric: "always", // other values: "auto"
  style: "long", // other values: "short" or "narrow"
});

// Format relative time using negative value (-1).
rtf.format(-1, "day"); // "1 day ago"

// Format relative time using positive value (1).
rtf.format(1, "day"); // "in 1 day"
```

### Using the auto option

If the numeric: "auto" option is passed, it will produce the string yesterday or tomorrow instead of 1 day ago or in 1 day. This is useful when you don't want to use numeric values in the output.

```
// Create a relative time formatter in your locale
// with numeric: "auto" option value passed in.
const rtf = new Intl.RelativeTimeFormat("en-US", { numeric: "auto" });

// Format relative time using negative value (-1).
rtf.format(-1, "day"); // "yesterday"

// Format relative time using positive day unit (1).
rtf.format(1, "day"); // "tomorrow"
```

When the value is 0, the output may be dependent on the unit. "0 seconds" is represented by the localized version of "now".

```
rtf.format(0, "second"); // "now"
rtf.format(0, "day"); // "today"
rtf.format(0, "minute"); // "this minute"
```

## Specifications

## Browser compatibility

## See also

- Intl.RelativeTimeFormat
- Intl
- Intl.RelativeTimeFormat on v8.dev (2018)

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat
