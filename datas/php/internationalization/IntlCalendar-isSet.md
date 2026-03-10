# IntlCalendar::isSet

Source: https://devdocs.io/php/intlcalendar.isset

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::isSet — Whether a field is set

### Description

Object-oriented style

```
public IntlCalendar::isSet(int $field): bool
```

Procedural style

```
intlcal_is_set(IntlCalendar $calendar, int $field): bool
```

Returns whether a field is set (as opposed to clear). Set fields take priority over unset fields and their default values when the date/time is being calculated. Fields set later take priority over fields set earlier.

### Parameters

An IntlCalendar instance.

One of the IntlCalendar date/time field constants. These are integer values between 0 and IntlCalendar::FIELD_COUNT.

### Return Values

Assuming there are no argument errors, returns true if the field is set.

### Examples

See the example on IntlCalendar::clear().

### See Also

- IntlCalendar::clear() - Clear a field or all fields
- IntlCalendar::set() - Set a time field or several common fields at once

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.isset.php
