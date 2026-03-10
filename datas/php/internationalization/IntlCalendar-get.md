# IntlCalendar::get

Source: https://devdocs.io/php/intlcalendar.get

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::get — Get the value for a field

### Description

Object-oriented style

```
public IntlCalendar::get(int $field): int|false
```

Procedural style

```
intlcal_get(IntlCalendar $calendar, int $field): int|false
```

Gets the value for a specific field.

### Parameters

An IntlCalendar instance.

One of the IntlCalendar date/time field constants. These are integer values between 0 and IntlCalendar::FIELD_COUNT.

### Return Values

An integer with the value of the time field.

### Examples

Example #1 IntlCalendar::get()

```
<?php
ini_set('date.timezone', 'Europe/Lisbon');
ini_set('intl.default_locale', 'en_US');

$class = new ReflectionClass('IntlCalendar');
$fields = array();
foreach ($class->getConstants() as $name => $val) {
    if (strpos($name, 'FIELD_') !== 0 || $val > 22)
        continue;
    $fields[$val] = $name;
}

$cal = IntlCalendar::createInstance(); // current time
var_dump(IntlDateFormatter::formatObject($cal));
foreach ($fields as $val => $name) {
    echo "$val ($name)", "\n    ", $cal->get($val), "\n";
}
```

The above example will output:

```
string(23) "Jul 1, 2013, 4:44:44 AM"
0 (FIELD_ERA)
    1
1 (FIELD_YEAR)
    2013
2 (FIELD_MONTH)
    6
3 (FIELD_WEEK_OF_YEAR)
    27
4 (FIELD_WEEK_OF_MONTH)
    1
5 (FIELD_DAY_OF_MONTH)
    1
6 (FIELD_DAY_OF_YEAR)
    182
7 (FIELD_DAY_OF_WEEK)
    2
8 (FIELD_DAY_OF_WEEK_IN_MONTH)
    1
9 (FIELD_AM_PM)
    0
10 (FIELD_HOUR)
    4
11 (FIELD_HOUR_OF_DAY)
    4
12 (FIELD_MINUTE)
    44
13 (FIELD_SECOND)
    44
14 (FIELD_MILLISECOND)
    551
15 (FIELD_ZONE_OFFSET)
    0
16 (FIELD_DST_OFFSET)
    3600000
17 (FIELD_YEAR_WOY)
    2013
18 (FIELD_DOW_LOCAL)
    2
19 (FIELD_EXTENDED_YEAR)
    2013
20 (FIELD_JULIAN_DAY)
    2456475
21 (FIELD_MILLISECONDS_IN_DAY)
    17084551
22 (FIELD_IS_LEAP_MONTH)
    0
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.get.php
