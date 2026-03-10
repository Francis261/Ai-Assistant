# DateTime::setTime

Source: https://devdocs.io/php/datetime.settime

# date_time_set

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

DateTime::setTime -- date_time_set — Sets the time

### Description

Object-oriented style

```
public DateTime::setTime(
 int $hour,
 int $minute,
 int $second = 0,
 int $microsecond = 0
): DateTime
```

Procedural style

```
date_time_set(
 DateTime $object,
 int $hour,
 int $minute,
 int $second = 0,
 int $microsecond = 0
): DateTime
```

Resets the current time of the DateTime object to a different time.

Like DateTimeImmutable::setTime() but works with DateTime.

The procedural version takes the DateTime object as its first argument.

### Parameters

Procedural style only: A DateTime object returned by date_create(). The function modifies this object.

Hour of the time.

Minute of the time.

Second of the time.

Microsecond of the time.

### Return Values

Returns the modified DateTime object for method chaining.

### Changelog

### See Also

- DateTimeImmutable::setTime() - Sets the time

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetime.settime.php
