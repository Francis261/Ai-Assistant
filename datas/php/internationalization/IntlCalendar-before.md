# IntlCalendar::before

Source: https://devdocs.io/php/intlcalendar.before

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::before — Whether this objectʼs time is before that of the passed object

### Description

Object-oriented style

```
public IntlCalendar::before(IntlCalendar $other): bool
```

Procedural style

```
intlcal_before(IntlCalendar $calendar, IntlCalendar $other): bool
```

Returns whether this objectʼs time precedes the argumentʼs time.

### Parameters

An IntlCalendar instance.

The calendar whose time will be checked against the primary objectʼs time.

### Return Values

Returns true if this objectʼs current time is before that of the calendar argumentʼs time. Returns false otherwise.

On failure false is also returned. To detect error conditions use intl_get_error_code(), or set up Intl to throw exceptions.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.before.php
