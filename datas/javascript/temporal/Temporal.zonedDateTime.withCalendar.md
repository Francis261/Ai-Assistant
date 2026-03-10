# Temporal.ZonedDateTime.prototype.withCalendar()

Source: https://devdocs.io/javascript/global_objects/temporal/zoneddatetime/withcalendar

The withCalendar() method of Temporal.ZonedDateTime instances returns a new Temporal.ZonedDateTime object representing this date-time interpreted in the new calendar system. Because all Temporal objects are designed to be immutable, this method essentially functions as the setter for the date-time's calendarId property.

To replace the date-time component properties, use the with() method. To replace its time zone, use the withTimeZone() method.

## Syntax

```
withCalendar(calendar)
```

### Parameters

A string that corresponds to the calendarId property. See Intl.supportedValuesOf() for a list of commonly supported calendar types.

### Return value

A new Temporal.ZonedDateTime object, representing the date-time specified by the original ZonedDateTime, interpreted in the new calendar system.

### Exceptions

Thrown if calendar is not a string.

Thrown if calendar is not a valid calendar identifier.

## Examples

### Using withCalendar()

```
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56[America/New_York]",
);
const newZDT = zdt.withCalendar("islamic-umalqura");
console.log(newZDT.toLocaleString("en-US", { calendar: "islamic-umalqura" }));
// 11/21/1442 AH, 12:34:56 PM EDT
```

## Specifications

## Browser compatibility

## See also

- Temporal.ZonedDateTime
- Temporal.ZonedDateTime.prototype.with()
- Temporal.ZonedDateTime.prototype.withTimeZone()
- Temporal.ZonedDateTime.prototype.withPlainTime()
- Temporal.ZonedDateTime.from()
- Temporal.ZonedDateTime.prototype.calendarId

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/withCalendar
