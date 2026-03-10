# DateTimeImmutable::setDate

Source: https://devdocs.io/php/datetimeimmutable.setdate

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

DateTimeImmutable::setDate — Sets the date

### Description

```
#[\NoDiscard]
 public DateTimeImmutable::setDate(int $year, int $month, int $day): DateTimeImmutable
```

Returns a new DateTimeImmutable object with the current date of the DateTimeImmutable object set to the given date.

### Parameters

Procedural style only: A DateTime object returned by date_create(). The function modifies this object.

Year of the date.

Month of the date.

Day of the date.

### Return Values

Returns a new DateTimeImmutable object with the modified data.

### Examples

Example #1 DateTimeImmutable::setDate() example

Object-oriented style

```
<?php
$date = new DateTimeImmutable();
$newDate = $date->setDate(2001, 2, 3);
echo $newDate->format('Y-m-d');
```

The above example will output:

```
2001-02-03
```

Example #2 Values exceeding ranges are added to their parent values

```
<?php
$date = new DateTimeImmutable();

$newDate = $date->setDate(2001, 2, 28);
echo $newDate->format('Y-m-d') . "\n";

$newDate = $date->setDate(2001, 2, 29);
echo $newDate->format('Y-m-d') . "\n";

$newDate = $date->setDate(2001, 14, 3);
echo $newDate->format('Y-m-d') . "\n";
```

The above example will output:

```
2001-02-28
2001-03-01
2002-02-03
```

### See Also

- DateTimeImmutable::setISODate() - Sets the ISO date
- DateTimeImmutable::setTime() - Sets the time

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetimeimmutable.setdate.php
