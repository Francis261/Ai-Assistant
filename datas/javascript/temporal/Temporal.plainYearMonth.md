# Temporal.PlainYearMonth

Source: https://devdocs.io/javascript/global_objects/temporal/plainyearmonth

The Temporal.PlainYearMonth object represents the year and month of a calendar date, without a day or time zone; for example, an event on a calendar that happens during the whole month. It is fundamentally represented as an ISO 8601 calendar date, with year, month, and day fields, and an associated calendar system. The day is used to disambiguate the year-month in non-ISO calendar systems.

## Description

A PlainYearMonth is essentially the year-month part of a Temporal.PlainDate object, without the day.

### RFC 9557 format

PlainYearMonth objects can be serialized and parsed using the RFC 9557 format, an extension to the ISO 8601 / RFC 3339 format. The string has the following form (spaces are only for readability and should not be present in the actual string):

```
YYYY-MM-DD [u-ca=calendar_id]
```

Either a four-digit number, or a six-digit number with a + or - sign.

A two-digit number from 01 to 12.

A two-digit number from 01 to 31. It is required for non-ISO calendars, and optional otherwise. If omitted, the string looks like YYYY-MM or YYYYMM. Note that the reference day actually stored may be different from the one you provide, but the represented year-month is the same. See Temporal.PlainYearMonth.from() for more information. The YYYY, MM, and DD components can be separated by - or nothing.

Replace calendar_id with the calendar to use. See Intl.supportedValuesOf() for a list of commonly supported calendar types. Defaults to [u-ca=iso8601]. May have a critical flag by prefixing the key with !: e.g., [!u-ca=iso8601]. This flag generally tells other systems that it cannot be ignored if they don't support it. The Temporal parser will throw an error if the annotations contain two or more calendar annotations and one of them is critical. Note that the YYYY-MM-DD is always interpreted as an ISO 8601 calendar date and then converted to the specified calendar.

As an input, you may optionally include the time, offset, and time zone identifier, in the same format as PlainDateTime, but they will be ignored. Other annotations in the [key=value] format are also ignored, and they must not have the critical flag.

When serializing, you can configure whether to display the calendar ID, and whether to add a critical flag for it.

## Constructor

Creates a new Temporal.PlainYearMonth object by directly supplying the underlying data.

## Static methods

Returns a number (-1, 0, or 1) indicating whether the first year-month comes before, is the same as, or comes after the second year-month. Equivalent to comparing their underlying ISO 8601 dates. Two year-months from different calendars may be considered equal if they start on the same ISO date.

Creates a new Temporal.PlainYearMonth object from another Temporal.PlainYearMonth object, an object with year and month properties, or an RFC 9557 string.

## Instance properties

These properties are defined on Temporal.PlainYearMonth.prototype and shared by all Temporal.PlainYearMonth instances.

Returns a string representing the calendar used to interpret the internal ISO 8601 date.

The constructor function that created the instance object. For Temporal.PlainYearMonth instances, the initial value is the Temporal.PlainYearMonth() constructor.

Returns a positive integer representing the number of days in the month of this date. Calendar-dependent.

Returns a positive integer representing the number of days in the year of this date. Calendar-dependent. For the ISO 8601 calendar, this is 365, or 366 in a leap year.

Returns a calendar-specific lowercase string representing the era of this year-month, or undefined if the calendar does not use eras (e.g., ISO 8601). era and eraYear together uniquely identify a year in a calendar, in the same way that year does. Calendar-dependent. For Gregorian, it is either "gregory" or "gregory-inverse".

Returns a non-negative integer representing the year of this year-month within the era, or undefined if the calendar does not use eras (e.g., ISO 8601). The year index usually starts from 1 (more common) or 0, and years in an era can decrease with time (e.g., Gregorian BCE). era and eraYear together uniquely identify a year in a calendar, in the same way that year does. Calendar-dependent.

Returns a boolean indicating whether this year-month is in a leap year. A leap year is a year that has more days (due to a leap day or leap month) than a common year. Calendar-dependent.

Returns a positive integer representing the 1-based month index in the year of this year-month. The first month of this year is 1, and the last month is the monthsInYear. Calendar-dependent. Note that unlike Date.prototype.getMonth(), the index is 1-based. If the calendar has leap months, then the month with the same monthCode may have different month indexes for different years.

Returns a calendar-specific string representing the month of this year-month. Calendar-dependent. Usually it is M plus a two-digit month number. For leap months, it is the previous month's code followed by L. If the leap month is the first month of the year, the code is M00L.

Returns a positive integer representing the number of months in the year of this date. Calendar-dependent. For the ISO 8601 calendar, this is always 12, but in other calendar systems it may differ.

Returns an integer representing the number of years of this year-month relative to the start of a calendar-specific epoch year. Calendar-dependent. Usually year 1 is either the first year of the latest era or the ISO 8601 year 0001. If the epoch is in the middle of the year, that year will have the same value before and after the start date of the era.

The initial value of the [Symbol.toStringTag] property is the string "Temporal.PlainYearMonth". This property is used in Object.prototype.toString().

## Instance methods

Returns a new Temporal.PlainYearMonth object representing this year-month moved forward by a given duration (in a form convertible by Temporal.Duration.from()).

Returns true if this year-month is equivalent in value to another year-month (in a form convertible by Temporal.PlainYearMonth.from()), and false otherwise. They are compared both by their underlying ISO date values and their calendars, so two year-months from different calendars may be considered equal by Temporal.PlainYearMonth.compare() but not by equals().

Returns a new Temporal.Duration object representing the duration from another year-month (in a form convertible by Temporal.PlainYearMonth.from()) to this year-month. The duration is positive if the other month is before this month, and negative if after.

Returns a new Temporal.PlainYearMonth object representing this year-month moved backward by a given duration (in a form convertible by Temporal.Duration.from()).

Returns a string representing this year-month in the same RFC 9557 format as calling toString(). Intended to be implicitly called by JSON.stringify().

Returns a string with a language-sensitive representation of this year-month.

Returns a new Temporal.PlainDate object representing this year-month and a supplied day in the same calendar system.

Returns a string representing this year-month in the RFC 9557 format.

Returns a new Temporal.Duration object representing the duration from this year-month to another year-month (in a form convertible by Temporal.PlainYearMonth.from()). The duration is positive if the other month is after this month, and negative if before.

Throws a TypeError, which prevents Temporal.PlainYearMonth instances from being implicitly converted to primitives when used in arithmetic or comparison operations.

Returns a new Temporal.PlainYearMonth object representing this year-month with some fields replaced by new values.

## Specifications

## Browser compatibility

## See also

- Temporal
- Temporal.PlainDate
- Temporal.PlainMonthDay

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainYearMonth
