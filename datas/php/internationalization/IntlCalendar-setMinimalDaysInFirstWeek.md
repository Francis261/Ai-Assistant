# IntlCalendar::setMinimalDaysInFirstWeek

Source: https://devdocs.io/php/intlcalendar.setminimaldaysinfirstweek

(PHP 5 >= 5.5.1, PHP 7, PHP 8)

IntlCalendar::setMinimalDaysInFirstWeek — Set minimal number of days the first week in a year or month can have

### Description

Object-oriented style

```
public IntlCalendar::setMinimalDaysInFirstWeek(int $days): true
```

Procedural style

```
intlcal_set_minimal_days_in_first_week(IntlCalendar $calendar, int $days): true
```

Sets the smallest number of days the first week of a year or month must have in the new year or month. For instance, in the Gregorian calendar, if this value is 1, then the first week of the year will necessarily include January 1st, while if this value is 7, then the week with January 1st will be the first week of the year only if the day of the week for January 1st matches the day of the week returned by IntlCalendar::getFirstDayOfWeek(); otherwise it will be the previous yearʼs last week.

### Parameters

An IntlCalendar instance.

The number of minimal days to set.

### Return Values

Always returns true.

### Errors/Exceptions

ValueError if days is out of range (less than 1 or more than 7).

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.setminimaldaysinfirstweek.php
