# IntlCalendar::setFirstDayOfWeek

Source: https://devdocs.io/php/intlcalendar.setfirstdayofweek

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::setFirstDayOfWeek — Set the day on which the week is deemed to start

### Description

Object-oriented style

```
public IntlCalendar::setFirstDayOfWeek(int $dayOfWeek): true
```

Procedural style

```
intlcal_set_first_day_of_week(IntlCalendar $calendar, int $dayOfWeek): true
```

Defines the day of week deemed to start the week. This affects the behavior of fields that depend on the concept of week start and end such as IntlCalendar::FIELD_WEEK_OF_YEAR and IntlCalendar::FIELD_YEAR_WOY.

### Parameters

An IntlCalendar instance.

One of the constants IntlCalendar::DOW_SUNDAY, IntlCalendar::DOW_MONDAY, …, IntlCalendar::DOW_SATURDAY.

### Return Values

Always returns true.

### Changelog

### Examples

Example #1 IntlCalendar::setFirstDayOfWeek()

```
<?php
ini_set('date.timezone', 'Europe/Lisbon');
ini_set('intl.default_locale', 'es_ES');

$cal = IntlCalendar::createInstance();
$cal->set(2013, 5 /* June */, 30); // A Sunday

var_dump($cal->getFirstDayOfWeek()); // 2 (Monday)

echo IntlDateFormatter::formatObject($cal, <<<EOD
'local day of week: 'cc'
week of month    : 'W'
week of year     : 'ww
EOD
), "\n";

$cal->setFirstDayOfWeek(IntlCalendar::DOW_SUNDAY);

echo IntlDateFormatter::formatObject($cal, <<<EOD
'local day of week: 'cc'
week of month    : 'W'
week of year     : 'ww
EOD
), "\n";
```

The above example will output:

```
int(2)
local day of week: 7
week of month    : 4
week of year     : 26
local day of week: 1
week of month    : 5
week of year     : 27
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.setfirstdayofweek.php
