# IntlCalendar::setDateTime

Source: https://devdocs.io/php/intlcalendar.setdatetime

(PHP 8 >= 8.3.0)

IntlCalendar::setDateTime — Set a date and time fields

### Description

```
public IntlCalendar::setDateTime(
 int $year,
 int $month,
 int $dayOfMonth,
 int $hour,
 int $minute,
 ?int $second = null
): void
```

Sets a date and time fields to the given value.

### Parameters

The new value for IntlCalendar::FIELD_YEAR.

The new value for IntlCalendar::FIELD_MONTH. The month sequence is zero-based, i.e., January is represented by 0, February by 1, …, December is 11 and Undecember (if the calendar has it) is 12.

The new value for IntlCalendar::FIELD_DAY_OF_MONTH.

The new value for IntlCalendar::FIELD_HOUR_OF_DAY.

The new value for IntlCalendar::FIELD_MINUTE.

The new value for IntlCalendar::FIELD_SECOND.

### Return Values

No value is returned.

### Examples

Example #1 IntlCalendar::setDateTime() example

```
<?php
$intlCal = IntlCalendar::createInstance('UTC');

$intlCal->setDateTime(2012, 1, 29, 23, 58);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.setdatetime.php
