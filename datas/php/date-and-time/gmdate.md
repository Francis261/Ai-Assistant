# gmdate

Source: https://devdocs.io/php/function.gmdate

(PHP 4, PHP 5, PHP 7, PHP 8)

gmdate — Format a GMT/UTC date/time

### Description

```
gmdate(string $format, ?int $timestamp = null): string
```

Identical to the date() function except that the time returned is Greenwich Mean Time (GMT).

### Parameters

The format of the outputted date string. See the formatting options for the date() function.

The optional timestamp parameter is an int Unix timestamp that defaults to the current local time if timestamp is omitted or null. In other words, it defaults to the value of time().

### Return Values

Returns a formatted date string.

### Changelog

### Examples

Example #1 gmdate() example

```
<?php
date_default_timezone_set("Europe/Helsinki");

echo date("M d Y H:i:s e", mktime(0, 0, 0, 1, 1, 1998)) . "\n";
echo gmdate("M d Y H:i:s e", mktime(0, 0, 0, 1, 1, 1998));
```

The above example will output:

```
Jan 01 1998 00:00:00 Europe/Helsinki
Dec 31 1997 22:00:00 UTC
```

### See Also

- DateTimeImmutable::__construct() - Returns new DateTimeImmutable object
- DateTimeInterface::format() - Returns date formatted according to given format
- date() - Format a Unix timestamp
- mktime() - Get Unix timestamp for a date
- gmmktime() - Get Unix timestamp for a GMT date
- IntlDateFormatter::format() - Format the date/time value as a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmdate.php
