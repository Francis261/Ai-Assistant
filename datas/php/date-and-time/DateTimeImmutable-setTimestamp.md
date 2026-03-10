# DateTimeImmutable::setTimestamp

Source: https://devdocs.io/php/datetimeimmutable.settimestamp

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

DateTimeImmutable::setTimestamp — Sets the date and time based on a Unix timestamp

### Description

```
#[\NoDiscard]
 public DateTimeImmutable::setTimestamp(int $timestamp): DateTimeImmutable
```

Returns a new DateTimeImmutable object constructed from the old one, with the date and time set based on an Unix timestamp.

### Parameters

Unix timestamp representing the date. Setting timestamps outside the range of int is possible by using DateTimeImmutable::modify() with the @ format.

### Return Values

Returns a new DateTimeImmutable object with the modified data.

### Examples

Example #1 DateTimeImmutable::setTimestamp() example

Object-oriented style

```
<?php
$date = new DateTimeImmutable();
echo $date->format('U = Y-m-d H:i:s') . "\n";

$newDate = $date->setTimestamp(1171502725);
echo $newDate->format('U = Y-m-d H:i:s') . "\n";
```

The above example will output something similar to:

```
1272508903 = 2010-04-28 22:41:43
1171502725 = 2007-02-14 20:25:25
```

### See Also

- DateTimeImmutable::getTimestamp() - Gets the Unix timestamp

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetimeimmutable.settimestamp.php
