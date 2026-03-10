# Temporal.PlainDateTime.prototype.withCalendar()

Source: https://devdocs.io/javascript/global_objects/temporal/plaindatetime/withcalendar

The withCalendar() method of Temporal.PlainDateTime instances returns a new Temporal.PlainDateTime object representing this date-time interpreted in the new calendar system. Because all Temporal objects are designed to be immutable, this method essentially functions as the setter for the date-time's calendarId property.

To replace the date-time component properties, use the with() method instead.

## Syntax

```
withCalendar(calendar)
```

### Parameters

A string that corresponds to the calendarId property. See Intl.supportedValuesOf() for a list of commonly supported calendar types.

### Return value

A new Temporal.PlainDateTime object, representing the date-time specified by the original PlainDateTime, interpreted in the new calendar system.

### Exceptions

Thrown if calendar is not a string.

Thrown if calendar is not a valid calendar identifier.

## Examples

### Using withCalendar()

```
const dt = Temporal.PlainDateTime.from("2021-07-01T12:34:56");
const newDT = dt.withCalendar("islamic-umalqura");
console.log(newDT.toLocaleString("en-US", { calendar: "islamic-umalqura" }));
// 11/21/1442 AH, 12:34:56 PM
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainDateTime
- Temporal.PlainDateTime.prototype.with()
- Temporal.PlainDateTime.prototype.withPlainTime()
- Temporal.PlainDateTime.from()
- Temporal.PlainDateTime.prototype.calendarId

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/withCalendar
