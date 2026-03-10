# Temporal.ZonedDateTime.prototype.calendarId

Source: https://devdocs.io/javascript/global_objects/temporal/zoneddatetime/calendarid

The calendarId accessor property of Temporal.ZonedDateTime instances returns a string representing the calendar used to interpret the internal ISO 8601 date.

See Intl.supportedValuesOf() for a list of commonly supported calendar types.

The set accessor of calendarId is undefined. You cannot change this property directly. Use the withCalendar() method to create a new Temporal.ZonedDateTime object with the desired new value.

## Examples

### Using calendarId

```
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T08:00:00-04:00[America/New_York]",
);
console.log(dt.calendarId); // "iso8601"; default

const dt2 = Temporal.ZonedDateTime.from(
  "2021-07-01T08:00:00+08:00[Asia/Shanghai][u-ca=chinese]",
);
console.log(dt2.calendarId); // "chinese"

const dt3 = dt2.withCalendar("hebrew");
console.log(dt3.calendarId); // "hebrew"
```

## Specifications

## Browser compatibility

## See also

- Temporal.ZonedDateTime

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/calendarId
