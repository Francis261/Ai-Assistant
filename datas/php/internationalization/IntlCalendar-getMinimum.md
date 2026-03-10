# IntlCalendar::getMinimum

Source: https://devdocs.io/php/intlcalendar.getminimum

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::getMinimum — Get the global minimum value for a field

### Description

Object-oriented style

```
public IntlCalendar::getMinimum(int $field): int|false
```

Procedural style

```
intlcal_get_minimum(IntlCalendar $calendar, int $field): int|false
```

Gets the global minimum for a field, in this specific calendar. This value is smaller or equal to that returned by IntlCalendar::getActualMinimum(), which is in its turn smaller or equal to that returned by IntlCalendar::getGreatestMinimum(). For the Gregorian calendar, these three functions always return the same value (for each field).

### Parameters

An IntlCalendar instance.

One of the IntlCalendar date/time field constants. These are integer values between 0 and IntlCalendar::FIELD_COUNT.

### Return Values

An int representing a value for the given field in the fieldʼs unit or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.getminimum.php
