# Temporal.PlainDateTime.prototype.millisecond

Source: https://devdocs.io/javascript/global_objects/temporal/plaindatetime/millisecond

The millisecond accessor property of Temporal.PlainDateTime instances returns an integer from 0 to 999 representing the millisecond (10-3 second) component of this time.

The set accessor of millisecond is undefined. You cannot change this property directly. Use the with() method to create a new Temporal.PlainDateTime object with the desired new value.

For general information and more examples, see Temporal.PlainTime.prototype.millisecond.

## Examples

### Using millisecond

```
const dt = Temporal.PlainDateTime.from("2021-07-01T12:34:56.123456789");
console.log(dt.millisecond); // 123
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainDateTime
- Temporal.PlainDateTime.prototype.with()
- Temporal.PlainDateTime.prototype.add()
- Temporal.PlainDateTime.prototype.subtract()
- Temporal.PlainDateTime.prototype.second
- Temporal.PlainDateTime.prototype.microsecond
- Temporal.PlainDateTime.prototype.nanosecond
- Temporal.PlainTime.prototype.millisecond

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/millisecond
