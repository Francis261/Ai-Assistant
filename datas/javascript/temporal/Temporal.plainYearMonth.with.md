# Temporal.PlainYearMonth.prototype.with()

Source: https://devdocs.io/javascript/global_objects/temporal/plainyearmonth/with

The with() method of Temporal.PlainYearMonth instances returns a new Temporal.PlainYearMonth object representing this year-month with some fields replaced by new values. Because all Temporal objects are designed to be immutable, this method essentially functions as the setter for the year-month's fields.

There's no obvious way to create a new Temporal.PlainYearMonth object that represents the same year-month in a different calendar, so to replace its calendarId property, you need to convert it to a Temporal.PlainDate object first using toPlainDate(), change the calendar, and then convert it back.

## Syntax

```
with(info)
with(info, options)
```

### Parameters

An object containing at least one of the properties recognized by Temporal.PlainYearMonth.from() (except calendar): era and eraYear, month, monthCode, year. Unspecified properties use the values from the original year-month. You only need to provide one of month or monthCode, and one of era and eraYear or year, and the other will be updated accordingly.

An object containing the following property:

A string specifying the behavior when a date component is out of range. Possible values are:

The date component is clamped to the valid range.

A RangeError is thrown if the date component is out of range.

### Return value

A new Temporal.PlainYearMonth object, where the fields specified in info that are not undefined are replaced by the corresponding values, and the rest of the fields are copied from the original date.

### Exceptions

Thrown in one of the following cases:

- info is not an object.
- options is not an object or undefined.

Thrown in one of the following cases:

- The provided properties that specify the same component are inconsistent.
- The provided non-numerical properties are not valid; for example, if monthCode is never a valid month code in this calendar.
- The provided numerical properties are out of range, and options.overflow is set to "reject".
- The result is not in the representable range, which is ±(108 + 1) days, or about ±273,972.6 years, from the Unix epoch.

## Examples

### Using with()

```
const ym = Temporal.PlainYearMonth.from("2021-07");
const newYM = ym.with({ year: 2024 });
console.log(newYM.toString()); // "2024-07"
```

For more examples, see the documentation for the individual properties that can be set using with().

## Specifications

## Browser compatibility

## See also

- Temporal.PlainYearMonth
- Temporal.PlainYearMonth.from()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/with
