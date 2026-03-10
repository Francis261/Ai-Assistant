# cal_to_jd

Source: https://devdocs.io/php/function.cal-to-jd

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

cal_to_jd — Converts from a supported calendar to Julian Day Count

### Description

```
cal_to_jd(
 int $calendar,
 int $month,
 int $day,
 int $year
): int
```

cal_to_jd() calculates the Julian day count for a date in the specified calendar. Supported calendars are CAL_GREGORIAN, CAL_JULIAN, CAL_JEWISH and CAL_FRENCH.

### Parameters

Calendar to convert from, one of CAL_GREGORIAN, CAL_JULIAN, CAL_JEWISH or CAL_FRENCH.

The month as a number, the valid range depends on the calendar

The day as a number, the valid range depends on the calendar

The year as a number, the valid range depends on the calendar

### Return Values

A Julian Day number.

### See Also

- cal_from_jd() - Converts from Julian Day Count to a supported calendar
- frenchtojd() - Converts a date from the French Republican Calendar to a Julian Day Count
- gregoriantojd() - Converts a Gregorian date to Julian Day Count
- jewishtojd() - Converts a date in the Jewish Calendar to Julian Day Count
- juliantojd() - Converts a Julian Calendar date to Julian Day Count
- unixtojd() - Convert Unix timestamp to Julian Day

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.cal-to-jd.php
