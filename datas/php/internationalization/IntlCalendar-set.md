# IntlCalendar::set

Source: https://devdocs.io/php/intlcalendar.set

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::set — Set a time field or several common fields at once

### Description

Object-oriented style

```
public IntlCalendar::set(int $field, int $value): true
```

```
public IntlCalendar::set(
 int $year,
 int $month,
 int $dayOfMonth = NULL,
 int $hour = NULL,
 int $minute = NULL,
 int $second = NULL
): true
```

Procedural style

```
intlcal_set(IntlCalendar $cal, int $field, int $value): true
```

```
intlcal_set(
 IntlCalendar $cal,
 int $year,
 int $month,
 int $dayOfMonth = NULL,
 int $hour = NULL,
 int $minute = NULL,
 int $second = NULL
): bool
```

Sets either a specific field to the given value, or sets at once several common fields. The range of values that are accepted depend on whether the calendar is using the lenient mode.

For fields that conflict, the fields that are set later have priority.

This method cannot be called with exactly four arguments.

### Parameters

An IntlCalendar instance.

One of the IntlCalendar date/time field constants. These are integer values between 0 and IntlCalendar::FIELD_COUNT.

The new value of the given field.

The new value for IntlCalendar::FIELD_YEAR.

The new value for IntlCalendar::FIELD_MONTH. The month sequence is zero-based, i.e., January is represented by 0, February by 1, …, December is 11 and Undecember (if the calendar has it) is 12.

The new value for IntlCalendar::FIELD_DAY_OF_MONTH.

The new value for IntlCalendar::FIELD_HOUR_OF_DAY.

The new value for IntlCalendar::FIELD_MINUTE.

The new value for IntlCalendar::FIELD_SECOND.

### Return Values

Always returns true.

### Changelog

### Examples

Example #1 IntlCalendar::set()

```
<?php
ini_set('date.timezone', 'Europe/Lisbon');
ini_set('intl.default_locale', 'pt_PT');

//Calls made later have priority
$cal = new IntlGregorianCalendar(2013, 6 /* July */, 1);
$cal->set(IntlCalendar::FIELD_YEAR, 2012);
$cal->set(IntlCalendar::FIELD_EXTENDED_YEAR, 2011);
var_dump(IntlDateFormatter::formatObject($cal));

$cal = new IntlGregorianCalendar(2013, 6 /* July */, 1);
$cal->set(IntlCalendar::FIELD_YEAR, 2012);
$cal->set(IntlCalendar::FIELD_EXTENDED_YEAR, 2011);
//the time has not been recalculated yet. If we clear the extended year,
//the year set before will be used
$cal->clear(IntlCalendar::FIELD_EXTENDED_YEAR);
var_dump(IntlDateFormatter::formatObject($cal));
```

The above example will output:

```
string(20) "01/07/2011, 00:00:00"
string(20) "01/07/2012, 00:00:00"
```

### See Also

- IntlCalendar::get() - Get the value for a field
- IntlCalendar::add() - Add a (signed) amount of time to a field
- IntlCalendar::roll() - Add value to field without carrying into more significant fields

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.set.php
