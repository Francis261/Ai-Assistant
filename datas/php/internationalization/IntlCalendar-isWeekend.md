# IntlCalendar::isWeekend

Source: https://devdocs.io/php/intlcalendar.isweekend

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::isWeekend — Whether a certain date/time is in the weekend

### Description

Object-oriented style

```
public IntlCalendar::isWeekend(?float $timestamp = null): bool
```

Procedural style

```
intlcal_is_weekend(IntlCalendar $calendar, ?float $timestamp = null): bool
```

Returns whether either the obejctʼs current time or the provided timestamp occur during a weekend in this objectʼs calendar system.

This function requires ICU 4.4 or later.

### Parameters

An IntlCalendar instance.

An optional timestamp representing the number of milliseconds since the epoch, excluding leap seconds. If null, this objectʼs current time is used instead.

### Return Values

A bool indicating whether the given or this objectʼs time occurs in a weekend.

On failure false is also returned. To detect error conditions use intl_get_error_code(), or set up Intl to throw exceptions.

### Examples

Example #1 IntlCalendar::isWeekend()

```
<?php
ini_set('date.timezone', 'Europe/Lisbon');

$cal = new IntlGregorianCalendar(NULL, 'en_US');
$cal->set(2013, 6 /* July */, 7); // a Sunday 

var_dump($cal->isWeekend()); // true
var_dump($cal->isWeekend(strtotime('2013-07-01 00:00:00'))); // false, Monday

$cal = new IntlGregorianCalendar(NULL, 'ar_SA');
$cal->set(2013, 6 /* July */, 7); // a Sunday 
var_dump($cal->isWeekend()); // false, Sunday not in weekend in this calendar
```

### See Also

- IntlCalendar::getDayOfWeekType() - Tell whether a day is a weekday, weekend or a day that has a transition between the two
- IntlCalendar::getWeekendTransition() - Get time of the day at which weekend begins or ends

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.isweekend.php
