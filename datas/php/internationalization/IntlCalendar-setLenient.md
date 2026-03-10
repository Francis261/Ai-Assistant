# IntlCalendar::setLenient

Source: https://devdocs.io/php/intlcalendar.setlenient

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::setLenient — Set whether date/time interpretation is to be lenient

### Description

Object-oriented style

```
public IntlCalendar::setLenient(bool $lenient): true
```

Procedural style

```
intlcal_set_lenient(IntlCalendar $calendar, bool $lenient): true
```

Defines whether the calendar is ‘lenient mode’. In such a mode, some of out-of-bounds values for some fields are accepted, the behavior being similar to that of IntlCalendar::add() (i.e., the value wraps around, carrying into more significant fields each time). If the lenient mode is off, then such values will generate an error.

### Parameters

An IntlCalendar instance.

Use true to activate the lenient mode; false otherwise.

### Return Values

Always returns true.

### Changelog

### Examples

See the example in IntlCalendar::isLenient().

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.setlenient.php
