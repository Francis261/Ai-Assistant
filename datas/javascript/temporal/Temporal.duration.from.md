# Temporal.Duration.from()

Source: https://devdocs.io/javascript/global_objects/temporal/duration/from

The Temporal.Duration.from() static method creates a new Temporal.Duration object from another Temporal.Duration object, an object with duration properties, or an ISO 8601 string.

## Syntax

```
Temporal.Duration.from(info)
```

### Parameters

One of the following:

- A Temporal.Duration instance, which creates a copy of the instance.
- An ISO 8601 string representing a duration.
- An object containing at least one of the following properties (in the order they are retrieved and validated): Each property should contain an integer number value. The resulting duration must not have mixed signs, so all of these properties must have the same sign (or zero). Missing properties are treated as zero.
  - days
  - hours
  - microseconds
  - milliseconds
  - minutes
  - months
  - nanoseconds
  - seconds
  - weeks
  - years

A Temporal.Duration instance, which creates a copy of the instance.

An ISO 8601 string representing a duration.

An object containing at least one of the following properties (in the order they are retrieved and validated):

- days
- hours
- microseconds
- milliseconds
- minutes
- months
- nanoseconds
- seconds
- weeks
- years

Each property should contain an integer number value. The resulting duration must not have mixed signs, so all of these properties must have the same sign (or zero). Missing properties are treated as zero.

### Return value

A new Temporal.Duration object, possibly unbalanced, with the specified components.

### Exceptions

Thrown in one of the following cases:

- Any of the recognized properties in the info object is not an integer (including non-finite values).
- A calendar unit (years, months, weeks) has an absolute value ≥ 232.
- The non-calendar part of the duration (days and below), when expressed in seconds, has an absolute value ≥ 253.

Thrown in one of the following cases:

- info is not an object or a string.
- All of the recognized properties in the info object are undefined.

## Examples

### Creating a duration from an object

```
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
console.log(d1.toString()); // "PT1H30M"

const d2 = Temporal.Duration.from({ months: 1, days: 2 });
console.log(d2.toString()); // "P1M2D"

// Uncommon because unbalanced, but valid
const unbalanced = Temporal.Duration.from({
  hours: 100,
  minutes: 100,
  seconds: 100,
});
console.log(unbalanced.toString()); // "PT100H100M100S"

const neg = Temporal.Duration.from({ hours: -1, minutes: -30 });
console.log(neg.toString()); // "-PT1H30M"
```

### Creating a duration from a string

```
const d = Temporal.Duration.from("P1Y2M3W4DT5H6M7.00800901S");
console.log(d.hours); // 5
```

### Creating a duration from another duration

```
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from(d1);
console.log(d2.toString()); // "PT1H30M"
```

## Specifications

## Browser compatibility

## See also

- Temporal.Duration
- Temporal.Duration()
- Temporal.Duration.prototype.with()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/from
