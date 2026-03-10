# IntlGregorianCalendar::createFromDateTime

Source: https://devdocs.io/php/intlgregoriancalendar.createfromdatetime

(PHP 8 >= 8.3.0)

IntlGregorianCalendar::createFromDateTime — Create a new IntlGregorianCalendar instance from date and time

### Description

```
public static IntlGregorianCalendar::createFromDateTime(
 int $year,
 int $month,
 int $dayOfMonth,
 int $hour,
 int $minute,
 ?int $second = null
): static
```

Creates a new IntlGregorianCalendar instance from date and time.

### Parameters

The new value for IntlGregorianCalendar::FIELD_YEAR.

The new value for IntlGregorianCalendar::FIELD_MONTH. The month sequence is zero-based, i.e., January is represented by 0, February by 1, …, December is 11 and Undecember (if the calendar has it) is 12.

The new value for IntlGregorianCalendar::FIELD_DAY_OF_MONTH.

The new value for IntlGregorianCalendar::FIELD_HOUR_OF_DAY.

The new value for IntlGregorianCalendar::FIELD_MINUTE.

The new value for IntlGregorianCalendar::FIELD_SECOND.

### Return Values

Returns a new IntlGregorianCalendar instance.

### Examples

Example #1 IntlGregorianCalendar::createFromDateTime() example

```
<?php

$intlCalendar = IntlGregorianCalendar::createFromDateTime(2023, 11, 23, 12, 00);
var_dump($intlCalendar);
?>
```

The above example will output something similar to:

```
object(IntlGregorianCalendar)#1 (5) {
  ["valid"]=>
  bool(true)
  ["type"]=>
  string(9) "gregorian"
  ["timeZone"]=>
  array(4) {
    ["valid"]=>
    bool(true)
    ["id"]=>
    string(16) "Europe/Amsterdam"
    ["rawOffset"]=>
    int(3600000)
    ["currentOffset"]=>
    int(3600000)
  }
  ["locale"]=>
  string(11) "en_US_POSIX"
  ["fields"]=>
  array(23) {
    ["era"]=>
    int(1)
    ["year"]=>
    int(2023)
    ["month"]=>
    int(11)
    ["week of year"]=>
    int(51)
    ["week of month"]=>
    int(4)
    ["day of year"]=>
    int(357)
    ["day of month"]=>
    int(23)
    ["day of week"]=>
    int(7)
    ["day of week in month"]=>
    int(4)
    ["AM/PM"]=>
    int(1)
    ["hour"]=>
    int(0)
    ["hour of day"]=>
    int(12)
    ["minute"]=>
    int(0)
    ["second"]=>
    int(0)
    ["millisecond"]=>
    int(0)
    ["zone offset"]=>
    int(3600000)
    ["DST offset"]=>
    int(0)
    ["year for week of year"]=>
    int(2023)
    ["localized day of week"]=>
    int(7)
    ["extended year"]=>
    int(2023)
    ["julian day"]=>
    int(2460302)
    ["milliseconds in day"]=>
    int(43200000)
    ["is leap month"]=>
    int(0)
  }
}
```

### See Also

- IntlGregorianCalendar::createFromDate() - Create a new IntlGregorianCalendar instance from date

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlgregoriancalendar.createfromdatetime.php
