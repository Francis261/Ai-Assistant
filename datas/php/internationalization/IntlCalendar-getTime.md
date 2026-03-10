# IntlCalendar::getTime

Source: https://devdocs.io/php/intlcalendar.gettime

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::getTime — Get time currently represented by the object

### Description

Object-oriented style

```
public IntlCalendar::getTime(): float|false
```

Procedural style

```
intlcal_get_time(IntlCalendar $calendar): float|false
```

Returns the time associated with this object, expressed as the number of milliseconds since the epoch.

### Parameters

An IntlCalendar instance.

### Return Values

A float representing the number of milliseconds elapsed since the reference time (1 Jan 1970 00:00:00 UTC), or false on failure

### Examples

Example #1 IntlCalendar::getTime()

```
<?php
ini_set('date.timezone', 'Europe/Lisbon');
ini_set('intl.default_locale', 'en_US');

$cal = new IntlGregorianCalendar(2013, 4 /* May */, 1, 0, 0, 0);
$time = $cal->getTime();
var_dump($time, $time / 1000 == strtotime('2013-05-01 00:00:00')); //true
```

The above example will output:

```
float(1367362800000)
bool(true)
```

### See Also

- IntlCalendar::getNow() - Get number representing the current time

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.gettime.php
