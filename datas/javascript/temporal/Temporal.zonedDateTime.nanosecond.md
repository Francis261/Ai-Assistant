# Temporal.ZonedDateTime.prototype.nanosecond

Source: https://devdocs.io/javascript/global_objects/temporal/zoneddatetime/nanosecond

The nanosecond accessor property of Temporal.ZonedDateTime instances returns an integer from 0 to 999 representing the nanosecond (10-9 second) component of this time.

The set accessor of nanosecond is undefined. You cannot change this property directly. Use the with() method to create a new Temporal.ZonedDateTime object with the desired new value.

For general information and more examples, see Temporal.PlainTime.prototype.nanosecond.

## Examples

### Using nanosecond

```
const dt = Temporal.ZonedDateTime.from(
  "2021-07-01T12:34:56.123456789-04:00[America/New_York]",
);
console.log(dt.nanosecond); // 789
```

## Specifications

## Browser compatibility

## See also

- Temporal.ZonedDateTime
- Temporal.ZonedDateTime.prototype.with()
- Temporal.ZonedDateTime.prototype.add()
- Temporal.ZonedDateTime.prototype.subtract()
- Temporal.ZonedDateTime.prototype.second
- Temporal.ZonedDateTime.prototype.millisecond
- Temporal.ZonedDateTime.prototype.microsecond
- Temporal.PlainTime.prototype.nanosecond

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/nanosecond
