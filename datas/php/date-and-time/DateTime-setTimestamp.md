# DateTime::setTimestamp

Source: https://devdocs.io/php/datetime.settimestamp

# date_timestamp_set

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

DateTime::setTimestamp -- date_timestamp_set — Sets the date and time based on an Unix timestamp

### Description

Object-oriented style

```
public DateTime::setTimestamp(int $timestamp): DateTime
```

Procedural style

```
date_timestamp_set(DateTime $object, int $timestamp): DateTime
```

Sets the date and time based on an Unix timestamp.

Like DateTimeImmutable::setTimestamp() but works with DateTime.

The procedural version takes the DateTime object as its first argument.

### Parameters

Procedural style only: A DateTime object returned by date_create(). The function modifies this object.

Unix timestamp representing the date. Setting timestamps outside the range of int is possible by using DateTimeImmutable::modify() with the @ format.

### Return Values

Returns the modified DateTime object for method chaining.

### See Also

- DateTimeImmutable::setTimestamp() - Sets the date and time based on a Unix timestamp

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetime.settimestamp.php
