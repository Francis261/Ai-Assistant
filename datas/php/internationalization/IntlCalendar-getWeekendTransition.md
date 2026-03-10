# IntlCalendar::getWeekendTransition

Source: https://devdocs.io/php/intlcalendar.getweekendtransition

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::getWeekendTransition — Get time of the day at which weekend begins or ends

### Description

Object-oriented style

```
public IntlCalendar::getWeekendTransition(int $dayOfWeek): int|false
```

Procedural style

```
intlcal_get_weekend_transition(IntlCalendar $calendar, int $dayOfWeek): int|false
```

Returns the number of milliseconds after midnight at which the weekend begins or ends.

This is only applicable for days of the week for which IntlCalendar::getDayOfWeekType() returns either IntlCalendar::DOW_TYPE_WEEKEND_OFFSET or IntlCalendar::DOW_TYPE_WEEKEND_CEASE. Calling this function for other days of the week is an error condition.

This function requires ICU 4.4 or later.

### Parameters

An IntlCalendar instance.

One of the constants IntlCalendar::DOW_SUNDAY, IntlCalendar::DOW_MONDAY, …, IntlCalendar::DOW_SATURDAY.

### Return Values

The number of milliseconds into the day at which the weekend begins or ends or false on failure.

### Examples

See example on IntlCalendar::getDayOfWeekType().

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.getweekendtransition.php
