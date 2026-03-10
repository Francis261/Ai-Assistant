# Temporal.Duration.prototype.with()

Source: https://devdocs.io/javascript/global_objects/temporal/duration/with

The with() method of Temporal.Duration instances returns a new Temporal.Duration object representing this duration with some fields replaced by new values. Because all Temporal objects are designed to be immutable, this method essentially functions as the setter for the duration's fields.

## Syntax

```
with(info)
```

### Parameters

An object containing at least one of the properties recognized by Temporal.Duration.from(): years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds. Unspecified properties use the values from the original duration.

### Return value

A new Temporal.Duration object, where the fields specified in info that are not undefined are replaced by the corresponding values, and the rest of the fields are copied from the original duration.

### Exceptions

Thrown in one of the following cases:

- Any of the recognized properties in the info object is not an integer (including non-finite values).
- A calendar unit (years, months, weeks) has an absolute value ≥ 232.
- The non-calendar part of the duration (days and below), when expressed in seconds, has an absolute value ≥ 253.

Thrown in one of the following cases:

- The info object is not an object.
- All of the recognized properties in the info object are undefined.

## Examples

### Using with()

You can use with() to achieve fine-grained control over the fields of a Temporal.Duration object. For example, you can manually balance a duration only on one unit, which round() does not offer:

```
function balanceMinutes(duration) {
  const { hours, minutes } = duration;
  const totalMinutes = hours * 60 + minutes;
  const balancedMinutes = totalMinutes % 60;
  const balancedHours = (totalMinutes - balancedMinutes) / 60;
  return duration.with({ hours: balancedHours, minutes: balancedMinutes });
}

const d1 = Temporal.Duration.from({ hours: 100, minutes: 100, seconds: 100 });
const d2 = balanceMinutes(d1);
console.log(d2.hours); // 101
console.log(d2.minutes); // 40
console.log(d2.seconds); // 100; remains unbalanced
```

## Specifications

## Browser compatibility

## See also

- Temporal.Duration
- Temporal.Duration.from()
- Temporal.Duration.prototype.add()
- Temporal.Duration.prototype.subtract()
- Temporal.Duration.prototype.round()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/with
