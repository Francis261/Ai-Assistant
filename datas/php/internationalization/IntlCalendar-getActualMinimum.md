# IntlCalendar::getActualMinimum

Source: https://devdocs.io/php/intlcalendar.getactualminimum

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::getActualMinimum — The minimum value for a field, considering the objectʼs current time

### Description

Object-oriented style

```
public IntlCalendar::getActualMinimum(int $field): int|false
```

Procedural style

```
intlcal_get_actual_minimum(IntlCalendar $calendar, int $field): int|false
```

Returns a fieldʼs relative minimum value around the current time. The exact semantics vary by field, but in the general case this is the value that would be obtained if one would set the field value into the greatest relative minimum for the field and would decrement it until reaching the global minimum or the field value wraps around, in which the value returned would be the global minimum or the value before the wrapping, respectively.

For the Gregorian calendar, this is always the same as IntlCalendar::getMinimum().

### Parameters

An IntlCalendar instance.

One of the IntlCalendar date/time field constants. These are integer values between 0 and IntlCalendar::FIELD_COUNT.

### Return Values

An int representing the minimum value in the fieldʼs unit or false on failure.

### See Also

- IntlCalendar::getMinimum() - Get the global minimum value for a field
- IntlCalendar::getGreatestMinimum() - Get the largest local minimum value for a field
- IntlCalendar::getActualMaximum() - The maximum value for a field, considering the objectʼs current time

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.getactualminimum.php
