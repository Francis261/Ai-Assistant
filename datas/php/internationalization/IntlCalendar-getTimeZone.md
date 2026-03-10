# IntlCalendar::getTimeZone

Source: https://devdocs.io/php/intlcalendar.gettimezone

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::getTimeZone — Get the objectʼs timezone

### Description

Object-oriented style

```
public IntlCalendar::getTimeZone(): IntlTimeZone|false
```

Procedural style

```
intlcal_get_time_zone(IntlCalendar $calendar): IntlTimeZone|false
```

Returns the IntlTimeZone object associated with this calendar.

### Parameters

An IntlCalendar instance.

### Return Values

An IntlTimeZone object corresponding to the one used internally in this object. Returns false on failure.

### Examples

Example #1 IntlCalendar::getTimeZone()

```
<?php
ini_set('date.timezone', 'Europe/Lisbon');
ini_set('intl.default_locale', 'en_US');

$cal = IntlCalendar::createInstance();
print_r($cal->getTimeZone());

$cal->setTimeZone('UTC');
print_r($cal->getTimeZone());

$cal = IntlCalendar::fromDateTime('2012-01-01 00:00:00 GMT+03:33');
print_r($cal->getTimeZone());
```

The above example will output:

```
IntlTimeZone Object
(
    [valid] => 1
    [id] => Europe/Lisbon
    [rawOffset] => 0
    [currentOffset] => 3600000
)
IntlTimeZone Object
(
    [valid] => 1
    [id] => UTC
    [rawOffset] => 0
    [currentOffset] => 0
)
IntlTimeZone Object
(
    [valid] => 1
    [id] => GMT+03:33
    [rawOffset] => 12780000
    [currentOffset] => 12780000
)
```

### See Also

- IntlCalendar::setTimeZone() - Set the timezone used by this calendar
- IntlCalendar::createInstance() - Create a new IntlCalendar
- IntlGregorianCalendar::__construct() - Create the Gregorian Calendar class

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.gettimezone.php
