# Temporal.PlainMonthDay()

Source: https://devdocs.io/javascript/global_objects/temporal/plainmonthday/plainmonthday

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

The Temporal.PlainMonthDay() constructor creates Temporal.PlainMonthDay objects.

This constructor allows you to create instances by directly supplying the underlying data. Like all other Temporal classes, you should usually construct Temporal.PlainMonthDay objects using the Temporal.PlainMonthDay.from() static method, which can handle a variety of input types.

## Syntax

```
new Temporal.PlainMonthDay(month, day)
new Temporal.PlainMonthDay(month, day, calendar)
new Temporal.PlainMonthDay(month, day, calendar, referenceYear)
```

Note: Temporal.PlainMonthDay() can only be constructed with new. Attempting to call it without new throws a TypeError.

Warning: Avoid using the calendar and referenceYear parameters, because equals() will consider the reference year for equality, causing two equivalent month-days to be considered different if they have different reference years. To create a Temporal.PlainMonthDay object with a non-ISO calendar, use the Temporal.PlainMonthDay.from() static method.

### Parameters

A number, truncated to an integer, representing the month in the ISO calendar system.

A number, truncated to an integer, representing the day of the month in the ISO calendar system.

A string representing the calendar to use. See Intl.supportedValuesOf() for a list of commonly supported calendar types. Defaults to "iso8601". Note that irrespective of the calendar, the referenceYear, month, and day must be in the ISO 8601 calendar system.

A number, truncated to an integer, representing the year in the ISO calendar system. Defaults to 1972. The same ISO month-day can represent different dates in different years with non-ISO calendars. For example, the days 2021-07-01 and 1972-07-01 may fall on different month-days in a non-Gregorian calendar, and just specifying "07-01" is insufficient to unambiguously determine a month-day in the target calendar. Therefore, you virtually always want to specify a referenceYear when using a non-ISO calendar.

### Return value

A new Temporal.PlainMonthDay object, representing the month-day of the date specified by referenceYear, month, day (in the ISO calendar), interpreted in the calendar system specified by calendar.

### Exceptions

Thrown if calendar is not a string or undefined.

Thrown in one of the following cases:

- referenceYear, month, or day is not a finite number.
- The referenceYear, month, and day combination does not represent a valid date in the ISO calendar system, or is not in the representable range, which is ±(108 + 1) days, or about ±273,972.6 years, from the Unix epoch.
- calendar is not a valid calendar identifier.

## Examples

### Using Temporal.PlainMonthDay()

```
const md = new Temporal.PlainMonthDay(7, 1);
console.log(md.toString()); // 07-01

const md2 = new Temporal.PlainMonthDay(7, 1, "chinese");
console.log(md2.toString()); // 1972-07-01[u-ca=chinese]

const md3 = new Temporal.PlainMonthDay(7, 1, "chinese", 2021);
console.log(md3.toString()); // 2021-07-01[u-ca=chinese]
```

### Improper usage

You should avoid using the calendar and referenceYear parameters, unless you know that the referenceYear is the canonical reference year that would be selected by Temporal.PlainMonthDay.from() for the same month-day.

```
const md = new Temporal.PlainMonthDay(7, 1, "chinese", 2021);
const md2 = Temporal.PlainMonthDay.from("2021-07-01[u-ca=chinese]");
console.log(md.equals(md2)); // false
console.log(md.toString()); // 2021-07-01[u-ca=chinese]
console.log(md2.toString()); // 1972-07-02[u-ca=chinese]
```

## Specifications

## Browser compatibility

## See also

- Temporal.PlainMonthDay
- Temporal.PlainMonthDay.from()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay/PlainMonthDay
