# date_create

Source: https://devdocs.io/php/function.date-create

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

date_create — create a new DateTime object

### Description

```
date_create(string $datetime = "now", ?DateTimeZone $timezone = null): DateTime|false
```

This is the procedural version of DateTime::__construct().

Unlike the DateTime constructor, it will return false instead of an exception if the passed in datetime string is invalid.

### Parameters

See DateTimeImmutable::__construct.

### Return Values

Returns a new DateTime instance or false on failure

### See Also

- DateTimeImmutable::__construct() - Returns new DateTimeImmutable object
- DateTimeImmutable::createFromFormat() - Parses a time string according to a specified format
- DateTime::__construct() - Returns new DateTime object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.date-create.php
