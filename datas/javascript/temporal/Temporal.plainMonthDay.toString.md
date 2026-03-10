# Temporal.PlainMonthDay.prototype.toString()

Source: https://devdocs.io/javascript/global_objects/temporal/plainmonthday/tostring

The toString() method of Temporal.PlainMonthDay instances returns a string representing this month-day in the RFC 9557 format.

## Syntax

```
toString()
toString(options)
```

### Parameters

An object containing the following property:

Whether to show the calendar annotation ([u-ca=calendar_id]) in the return value. Possible values are:

Include the calendar annotation if the calendar is not "iso8601". The reference year is included if the calendar is not "iso8601".

Always include the calendar annotation. The reference year is always included too.

Never include the calendar annotation. This makes the returned string not recoverable to the same Temporal.PlainMonthDay instance, although the month-day value still remains the same. The reference year is included if the calendar is not "iso8601".

Always include the calendar annotation, and add a critical flag: [!u-ca=calendar_id]. Useful when sending the string to certain systems, but not useful for Temporal itself. The reference year is always included too.

### Return value

A string in the RFC 9557 format representing this month-day. The calendar annotation is included as specified. The reference year is included if a calendar annotation is included or if the calendar is not "iso8601".

### Exceptions

Thrown if any of the options is invalid.

Thrown if options is not an object or undefined.

## Examples

### Using toString()

```
const md = Temporal.PlainMonthDay.from({ month: 8, day: 1 });
console.log(md.toString()); // '08-01'

const md2 = Temporal.PlainMonthDay.from({
  monthCode: "M08",
  day: 1,
  calendar: "chinese",
});
console.log(md2.toString()); // '1972-09-08[u-ca=chinese]'
```

### Using options

```
const isoMD = Temporal.PlainMonthDay.from({ month: 8, day: 1 });
const md = Temporal.PlainMonthDay.from({
  monthCode: "M08",
  day: 1,
  calendar: "chinese",
});
console.log(isoMD.toString({ calendarName: "auto" })); // '08-01'
console.log(md.toString({ calendarName: "auto" })); // '1972-09-08[u-ca=chinese]'
console.log(isoMD.toString({ calendarName: "always" })); // '1972-08-01[u-ca=iso8601]'
console.log(md.toString({ calendarName: "always" })); // '1972-09-08[u-ca=chinese]'
console.log(isoMD.toString({ calendarName: "never" })); // '08-01'
console.log(md.toString({ calendarName: "never" })); // '1972-09-08'
console.log(isoMD.toString({ calendarName: "critical" })); // '1972-08-01[!u-ca=iso8601]'
console.log(md.toString({ calendarName: "critical" })); // '1972-09-08[!u-ca=chinese]'
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainMonthDay
- Temporal.PlainMonthDay.from()
- Temporal.PlainMonthDay.prototype.toJSON()
- Temporal.PlainMonthDay.prototype.toLocaleString()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/toString
