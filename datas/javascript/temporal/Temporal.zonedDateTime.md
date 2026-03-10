# Temporal.ZonedDateTime

Source: https://devdocs.io/javascript/global_objects/temporal/zoneddatetime

The Temporal.ZonedDateTime object represents a date and time with a time zone. It is fundamentally represented as a combination of an instant, a time zone, and a calendar system.

## Description

A ZonedDateTime functions as a bridge between an exact time and a wall-clock time: it simultaneously represents an instant in history (like a Temporal.Instant) and a local, wall-clock time (like a Temporal.PlainDateTime). It does so by storing the instant, the time zone, and the calendar system. The time zone is used to convert between the instant and the local time, and the calendar system is used to interpret the local time.

ZonedDateTime is the only Temporal class that is time zone-aware. The addition of a time zone makes ZonedDateTime objects have important behavior differences from Temporal.PlainDateTime objects. Namely, you can no longer assume that "the time 1 minute afterwards" is the same every day, or that a day has 24 hours. In the worst case, an entire day may be missing from the local calendar. Below, we offer a quick overview of time zones and offsets and how they affect conversion between UTC time and local time.

### Time zones and offsets

All times in JavaScript have one golden standard: the UTC time, which increments continuously and uniformly as physical time progresses. By contrast, users are more interested in their local time, which is the time they read on their calendars and clocks. The process of converting between UTC time and local time involves a time zone offset, which is calculated as:

```
local time = UTC time + offset
```

For example, if the UTC time is 1970-01-01T00:00:00, and the offset is "-05:00", then the local time is:

```
1970-01-01T00:00:00 + -05:00 = 1969-12-31T19:00:00
```

By suffixing this local time with the offset, thus expressing this time as "1969-12-31T19:00:00-05:00", it can now be unambiguously understood as an instant in history.

To know the offset, we need two pieces of information, the time zone, and the instant. The time zone is a region on Earth where the same offset is used at all times. Two clocks in the same time zone will always show the same time simultaneously, but the offset is not necessarily constant: that is, these clocks' times may change abruptly. This commonly happens during daylight saving time transitions, where the offset changes by an hour, which happens twice a year. Offsets can also change permanently due to political changes, e.g., a country switching time zones.

The time zones are stored in the IANA Time Zone Database. Each IANA time zone has:

- A primary time zone identifier that uniquely identifies the time zone. It usually refers to a geographic area anchored by a city (e.g., Europe/Paris or Africa/Kampala), but can also denote single-offset time zones like UTC (a consistent +00:00 offset) or Etc/GMT+5 (which for historical reasons is a negative offset -05:00). For historical reasons, the primary name for the UTC time zone is UTC, though in IANA it is Etc/UTC.
- A time zone definition in the form of a table that maps UTC date/time ranges (including future ranges) to specific offsets.
- Zero or more non-primary time zone identifiers that are aliases to the primary time zone identifier. These are usually historical names that are no longer in use, but are kept for compatibility reasons. See below for more information.

As input, named identifiers are matched case-insensitively. Internally, they are stored in their preferred case, and non-primary identifiers will not be converted to their primary identifier.

Note: When setting the time zone name, you rarely want to set it to "UTC". ZonedDateTime is intended to be displayed to users, but no human lives in the "UTC" time zone. If you don't know the time zone at construction time but know the wall-clock time, use a Temporal.PlainDateTime. If you know the exact instant, use a Temporal.Instant.

When a Temporal API accepts a time zone identifier, in addition to primary time zone identifiers and non-primary time zone identifiers, it also accepts an offset time zone identifier, which is in the same form as the offset, except subminute precision is not allowed. For example, +05:30, -08, +0600 are all valid offsets identifiers. Internally, offset identifiers are stored in the ±HH:mm form.

Note: Avoid using offset identifiers if there is a named time zone you can use instead. Even if a region has always used a single offset, it is better to use the named identifier to guard against future political changes to the offset.

If a region uses (or has used) multiple offsets, then using its named time zone is even more important. This is because Temporal.ZonedDateTime can use methods like add or with to create new instances at a different instant. If those derived instances correspond to an instant that uses a different offset (for example, after a Daylight Saving Time transition) then your calculations will have an incorrect local time. Using a named time zone ensures that local dates and times are always adjusted for the correct offset for that instant.

For convenience, when providing a time zone identifier to Temporal APIs such as Temporal.ZonedDateTime.prototype.withTimeZone() and the timeZoneId option of Temporal.ZonedDateTime.from(), you can provide it in a few other forms:

