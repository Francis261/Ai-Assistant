# unixtojd

Source: https://devdocs.io/php/function.unixtojd

(PHP 4, PHP 5, PHP 7, PHP 8)

unixtojd — Convert Unix timestamp to Julian Day

### Description

```
unixtojd(?int $timestamp = null): int|false
```

Return the Julian Day for a Unix timestamp (seconds since 1.1.1970), or for the current day if no timestamp is given. Either way, the time is regarded as local time (not UTC).

### Parameters

A unix timestamp to convert.

### Return Values

A julian day number as integer, or false on failure.

### Changelog

### See Also

- jdtounix() - Convert Julian Day to Unix timestamp

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.unixtojd.php
