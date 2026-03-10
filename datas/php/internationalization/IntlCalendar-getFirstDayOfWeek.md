# IntlCalendar::getFirstDayOfWeek

Source: https://devdocs.io/php/intlcalendar.getfirstdayofweek

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::getFirstDayOfWeek — Get the first day of the week for the calendarʼs locale

### Description

Object-oriented style

```
public IntlCalendar::getFirstDayOfWeek(): int|false
```

Procedural style

```
intlcal_get_first_day_of_week(IntlCalendar $calendar): int|false
```

The week day deemed to start a week, either the default value for this locale or the value set with IntlCalendar::setFirstDayOfWeek().

### Parameters

An IntlCalendar instance.

### Return Values

One of the constants IntlCalendar::DOW_SUNDAY, IntlCalendar::DOW_MONDAY, …, IntlCalendar::DOW_SATURDAY or false on failure.

### Examples

Example #1 IntlCalendar::getFirstDayOfWeek()

```
<?php
ini_set('date.timezone', 'UTC');

$cal1 = IntlCalendar::createInstance(NULL, 'es_ES');
var_dump($cal1->getFirstDayOfWeek()); // Monday
$cal1->set(2013, 1 /* February */, 3); // a Sunday
var_dump($cal1->get(IntlCalendar::FIELD_WEEK_OF_YEAR)); // 5

$cal2 = IntlCalendar::createInstance(NULL, 'en_US');
var_dump($cal2->getFirstDayOfWeek()); // Sunday
$cal2->set(2013, 1 /* February */, 3); // a Sunday
var_dump($cal2->get(IntlCalendar::FIELD_WEEK_OF_YEAR)); // 6
```

The above example will output:

```
int(2)
int(5)
int(1)
int(6)
```

### See Also

- IntlCalendar::setFirstDayOfWeek() - Set the day on which the week is deemed to start

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.getfirstdayofweek.php
