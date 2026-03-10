# DateTimeImmutable::setTime

Source: https://devdocs.io/php/datetimeimmutable.settime

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

DateTimeImmutable::setTime — Sets the time

### Description

```
#[\NoDiscard]
 public DateTimeImmutable::setTime(
 int $hour,
 int $minute,
 int $second = 0,
 int $microsecond = 0
): DateTimeImmutable
```

Returns a new DateTimeImmutable object with the time set to the given time.

### Parameters

Hour of the time.

Minute of the time.

Second of the time.

Microsecond of the time.

### Return Values

Returns a new DateTimeImmutable object with the modified data.

### Changelog

### Examples

Example #1 DateTimeImmutable::setTime() example

Object-oriented style

```
<?php
$date = new DateTimeImmutable('2001-01-01');

$newDate = $date->setTime(14, 55);
echo $newDate->format('Y-m-d H:i:s') . "\n";

$newDate = $date->setTime(14, 55, 24);
echo $newDate->format('Y-m-d H:i:s') . "\n";
?>
```

The above example will output something similar to:

```
2001-01-01 14:55:00
2001-01-01 14:55:24
```

Example #2 Values exceeding ranges are added to their parent values

```
<?php
$date = new DateTimeImmutable('2001-01-01');

$newDate = $date->setTime(14, 55, 24);
echo $newDate->format('Y-m-d H:i:s') . "\n";

$newDate = $date->setTime(14, 55, 65);
echo $newDate->format('Y-m-d H:i:s') . "\n";

$newDate = $date->setTime(14, 65, 24);
echo $newDate->format('Y-m-d H:i:s') . "\n";

$newDate = $date->setTime(25, 55, 24);
echo $newDate->format('Y-m-d H:i:s') . "\n";
?>
```

The above example will output:

```
2001-01-01 14:55:24
2001-01-01 14:56:05
2001-01-01 15:05:24
2001-01-02 01:55:24
```

### See Also

- DateTimeImmutable::setDate() - Sets the date
- DateTimeImmutable::setISODate() - Sets the ISO date

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetimeimmutable.settime.php
