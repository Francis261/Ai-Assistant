# Intl.supportedValuesOf()

Source: https://devdocs.io/javascript/global_objects/intl/supportedvaluesof

The Intl.supportedValuesOf() static method returns an array containing the supported calendar, collation, currency, numbering systems, or unit values supported by the implementation.

Duplicates are omitted and the array is sorted in ascending lexicographical order (or more precisely, using Array.prototype.sort() with an undefined compare function).

The method can be used to feature-test whether values are supported in a particular implementation and download a polyfill only if necessary. It can also be used to build UIs that allow users to select their preferred localized values, for example when the UI is created from WebGL or server-side.

This method is locale-unaware: it is possible that certain identifiers are only supported or preferred in certain locales. If you want to determine the preferred values for a specific locale, you should use the Intl.Locale object, such as Intl.Locale.prototype.getCalendars().

## Try it

```
console.log(Intl.supportedValuesOf("calendar"));
console.log(Intl.supportedValuesOf("collation"));
console.log(Intl.supportedValuesOf("currency"));
console.log(Intl.supportedValuesOf("numberingSystem"));
console.log(Intl.supportedValuesOf("timeZone"));
console.log(Intl.supportedValuesOf("unit"));
// Expected output: Array ['key'] (for each key)

try {
  Intl.supportedValuesOf("someInvalidKey");
} catch (err) {
  console.log(err.toString());
  // Expected output: RangeError: invalid key: "someInvalidKey"
}
```

## Syntax

```
Intl.supportedValuesOf(key)
```

### Parameters

A key string indicating the category of values to be returned. This is one of:

- "calendar": see supported calendar types
- "collation": see supported collation types
- "currency": see supported currency identifiers
- "numberingSystem": see supported numbering system types
- "timeZone": see supported time zone identifiers
- "unit": see supported unit identifiers

### Return value

A sorted array of unique string values indicating the values supported by the implementation for the given key. The values that could be returned are listed below.

#### Supported calendar types

Below are all values that are commonly supported by browsers for the calendar key. These values can be used for the calendar option or the ca Unicode extension key when creating objects such as Intl.DateTimeFormat, as well as for creating Temporal date objects.

As of October 2025, in the japanese calendar, dates prior to 1868-10-23 ISO (the start date of the year 1 Meiji) don't work as expected in browsers in two ways. First, CLDR had the wrong start date for the Meiji era, which causes calendar implementations to extend the Meiji era further to the past than it actually did. Second, the upcoming Intl era and monthCode Proposal specifies that dates prior to the Meiji era should use Gregorian eras, but browsers have traditionally used approximations of prior Japanese eras instead. The japanese calendar was taken into use on January 1, 6 Meiji / 1873-01-01 ISO, so these problems only affect proleptic dates.

The types below are specified in CLDR but do not have implementations distinct from the above calendars in browsers.

References:

- CLDR Calendar type keys
- UTS 35, Dates
- Islamic calendar types (CLDR design proposal)

#### Supported collation types

Below are all values that are commonly supported by browsers for the collation key. These values can be used for the collation option or the co Unicode extension key when creating objects such as Intl.Collator.

The types below are specified in CLDR data, but are deprecated, are discouraged from explicit usage, and/or may not be indicated by browsers as supported for various reasons. Avoid using them:

References:

- CLDR Collation type keys
- UTS 35, Collation

#### Supported currency identifiers

Currency identifiers are three-letter uppercase codes defined in ISO 4217. These values can be used for the currency option when creating objects such as Intl.NumberFormat, as well as for Intl.DisplayNames.prototype.of(). There are over 300 identifiers in common use so we won't list them. For an exhaustive list of possible identifiers, see the Wikipedia article.

References:

- CLDR Currency type keys
- ISO 4217 Currency codes
- UTS 35, Currencies

#### Supported numbering system types

