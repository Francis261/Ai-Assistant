# Using date and time formats in HTML

Source: https://devdocs.io/html/guides/date_and_time_formats

Certain HTML elements use date and/or time values. The formats of the strings that specify these values are described in this article.

Elements that use such formats include certain forms of the <input> element that let the user choose or specify a date, time, or both, as well as the <ins> and <del> elements, whose datetime attribute specifies the date or date and time at which the insertion or deletion of content occurred.

For <input>, the type values of inputs whose value contains a string representing a date and/or time are:

- date
- datetime-local
- month
- time
- week

## Examples

Before getting into the intricacies of how date and time strings are written and parsed in HTML, here are some examples that should give you a good idea what the more commonly-used date and time string formats look like.

## Basics

Before looking at the various formats of date and time related strings used by HTML elements, it is helpful to understand a few fundamental facts about the way they're defined. HTML uses a variation of the ISO 8601 standard for its date and time strings. It's worth reviewing the descriptions of the formats you're using in order to ensure that your strings are in fact compatible with HTML, as the HTML specification includes algorithms for parsing these strings that is actually more precise than ISO 8601, so there can be subtle differences in how date and time strings are expected to look.

### Character set

Dates and times in HTML are always strings which use the ASCII character set.

### Year numbers

In order to simplify the basic format used for date strings in HTML, the specification requires that all years be given using the modern (or proleptic) Gregorian calendar. While user interfaces may allow entry of dates using other calendars, the underlying value always uses the Gregorian calendar.

While the Gregorian calendar wasn't created until the year 1582 (replacing the similar Julian calendar), for HTML's purposes, the Gregorian calendar is extended back to the year 1 C.E. Make sure any older dates account for this.

For the purposes of HTML dates, years are always at least four digits long; years prior to the year 1000 are padded with leading zeroes (0), so the year 72 is written as 0072. Years prior to the year 1 C.E. are not supported, so HTML doesn't support years 1 B.C.E. (1 B.C.) or earlier.

A year is normally 365 days long, except during leap years.

#### Leap years

A leap year is any year which is divisible by 400 or the year is divisible by 4 but not by 100. Although the calendar year is normally 365 days long, it actually takes the planet Earth approximately 365.2422 days to complete a single orbit around the sun. Leap years help to adjust the calendar to keep it synchronized with the actual position of the planet in its orbit. Adding a day to the year every four years essentially makes the average year 365.25 days long, which is close to correct.

The adjustments to the algorithm (taking a leap year when the year can be divided by 400, and skipping leap years when the year is divisible by 100) help to bring the average even closer to the correct number of days (365.2425 days). Scientists occasionally add leap seconds to the calendar (seriously) to handle the remaining three ten-thousandths of a day and to compensate for the gradual, naturally occurring slowing of Earth's rotation.

While month 02, February, normally has 28 days, it has 29 days in leap years.

### Months of the year

There are 12 months in the year, numbered 1 through 12. They are always represented by a two-digit ASCII string whose value ranges from 01 through 12. See the table in the section Days of the month for the month numbers and their corresponding names (and lengths in days).

### Days of the month

Month numbers 1, 3, 5, 7, 8, 10, and 12 are 31 days long. Months 4, 6, 9, and 11 are 30 days long. Month 2, February, is 28 days long most years, but is 29 days long in leap years. This is detailed in the following table.

## Week strings

A week string specifies a week within a particular year. A valid week string consists of a valid year number, followed by a hyphen character (-, or U+002D), then the capital letter W (U+0057), followed by a two-digit week of the year value.

The week of the year is a two-digit string between 01 and 53. Each week begins on Monday and ends on Sunday. That means it's possible for the first few days of January to be considered part of the previous week-year, and for the last few days of December to be considered part of the following week-year. The first week of the year is the week that contains the first Thursday of the year. For example, the first Thursday of 1953 was on January 1, so that week—beginning on Monday, December 29—is considered the first week of the year. Therefore, December 30, 1952 occurs during the week 1953-W01.

A year has 53 weeks if:

- The first day of the calendar year (January 1) is a Thursday or
- The first day of the year (January 1) is a Wednesday and the year is a leap year

All other years have 52 weeks.

Note that both the year and week numbers are padded with leading zeroes, with the year padded to four digits and the week to two.

## Month strings

A month string represents a specific month in time, rather than a generic month of the year. That is, rather than representing "January," an HTML month string represents a month and year paired, like "January 1972."

A valid month string consists of a valid year number (a string of at least four digits), followed by a hyphen character (-, or U+002D), followed by a two-digit numeric month number, where 01 represents January and 12 represents December.

Notice that all years are at least four characters long; years that are fewer than four digits long are padded with leading zeroes.

## Date strings

A valid date string consists of a month string, followed by a hyphen character (-, or U+002D), followed by a two-digit day of the month.

## Time strings

A time string can specify a time with precision to the minute, second, or to the millisecond. Specifying only the hour or minute isn't permitted. A valid time string minimally consists of a two-digit hour followed by a colon (:, U+003A), then a two-digit minute. The minute may optionally be followed by another colon and a two-digit number of seconds. Milliseconds may be specified, optionally, by adding a decimal point character (., U+002E) followed by one, two, or three digits.

There are some additional basic rules:

