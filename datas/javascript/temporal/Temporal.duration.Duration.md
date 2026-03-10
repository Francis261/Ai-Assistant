# Temporal.Duration()

Source: https://devdocs.io/javascript/global_objects/temporal/duration/duration

The Temporal.Duration() constructor creates Temporal.Duration objects.

This constructor allows you to create instances by directly supplying the underlying data. Like all other Temporal classes, you should usually construct Temporal.Duration objects using the Temporal.Duration.from() static method, which can handle a variety of input types.

## Syntax

```
new Temporal.Duration()
new Temporal.Duration(years)
new Temporal.Duration(years, months)
new Temporal.Duration(years, months, weeks)
new Temporal.Duration(years, months, weeks, days)
new Temporal.Duration(years, months, weeks, days, hours)
new Temporal.Duration(years, months, weeks, days, hours, minutes)
new Temporal.Duration(years, months, weeks, days, hours, minutes, seconds)
new Temporal.Duration(years, months, weeks, days, hours, minutes, seconds, milliseconds)
new Temporal.Duration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds)
new Temporal.Duration(years, months, weeks, days, hours, minutes, seconds, milliseconds, microseconds, nanoseconds)
```

Note: Temporal.Duration() can only be constructed with new. Attempting to call it without new throws a TypeError.

### Parameters

Number of years, or undefined (which is treated as 0).

Number of months, or undefined (which is treated as 0).

Number of weeks, or undefined (which is treated as 0).

Number of days, or undefined (which is treated as 0).

Number of hours, or undefined (which is treated as 0).

Number of minutes, or undefined (which is treated as 0).

Number of seconds, or undefined (which is treated as 0).

Number of milliseconds, or undefined (which is treated as 0).

Number of microseconds, or undefined (which is treated as 0).

Number of nanoseconds, or undefined (which is treated as 0).

### Return value

A new Temporal.Duration object, possibly unbalanced, with the specified components.

### Exceptions

Thrown in one of the following cases:

- Any of the parameters is not an integer (including non-finite values).
- A calendar unit (years, months, weeks) has an absolute value ≥ 232.
- The non-calendar part of the duration (days and below), when expressed in seconds, has an absolute value ≥ 253.

## Examples

### Using Temporal.Duration()

```
const d = new Temporal.Duration(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(d.toString()); // "P1Y2M3W4DT5H6M7.00800901S"
```

## Specifications

## Browser compatibility

## See also

- Temporal.Duration
- Temporal.Duration.from()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/Duration/Duration
