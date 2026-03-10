# Temporal.Instant.prototype.toZonedDateTimeISO()

Source: https://devdocs.io/javascript/global_objects/temporal/instant/tozoneddatetimeiso

The toZonedDateTimeISO() method of Temporal.Instant instances returns a new Temporal.ZonedDateTime object representing this instant in the specified time zone using the ISO 8601 calendar system.

## Syntax

```
toZonedDateTimeISO(timeZone)
```

### Parameters

Either a string or a Temporal.ZonedDateTime instance representing the time zone to use. If a Temporal.ZonedDateTime instance, its time zone is used. If a string, it can be a named time zone identifier, an offset time zone identifier, or a date-time string containing a time zone identifier or an offset (see time zones and offsets for more information).

### Return value

A new Temporal.ZonedDateTime object representing this instant in the specified time zone using the ISO 8601 calendar system.

### Exceptions

Thrown if the time zone name is invalid.

Thrown if timeZone is not a string or a Temporal.ZonedDateTime instance.

## Examples

### Using toZonedDateTimeISO()

```
const instant = Temporal.Instant.from("2021-08-01T12:34:56.123456789Z");
const zonedDateTime = instant.toZonedDateTimeISO("America/New_York");
console.log(zonedDateTime.toString()); // 2021-08-01T08:34:56.123456789-04:00[America/New_York]

const localDateTime = instant.toZonedDateTimeISO(Temporal.Now.timeZoneId());
console.log(localDateTime.toString()); // This instant in your timezone
```

## Specifications

## Browser compatibility

## See also

- Temporal.Instant
- Temporal.ZonedDateTime
- Temporal.ZonedDateTime.prototype.toInstant()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/toZonedDateTimeISO
