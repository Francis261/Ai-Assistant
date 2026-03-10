# IntlCalendar::roll

Source: https://devdocs.io/php/intlcalendar.roll

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::roll — Add value to field without carrying into more significant fields

### Description

Object-oriented style

```
public IntlCalendar::roll(int $field, int|bool $value): bool
```

Procedural style

```
intlcal_roll(IntlCalendar $calendar, int $field, int|bool $value): bool
```

Adds a (signed) amount to a field. The difference with respect to IntlCalendar::add() is that when the field value overflows, it does not carry into more significant fields.

### Parameters

An IntlCalendar instance.

One of the IntlCalendar date/time field constants. These are integer values between 0 and IntlCalendar::FIELD_COUNT.

The (signed) amount to add to the field, true for rolling up (adding 1), or false for rolling down (subtracting 1).

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 IntlCalendar::roll()

```
<?php
ini_set('date.timezone', 'Europe/Lisbon');
ini_set('intl.default_locale', 'pt_PT');

$cal = new IntlGregorianCalendar(2013, 5 /* June */, 30);

$cal->add(IntlCalendar::FIELD_DAY_OF_MONTH, 1);
var_dump(IntlDateFormatter::formatObject($cal)); // "01/07/2013, 00:00:00"

$cal->set(2013, 5 /* June */, 30);
$cal->roll(IntlCalendar::FIELD_DAY_OF_MONTH, true); // roll up, same as rolling +1
var_dump(IntlDateFormatter::formatObject($cal)); // "01/06/2013, 00:00:00"
```

The above example will output:

```
string(20) "01/07/2013, 00:00:00"
string(20) "01/06/2013, 00:00:00"
```

### See Also

- IntlCalendar::add() - Add a (signed) amount of time to a field
- IntlCalendar::set() - Set a time field or several common fields at once

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.roll.php
