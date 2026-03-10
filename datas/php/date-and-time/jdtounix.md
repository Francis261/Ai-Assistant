# jdtounix

Source: https://devdocs.io/php/function.jdtounix

(PHP 4, PHP 5, PHP 7, PHP 8)

jdtounix — Convert Julian Day to Unix timestamp

### Description

```
jdtounix(int $julian_day): int
```

This function will return a Unix timestamp corresponding to the Julian Day given in julian_day. The time returned is UTC.

### Parameters

A julian day number between 2440588 and 106751993607888 on 64bit systems, or between 2440588 and 2465443 on 32bit systems.

### Return Values

The unix timestamp for the start (midnight, not noon) of the given Julian day

### Errors/Exceptions

If julian_day is outside of the allowed range, a ValueError is thrown.

### Changelog

### See Also

- unixtojd() - Convert Unix timestamp to Julian Day

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.jdtounix.php
