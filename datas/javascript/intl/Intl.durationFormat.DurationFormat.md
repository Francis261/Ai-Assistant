# Intl.DurationFormat() constructor

Source: https://devdocs.io/javascript/global_objects/intl/durationformat/durationformat

The Intl.DurationFormat() constructor creates Intl.DurationFormat objects.

## Syntax

```
new Intl.DurationFormat()
new Intl.DurationFormat(locales)
new Intl.DurationFormat(locales, options)
```

Note: Intl.DurationFormat() can only be constructed with new. Attempting to call it without new throws a TypeError.

### Parameters

A string with a BCP 47 language tag or an Intl.Locale instance, or an array of such locale identifiers. The runtime's default locale is used when undefined is passed or when none of the specified locale identifiers is supported. For the general form and interpretation of the locales argument, see the parameter description on the Intl main page.

The following Unicode extension key is allowed:

See numberingSystem.

This key can also be set with options (as listed below). When both are set, the options property takes precedence.

An object containing the following properties, in the order they are retrieved (all of them are optional):

The locale matching algorithm to use. Possible values are "lookup" and "best fit"; the default is "best fit". For information about this option, see Locale identification and negotiation.

The numbering system to use for number formatting, such as "arab", "hans", "mathsans", and so on. For a list of supported numbering system types, see Intl.supportedValuesOf(); the default is locale dependent. This option can also be set through the nu Unicode extension key; if both are provided, this options property takes precedence.

The style of the formatted duration. This value is used as the default for all other unit options, and also corresponds to the style option of Intl.ListFormat() when concatenating the list of duration units. Possible values are:

E.g., 1 hour and 50 minutes

E.g., 1 hr, 50 min

E.g., 1h 50m

E.g., 1:50:00

The style of the formatted years. Possible values are "long", "short", and "narrow"; the default is options.style if it's not "digital", and "short" otherwise.

Whether to always display years, or only if nonzero. Possible values are "always" and "auto"; the default is "auto" if years is unspecified, and "always" otherwise.

The style of the formatted months. Possible values are "long", "short", and "narrow"; the default is options.style if it's not "digital", and "short" otherwise.

Whether to always display months, or only if nonzero. Possible values are "always" and "auto"; the default is "auto" if months is unspecified, and "always" otherwise.

The style of the formatted weeks. Possible values are "long", "short", and "narrow"; the default is options.style if it's not "digital", and "short" otherwise.

Whether to always display weeks, or only if nonzero. Possible values are "always" and "auto"; the default is "auto" if weeks is unspecified, and "always" otherwise.

The style of the formatted days. Possible values are "long", "short", and "narrow"; the default is options.style if it's not "digital", and "short" otherwise.

Whether to always display days, or only if nonzero. Possible values are "always" and "auto"; the default is "auto" if days is unspecified, and "always" otherwise.

The style of the formatted hours. Possible values are "long", "short", "narrow", "numeric", and "2-digit"; the default is options.style if it's not "digital", and "numeric" otherwise.

Whether to always display hours, or only if nonzero. Possible values are "always" and "auto"; the default is "auto" if hours is unspecified and options.style is not "digital", and "always" otherwise.

The style of the formatted minutes.

- If hours is "numeric" or "2-digit", possible values are "numeric" and "2-digit", and "numeric" is normalized to "2-digit"; the default is "numeric".
- Otherwise, possible values are "long", "short", "narrow", "numeric", and "2-digit"; the default is options.style if it's not "digital", and "numeric" otherwise.

Whether to always display minutes, or only if nonzero. Possible values are "always" and "auto"; the default is "auto" if minutes is unspecified and options.style is not "digital", and "always" otherwise.

The style of the formatted seconds.

- If minutes is "numeric" or "2-digit", possible values are "numeric" and "2-digit", and "numeric" is normalized to "2-digit"; the default is "numeric".
- Otherwise, possible values are "long", "short", "narrow", "numeric", and "2-digit"; the default is options.style if it's not "digital", and "numeric" otherwise.

Whether to always display seconds, or only if nonzero. Possible values are "always" and "auto"; the default is "auto" if seconds is unspecified and options.style is not "digital", and "always" otherwise.

The style of the formatted milliseconds.

- If seconds is "numeric" or "2-digit", the only possible value is "numeric"; the default is "numeric".
- Otherwise, possible values are "long", "short", "narrow", and "numeric"; the default is options.style if it's not "digital", and "numeric" otherwise.

Whether to always display milliseconds, or only if nonzero.

- If seconds is "numeric" or "2-digit", the only possible value is "auto"; the default is only "auto" when milliseconds is unspecified.
- Otherwise, possible values are "always" and "auto"; the default is "auto" if milliseconds is unspecified, and "always" otherwise.

The style of the formatted microseconds.

- If milliseconds is "numeric", the only possible value is "numeric"; the default is "numeric".
- Otherwise, possible values are "long", "short", "narrow", and "numeric"; the default is options.style if it's not "digital", and "numeric" otherwise.

Whether to always display microseconds, or only if nonzero.

- If milliseconds is "numeric", the only possible value is "auto"; the default is only "auto" when microseconds is unspecified.
- Otherwise, possible values are "always" and "auto"; the default is "auto" if microseconds is unspecified, and "always" otherwise.

The style of the formatted nanoseconds.

- If microseconds is "numeric", the only possible value is "numeric"; the default is "numeric".
- Otherwise, possible values are "long", "short", "narrow", and "numeric"; the default is options.style if it's not "digital", and "numeric" otherwise.

Whether to always display nanoseconds, or only if nonzero.

- If microseconds is "numeric", the only possible value is "auto"; the default is only "auto" when nanoseconds is unspecified.
- Otherwise, possible values are "always" and "auto"; the default is "auto" if nanoseconds is unspecified, and "always" otherwise.

Number of how many fractional second digits to display in the output. Possible values are from 0 to 9; the default is undefined (include as many fractional digits as necessary).

### Exceptions

Thrown if locales or options contain invalid values.

## Description

For each time segment, an Intl.NumberFormat object is constructed under the hood. It uses the following options (see Intl.NumberFormat() for details):

- numberingSystem: the value of options.numberingSystem

When milliseconds, microseconds, or nanoseconds uses the "numeric" style, the following options are also used:

- minimumFractionDigits: 0 when options.fractionalDigits is undefined, options.fractionalDigits otherwise
- maximumFractionDigits: 9 when options.fractionalDigits is undefined, options.fractionalDigits otherwise
- roundingMode: "trunc"

When the time segment uses the "2-digit" style, the following options are also used:

- minimumIntegerDigits: 2

When the time segment uses the "long", "short", or "narrow" style, the following options are also used:

- style: "unit" when "long", "short", or "narrow" is specified, undefined otherwise
- unit: the currently formatted unit ("years", "days", "nanoseconds", etc.)
- unitDisplay: the value of the time segment style ("long", "short", or "narrow")

## Examples

### Using the Intl.DurationFormat() constructor

```
const duration = {
  hours: 2,
  minutes: 20,
  seconds: 35,
};

console.log(new Intl.DurationFormat("pt", { style: "long" }).format(duration));
// "2 horas, 20 minutos e 35 segundos"
```

## Specifications

## Browser compatibility

## See also

- Intl.DurationFormat
- Intl.supportedValuesOf()
- Intl

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DurationFormat/DurationFormat
