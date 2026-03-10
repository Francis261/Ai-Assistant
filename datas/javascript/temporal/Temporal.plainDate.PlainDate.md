# Temporal.PlainDate()

Source: https://devdocs.io/javascript/global_objects/temporal/plaindate/plaindate

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

The Temporal.PlainDate() constructor creates Temporal.PlainDate objects.

This constructor allows you to create instances by directly supplying the underlying data. Like all other Temporal classes, you should usually construct Temporal.PlainDate objects using the Temporal.PlainDate.from() static method, which can handle a variety of input types.

## Syntax

```
new Temporal.PlainDate(year, month, day)
new Temporal.PlainDate(year, month, day, calendar)
```

Note: Temporal.PlainDate() can only be constructed with new. Attempting to call it without new throws a TypeError.

### Parameters

A number, truncated to an integer, representing the year in the ISO calendar system.

A number, truncated to an integer, representing the month in the ISO calendar system.

A number, truncated to an integer, representing the day of the month in the ISO calendar system.

A string representing the calendar to use. See Intl.supportedValuesOf() for a list of commonly supported calendar types. Defaults to "iso8601". Note that irrespective of the calendar, the year, month, and day must be in the ISO 8601 calendar system.

### Return value

A new Temporal.PlainDate object, representing the date specified by year, month, day (in the ISO calendar), interpreted in the calendar system specified by calendar.

### Exceptions

Thrown if calendar is not a string or undefined.

Thrown in one of the following cases:

- year, month, or day is not a finite number.
- The year, month, and day combination does not represent a valid date in the ISO calendar system, or is not in the representable range, which is ±(108 + 1) days, or about ±273,972.6 years, from the Unix epoch.
- calendar is not a valid calendar identifier.

## Examples

### Using Temporal.PlainDate()

```
const plainDate = new Temporal.PlainDate(2021, 7, 1);
console.log(plainDate.toString()); // 2021-07-01

// Note that the date is stored internally as ISO 8601, even when it's
// interpreted in a different calendar system. For example, even though
// 2021-07-01 is 4658-05-22 in the Chinese calendar, you still pass the
// ISO date to the constructor.
const plainDate2 = new Temporal.PlainDate(2021, 7, 1, "chinese");
console.log(plainDate2.toString()); // 2021-07-01[u-ca=chinese]
console.log(plainDate2.year); // 4658
console.log(plainDate2.month); // 5
console.log(plainDate2.day); // 22
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainDate
- Temporal.PlainDate.from()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/PlainDate
