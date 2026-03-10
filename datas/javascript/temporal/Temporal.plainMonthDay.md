# Temporal.PlainMonthDay

Source: https://devdocs.io/javascript/global_objects/temporal/plainmonthday

The Temporal.PlainMonthDay object represents the month and day of a calendar date, without a year or time zone; for example, an event on a calendar that recurs every year and happens during the whole day. It is fundamentally represented as an ISO 8601 calendar date, with year, month, and day fields, and an associated calendar system. The year is used to disambiguate the month-day in non-ISO calendar systems.

## Description

A PlainMonthDay is essentially the month-day part of a Temporal.PlainDate object, without the year. Because the meaning of a month-day can change from year to year (for example, whether it exists, or what the month-day of the next day is), this object doesn't provide much functionality on its own, such as comparison, addition, or subtraction. It doesn't even have a month property, because the month index is not meaningful without a year (for example, two months from two years with the same index can have different names in the case of leap months).

### RFC 9557 format

PlainMonthDay objects can be serialized and parsed using the RFC 9557 format, an extension to the ISO 8601 / RFC 3339 format. The string has the following form (spaces are only for readability and should not be present in the actual string):

```
YYYY-MM-DD [u-ca=calendar_id]
```

Either a four-digit number, or a six-digit number with a + or - sign. It is required for non-ISO calendars, and optional otherwise. If omitted, you can either replace YYYY- with -- (so the string looks like --MM-DD or --MMDD), or omit the YYYY- part entirely (so the string looks like MM-DD or MMDD). Note that the reference year actually stored may be different from the one you provide, but the represented month-day is the same. See Temporal.PlainMonthDay.from() for more information.

A two-digit number from 01 to 12.

A two-digit number from 01 to 31. The YYYY, MM, and DD components can be separated by - or nothing.

Replace calendar_id with the calendar to use. See Intl.supportedValuesOf() for a list of commonly supported calendar types. Defaults to [u-ca=iso8601]. May have a critical flag by prefixing the key with !: e.g., [!u-ca=iso8601]. This flag generally tells other systems that it cannot be ignored if they don't support it. The Temporal parser will throw an error if the annotations contain two or more calendar annotations and one of them is critical. Note that the YYYY-MM-DD is always interpreted as an ISO 8601 calendar date and then converted to the specified calendar.

As an input, you may optionally include the time, offset, and time zone identifier, in the same format as PlainDateTime, but they will be ignored. Other annotations in the [key=value] format are also ignored, and they must not have the critical flag.

When serializing, you can configure whether to display the calendar ID, and whether to add a critical flag for it.

## Constructor

Creates a new Temporal.PlainMonthDay object by directly supplying the underlying data.

## Static methods

Creates a new Temporal.PlainMonthDay object from another Temporal.PlainMonthDay object, an object with month and day properties, or an RFC 9557 string.

## Instance properties

These properties are defined on Temporal.PlainMonthDay.prototype and shared by all Temporal.PlainMonthDay instances.

Returns a string representing the calendar used to interpret the internal ISO 8601 date.

The constructor function that created the instance object. For Temporal.PlainMonthDay instances, the initial value is the Temporal.PlainMonthDay() constructor.

Returns a positive integer representing the 1-based day index in the month of this date, which is the same day number you would see on a calendar. Calendar-dependent. Generally starts at 1 and is continuous, but not always.

Returns a calendar-specific string representing the month of this date. Calendar-dependent. Usually it is M plus a two-digit month number. For leap months, it is the previous month's code followed by L. If the leap month is the first month of the year, the code is M00L.

The initial value of the [Symbol.toStringTag] property is the string "Temporal.PlainMonthDay". This property is used in Object.prototype.toString().

## Instance methods

Returns true if this month-day is equivalent in value to another month-day (in a form convertible by Temporal.PlainMonthDay.from()), and false otherwise. They are compared both by their date values and their calendars.

Returns a string representing this month-day in the same RFC 9557 format as calling toString(). Intended to be implicitly called by JSON.stringify().

Returns a string with a language-sensitive representation of this month-day.

Returns a new Temporal.PlainDate object representing this month-day and a supplied year in the same calendar system.

Returns a string representing this month-day in the RFC 9557 format.

Throws a TypeError, which prevents Temporal.PlainMonthDay instances from being implicitly converted to primitives when used in arithmetic or comparison operations.

Returns a new Temporal.PlainMonthDay object representing this month-day with some fields replaced by new values.

## Examples

### Getting the next occurrence of a festival

```
// Chinese New Years are on 1/1 in the Chinese calendar
const chineseNewYear = Temporal.PlainMonthDay.from({
  monthCode: "M01",
  day: 1,
  calendar: "chinese",
});
const currentYear = Temporal.Now.plainDateISO().withCalendar("chinese").year;
let nextCNY = chineseNewYear.toPlainDate({ year: currentYear });
if (Temporal.PlainDate.compare(nextCNY, Temporal.Now.plainDateISO()) <= 0) {
  nextCNY = nextCNY.add({ years: 1 });
}
console.log(
  `The next Chinese New Year is on ${nextCNY.withCalendar("iso8601").toLocaleString()}`,
);
```

## Specifications

## Browser compatibility

## See also

- Temporal
- Temporal.PlainDate
- Temporal.PlainYearMonth

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainMonthDay
