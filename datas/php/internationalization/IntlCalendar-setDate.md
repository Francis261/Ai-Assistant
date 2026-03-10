# IntlCalendar::setDate

Source: https://devdocs.io/php/intlcalendar.setdate

(PHP 8 >= 8.3.0)

IntlCalendar::setDate — Set a date fields

### Description

```
public IntlCalendar::setDate(int $year, int $month, int $dayOfMonth): void
```

Sets a date fields to the given value.

### Parameters

The new value for IntlCalendar::FIELD_YEAR.

The new value for IntlCalendar::FIELD_MONTH. The month sequence is zero-based, i.e., January is represented by 0, February by 1, …, December is 11 and Undecember (if the calendar has it) is 12.

The new value for IntlCalendar::FIELD_DAY_OF_MONTH.

### Return Values

No value is returned.

### Examples

Example #1 IntlCalendar::setDate() example

```
<?php
$intlCal = IntlCalendar::createInstance('UTC');

$intlCal->setDate(2012, 1, 29);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.setdate.php
