# IntlCalendar::fieldDifference

Source: https://devdocs.io/php/intlcalendar.fielddifference

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::fieldDifference — Calculate difference between given time and this objectʼs time

### Description

Object-oriented style

```
public IntlCalendar::fieldDifference(float $timestamp, int $field): int|false
```

Procedural style

```
intlcal_field_difference(IntlCalendar $calendar, float $timestamp, int $field): int|false
```

Return the difference between the given time and the time this object is set to, with respect to the quantity specified the field parameter.

This method is meant to be called successively, first with the most significant field of interest down to the least significant field. To this end, as a side effect, this calendarʼs value for the field specified is advanced by the amount returned.

### Parameters

An IntlCalendar instance.

The time against which to compare the quantity represented by the field. For the result to be positive, the time given for this parameter must be ahead of the time of the object the method is being invoked on.

The field that represents the quantity being compared.

One of the IntlCalendar date/time field constants. These are integer values between 0 and IntlCalendar::FIELD_COUNT.

### Return Values

Returns a (signed) difference of time in the unit associated with the specified field or false on failure.

### Examples

Example #1 IntlCalendar::fieldDifference()

```
<?php
ini_set('date.timezone', 'Europe/Lisbon');
ini_set('intl.default_locale', 'fr_FR');

$cal1 = IntlCalendar::fromDateTime('2012-02-29 09:00:11');
$cal2 = IntlCalendar::fromDateTime('2013-03-01 09:19:29');
$time = $cal2->getTime();

echo "Time before: ", IntlDateFormatter::formatObject($cal1), "\n";

printf(
    "The difference in time is %d year(s), %d month(s), "
  . "%d day(s), %d hour(s) and %d minute(s)\n",
    $cal1->fieldDifference($time, IntlCalendar::FIELD_YEAR),
    $cal1->fieldDifference($time, IntlCalendar::FIELD_MONTH),
    $cal1->fieldDifference($time, IntlCalendar::FIELD_DAY_OF_MONTH),
    $cal1->fieldDifference($time, IntlCalendar::FIELD_HOUR_OF_DAY),
    $cal1->fieldDifference($time, IntlCalendar::FIELD_MINUTE)
);

//now it was advanced to the target time, exception for the seconds,
//for which we did not measure the difference
echo "Time after: ", IntlDateFormatter::formatObject($cal1), "\n";
```

The above example will output:

```
Time before: 29 févr. 2012 09:00:11
The difference in time is 1 year(s), 0 month(s), 1 day(s), 0 hour(s) and 19 minute(s)
Time after: 1 mars 2013 09:19:11
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.fielddifference.php
