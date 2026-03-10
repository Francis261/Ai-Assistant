# Temporal.Duration.prototype.total()

Source: https://devdocs.io/javascript/global_objects/temporal/duration/total

The total() method of Temporal.Duration instances returns a number representing the total duration in the given unit.

## Syntax

```
total(unit)
total(options)
```

### Parameters

A string representing the unit option. This is a convenience overload, so total(unit) is equivalent to total({ unit }), where unit is a string.

An object containing some or all of the following properties (in the order they are retrieved and validated):

A zoned or plain date(time) that provides the time and calendar information to resolve calendar durations (see the link for the general interpretation of this option). Required if either this or other is a calendar duration, or unit is a calendar unit.

Any of the temporal units: "years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds", "microseconds", "nanoseconds", or their singular forms.

### Return value

A floating-point number representing the total duration in the given unit. May be inexact due to floating point precision limits.

### Exceptions

Thrown in one of the following cases:

- unit is not provided or is not a valid unit.
- Either this or other is a calendar duration, or unit is a calendar unit, and relativeTo is not provided.

## Description

If a relativeTo is provided, the result is calculated by adding the duration to the starting point, finding the difference between the result and the starting point (in nanoseconds), and then converting the difference to the requested unit by dividing by the appropriate number of nanoseconds per unit. Providing a zoned date-time allows daylight saving time and other time zone changes to be taken into account too; otherwise, 24-hour days are assumed.

If relativeTo is not provided, the result is calculated by converting the duration to nanoseconds and dividing by the appropriate number of nanoseconds per unit.

## Examples

### Using total()

```
const d = Temporal.Duration.from({ hours: 1, minutes: 30 });

console.log(d.total("minutes")); // 90
console.log(d.total("hours")); // 1.5
```

### Total of a calendar duration

```
const d = Temporal.Duration.from({ months: 1 });

console.log(
  d.total({ unit: "days", relativeTo: Temporal.PlainDate.from("2021-01-01") }),
); // 31
```

## Specifications

## Browser compatibility

## See also

- Temporal.Duration
- Temporal.Duration.prototype.round()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/total
