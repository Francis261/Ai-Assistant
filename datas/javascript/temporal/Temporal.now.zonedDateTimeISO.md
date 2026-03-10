# Temporal.Now.zonedDateTimeISO()

Source: https://devdocs.io/javascript/global_objects/temporal/now/zoneddatetimeiso

The Temporal.Now.zonedDateTimeISO() static method returns the current date and time as a Temporal.ZonedDateTime object, in the ISO 8601 calendar and the specified time zone.

## Syntax

```
Temporal.Now.zonedDateTimeISO()
Temporal.Now.zonedDateTimeISO(timeZone)
```

### Parameters

Either a string or a Temporal.ZonedDateTime instance representing the time zone to interpret the system time in. If a Temporal.ZonedDateTime instance, its time zone is used. If a string, it can be a named time zone identifier, an offset time zone identifier, or a date-time string containing a time zone identifier or an offset (see time zones and offsets for more information).

### Return value

The current date and time in the specified time zone, as a Temporal.ZonedDateTime object using the ISO 8601 calendar. Has the same precision as Temporal.Now.instant().

### Exceptions

Thrown if the time zone is invalid.

## Examples

### Using Temporal.Now.zonedDateTimeISO()

```
// The current date and time in the system's time zone
const dateTime = Temporal.Now.zonedDateTimeISO();
console.log(dateTime); // e.g.: 2021-10-01T06:12:34.567890123+03:00[Africa/Nairobi]

// The current date and time in the "America/New_York" time zone
const dateTimeInNewYork = Temporal.Now.zonedDateTimeISO("America/New_York");
console.log(dateTimeInNewYork); // e.g.: 2021-09-30T23:12:34.567890123-04:00[America/New_York]
```

## Specifications

## Browser compatibility

## See also

- Temporal.Now
- Temporal.ZonedDateTime

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Now/zonedDateTimeISO
