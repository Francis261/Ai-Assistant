# DateTime::modify

Source: https://devdocs.io/php/datetime.modify

# date_modify

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

DateTime::modify -- date_modify — Alters the timestamp

### Description

Object-oriented style

```
public DateTime::modify(string $modifier): DateTime
```

Procedural style

```
date_modify(DateTime $object, string $modifier): DateTime|false
```

Alter the timestamp of a DateTime object by incrementing or decrementing in a format accepted by DateTimeImmutable::__construct().

### Parameters

Procedural style only: A DateTime object returned by date_create(). The function modifies this object.

A date/time string. Valid formats are explained in Date and Time Formats.

### Return Values

Returns DateTime on success. Procedural style returns false on failure.

### Errors/Exceptions

Object Oriented API only: If an invalid Date/Time string is passed, DateMalformedStringException is thrown.

### Changelog

### Examples

Example #1 DateTime::modify() example

Object-oriented style

```
<?php
$date = new DateTime('2006-12-12');
$date->modify('+1 day');
echo $date->format('Y-m-d');
```

The above example will output:

```
2006-12-13
```

Procedural style

```
<?php
$date = date_create('2006-12-12');
date_modify($date, '+1 day');
echo date_format($date, 'Y-m-d');
```

The above example will output:

```
2006-12-13
```

Example #2 Beware when adding or subtracting months

```
<?php
$date = new DateTime('2000-12-31');

$date->modify('+1 month');
echo $date->format('Y-m-d') . "\n";

$date->modify('+1 month');
echo $date->format('Y-m-d') . "\n";
```

The above example will output:

```
2001-01-31
2001-03-03
```

Example #3 All formats of Date and Time are supported

```
<?php
$date = new DateTime('2020-12-31');

$date->modify('July 1st, 2023');
echo $date->format('Y-m-d H:i') . "\n";

$date->modify('Monday next week');
echo $date->format('Y-m-d H:i') . "\n";

$date->modify('17:30');
echo $date->format('Y-m-d H:i') . "\n";
```

The above example will output:

```
2023-07-01 00:00
2023-07-03 00:00
2023-07-03 17:30
```

### See Also

- strtotime() - Parse about any English textual datetime description into a Unix timestamp
- DateTimeImmutable::modify() - Creates a new object with modified timestamp
- DateTime::add() - Modifies a DateTime object, with added amount of days, months, years, hours, minutes and seconds
- DateTime::sub() - Subtracts an amount of days, months, years, hours, minutes and seconds from a DateTime object
- DateTime::setDate() - Sets the date
- DateTime::setISODate() - Sets the ISO date
- DateTime::setTime() - Sets the time
- DateTime::setTimestamp() - Sets the date and time based on an Unix timestamp

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetime.modify.php
