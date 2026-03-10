# IntlCalendar::after

Source: https://devdocs.io/php/intlcalendar.after

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::after — Whether this objectʼs time is after that of the passed object

### Description

Object-oriented style

```
public IntlCalendar::after(IntlCalendar $other): bool
```

Procedural style

```
intlcal_after(IntlCalendar $calendar, IntlCalendar $other): bool
```

Returns whether this objectʼs time succeeds the argumentʼs time.

### Parameters

An IntlCalendar instance.

The calendar whose time will be checked against the primary objectʼs time.

### Return Values

Returns true if this objectʼs current time is after that of the calendar argumentʼs time. Returns false otherwise.

On failure false is also returned. To detect error conditions use intl_get_error_code(), or set up Intl to throw exceptions.

### Examples

Example #1 IntlCalendar::after()

```
<?php
$cal1 = IntlCalendar::createInstance();
$cal2 = clone $cal1;

var_dump($cal1->after($cal2), //false
        $cal2->after($cal1)); //false

$cal1->roll(IntlCalendar::FIELD_MILLISECOND, true);

var_dump($cal1->after($cal2), //true
        $cal2->after($cal1)); //false
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.after.php
