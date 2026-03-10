# IntlCalendar::toDateTime

Source: https://devdocs.io/php/intlcalendar.todatetime

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a2)

IntlCalendar::toDateTime — Convert an IntlCalendar into a DateTime object

### Description

Object-oriented style

```
public IntlCalendar::toDateTime(): DateTime|false
```

Procedural style

```
intlcal_to_date_time(IntlCalendar $calendar): DateTime|false
```

Create a DateTime object that represents the same instant (up to second precision, with a rounding error of less than 1 second) and has an analog timezone to this object (the difference being DateTimeʼs timezone will be backed by PHPʼs timezone while IntlCalendarʼs timezone is backed by ICUʼs).

### Parameters

An IntlCalendar instance.

### Return Values

A DateTime object with the same timezone as this object (though using PHPʼs database instead of ICUʼs) and the same time, except for the smaller precision (second precision instead of millisecond). Returns false on failure.

### Examples

Example #1 IntlCalendar::toDateTime()

```
<?php
ini_set('date.timezone', 'UTC');
ini_set('intl.default_locale', 'pt_PT');

$cal = IntlCalendar::createInstance('Europe/Lisbon'); //current time

$dt = $cal->toDateTime();
print_r($dt);
```

The above example will output:

```
DateTime Object
(
    [date] => 2013-07-02 00:29:13
    [timezone_type] => 3
    [timezone] => Europe/Lisbon
)
```

### See Also

- IntlCalendar::fromDateTime() - Create an IntlCalendar from a DateTime object or string
- IntlCalendar::getTime() - Get time currently represented by the object
- IntlCalendar::createInstance() - Create a new IntlCalendar
- DateTime::__construct() - Returns new DateTime object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.todatetime.php