Below are all values that are commonly supported by browsers for the numberingSystem key. These values can be used for the numberingSystem option or the nu Unicode extension key when creating objects such as Intl.NumberFormat. For the rows with "digit characters", the runtime translates the digits one-by-one without extra actions. The others marked as "algorithmic" need additional algorithms to translate the digits. The higher the Unicode code point is, the newer the numbering system is and the more likely it is unsupported by all browsers.

There are three special values: native, traditio, and finance, whose meanings are locale-dependent, and will be resolved to the right system depending on the locale. Therefore, the resolvedOptions() methods will never return these values, but Intl.Locale.prototype.numberingSystem will (if provided as input).

References:

- CLDR Numbering system type keys
- CLDR Numbering system definitions
- UTS 35, Numbering systems

#### Supported time zone identifiers

Supported time zone identifiers can be used for the timeZone option when creating objects such as Intl.DateTimeFormat, as well as for creating Temporal date objects. There are over 400 identifiers in common use so we won't list them. For an exhaustive list of possible identifiers, see the Wikipedia article or the IANA time zone database.

As you browse the list, note that the standardization of Temporal requires browsers to always return the primary identifier in the IANA database, which may change over time. See time zones and offsets for more information. For example, the returned array should contain "Asia/Kolkata" instead of "Asia/Calcutta" because the latter is an alias of the former and they both correspond to India; however, it should contain both "Africa/Abidjan" and "Atlantic/Reykjavik" because they are in different countries, despite the latter also being an alias of the former.

References:

- IANA Time Zone Database
- UTS 35, Time Zone Identifiers

#### Supported unit identifiers

Below are all values that are commonly supported by browsers for the unit key. These values can be used for the unit option when creating objects such as Intl.NumberFormat. This list is a subset of the CLDR explicitly sanctioned by the ECMA-402 specification, so all implementations should be consistent.

- acre
- bit
- byte
- celsius
- centimeter
- day
- degree
- fahrenheit
- fluid-ounce
- foot
- gallon
- gigabit
- gigabyte
- gram
- hectare
- hour
- inch
- kilobit
- kilobyte
- kilogram
- kilometer
- liter
- megabit
- megabyte
- meter
- microsecond
- mile
- mile-scandinavian
- milliliter
- millimeter
- millisecond
- minute
- month
- nanosecond
- ounce
- percent
- petabyte
- pound
- second
- stone
- terabit
- terabyte
- week
- yard
- year

When specifying units, you can also combine two units with the "-per-" separator. For example, meter-per-second or liter-per-megabyte.

References:

- ECMA-402 sanctioned single units
- CLDR Unit validity data
- UTS 35, Unit identifiers

### Exceptions

Thrown if an unsupported key was passed as a parameter.

## Examples

### Feature testing

You can check that the method is supported by comparing to undefined:

```
if (typeof Intl.supportedValuesOf !== "undefined") {
  // method is supported
}
```

### Get all values for key

To get the supported values for calendar you call the method with the key "calendar". You can then iterate through the returned array as shown below:

```
Intl.supportedValuesOf("calendar").forEach((calendar) => {
  // "buddhist", "chinese", "coptic", "dangi", etc.
});
```

The other values are all obtained in the same way:

```
Intl.supportedValuesOf("collation").forEach((collation) => {
  // "compat", "dict", "emoji", etc.
});

Intl.supportedValuesOf("currency").forEach((currency) => {
  // "ADP", "AED", "AFA", "AFN", "ALK", "ALL", "AMD", etc.
});

Intl.supportedValuesOf("numberingSystem").forEach((numberingSystem) => {
  // "adlm", "ahom", "arab", "arabext", "bali", etc.
});

Intl.supportedValuesOf("timeZone").forEach((timeZone) => {
  // "Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", etc.
});

Intl.supportedValuesOf("unit").forEach((unit) => {
  // "acre", "bit", "byte", "celsius", "centimeter", etc.
});
```

### Invalid key throws RangeError

```
try {
  Intl.supportedValuesOf("someInvalidKey");
} catch (err) {
  // RangeError: invalid key: "someInvalidKey"
}
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Intl.supportedValuesOf in FormatJS
- Intl

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/supportedValuesOf
