# Temporal.Now.plainDateISO()

Source: https://devdocs.io/javascript/global_objects/temporal/now/plaindateiso

The Temporal.Now.plainDateISO() static method returns the current date as a Temporal.PlainDate object, in the ISO 8601 calendar and the specified time zone.

## Syntax

```
Temporal.Now.plainDateISO()
Temporal.Now.plainDateISO(timeZone)
```

### Parameters

Either a string or a Temporal.ZonedDateTime instance representing the time zone to interpret the system time in. If a Temporal.ZonedDateTime instance, its time zone is used. If a string, it can be a named time zone identifier, an offset time zone identifier, or a date-time string containing a time zone identifier or an offset (see time zones and offsets for more information).

### Return value

The current date in the specified time zone, as a Temporal.PlainDate object using the ISO 8601 calendar.

### Exceptions

Thrown if the time zone is invalid.

## Examples

### Using Temporal.Now.plainDateISO()

```
// The current date in the system's time zone
const date = Temporal.Now.plainDateISO();
console.log(date); // e.g.: 2021-10-01

// The current date in the "America/New_York" time zone
const dateInNewYork = Temporal.Now.plainDateISO("America/New_York");
console.log(dateInNewYork); // e.g.: 2021-09-30
```

## Specifications

## Browser compatibility

## See also

- Temporal.Now
- Temporal.PlainDate

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Now/plainDateISO
