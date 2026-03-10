# Temporal.PlainDate.prototype.subtract()

Source: https://devdocs.io/javascript/global_objects/temporal/plaindate/subtract

The subtract() method of Temporal.PlainDate instances returns a new Temporal.PlainDate object representing this date moved backward by a given duration (in a form convertible by Temporal.Duration.from()).

If you want to subtract two dates and get a duration, use since() or until() instead.

## Syntax

```
subtract(duration)
subtract(duration, options)
```

### Parameters

A string, an object, or a Temporal.Duration instance representing a duration to subtract from this date. It is converted to a Temporal.Duration object using the same algorithm as Temporal.Duration.from().

An object containing the following property:

A string specifying the behavior when a date component is out of range. Possible values are:

The date component is clamped to the valid range.

A RangeError is thrown if the date component is out of range.

### Return value

A new Temporal.PlainDate object representing the date specified by the original PlainDate, minus the duration.

## Description

Subtracting a duration is equivalent to adding its negation, so all the same considerations apply.

### Exceptions

Thrown if the result is not in the representable range, which is ±(108 + 1) days, or about ±273,972.6 years, from the Unix epoch.

## Examples

### Subtracting a duration

```
const start = Temporal.PlainDate.from("2022-01-01");
const end = start.subtract({ years: 1, months: 2, weeks: 3, days: 4 });
console.log(end.toString()); // 2020-10-07
```

For more examples, see add().

## Specifications

## Browser compatibility

## See also

- Temporal.PlainDate
- Temporal.Duration
- Temporal.PlainDate.prototype.add()
- Temporal.PlainDate.prototype.since()
- Temporal.PlainDate.prototype.until()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/subtract
