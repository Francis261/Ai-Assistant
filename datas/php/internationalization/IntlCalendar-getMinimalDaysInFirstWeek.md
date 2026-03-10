# IntlCalendar::getMinimalDaysInFirstWeek

Source: https://devdocs.io/php/intlcalendar.getminimaldaysinfirstweek

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::getMinimalDaysInFirstWeek — Get minimal number of days the first week in a year or month can have

### Description

Object-oriented style

```
public IntlCalendar::getMinimalDaysInFirstWeek(): int|false
```

Procedural style

```
intlcal_get_minimal_days_in_first_week(IntlCalendar $calendar): int|false
```

Returns the smallest number of days the first week of a year or month must have in the new year or month. For instance, in the Gregorian calendar, if this value is 1, then the first week of the year will necessarily include January 1st, while if this value is 7, then the week with January 1st will be the first week of the year only if the day of the week for January 1st matches the day of the week returned by IntlCalendar::getFirstDayOfWeek(); otherwise it will be the previous yearʼs last week.

### Parameters

An IntlCalendar instance.

### Return Values

An int representing a number of days or false on failure.

### Examples

Example #1 IntlCalendar::getMinimalDaysInFirstWeek()

```
<?php
ini_set('date.timezone', 'UTC');
ini_set('intl.default_locale', 'en_US');

$cal = new IntlGregorianCalendar(2013, 0 /* January */, 2);
var_dump(IntlDateFormatter::formatObject($cal, 'cccc')); // Wednesday

var_dump($cal->getMinimalDaysInFirstWeek(), // 1
$cal->getFirstDayofWeek()); // 1 (Sunday)

// Week 1 of 2013
var_dump(IntlDateFormatter::formatObject($cal, "'Week 'w' of 'Y"));

$cal->setMinimalDaysInFirstWeek(4);
// Still Week 1 of 2013 (1st week has 5 days in the new year)
var_dump(IntlDateFormatter::formatObject($cal, "'Week 'w' of 'Y"));

$cal->setMinimalDaysInFirstWeek(6);
// Week 53 of 2012
var_dump(IntlDateFormatter::formatObject($cal, "'Week 'w' of 'Y"));
```

The above example will output:

```
string(9) "Wednesday"
int(1)
int(1)
string(14) "Week 1 of 2013"
string(14) "Week 1 of 2013"
string(15) "Week 53 of 2012"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.getminimaldaysinfirstweek.php
