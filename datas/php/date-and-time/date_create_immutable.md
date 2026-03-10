# date_create_immutable

Source: https://devdocs.io/php/function.date-create-immutable

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

date_create_immutable — create a new DateTimeImmutable object

### Description

```
date_create_immutable(string $datetime = "now", ?DateTimeZone $timezone = null): DateTimeImmutable|false
```

This is the procedural version of DateTimeImmutable::__construct().

Unlike the DateTimeImmutable constructor, it will return false instead of an exception if the passed in datetime string is invalid.

### Parameters

See DateTimeImmutable::__construct.

### Return Values

Returns a new DateTimeImmutable instance or false on failure

### See Also

- DateTimeImmutable::createFromFormat() - Parses a time string according to a specified format

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.date-create-immutable.php
