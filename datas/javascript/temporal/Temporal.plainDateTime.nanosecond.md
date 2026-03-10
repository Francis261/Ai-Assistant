# Temporal.PlainDateTime.prototype.nanosecond

Source: https://devdocs.io/javascript/global_objects/temporal/plaindatetime/nanosecond

The nanosecond accessor property of Temporal.PlainDateTime instances returns an integer from 0 to 999 representing the nanosecond (10-9 second) component of this time.

The set accessor of nanosecond is undefined. You cannot change this property directly. Use the with() method to create a new Temporal.PlainDateTime object with the desired new value.

For general information and more examples, see Temporal.PlainTime.prototype.nanosecond.

## Examples

### Using nanosecond

```
const dt = Temporal.PlainDateTime.from("2021-07-01T12:34:56.123456789");
console.log(dt.nanosecond); // 789
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainDateTime
- Temporal.PlainDateTime.prototype.with()
- Temporal.PlainDateTime.prototype.add()
- Temporal.PlainDateTime.prototype.subtract()
- Temporal.PlainDateTime.prototype.second
- Temporal.PlainDateTime.prototype.millisecond
- Temporal.PlainDateTime.prototype.microsecond
- Temporal.PlainTime.prototype.nanosecond

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/nanosecond