- As another ZonedDateTime instance, whose timeZoneId will be used.
- As an RFC 9557 string with a time zone annotation, whose time zone identifier will be used.
- As an ISO 8601 / RFC 3339 string containing an offset, whose offset will be used as an offset identifier; or, if using Z, then the "UTC" time zone is used. This usage is generally not recommended, because as discussed above, offset identifiers lack the ability to safely derive other Temporal.ZonedDateTime instances across an offset transition like when daylight saving time starts or ends. Instead, consider just using Temporal.Instant or fetching the user's actual named time zone.

The IANA time zone database changes from time to time, usually to add new time zones in response to political changes. However, on rare occasions, IANA time zone identifiers are renamed to match updated English translation of a city name or to update outdated naming conventions. For example, here are a few notable name changes:

Historically, these renames caused problems for programmers because the Unicode CLDR database (a library used by browsers rely on to supply time zone identifiers and data) did not follow IANA's renaming for stability reasons. As a result, some browsers like Chrome and Safari reported CLDR's outdated identifiers, while other browsers like Firefox overrode CLDR's defaults and reported the up-to-date primary identifiers.

With the introduction of Temporal, this behavior is now more standardized:

- CLDR data now includes an "_iana" attribute that indicates the most up-to-date identifier if the older, stable identifier has been renamed. Browsers can use this new attribute to provide up-to-date identifiers to callers.
- Time zone identifiers provided by the programmer will never be replaced with an alias. For example, if the caller provides Asia/Calcutta or Asia/Kolkata as the identifier input to Temporal.ZonedDateTime.from(), then the same identifier is returned in the resulting instance's timeZoneId. Note that the letter case of outputs are normalized to match IANA, so that ASIA/calCuTTa as input generates a timeZoneId of Asia/Calcutta as output.
- When a time zone identifier is not provided by a caller but is instead sourced from the system itself (for example, when using Temporal.Now.timeZoneId()), modern identifiers are returned in all browsers. For city renames, there is a two-year lag before these system-provided-identifier APIs expose the new name, thereby giving other components (like a Node server) time to update their copies of the IANA database to recognize the new name.

