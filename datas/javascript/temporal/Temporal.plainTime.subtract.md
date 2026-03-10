# Temporal.PlainTime.prototype.subtract()

Source: https://devdocs.io/javascript/global_objects/temporal/plaintime/subtract

The subtract() method of Temporal.PlainTime instances returns a new Temporal.PlainTime object representing this time moved backward by a given duration (in a form convertible by Temporal.Duration.from()), wrapping around the clock if necessary.

If you want to subtract two times and get a duration, use since() or until() instead.

## Syntax

```
subtract(duration)
```

### Parameters

A string, an object, or a Temporal.Duration instance representing a duration to subtract from this time. It is converted to a Temporal.Duration object using the same algorithm as Temporal.Duration.from().

### Return value

A new Temporal.PlainTime object representing the time specified by the original PlainTime, minus the duration.

Subtracting a duration is equivalent to adding its negation, so all the same considerations apply.

## Examples

### Subtracting a duration

```
const start = Temporal.PlainTime.from("12:34:56");
const end = start.subtract({ hours: 1, minutes: 30 });
console.log(end.toString()); // 11:04:56
```

For more examples, see add().

## Specifications

## Browser compatibility

## See also

- Temporal.PlainTime
- Temporal.Duration
- Temporal.PlainTime.prototype.add()
- Temporal.PlainTime.prototype.since()
- Temporal.PlainTime.prototype.until()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/subtract
