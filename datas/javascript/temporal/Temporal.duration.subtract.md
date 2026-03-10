# Temporal.Duration.prototype.subtract()

Source: https://devdocs.io/javascript/global_objects/temporal/duration/subtract

The subtract() method of Temporal.Duration instances returns a new Temporal.Duration object with the difference between this duration and a given duration. It is equivalent to adding the negated value of the other duration.

## Syntax

```
subtract(other)
```

### Parameters

A string, an object, or a Temporal.Duration instance representing a duration to add to this duration. It is converted to a Temporal.Duration object using the same algorithm as Temporal.Duration.from().

### Return value

A new Temporal.Duration object representing the difference of this duration and other.

### Exceptions

Thrown in one of the following cases:

- Either this or other is a calendar duration (it has a non-zero years, months, or weeks), because calendar durations are ambiguous without a calendar and time reference.
- The difference of this and other overflows the maximum or underflows the minimum representable duration, which is ±253 seconds.

## Examples

### Using subtract()

```
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ hours: -1, minutes: -20 });

const d3 = d1.subtract(d2);
console.log(d3.toString()); // "PT2H50M"
```

For more examples and caveats, see the add() method.

## Specifications

## Browser compatibility

## See also

- Temporal.Duration
- Temporal.Duration.prototype.add()
- Temporal.Duration.prototype.negated()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/subtract
