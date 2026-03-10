# DateInterval::createFromDateString

Source: https://devdocs.io/php/dateinterval.createfromdatestring

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

DateInterval::createFromDateString — Sets up a DateInterval from the relative parts of the string

### Description

Object-oriented style

```
public static DateInterval::createFromDateString(string $datetime): DateInterval
```

Procedural style

```
date_interval_create_from_date_string(string $datetime): DateInterval|false
```

Uses the date/time parsers as used in the DateTimeImmutable constructor to create a DateInterval from the relative parts of the parsed string.

### Parameters

A date with relative parts. Specifically, the relative formats supported by the parser used for DateTimeImmutable, DateTime, and strtotime() will be used to construct the DateInterval.

To use an ISO-8601 format string like P7D, you must use the DateInterval::__construct().

### Return Values

Returns DateInterval on success. Procedural style returns false on failure.

### Errors/Exceptions

Object Oriented API only: If an invalid Date/Time string is passed, DateMalformedStringException is thrown.

### Changelog

### Examples

Example #1 Parsing valid date intervals

```
<?php
// Each set of intervals is equal.
$i = new DateInterval('P1D');
$i = DateInterval::createFromDateString('1 day');

$i = new DateInterval('P2W');
$i = DateInterval::createFromDateString('2 weeks');

$i = new DateInterval('P3M');
$i = DateInterval::createFromDateString('3 months');

$i = new DateInterval('P4Y');
$i = DateInterval::createFromDateString('4 years');

$i = new DateInterval('P1Y1D');
$i = DateInterval::createFromDateString('1 year + 1 day');

$i = new DateInterval('P1DT12H');
$i = DateInterval::createFromDateString('1 day + 12 hours');

$i = new DateInterval('PT3600S');
$i = DateInterval::createFromDateString('3600 seconds');
```

Example #2 Parsing combinations and negative intervals

```
<?php
$i = DateInterval::createFromDateString('62 weeks + 1 day + 2 weeks + 2 hours + 70 minutes');
echo $i->format('%d %h %i'), "\n";

$i = DateInterval::createFromDateString('1 year - 10 days');
echo $i->format('%y %d'), "\n";
```

The above example will output:

```
449 2 70
1 -10
```

Example #3 Parsing special relative date intervals

```
<?php
$i = DateInterval::createFromDateString('last day of next month');
var_dump($i);

$i = DateInterval::createFromDateString('last weekday');
var_dump($i);
```

Output of the above example in PHP 8.2:

```
object(DateInterval)#1 (2) {
  ["from_string"]=>
  bool(true)
  ["date_string"]=>
  string(22) "last day of next month"
}
object(DateInterval)#2 (2) {
  ["from_string"]=>
  bool(true)
  ["date_string"]=>
  string(12) "last weekday"
}
```

Output of the above example in PHP 8 is similar to:

```
object(DateInterval)#1 (16) {
  ["y"]=>
  int(0)
  ["m"]=>
  int(1)
  ["d"]=>
  int(0)
  ["h"]=>
  int(0)
  ["i"]=>
  int(0)
  ["s"]=>
  int(0)
  ["f"]=>
  float(0)
  ["weekday"]=>
  int(0)
  ["weekday_behavior"]=>
  int(0)
  ["first_last_day_of"]=>
  int(2)
  ["invert"]=>
  int(0)
  ["days"]=>
  bool(false)
  ["special_type"]=>
  int(0)
  ["special_amount"]=>
  int(0)
  ["have_weekday_relative"]=>
  int(0)
  ["have_special_relative"]=>
  int(0)
}
object(DateInterval)#2 (16) {
  ["y"]=>
  int(0)
  ["m"]=>
  int(0)
  ["d"]=>
  int(0)
  ["h"]=>
  int(0)
  ["i"]=>
  int(0)
  ["s"]=>
  int(0)
  ["f"]=>
  float(0)
  ["weekday"]=>
  int(0)
  ["weekday_behavior"]=>
  int(0)
  ["first_last_day_of"]=>
  int(0)
  ["invert"]=>
  int(0)
  ["days"]=>
  bool(false)
  ["special_type"]=>
  int(1)
  ["special_amount"]=>
  int(-1)
  ["have_weekday_relative"]=>
  int(0)
  ["have_special_relative"]=>
  int(1)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dateinterval.createfromdatestring.php
