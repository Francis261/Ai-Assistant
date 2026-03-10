# Date.prototype.toTemporalInstant()

Source: https://devdocs.io/javascript/global_objects/date/totemporalinstant

The toTemporalInstant() method of Date instances returns a new Temporal.Instant object with the same epochMilliseconds value as this date's timestamp.

Use this method to convert legacy Date values to the Temporal API, then further convert it to other Temporal classes as necessary.

## Syntax

```
toTemporalInstant()
```

### Parameters

None.

### Return value

A new Temporal.Instant object with the same epochMilliseconds value as this date's timestamp. Its microsecond and nanosecond components are always 0.

### Exceptions

Thrown if the date is invalid (it has a timestamp of NaN).

## Examples

### Using toTemporalInstant()

```
const legacyDate = new Date("2021-07-01T12:34:56.789Z");
const instant = legacyDate.toTemporalInstant();

// Further convert it to other objects
const zdt = instant.toZonedDateTimeISO("UTC");
const date = zdt.toPlainDate();
console.log(date.toString()); // 2021-07-01
```

## Specifications

## Browser compatibility

## See also

- Temporal.Instant
- Temporal.ZonedDateTime
- Temporal.Instant.fromEpochMilliseconds()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toTemporalInstant
