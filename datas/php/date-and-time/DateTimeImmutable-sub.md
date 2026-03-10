# DateTimeImmutable::sub

Source: https://devdocs.io/php/datetimeimmutable.sub

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

DateTimeImmutable::sub — Subtracts an amount of days, months, years, hours, minutes and seconds

### Description

```
#[\NoDiscard]
 public DateTimeImmutable::sub(DateInterval $interval): DateTimeImmutable
```

Returns a new DateTimeImmutable object, with the specified DateInterval object subtracted from the specified DateTimeImmutable object.

### Parameters

A DateInterval object

### Return Values

Returns a new DateTimeImmutable object with the modified data.

### Errors/Exceptions

If an unsupported operation is attempted, such as using a DateInterval object representing relative time specifications such as next weekday, a DateInvalidOperationException is thrown.

### Changelog

### Examples

Example #1 DateTimeImmutable::sub() example

Object-oriented style

```
<?php
$date = new DateTimeImmutable('2000-01-20');
$newDate = $date->sub(new DateInterval('P10D'));
echo $newDate->format('Y-m-d') . "\n";
?>
```

The above example will output:

```
2000-01-10
```

Example #2 Further DateTimeImmutable::sub() examples

```
<?php
$date = new DateTimeImmutable('2000-01-20');
$newDate = $date->sub(new DateInterval('PT10H30S'));
echo $newDate->format('Y-m-d H:i:s') . "\n";

$date = new DateTimeImmutable('2000-01-20');
$newDate = $date->sub(new DateInterval('P7Y5M4DT4H3M2S'));
echo $newDate->format('Y-m-d H:i:s') . "\n";
?>
```

The above example will output:

```
2000-01-19 13:59:30
1992-08-15 19:56:58
```

Example #3 Beware when subtracting months

```
<?php
$date = new DateTimeImmutable('2001-04-30');
$interval = new DateInterval('P1M');

$newDate1 = $date->sub($interval);
echo $newDate1->format('Y-m-d') . "\n";

$newDate2 = $newDate1->sub($interval);
echo $newDate2->format('Y-m-d') . "\n";
?>
```

The above example will output:

```
2001-03-30
2001-03-02
```

### See Also

- DateTimeImmutable::add() - Returns a new object, with added amount of days, months, years, hours, minutes and seconds
- DateTimeImmutable::diff() - Returns the difference between two DateTime objects
- DateTimeImmutable::modify() - Creates a new object with modified timestamp

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetimeimmutable.sub.php