Note that the attribution of primary identifiers preserves the country code: for example, the IANA database records Atlantic/Reykjavik as an alias for Africa/Abidjan, but because they correspond to different countries (Iceland and Côte d'Ivoire, respectively), they are treated as distinct primary identifiers.

This standardization applies outside of Temporal as well. For example, the timeZone option returned by Intl.DateTimeFormat.prototype.resolvedOptions() is also never replaced with an alias, though browsers have traditionally canonicalized these identifiers prior to standardization by Temporal. On the other hand, Intl.Locale.prototype.getTimeZones() and Intl.supportedValuesOf() (timeZone option) will return the most up-to-date identifier, while some browsers used to return the old, non-primary identifier.

### RFC 9557 format

ZonedDateTime objects can be serialized and parsed using the RFC 9557 format, an extension to the ISO 8601 / RFC 3339 format. The string has the following form (spaces are only for readability and should not be present in the actual string):

```
YYYY-MM-DD T HH:mm:ss.sssssssss Z/±HH:mm [time_zone_id] [u-ca=calendar_id]
```

Either a four-digit number, or a six-digit number with a + or - sign.

A two-digit number from 01 to 12.

A two-digit number from 01 to 31. The YYYY, MM, and DD components can be separated by - or nothing.

The date-time separator, which can be T, t, or a space. Present if and only if HH is present.

A two-digit number from 00 to 23. Defaults to 00.

A two-digit number from 00 to 59. Defaults to 00.

A two-digit number from 00 to 59. May optionally be followed by a . or , and one to nine digits. Defaults to 00. The HH, mm, and ss components can be separated by : or nothing. You can omit either just ss or both ss and mm, so the time can be one of three forms: HH, HH:mm, or HH:mm:ss.sssssssss.

Either the UTC designator Z or z, or an offset from UTC in the form + or - followed by the same format as the time component. Note that subminute precision (:ss.sssssssss) may be unsupported by other systems, and is accepted but never output. If omitted, the offset is derived from the time zone identifier. If present, then the time must be provided too. Z is not the same as +00:00: the former means that the time is given in UTC form regardless of the time zone identifier, while the latter means that the time is given in local time which happens to be UTC+0, and will be validated against the time zone identifier via the offset option.

Replace time_zone_id with the time zone identifier (named or offset) as described above. May have a critical flag by prefixing the identifier with !: e.g., [!America/New_York]. This flag generally tells other systems that it cannot be ignored if they don't support it. Note that it is required for Temporal.ZonedDateTime.from(): omitting it causes a RangeError. If you want to parse ISO 8601 / RFC 3339 strings without time zone identifier annotations, use Temporal.Instant.from() instead.

Replace calendar_id with the calendar to use. See Intl.supportedValuesOf() for a list of commonly supported calendar types. Defaults to [u-ca=iso8601]. May have a critical flag by prefixing the key with !: e.g., [!u-ca=iso8601]. This flag generally tells other systems that it cannot be ignored if they don't support it. The Temporal parser will throw an error if the annotations contain two or more calendar annotations and one of them is critical. Note that the YYYY-MM-DD is always interpreted as an ISO 8601 calendar date and then converted to the specified calendar.

As an input, other annotations in the [key=value] format are ignored, and they must not have the critical flag.

When serializing, you can configure the fractional second digits, whether to display the offset/time zone ID/calendar ID, and whether to add a critical flag for the annotations.

### Ambiguity and gaps from local time to UTC time

Given a time zone, conversion from UTC to local time is straightforward: you first get the offset using the time zone name and the instant, then add the offset to the instant. The reverse is not true: conversion from local time to UTC time, without an explicit offset, is ambiguous, because one local time can correspond to zero, one, or many UTC times. Consider the most common cause: daylight saving time transitions. Take New York as an example. Its standard offset is UTC-5, but during DST, all clocks are set forward by an hour, so the offset becomes UTC-4. In the US, transitions happen at 2:00 AM local time, so consider these two transition days:

As you can see, in March, one hour disappeared from the local time, and in November, we have two hours that have the same wall-clock time. Suppose that we stored a PlainDateTime that says "2024-03-10T02:05:00", and we want to interpret it in the America/New_York time zone, there will be no time that corresponds to it, while a PlainDateTime that says "2024-11-03T01:05:00" can correspond to two different instants.

When constructing a ZonedDateTime from a local time (using Temporal.ZonedDateTime.from(), Temporal.ZonedDateTime.prototype.with(), Temporal.PlainDateTime.prototype.toZonedDateTime()), the behavior for ambiguity and gaps is configurable via the disambiguation option:

If there are two possible instants, choose the earlier one. If there is a gap, go back by the gap duration.

If there are two possible instants, choose the later one. If there is a gap, go forward by the gap duration.

Same behavior as Date: use later for gaps and earlier for ambiguities.

Throw a RangeError whenever there is an ambiguity or a gap.

There are several cases where there's no ambiguity when constructing a ZonedDateTime:

- If the time is specified in UTC via the Z offset.
- If the offset is explicitly provided and used (see below).

### Offset ambiguity

We already demonstrated how ambiguity may arise from interpreting a local time in a time zone, without providing an explicit offset. However, if you provide an explicit offset, then another conflict arises: between the offset as specified, and the offset as calculated from the time zone and the local time. This is an unavoidable real-world issue: if you store a time in the future, with an anticipated offset, then before that time comes, the time zone definition may have changed due to political reasons. For example, suppose in 2018, we set a reminder at the time 2019-12-23T12:00:00-02:00[America/Sao_Paulo] (which is a daylight saving time; Brazil is in the southern hemisphere, so it enters DST in October and exits in February). But before that time comes, in early 2019, Brazil decides to stop observing DST, so the real offset becomes -03:00. Should the reminder now still fire at noon (keeping the local time), or should it fire at 11:00 AM (keeping the exact time)?

When constructing a ZonedDateTime with Temporal.ZonedDateTime.from() or when updating it using the with() method, the behavior for offset ambiguity is configurable via the offset option:

Use the offset to calculate the exact time. This option "uses" the offset when determining the instant represented by the string, which will be the same instant originally calculated when we stored the time, even if the offset at that instant has changed. The time zone identifier is still used to then infer the (possibly updated) offset and use that offset to convert the exact time to local time.

Use the time zone identifier to re-calculate the offset, ignoring the offset that's specified in the string. This option keeps the same local time as originally calculated when we stored the time, but may correspond to a different instant. Note that this option may cause the same local time interpretation ambiguity as demonstrated above, which is resolved using the disambiguation option.

Throw a RangeError whenever there is a conflict between the offset and the time zone identifier. This is the default for Temporal.ZonedDateTime.from().

Use the offset if it's valid, otherwise calculate the offset from the time zone identifier. This is the default for Temporal.ZonedDateTime.prototype.with() (see the method for more details). This is different from ignore because in the case of local time ambiguity, the offset is used to resolve it rather than the disambiguation option.

Note that the Z offset is not equivalent to +00:00. The Z offset means "the time in UTC is known, but the offset to local time is unknown", as per RFC 9557. When the time string uses the Z offset, the offset option is ignored, and the offset is derived from the time zone ID. On the other hand, the +00:00 offset is interpreted as a local time offset that happens to match UTC and is validated against the time zone ID.

Note: Although Temporal.Instant.from() also takes an RFC 9557 string in the same form, there is no ambiguity because it always ignores the time zone identifier and reads the offset only.

## Constructor

Creates a new Temporal.ZonedDateTime object by directly supplying the underlying data.

## Static methods

Returns a number (-1, 0, or 1) indicating whether the first date-time comes before, is the same as, or comes after the second date-time. Equivalent to comparing the epochNanoseconds of the two date-times.

Creates a new Temporal.ZonedDateTime object from another Temporal.ZonedDateTime object, an object with date, time, and time zone properties, or an RFC 9557 string.

## Instance properties

These properties are defined on Temporal.ZonedDateTime.prototype and shared by all Temporal.ZonedDateTime instances.

Returns a string representing the calendar used to interpret the internal ISO 8601 date.

The constructor function that created the instance object. For Temporal.ZonedDateTime instances, the initial value is the Temporal.ZonedDateTime() constructor.

Returns a positive integer representing the 1-based day index in the month of this date, which is the same day number you would see on a calendar. Calendar-dependent. Generally starts at 1 and is continuous, but not always.

Returns a positive integer representing the 1-based day index in the week of this date. Days in a week are numbered sequentially from 1 to daysInWeek, with each number mapping to its name. Calendar-dependent. 1 usually represents Monday in the calendar, even when locales using the calendar may consider a different day as the first day of the week (see Intl.Locale.prototype.getWeekInfo()).

Returns a positive integer representing the 1-based day index in the year of this date. The first day of this year is 1, and the last day is the daysInYear. Calendar-dependent.

Returns a positive integer representing the number of days in the month of this date. Calendar-dependent.

Returns a positive integer representing the number of days in the week of this date. Calendar-dependent. For the ISO 8601 calendar, this is always 7, but in other calendar systems it may differ from week to week.

Returns a positive integer representing the number of days in the year of this date. Calendar-dependent. For the ISO 8601 calendar, this is 365, or 366 in a leap year.

Returns an integer representing the number of milliseconds elapsed since the Unix epoch (midnight at the beginning of January 1, 1970, UTC) to this instant. Equivalent to dividing epochNanoseconds by 1e6 and flooring the result.

Returns a BigInt representing the number of nanoseconds elapsed since the Unix epoch (midnight at the beginning of January 1, 1970, UTC) to this instant.

Returns a calendar-specific lowercase string representing the era of this date, or undefined if the calendar does not use eras (e.g., ISO 8601). era and eraYear together uniquely identify a year in a calendar, in the same way that year does. Calendar-dependent. For Gregorian, it is either "gregory" or "gregory-inverse".

Returns a non-negative integer representing the year of this date within the era, or undefined if the calendar does not use eras (e.g., ISO 8601). The year index usually starts from 1 (more common) or 0, and years in an era can decrease with time (e.g., Gregorian BCE). era and eraYear together uniquely identify a year in a calendar, in the same way that year does. Calendar-dependent.

Returns an integer from 0 to 23 representing the hour component of this time.

Returns a positive integer representing the number of hours in the day of this date in the time zone. It may be more or less than 24 in the case of offset changes such as daylight saving time.

Returns a boolean indicating whether this date is in a leap year. A leap year is a year that has more days (due to a leap day or leap month) than a common year. Calendar-dependent.

Returns an integer from 0 to 999 representing the microsecond (10-6 second) component of this time.

Returns an integer from 0 to 999 representing the millisecond (10-3 second) component of this time.

Returns an integer from 0 to 59 representing the minute component of this time.

Returns a positive integer representing the 1-based month index in the year of this date. The first month of this year is 1, and the last month is the monthsInYear. Calendar-dependent. Note that unlike Date.prototype.getMonth(), the index is 1-based. If the calendar has leap months, then the month with the same monthCode may have different month indexes for different years.

Returns a calendar-specific string representing the month of this date. Calendar-dependent. Usually it is M plus a two-digit month number. For leap months, it is the previous month's code followed by L. If the leap month is the first month of the year, the code is M00L.

Returns a positive integer representing the number of months in the year of this date. Calendar-dependent. For the ISO 8601 calendar, this is always 12, but in other calendar systems it may differ.

Returns an integer from 0 to 999 representing the nanosecond (10-9 second) component of this time.

Returns a string representing the offset used to interpret the internal instant, in the form ±HH:mm (or ±HH:mm:ss.sssssssss with as much subminute precision as necessary).

Returns an integer representing the offset used to interpret the internal instant, as a number of nanoseconds (positive or negative).

Returns an integer from 0 to 59 representing the second component of this time.

Returns a string representing the time zone identifier used to interpret the internal instant. It uses the same string used when constructing the Temporal.ZonedDateTime object, which is either an IANA time zone name or a fixed offset.

Returns a positive integer representing the 1-based week index in the yearOfWeek of this date, or undefined if the calendar does not have a well-defined week system. The first week of the year is 1. Calendar-dependent. Note that for ISO 8601, the first and last few days of the year may be attributed to the last week of the previous year or the first week of the next year.

Returns an integer representing the number of years of this date relative to the start of a calendar-specific epoch year. Calendar-dependent. Usually year 1 is either the first year of the latest era or the ISO 8601 year 0001. If the epoch is in the middle of the year, that year will have the same value before and after the start date of the era.

Returns an integer representing the year to be paired with the weekOfYear of this date, or undefined if the calendar does not have a well-defined week system. Calendar-dependent. Usually this is the year of the date, but for ISO 8601, the first and last few days of the year may be attributed to the last week of the previous year or the first week of the next year, causing the yearOfWeek to differ by 1.

The initial value of the [Symbol.toStringTag] property is the string "Temporal.ZonedDateTime". This property is used in Object.prototype.toString().

## Instance methods

Returns a new Temporal.ZonedDateTime object representing this date-time moved forward by a given duration (in a form convertible by Temporal.Duration.from()).

Returns true if this date-time is equivalent in value to another date-time (in a form convertible by Temporal.ZonedDateTime.from()), and false otherwise. They are compared both by their instant values, time zones, and their calendars, so two date-times from different calendars or time zones may be considered equal by Temporal.ZonedDateTime.compare() but not by equals().

Returns a Temporal.ZonedDateTime object representing the first instant after or before this instant at which the time zone's UTC offset changes, or null if there is no such transition. This is useful for finding out the offset rules of a time zone, such as its daylight saving time pattern.

Returns a new Temporal.ZonedDateTime object representing this date-time rounded to the given unit.

Returns a new Temporal.Duration object representing the duration from another date-time (in a form convertible by Temporal.ZonedDateTime.from()) to this date-time. The duration is positive if the other date-time is before this date-time, and negative if after.

Returns a Temporal.ZonedDateTime object representing the first instant of this date in the time zone. It usually has a time of 00:00:00, but may be different if the midnight doesn't exist due to offset changes, in which case the first time that exists is returned.

Returns a new Temporal.ZonedDateTime object representing this date-time moved backward by a given duration (in a form convertible by Temporal.Duration.from()).

Returns a new Temporal.Instant object representing the instant of this date-time.

Returns a string representing this date-time in the same RFC 9557 format as calling toString(). Intended to be implicitly called by JSON.stringify().

Returns a string with a language-sensitive representation of this date-time.

Returns a new Temporal.PlainDate object representing the date portion of this date-time.

Returns a new Temporal.PlainDateTime object representing the date and time portions of this date-time. Only the time zone information is removed.

Returns a new Temporal.PlainTime object representing the time portion of this date-time.

Returns a string representing this date-time in the RFC 9557 format.

Returns a new Temporal.Duration object representing the duration from this date-time to another date-time (in a form convertible by Temporal.ZonedDateTime.from()). The duration is positive if the other date-time is after this date-time, and negative if before.

Throws a TypeError, which prevents Temporal.ZonedDateTime instances from being implicitly converted to primitives when used in arithmetic or comparison operations.

Returns a new Temporal.ZonedDateTime object representing this date-time with some fields replaced by new values.

Returns a new Temporal.ZonedDateTime object representing this date-time interpreted in the new calendar system.

Returns a new Temporal.ZonedDateTime object representing this date-time with the time part entirely replaced by the new time (in a form convertible by Temporal.PlainTime.from())

Returns a new Temporal.ZonedDateTime object representing the same instant as this date-time but in the new time zone.

## Specifications

## Browser compatibility

## See also

- Temporal
- Temporal.Duration
- Temporal.Instant
- Temporal.PlainDateTime
- Temporal.PlainDate
- Temporal.PlainTime

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime
