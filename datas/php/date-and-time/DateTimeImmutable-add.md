# DateTimeImmutable::add

Source: https://devdocs.io/php/datetimeimmutable.add

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

DateTimeImmutable::add — Returns a new object, with added amount of days, months, years, hours, minutes and seconds

### Description

```
#[\NoDiscard]
 public DateTimeImmutable::add(DateInterval $interval): DateTimeImmutable
```

Creates a new DateTimeImmutable object, and adds the specified DateInterval object to this, to represent the new value.

### Parameters

A DateInterval object

### Return Values

Returns a new DateTimeImmutable object with the modified data.

### Examples

Example #1 DateTimeImmutable::add() example

Object-oriented style

```
<?php
$date = new DateTimeImmutable('2000-01-01');
$newDate = $date->add(new DateInterval('P10D'));
echo $newDate->format('Y-m-d') . "\n";
?>
```

Example #2 Further DateTimeImmutable::add() examples

```
<?php
$date = new DateTimeImmutable('2000-01-01');
$newDate = $date->add(new DateInterval('PT10H30S'));
echo $newDate->format('Y-m-d H:i:s') . "\n";

$date = new DateTimeImmutable('2000-01-01');
$newDate = $date->add(new DateInterval('P7Y5M4DT4H3M2S'));
echo $newDate->format('Y-m-d H:i:s') . "\n";
?>
```

The above example will output:

```
2000-01-01 10:00:30
2007-06-05 04:03:02
```

Example #3 Beware when adding months

```
<?php
$date = new DateTimeImmutable('2000-12-31');
$interval = new DateInterval('P1M');

$newDate1 = $date->add($interval);
echo $newDate1->format('Y-m-d') . "\n";

$newDate2 = $newDate1->add($interval);
echo $newDate2->format('Y-m-d') . "\n";
?>
```

The above example will output:

```
2001-01-31
2001-03-03
```

### See Also

- DateTimeImmutable::sub() - Subtracts an amount of days, months, years, hours, minutes and seconds
- DateTimeImmutable::diff() - Returns the difference between two DateTime objects
- DateTimeImmutable::modify() - Creates a new object with modified timestamp

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetimeimmutable.add.php
