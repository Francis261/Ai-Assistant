# Temporal.Duration.compare()

Source: https://devdocs.io/javascript/global_objects/temporal/duration/compare

The Temporal.Duration.compare() static method returns a number (-1, 0, or 1) indicating whether the first duration is shorter, equal to, or longer than the second duration.

## Syntax

```
Temporal.Duration.compare(duration1, duration2)
Temporal.Duration.compare(duration1, duration2, options)
```

### Parameters

A string, an object, or a Temporal.Duration instance representing the first duration to compare. It is converted to a Temporal.Duration object using the same algorithm as Temporal.Duration.from().

The second duration to compare, converted to a Temporal.Duration object using the same algorithm as duration1.

An object containing the following property:

A zoned or plain date(time) that provides the time and calendar information to resolve calendar durations (see the link for the general interpretation of this option). Required if either duration1 or duration2 is a calendar duration (unless they are equal component-wise, in which case 0 is returned without computations).

### Return value

Returns -1 if duration1 is shorter than duration2, 0 if they are equal, and 1 if duration1 is longer than duration2.

### Exceptions

Thrown if either duration1 or duration2 is a calendar duration (it has a non-zero years, months, or weeks), and relativeTo is not provided.

## Description

If relativeTo is a zoned date-time, and either duration1 or duration2 is a calendar duration, the result is calculated by adding the durations to the starting point, and then comparing the resulting instants. Otherwise, the comparison is done by converting both of them to nanoseconds (assuming 24-hour days, and using the calendar of relativeTo if necessary) and comparing the results.

## Examples

### Using Temporal.Duration.compare()

```
const d1 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d2 = Temporal.Duration.from({ minutes: 100 });
console.log(Temporal.Duration.compare(d1, d2)); // -1

const d3 = Temporal.Duration.from({ hours: 2 });
const d4 = Temporal.Duration.from({ minutes: 110 });
console.log(Temporal.Duration.compare(d3, d4)); // 1

const d5 = Temporal.Duration.from({ hours: 1, minutes: 30 });
const d6 = Temporal.Duration.from({ seconds: 5400 });
console.log(Temporal.Duration.compare(d5, d6)); // 0
```

### Comparing calendar durations

```
const d1 = Temporal.Duration.from({ days: 31 });
const d2 = Temporal.Duration.from({ months: 1 });

console.log(
  Temporal.Duration.compare(d1, d2, {
    relativeTo: Temporal.PlainDate.from("2021-01-01"), // ISO 8601 calendar
  }),
); // 0

console.log(
  Temporal.Duration.compare(d1, d2, {
    relativeTo: Temporal.PlainDate.from("2021-02-01"), // ISO 8601 calendar
  }),
); // 1; February has 28 days
```

### Using zoned relativeTo

Using a zoned relativeTo, you can even take into account daylight saving time changes. On 2024-11-03, the US shifts from daylight saving time to standard time, so that day has 25 hours because the clock is set back by 1 hour.

```
const d1 = Temporal.Duration.from({ days: 1 });
const d2 = Temporal.Duration.from({ hours: 24 });

console.log(
  Temporal.Duration.compare(d1, d2, {
    relativeTo: Temporal.ZonedDateTime.from(
      "2024-11-03T01:00-04:00[America/New_York]",
    ),
  }),
); // 1
```

### Sorting an array of durations

The purpose of this compare() function is to act as a comparator to be passed to Array.prototype.sort() and related functions.

```
const durations = [
  Temporal.Duration.from({ hours: 1 }),
  Temporal.Duration.from({ hours: 2 }),
  Temporal.Duration.from({ hours: 1, minutes: 30 }),
  Temporal.Duration.from({ hours: 1, minutes: 45 }),
];

durations.sort(Temporal.Duration.compare);
console.log(durations.map((d) => d.toString()));
// [ 'PT1H', 'PT1H30M', 'PT1H45M', 'PT2H' ]
```

Pass options like this:

```
durations.sort((a, b) =>
  Temporal.Duration.compare(a, b, {
    relativeTo: Temporal.Now.zonedDateTimeISO(),
  }),
);
```

## Specifications

## Browser compatibility

## See also

- Temporal.Duration
- Temporal.Duration.prototype.subtract()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/compare
