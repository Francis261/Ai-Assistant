# DateInterval::__construct

Source: https://devdocs.io/php/dateinterval.construct

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

DateInterval::__construct — Creates a new DateInterval object

### Description

Creates a new DateInterval object.

### Parameters

An interval specification.

The format starts with the letter P, for period. Each duration period is represented by an integer value followed by a period designator. If the duration contains time elements, that portion of the specification is preceded by the letter T.

Here are some simple examples. Two days is P2D. Two seconds is PT2S. Six years and five minutes is P6YT5M.

Note:

The unit types must be entered from the largest scale unit on the left to the smallest scale unit on the right. So years before months, months before days, days before minutes, etc. Thus one year and four days must be represented as P1Y4D, not P4D1Y.

The specification can also be represented as a date time. A sample of one year and four days would be P0001-00-04T00:00:00. But the values in this format can not exceed a given period's roll-over-point (e.g. 25 hours is invalid).

These formats are based on the » ISO 8601 duration specification.

### Errors/Exceptions

Throws an DateMalformedIntervalStringException when the duration cannot be parsed as an interval. Prior to PHP 8.3, this was Exception.

### Changelog

### Examples

Example #1 Constructing and using DateInterval objects

```
<?php
// Create a specific date
$someDate = \DateTime::createFromFormat("Y-m-d H:i", "2022-08-25 14:18");

// Create interval
$interval = new \DateInterval("P7D");

// Add interval
$someDate->add($interval);

// Convert interval to string
echo $interval->format("%d");
```

The above example will output:

```
7
```

Example #2 DateInterval example

```
<?php
$interval = new DateInterval('P1W2D');
var_dump($interval);
```

Output of the above example in PHP 8.2:

```
object(DateInterval)#1 (10) {
  ["y"]=>
  int(0)
  ["m"]=>
  int(0)
  ["d"]=>
  int(9)
  ["h"]=>
  int(0)
  ["i"]=>
  int(0)
  ["s"]=>
  int(0)
  ["f"]=>
  float(0)
  ["invert"]=>
  int(0)
  ["days"]=>
  bool(false)
  ["from_string"]=>
  bool(false)
}
```

Output of the above example in PHP 8:

```
object(DateInterval)#1 (16) {
  ["y"]=>
  int(0)
  ["m"]=>
  int(0)
  ["d"]=>
  int(9)
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
  int(0)
  ["special_amount"]=>
  int(0)
  ["have_weekday_relative"]=>
  int(0)
  ["have_special_relative"]=>
  int(0)
}
```

Output of the above example in PHP 7:

```
object(DateInterval)#1 (16) {
  ["y"]=>
  int(0)
  ["m"]=>
  int(0)
  ["d"]=>
  int(2)
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
  int(0)
  ["special_amount"]=>
  int(0)
  ["have_weekday_relative"]=>
  int(0)
  ["have_special_relative"]=>
  int(0)
}
```

### See Also

- DateInterval::format() - Formats the interval
- DateTime::add() - Modifies a DateTime object, with added amount of days, months, years, hours, minutes and seconds
- DateTime::sub() - Subtracts an amount of days, months, years, hours, minutes and seconds from a DateTime object
- DateTime::diff() - Returns the difference between two DateTime objects

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dateinterval.construct.php
