# Temporal.PlainDateTime.prototype.toString()

Source: https://devdocs.io/javascript/global_objects/temporal/plaindatetime/tostring

The toString() method of Temporal.PlainDateTime instances returns a string representing this date-time in the RFC 9557 format.

## Syntax

```
toString()
toString(options)
```

### Parameters

An object containing the following property:

Whether to show the calendar annotation ([u-ca=calendar_id]) in the return value. Possible values are:

Include the calendar annotation if the calendar is not "iso8601".

Always include the calendar annotation.

Never include the calendar annotation. This makes the returned string not recoverable to the same Temporal.PlainDateTime instance, although the date value still remains the same.

Always include the calendar annotation, and add a critical flag: [!u-ca=calendar_id]. Useful when sending the string to certain systems, but not useful for Temporal itself.

Either an integer from 0 to 9, or the string "auto". The default is "auto". If "auto", then trailing zeros are removed from the fractional seconds. Otherwise, the fractional part of the second component contains this many digits, padded with zeros or rounded as necessary.

A string specifying how to round off fractional second digits beyond fractionalSecondDigits. See Intl.NumberFormat(). Defaults to "trunc".

A string specifying the smallest unit to include in the output. Possible values are "minute", "second", "millisecond", "microsecond", and "nanosecond", or their plural forms, which (except "minute") are equivalent to fractionalSecondDigits values of 0, 3, 6, 9, respectively. If specified, then fractionalSecondDigits is ignored.

### Return value

A string in the RFC 9557 format representing this date-time. The calendar annotation is included as specified.

### Exceptions

Thrown if any of the options is invalid.

Thrown if options is not an object or undefined.

## Examples

### Using toString()

```
const dt = Temporal.PlainDateTime.from("2021-08-01T12:34:56");
console.log(dt.toString()); // '2021-08-01T12:34:56'
```

For examples with rounding times, see Temporal.PlainTime.prototype.toString(). For examples with displaying calendars, see Temporal.PlainDate.prototype.toString().

## Specifications

## Browser compatibility

## See also

- Temporal.PlainDateTime
- Temporal.PlainDateTime.from()
- Temporal.PlainDateTime.prototype.toJSON()
- Temporal.PlainDateTime.prototype.toLocaleString()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/toString
