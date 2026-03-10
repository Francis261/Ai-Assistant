# Temporal.PlainDate.prototype.calendarId

Source: https://devdocs.io/javascript/global_objects/temporal/plaindate/calendarid

The calendarId accessor property of Temporal.PlainDate instances returns a string representing the calendar used to interpret the internal ISO 8601 date.

See Intl.supportedValuesOf() for a list of commonly supported calendar types.

The set accessor of calendarId is undefined. You cannot change this property directly. Use the withCalendar() method to create a new Temporal.PlainDate object with the desired new value.

## Examples

### Using calendarId

```
const date = Temporal.PlainDate.from("2021-07-01");
console.log(date.calendarId); // "iso8601"; default

const date2 = Temporal.PlainDate.from("2021-07-01[u-ca=chinese]");
console.log(date2.calendarId); // "chinese"

const date3 = date2.withCalendar("hebrew");
console.log(date3.calendarId); // "hebrew"
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainDate

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/calendarId
