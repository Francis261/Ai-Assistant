# Temporal.PlainYearMonth.prototype.toString()

Source: https://devdocs.io/javascript/global_objects/temporal/plainyearmonth/tostring

The toString() method of Temporal.PlainYearMonth instances returns a string representing this year-month in the RFC 9557 format.

## Syntax

```
toString()
toString(options)
```

### Parameters

An object containing the following property:

Whether to show the calendar annotation ([u-ca=calendar_id]) in the return value. Possible values are:

Include the calendar annotation if the calendar is not "iso8601". The reference day is included if the calendar is not "iso8601".

Always include the calendar annotation. The reference day is always included too.

Never include the calendar annotation. This makes the returned string not recoverable to the same Temporal.PlainYearMonth instance, although the year-month value still remains the same. The reference day is included if the calendar is not "iso8601".

Always include the calendar annotation, and add a critical flag: [!u-ca=calendar_id]. Useful when sending the string to certain systems, but not useful for Temporal itself. The reference day is always included too.

### Return value

A string in the RFC 9557 format representing this year-month. The calendar annotation is included as specified. The reference day is included if a calendar annotation is included or if the calendar is not "iso8601".

### Exceptions

Thrown if any of the options is invalid.

Thrown if options is not an object or undefined.

## Examples

### Using toString()

```
const ym = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
console.log(ym.toString()); // '2021-08'

const ym2 = Temporal.PlainYearMonth.from({
  year: 4658,
  monthCode: "M08",
  calendar: "chinese",
});
console.log(ym2.toString()); // '2021-09-07[u-ca=chinese]'
```

### Using options

```
const isoYM = Temporal.PlainYearMonth.from({ year: 2021, month: 8 });
const ym = Temporal.PlainYearMonth.from({
  year: 4658,
  monthCode: "M08",
  calendar: "chinese",
});
console.log(isoYM.toString({ calendarName: "auto" })); // '2021-08'
console.log(ym.toString({ calendarName: "auto" })); // '2021-09-07[u-ca=chinese]'
console.log(isoYM.toString({ calendarName: "always" })); // '2021-08-01[u-ca=iso8601]'
console.log(ym.toString({ calendarName: "always" })); // '2021-09-07[u-ca=chinese]'
console.log(isoYM.toString({ calendarName: "never" })); // '2021-08'
console.log(ym.toString({ calendarName: "never" })); // '2021-09-07'
console.log(isoYM.toString({ calendarName: "critical" })); // '2021-08-01[!u-ca=iso8601]'
console.log(ym.toString({ calendarName: "critical" })); // '2021-09-07[!u-ca=chinese]'
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainYearMonth
- Temporal.PlainYearMonth.from()
- Temporal.PlainYearMonth.prototype.toJSON()
- Temporal.PlainYearMonth.prototype.toLocaleString()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth/toString
