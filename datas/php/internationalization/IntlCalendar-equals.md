# IntlCalendar::equals

Source: https://devdocs.io/php/intlcalendar.equals

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::equals — Compare time of two IntlCalendar objects for equality

### Description

Object-oriented style

```
public IntlCalendar::equals(IntlCalendar $other): bool
```

Procedural style

```
intlcal_equals(IntlCalendar $calendar, IntlCalendar $other): bool
```

Returns true if this calendar and the given calendar have the same time. The settings, calendar types and field states do not have to be the same.

### Parameters

An IntlCalendar instance.

The calendar to compare with the primary object.

### Return Values

Returns true if the current time of both this and the passed in IntlCalendar object are the same, or false otherwise.

On failure false is also returned. To detect error conditions use intl_get_error_code(), or set up Intl to throw exceptions.

### Examples

Example #1 IntlCalendar::equals()

```
<?php
ini_set('date.timezone', 'UTC');

$cal1 = IntlCalendar::createInstance(NULL, 'es_ES');
$cal2 = clone $cal1;

var_dump($cal1->equals($cal2)); //TRUE

//The locale is not included in the comparison
$cal2 = IntlCalendar::createInstance(NULL, 'pt_PT');
$cal2->setTime($cal1->getTime());
var_dump($cal1->equals($cal2)); //TRUE

//And set fields state is not included as well
$cal2->clear(IntlCalendar::FIELD_YEAR);
var_dump($cal1->isSet(IntlCalendar::FIELD_YEAR) ==
        $cal2->isSet(IntlCalendar::FIELD_YEAR)); //FALSE
var_dump($cal1->equals($cal2)); //TRUE

//Neither is the calendar type
$cal2 = IntlCalendar::createInstance(NULL, 'es_ES@calendar=islamic');
$cal2->setTime($cal1->getTime());
var_dump($cal1->equals($cal2)); //TRUE

//Only the time is
$cal2 = clone $cal1;
$cal2->setTime($cal1->getTime() + 1.);
var_dump($cal1->equals($cal2)); //FALSE
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.equals.php