- The hour is always specified using the 24-hour clock, with 00 being midnight and 11 PM being 23. No values outside the range 00 – 23 are permitted.
- The minute must be a two-digit number between 00 and 59. No values outside that range are allowed.
- If the number of seconds is omitted (to specify a time accurate only to the minute), no colon should follow the number of minutes.
- If specified, the integer portion of the number of seconds must be between 00 and 59. You cannot specify leap seconds by using values like 60 or 61.
- If the number of seconds is specified and is an integer, it must not be followed by a decimal point.
- If a fraction of a second is included, it may be from one to three digits long, indicating the number of milliseconds. It follows the decimal point placed after the seconds component of the time string.

## Local date and time strings

A valid datetime-local string consists of a date string and a time string concatenated together with either the letter T or a space character separating them. No information about the time zone is included in the string; the date and time is presumed to be in the user's local time zone.

When you set the value of a datetime-local input, the string is normalized into a standard form. Normalized datetime strings always use the letter T to separate the date and the time, and the time portion of the string is as short as possible. This is done by leaving out the seconds component if its value is :00.

1986-01-28T11:38:00.01

Note that after normalization, this is the same string as the previous datetime-local string. The space has been replaced with the T character and the trailing zero in the fraction of a second has been removed to make the string as short as possible.

0170-07-31T22:00

Note that the normalized form of this date drops the :00 indicating the number of seconds to be zero, because the seconds are optional when zero, and the normalized string minimizes the length of the string.

## Global date and time strings

A global date and time string specifies a date and time as well as the time zone in which it occurs. A valid global date and time string is the same format as a local date and time string, except it has a time zone string appended to the end, following the time.

### Time zone offset string

A time zone offset string specifies the offset in either a positive or a negative number of hours and minutes from the standard time base. There are two standard time bases, which are very close to the same, but not exactly the same:

- For dates after the establishment of Coordinated Universal Time (UTC) in the early 1960s, the time base is Z and the offset indicates a particular time zone's offset from the time at the prime meridian at 0º longitude (which passes through the Royal Observatory at Greenwich, England).
- For dates prior to UTC, the time base is instead expressed in terms of UT1, which is the contemporary Earth solar time at the prime meridian.

The time zone string is appended immediately following the time in the date and time string. You can specify Z as the time zone offset string to indicate that the time is specified in UTC. Otherwise, the time zone string is constructed as follows:

1. A character indicating the sign of the offset: the plus character (+, or U+002B) for time zones to the east of the prime meridian or the minus character (-, or U+002D) for time zones to the west of the prime meridian.
2. A two-digit number of hours that the time zone is offset from the prime meridian. This value must be between 00 and 23.
3. An optional colon (:) character.
4. A two-digit number of minutes past the hour; this value must be between 00 and 59.

While this format allows for time zones between -23:59 and +23:59, the current range of time zone offsets is -12:00 to +14:00, and no time zones are currently offset from the hour by anything other than 00, 30, or 45 minutes. This may change at more or less anytime, since countries are free to tamper with their time zones at any time and in any way they wish to do so.

## Date issues

Because of data storage and precision issues, you may want to be aware of a few client-side and server-side issues.

### The Y2K38 Problem (often server-side)

JavaScript uses double precision floating points to store dates, as with all numbers, meaning that JavaScript code will not suffer from the Y2K38 problem unless integer coercion/bit-hacks are used because all JavaScript bit operators use 32-bit signed 2s-complement integers.

The problem is with the server side of things: storage of dates greater than 2^31 - 1. To fix this problem, you must store all dates using either unsigned 32-bit integers, signed 64-bit integers, or double-precision floating points on the server. If your server is written in PHP, the fix may require upgrading your PHP to a more recent version, and upgrading your hardware to x86_64 or IA64. If you are stuck with other hardware, you can try to emulate 64-bit hardware inside a 32-bit virtual machine, but most VMs don't support this kind of virtualization, since stability may suffer, and performance will definitely suffer greatly.

### The Y10k Problem (often client-side)

In many servers, dates are stored as numbers instead of as strings--numbers of a fixed size and agnostic of format (aside from endianness). After the year 10,000, those numbers will just be a bit bigger than before, so many servers will not see issues with forms submitted after the year 10,000.

The problem is with the client side of things: parsing of dates with more than 4 digits in the year.

```
<!--midnight of January 1st, 10000: the exact time of Y10K-->
<input type="datetime-local" value="+010000-01-01T05:00" />
```

We need to prepare our code for any number of digits — not just 5. The following JavaScript function programmatically sets the value:

```
function setValue(element, date) {
  const isoString = date.toISOString();
  element.value = isoString.substring(0, isoString.indexOf("T") + 6);
}
```

Why worry about the Y10K problem if it is going to happen many centuries after your death? Exactly because you will already be dead, so the companies using your software will be stuck using your software without any other coder who knows the system well enough to come in and fix it.

## See also

- <input>
- <ins> and <del>: see the datetime attribute, which specifies either a date or a local date and time at which the content was inserted or deleted
- The ISO 8601 specification
- Representing dates & times in the JavaScript Guide
- The JavaScript Date object
- The Intl.DateTimeFormat object for formatting dates and times for a given locale

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Date_and_time_formats
