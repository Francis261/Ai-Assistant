# DateTimeInterface::getTimestamp

Source: https://devdocs.io/php/datetime.gettimestamp

# DateTimeImmutable::getTimestamp

# DateTime::getTimestamp

# date_timestamp_get

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

DateTimeInterface::getTimestamp -- DateTimeImmutable::getTimestamp -- DateTime::getTimestamp -- date_timestamp_get — Gets the Unix timestamp

### Description

Object-oriented style

```
public DateTimeInterface::getTimestamp(): int
```

```
public DateTimeImmutable::getTimestamp(): int
```

```
public DateTime::getTimestamp(): int
```

Procedural style

```
date_timestamp_get(DateTimeInterface $object): int
```

Gets the Unix timestamp.

### Parameters

This function has no parameters.

### Return Values

Returns the Unix timestamp representing the date.

### Errors/Exceptions

If the timestamp cannot be represented as int, a DateRangeError is thrown. Prior to PHP 8.3.0, a ValueError is thrown. And, prior to PHP 8.0.0, false was returned in this case. Still, the timestamp can be retrieved as string by using DateTimeInterface::format() with the U format.

### Changelog

### Examples

Example #1 DateTime::getTimestamp() example

Object-oriented style

```
<?php
$date = new DateTimeImmutable();
echo $date->getTimestamp();
```

The above example will output something similar to:

```
1272509157
```

Procedural style

```
<?php
$date = date_create();
echo date_timestamp_get($date);
```

The above example will output something similar to:

```
1272509157
```

If you need to retrieve the timestamp with millisecond or microsecond resolution, then you can use the DateTimeInterface::format() function.

Example #2 Retrieving timestamp with milli and microsecond resolution

Object-oriented style

```
<?php
$date = new DateTimeImmutable();
$milli = (int) $date->format('Uv'); // Timestamp in milliseconds
$micro = (int) $date->format('Uu'); // Timestamp in microseconds

echo $milli, "\n", $micro, "\n";
```

The above example will output something similar to:

```
1674057635586
1674057635586918
```

### See Also

- DateTime::setTimestamp() - Sets the date and time based on an Unix timestamp
- DateTimeImmutable::setTimestamp() - Sets the date and time based on a Unix timestamp
- DateTimeInterface::format() - Returns date formatted according to given format

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetime.gettimestamp.php
