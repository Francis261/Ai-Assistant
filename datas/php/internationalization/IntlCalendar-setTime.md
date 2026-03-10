# IntlCalendar::setTime

Source: https://devdocs.io/php/intlcalendar.settime

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::setTime — Set the calendar time in milliseconds since the epoch

### Description

Object-oriented style

```
public IntlCalendar::setTime(float $timestamp): bool
```

Procedural style

```
intlcal_set_time(IntlCalendar $calendar, float $timestamp): bool
```

Sets the instant represented by this object. The instant is represented by a float whose value should be an integer number of milliseconds since the epoch (1 Jan 1970 00:00:00.000 UTC), ignoring leap seconds. All the field values will be recalculated accordingly.

### Parameters

An IntlCalendar instance.

An instant represented by the number of number of milliseconds between such instant and the epoch, ignoring leap seconds.

### Return Values

Returns true on success and false on failure.

### Examples

Example #1 IntlCalendar::setTime()

```
<?php
ini_set('date.timezone', 'Europe/Lisbon');
ini_set('intl.default_locale', 'fr_FR');

$cal = new IntlGregorianCalendar(2013, 5 /* May */, 1, 12, 0, 0);

echo IntlDateFormatter::formatObject($cal, IntlDateFormatter::FULL), "\n";

/* In Europe/Lisbon, on 2013-10-27 at 0200, the clock goes back one hour and
   the timezone from UTC+01 to UTC+00 */

$cal->setTime(strtotime('2013-10-27 00:30:00 UTC') * 1000.);

echo IntlDateFormatter::formatObject($cal, IntlDateFormatter::FULL), "\n";

$cal->setTime(strtotime('2013-10-27 01:30:00 UTC') * 1000.);

echo IntlDateFormatter::formatObject($cal, IntlDateFormatter::FULL), "\n";
```

The above example will output:

```
samedi 1 juin 2013 12:00:00 heure avancée d’Europe de l’Ouest
dimanche 27 octobre 2013 01:30:00 heure avancée d’Europe de l’Ouest
dimanche 27 octobre 2013 01:30:00 heure normale d’Europe de l’Ouest
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.settime.php
