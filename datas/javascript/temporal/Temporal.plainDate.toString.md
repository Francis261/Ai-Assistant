# Temporal.PlainDate.prototype.toString()

Source: https://devdocs.io/javascript/global_objects/temporal/plaindate/tostring

The toString() method of Temporal.PlainDate instances returns a string representing this date in the RFC 9557 format.

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

Never include the calendar annotation. This makes the returned string not recoverable to the same Temporal.PlainDate instance, although the date value still remains the same.

Always include the calendar annotation, and add a critical flag: [!u-ca=calendar_id]. Useful when sending the string to certain systems, but not useful for Temporal itself.

### Return value

A string in the RFC 9557 format representing this date. The calendar annotation is included as specified.

### Exceptions

Thrown if any of the options is invalid.

Thrown if options is not an object or undefined.

## Examples

### Using toString()

```
const date = Temporal.PlainDate.from("2021-08-01");
console.log(date.toString()); // '2021-08-01'
```

### Using options

```
const isoDate = Temporal.PlainDate.from({ year: 2021, month: 8, day: 1 });
const date = Temporal.PlainDate.from({
  year: 2021,
  month: 8,
  day: 1,
  calendar: "islamic-umalqura",
});
console.log(isoDate.toString({ calendarName: "auto" })); // '2021-08-01'
console.log(date.toString({ calendarName: "auto" })); // '2582-12-17[u-ca=islamic-umalqura]'
console.log(isoDate.toString({ calendarName: "always" })); // '2021-08-01[u-ca=iso8601]'
console.log(date.toString({ calendarName: "always" })); // '2582-12-17[u-ca=islamic-umalqura]'
console.log(date.toString({ calendarName: "never" })); // '2582-12-17'
console.log(isoDate.toString({ calendarName: "critical" })); // '2021-08-01[!u-ca=iso8601]'
console.log(date.toString({ calendarName: "critical" })); // '2582-12-17[!u-ca=islamic-umalqura]'
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainDate
- Temporal.PlainDate.from()
- Temporal.PlainDate.prototype.toJSON()
- Temporal.PlainDate.prototype.toLocaleString()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/toString
