# IntlCalendar::getLeastMaximum

Source: https://devdocs.io/php/intlcalendar.getleastmaximum

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::getLeastMaximum — Get the smallest local maximum for a field

### Description

Object-oriented style

```
public IntlCalendar::getLeastMaximum(int $field): int|false
```

Procedural style

```
intlcal_get_least_maximum(IntlCalendar $calendar, int $field): int|false
```

Returns the smallest local maximumw for a field. This should be a value smaller or equal to that returned by IntlCalendar::getActualMaxmimum(), which is in its turn smaller or equal to that returned by IntlCalendar::getMaximum().

### Parameters

An IntlCalendar instance.

One of the IntlCalendar date/time field constants. These are integer values between 0 and IntlCalendar::FIELD_COUNT.

### Return Values

An int representing a field value in the fieldʼs unit or false on failure.

### Examples

Example #1 Maxima examples

```
<?php
ini_set('date.timezone', 'UTC');
ini_set('intl.default_locale', 'it_IT');

$cal = new IntlGregorianCalendar(2013, 3 /* April */, 6);
var_dump(
    $cal->getLeastMaximum(IntlCalendar::FIELD_DAY_OF_MONTH),  // 28
    $cal->getActualMaximum(IntlCalendar::FIELD_DAY_OF_MONTH), // 30
    $cal->getMaximum(IntlCalendar::FIELD_DAY_OF_MONTH)        // 31
);
```

The above example will output:

```
int(28)
int(30)
int(31)
```

### See Also

- IntlCalendar::getActualMaximum() - The maximum value for a field, considering the objectʼs current time
- IntlCalendar::getMaximum() - Get the global maximum value for a field
- IntlCalendar::getGreatestMinimum() - Get the largest local minimum value for a field

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.getleastmaximum.php
