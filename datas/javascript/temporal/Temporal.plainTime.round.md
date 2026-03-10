# Temporal.PlainTime.prototype.round()

Source: https://devdocs.io/javascript/global_objects/temporal/plaintime/round

The round() method of Temporal.PlainTime instances returns a new Temporal.PlainTime object representing this time rounded to the given unit.

## Syntax

```
round(smallestUnit)
round(options)
```

### Parameters

A string representing the smallestUnit option. This is a convenience overload, so round(smallestUnit) is equivalent to round({ smallestUnit }), where smallestUnit is a string.

An object containing some or all of the following properties (in the order they are retrieved and validated):

A number (truncated to an integer) representing the rounding increment in the given smallestUnit. Defaults to 1. The increment must be a divisor of the maximum value of smallestUnit; for example, if the unit is hours, the increment must be a divisor of 24 and must not be 24 itself, which means it can be 1, 2, 3, 4, 6, 8, or 12.

A string specifying how to round off the fractional part of smallestUnit. See Intl.NumberFormat(). Defaults to "halfExpand".

A string representing the smallest unit to include in the output. The value must be one of the following: "hour", "minute", "second", "millisecond", "microsecond", "nanosecond", or their plural forms. For units larger than "nanosecond", fractional parts of the smallestUnit will be rounded according to the roundingIncrement and roundingMode settings.

### Return value

A new Temporal.PlainTime object representing this time rounded to the given unit, where all units smaller than smallestUnit are zeroed out.

### Exceptions

Thrown if any of the options is invalid.

## Examples

### Rounding off small units

```
const time = Temporal.PlainTime.from("12:34:56.123456789");
const nearestMillisecond = time.round("millisecond");
console.log(nearestMillisecond.toString()); // 12:34:56.123

const nearestHalfHour = time.round({
  smallestUnit: "minute",
  roundingIncrement: 30,
});
console.log(nearestHalfHour.toString()); // 12:30:00

const nextHour = time.round({ smallestUnit: "hour", roundingMode: "ceil" });
console.log(nextHour.toString()); // 13:00:00
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainTime

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainTime/round
