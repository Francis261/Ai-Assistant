# DateTimeImmutable::modify

Source: https://devdocs.io/php/datetimeimmutable.modify

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

DateTimeImmutable::modify — Creates a new object with modified timestamp

### Description

```
#[\NoDiscard]
 public DateTimeImmutable::modify(string $modifier): DateTimeImmutable
```

Creates a new DateTimeImmutable object with modified timestamp. The original object is not modified.

### Parameters

A date/time string. Valid formats are explained in Date and Time Formats.

### Return Values

Returns DateTimeImmutable on success. Procedural style returns false on failure.

### Errors/Exceptions

If an invalid Date/Time string is passed, DateMalformedStringException is thrown. Previous to PHP 8.3, this was a warning.

### Changelog

### Examples

Example #1 DateTimeImmutable::modify() example

Object-oriented style

```
<?php
$date = new DateTimeImmutable('2006-12-12');
$newDate = $date->modify('+1 day');
echo $newDate->format('Y-m-d');
```

The above example will output:

```
2006-12-13
```

Example #2 Beware when adding or subtracting months

```
<?php
$date = new DateTimeImmutable('2000-12-31');

$newDate1 = $date->modify('+1 month');
echo $newDate1->format('Y-m-d') . "\n";

$newDate2 = $newDate1->modify('+1 month');
echo $newDate2->format('Y-m-d') . "\n";
```

The above example will output:

```
2001-01-31
2001-03-03
```

### See Also

- DateTimeImmutable::add() - Returns a new object, with added amount of days, months, years, hours, minutes and seconds
- DateTimeImmutable::sub() - Subtracts an amount of days, months, years, hours, minutes and seconds
- DateTimeImmutable::setDate() - Sets the date
- DateTimeImmutable::setISODate() - Sets the ISO date
- DateTimeImmutable::setTime() - Sets the time
- DateTimeImmutable::setTimestamp() - Sets the date and time based on a Unix timestamp

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetimeimmutable.modify.php
