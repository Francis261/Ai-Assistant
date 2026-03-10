# Temporal.ZonedDateTime.prototype.toPlainDate()

Source: https://devdocs.io/javascript/global_objects/temporal/zoneddatetime/toplaindate

The toPlainDate() method of Temporal.ZonedDateTime instances returns a new Temporal.PlainDate object representing the date portion of this date-time.

## Syntax

```
toPlainDate()
```

### Parameters

None.

### Return value

A new Temporal.PlainDate object representing the date portion of this date-time.

## Examples

### Using toPlainDate()

```
const zdt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.987654321-04:00[America/New_York]",
);
const plainDate = zdt.toPlainDate();
console.log(plainDate.toString()); // 2021-07-01
```

## Specifications

## Browser compatibility

## See also

- Temporal.ZonedDateTime
- Temporal.PlainDate
- Temporal.ZonedDateTime.prototype.toPlainTime()
- Temporal.ZonedDateTime.prototype.toPlainDateTime()
- Temporal.ZonedDateTime.prototype.toInstant()
- Temporal.PlainDate.prototype.toZonedDateTime()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/toPlainDate
