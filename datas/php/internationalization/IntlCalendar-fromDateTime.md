# IntlCalendar::fromDateTime

Source: https://devdocs.io/php/intlcalendar.fromdatetime

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a2)

IntlCalendar::fromDateTime — Create an IntlCalendar from a DateTime object or string

### Description

Object-oriented style

```
public static IntlCalendar::fromDateTime(DateTime|string $datetime, ?string $locale = null): ?IntlCalendar
```

Procedural style

```
intlcal_from_date_time(DateTime|string $datetime, ?string $locale = null): ?IntlCalendar
```

Creates an IntlCalendar object either from a DateTime object or from a string from which a DateTime object can be built.

The new calendar will represent not only the same instant as the given DateTime (subject to precision loss for dates very far into the past or future), but also the same timezone (subject to the caveat that different timezone databases will be used, and therefore the results may differ).

### Parameters

A DateTime object or a string that can be passed to DateTime::__construct().

### Return Values

The created IntlCalendar object or null in case of failure. If a string is passed, any exception that occurs inside the DateTime constructor is propagated.

### Examples

Example #1 IntlCalendar::fromDateTime()

```
<?php
ini_set('date.timezone', 'Europe/Lisbon');

//same as IntlCalendar::fromDateTime(new DateTime(...))
$cal1 = IntlCalendar::fromDateTime('2013-02-28 00:01:02 Europe/Berlin', 'de_DE');

//Note the timezone is Europe/Berlin, not the default Europe/Lisbon
echo IntlDateFormatter::formatObject($cal1, 'yyyy MMMM d HH:mm:ss VVVV', 'de_DE'), "\n";
```

The above example will output:

```
2013 Februar 28 00:01:02 Deutschland Zeit
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.fromdatetime.php
