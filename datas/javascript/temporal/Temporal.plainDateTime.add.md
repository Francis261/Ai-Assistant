# Temporal.PlainDateTime.prototype.add()

Source: https://devdocs.io/javascript/global_objects/temporal/plaindatetime/add

The add() method of Temporal.PlainDateTime instances returns a new Temporal.PlainDateTime object representing this date-time moved forward by a given duration (in a form convertible by Temporal.Duration.from()).

## Syntax

```
add(duration)
add(duration, options)
```

### Parameters

A string, an object, or a Temporal.Duration instance representing a duration to add to this date-time. It is converted to a Temporal.Duration object using the same algorithm as Temporal.Duration.from().

An object containing the following property:

A string specifying the behavior when a date component is out of range. Possible values are:

The date component is clamped to the valid range.

A RangeError is thrown if the date component is out of range.

### Return value

A new Temporal.PlainDateTime object representing the date-time specified by the original PlainDateTime, plus the duration.

### Exceptions

Thrown if the result is not in the representable range, which is ±(108 + 1) days, or about ±273,972.6 years, from the Unix epoch.

## Description

For how calendar durations are added, see Temporal.PlainDate.prototype.add().

Adding a duration is equivalent to subtracting its negation.

## Examples

### Adding a duration

```
const start = Temporal.PlainDateTime.from("2021-01-01T12:34:56");
const end = start.add({
  years: 1,
  months: 2,
  weeks: 3,
  days: 4,
  hours: 5,
  minutes: 6,
  seconds: 7,
  milliseconds: 8,
});
console.log(end.toString()); // 2022-03-26T17:41:03.008
```

For more examples, especially with how different calendars and the overflow option interact with calendar durations, see Temporal.PlainDate.prototype.add().

## Specifications

## Browser compatibility

## See also

- Temporal.PlainDateTime
- Temporal.Duration
- Temporal.PlainDateTime.prototype.subtract()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/add
