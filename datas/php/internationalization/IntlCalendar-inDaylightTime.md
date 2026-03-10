# IntlCalendar::inDaylightTime

Source: https://devdocs.io/php/intlcalendar.indaylighttime

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::inDaylightTime — Whether the objectʼs time is in Daylight Savings Time

### Description

Object-oriented style

```
public IntlCalendar::inDaylightTime(): bool
```

Procedural style

```
intlcal_in_daylight_time(IntlCalendar $calendar): bool
```

Whether, for the instant represented by this object and for this objectʼs timezone, daylight saving time is in place.

### Parameters

An IntlCalendar instance.

### Return Values

Returns true if the date is in Daylight Savings Time, false otherwise.

On failure false is also returned. To detect error conditions use intl_get_error_code(), or set up Intl to throw exceptions.

### Examples

Example #1 IntlCalendar::inDaylightTime()

```
<?php
ini_set('date.timezone', 'Europe/Lisbon');
ini_set('intl.default_locale', 'pt_PT');

$cal = new IntlGregorianCalendar(2013, 6 /* July */, 1, 4, 56, 31);
var_dump($cal->inDaylightTime()); // true
$cal->set(IntlCalendar::FIELD_MONTH, 11 /* December */);
var_dump($cal->inDaylightTime()); // false

//DST end transition on 2013-10-27 at 0200 (wall time back 1 hour)
$cal = new IntlGregorianCalendar(2013, 9 /* October */, 27, 1, 30, 0);

var_dump($cal->inDaylightTime()); // false (default WALLTIME_LAST)

$cal->setRepeatedWallTimeOption(IntlCalendar::WALLTIME_FIRST);
$cal->set(IntlCalendar::FIELD_HOUR_OF_DAY, 1); // force time recalculation
var_dump($cal->inDaylightTime()); // true
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.indaylighttime.php
