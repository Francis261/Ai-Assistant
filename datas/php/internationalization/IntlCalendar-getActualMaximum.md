# IntlCalendar::getActualMaximum

Source: https://devdocs.io/php/intlcalendar.getactualmaximum

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::getActualMaximum — The maximum value for a field, considering the objectʼs current time

### Description

Object-oriented style

```
public IntlCalendar::getActualMaximum(int $field): int|false
```

Procedural style

```
intlcal_get_actual_maximum(IntlCalendar $calendar, int $field): int|false
```

Returns a fieldʼs relative maximum value around the current time. The exact semantics vary by field, but in the general case this is the value that would be obtained if one would set the field value into the smallest relative maximum for the field and would increment it until reaching the global maximum or the field value wraps around, in which the value returned would be the global maximum or the value before the wrapping, respectively.

For instance, in the gregorian calendar, the actual maximum value for the day of month would vary between 28 and 31, depending on the month and year of the current time.

### Parameters

An IntlCalendar instance.

One of the IntlCalendar date/time field constants. These are integer values between 0 and IntlCalendar::FIELD_COUNT.

### Return Values

An int representing the maximum value in the units associated with the given field or false on failure.

### Examples

Example #1 IntlCalendar::getActualMaximum()

```
<?php
ini_set('date.timezone', 'Europe/Lisbon');

$cal = IntlCalendar::fromDateTime('2013-02-15');
var_dump($cal->getActualMaximum(IntlCalendar::FIELD_DAY_OF_MONTH)); //28

$cal->add(IntlCalendar::FIELD_EXTENDED_YEAR, -1);
var_dump($cal->getActualMaximum(IntlCalendar::FIELD_DAY_OF_MONTH)); //29
```

The above example will output:

```
int(28)
int(29)
```

### See Also

- IntlCalendar::getMaximum() - Get the global maximum value for a field
- IntlCalendar::getLeastMaximum() - Get the smallest local maximum for a field
- IntlCalendar::getActualMinimum() - The minimum value for a field, considering the objectʼs current time

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.getactualmaximum.php
