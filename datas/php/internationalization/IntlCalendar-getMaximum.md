# IntlCalendar::getMaximum

Source: https://devdocs.io/php/intlcalendar.getmaximum

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::getMaximum — Get the global maximum value for a field

### Description

Object-oriented style

```
public IntlCalendar::getMaximum(int $field): int|false
```

Procedural style

```
intlcal_get_maximum(IntlCalendar $calendar, int $field): int|false
```

Gets the global maximum for a field, in this specific calendar. This value is larger or equal to that returned by IntlCalendar::getActualMaximum(), which is in its turn larger or equal to that returned by IntlCalendar::getLeastMaximum().

### Parameters

An IntlCalendar instance.

One of the IntlCalendar date/time field constants. These are integer values between 0 and IntlCalendar::FIELD_COUNT.

### Return Values

An int representing a field value in the fieldʼs unit or false on failure.

### See Also

- IntlCalendar::getActualMaximum() - The maximum value for a field, considering the objectʼs current time
- IntlCalendar::getLeastMaximum() - Get the smallest local maximum for a field
- IntlCalendar::getMinimum() - Get the global minimum value for a field

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.getmaximum.php
