# Temporal.Instant.prototype.round()

Source: https://devdocs.io/javascript/global_objects/temporal/instant/round

The round() method of Temporal.Instant instances returns a new Temporal.Instant object representing this instant rounded to the given unit.

## Syntax

```
round(smallestUnit)
round(options)
```

### Parameters

A string representing the smallestUnit option. This is a convenience overload, so round(smallestUnit) is equivalent to round({ smallestUnit }), where smallestUnit is a string.

An object containing some or all of the following properties (in the order they are retrieved and validated):

A number (truncated to an integer) representing the rounding increment in the given smallestUnit. Defaults to 1. The increment and the smallestUnit must evenly divide 24 hours; for example, 45 seconds is a divisor of 86400 seconds, and 100 minutes is a divisor of 3600 minutes. This is slightly less strict than the round() method of the other classes, which all require the increment to be a divisor of the maximum value of the unit.

A string specifying how to round off the fractional part of smallestUnit. See Intl.NumberFormat(). Defaults to "halfExpand".

A string representing the smallest unit to include in the output. The value must be one of the following: "hour", "minute", "second", "millisecond", "microsecond", "nanosecond", or their plural forms. For units larger than "nanosecond", fractional parts of the smallestUnit will be rounded according to the roundingIncrement and roundingMode settings.

### Return value

A new Temporal.Instant object representing this instant rounded to the given unit, where all units smaller than smallestUnit are zeroed out.

### Exceptions

Thrown if any of the options is invalid.

## Examples

### Rounding off small units

```
const instant = Temporal.Instant.fromEpochMilliseconds(1000);
const roundedInstant = instant.round("second");
console.log(roundedInstant.epochMilliseconds); // 1000

const instant2 = instant.round("minute");
console.log(instant2.epochMilliseconds); // 0
```

## Specifications

## Browser compatibility

## See also

- Temporal.Instant

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Instant/round
