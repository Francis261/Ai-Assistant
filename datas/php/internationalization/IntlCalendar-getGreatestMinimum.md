# IntlCalendar::getGreatestMinimum

Source: https://devdocs.io/php/intlcalendar.getgreatestminimum

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::getGreatestMinimum — Get the largest local minimum value for a field

### Description

Object-oriented style

```
public IntlCalendar::getGreatestMinimum(int $field): int|false
```

Procedural style

```
intlcal_get_greatest_minimum(IntlCalendar $calendar, int $field): int|false
```

Returns the largest local minimum for a field. This should be a value larger or equal to that returned by IntlCalendar::getActualMinimum(), which is in its turn larger or equal to that returned by IntlCalendar::getMinimum(). All these three functions return the same value for the Gregorian calendar.

### Parameters

An IntlCalendar instance.

One of the IntlCalendar date/time field constants. These are integer values between 0 and IntlCalendar::FIELD_COUNT.

### Return Values

An int representing a field value, in the fieldʼs unit, or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.getgreatestminimum.php
