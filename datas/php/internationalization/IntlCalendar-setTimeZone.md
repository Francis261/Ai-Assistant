# IntlCalendar::setTimeZone

Source: https://devdocs.io/php/intlcalendar.settimezone

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::setTimeZone — Set the timezone used by this calendar

### Description

Object-oriented style

```
public IntlCalendar::setTimeZone(IntlTimeZone|DateTimeZone|string|null $timezone): bool
```

Procedural style

```
intlcal_set_time_zone(IntlCalendar $calendar, IntlTimeZone|DateTimeZone|string|null $timezone): bool
```

Defines a new timezone for this calendar. The time represented by the object is preserved to the detriment of the field values.

### Parameters

An IntlCalendar instance.

The new timezone to be used by this calendar. It can be specified in the following ways:

- null, in which case the default timezone will be used, as specified in the ini setting date.timezone or through the function date_default_timezone_set() and as returned by date_default_timezone_get().
- An IntlTimeZone, which will be used directly.
- A DateTimeZone. Its identifier will be extracted and an ICU timezone object will be created; the timezone will be backed by ICUʼs database, not PHPʼs.
- A string, which should be a valid ICU timezone identifier. See IntlTimeZone::createTimeZoneIDEnumeration(). Raw offsets such as "GMT+08:30" are also accepted.

null, in which case the default timezone will be used, as specified in the ini setting date.timezone or through the function date_default_timezone_set() and as returned by date_default_timezone_get().

An IntlTimeZone, which will be used directly.

A DateTimeZone. Its identifier will be extracted and an ICU timezone object will be created; the timezone will be backed by ICUʼs database, not PHPʼs.

A string, which should be a valid ICU timezone identifier. See IntlTimeZone::createTimeZoneIDEnumeration(). Raw offsets such as "GMT+08:30" are also accepted.

### Return Values

Returns true on success and false on failure.

### Examples

Example #1 IntlCalendar::setTimeZone()

```
<?php
ini_set('date.timezone', 'Europe/Lisbon');
ini_set('intl.default_locale', 'es_ES');

$cal = new IntlGregorianCalendar(2013, 5 /* May */, 1, 12, 0, 0);

echo IntlDateFormatter::formatObject($cal, IntlDateFormatter::FULL), "\n";
echo "(instant {$cal->getTime()})\n";

$cal->setTimeZone(IntlTimeZone::getGMT());
echo IntlDateFormatter::formatObject($cal, IntlDateFormatter::FULL), "\n";
echo "(instant {$cal->getTime()})\n";

$cal->setTimeZone('GMT+03:33');
echo IntlDateFormatter::formatObject($cal, IntlDateFormatter::FULL), "\n";
echo "(instant {$cal->getTime()})\n";
```

The above example will output:

```
sábado, 1 de junio de 2013 12:00:00 Hora de verano de Europa occidental
(instant 1370084400000)
sábado, 1 de junio de 2013 11:00:00 GMT
(instant 1370084400000)
sábado, 1 de junio de 2013 14:33:00 GMT+03:33
(instant 1370084400000)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.settimezone.php
