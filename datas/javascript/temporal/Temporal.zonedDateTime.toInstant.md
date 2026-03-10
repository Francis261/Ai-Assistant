# Temporal.ZonedDateTime.prototype.toInstant()

Source: https://devdocs.io/javascript/global_objects/temporal/zoneddatetime/toinstant

The toInstant() method of Temporal.ZonedDateTime instances returns a new Temporal.Instant object representing the instant of this date-time.

## Syntax

```
toInstant()
```

### Parameters

None.

### Return value

A new Temporal.Instant object representing the instant of this date-time.

## Examples

### Using toInstant()

```
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.987654321-04:00[America/New_York]",
);
const instant = zdt.toInstant();
console.log(instant.toString()); // 2021-07-01T16:34:56.987654321Z
```

## Specifications

## Browser compatibility

## See also

- Temporal.ZonedDateTime
- Temporal.Instant
- Temporal.ZonedDateTime.prototype.toPlainDate()
- Temporal.ZonedDateTime.prototype.toPlainTime()
- Temporal.ZonedDateTime.prototype.toPlainDateTime()
- Temporal.Instant.prototype.toZonedDateTimeISO()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toInstant
