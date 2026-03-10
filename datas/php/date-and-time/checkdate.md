# checkdate

Source: https://devdocs.io/php/function.checkdate

(PHP 4, PHP 5, PHP 7, PHP 8)

checkdate — Validate a Gregorian date

### Description

```
checkdate(int $month, int $day, int $year): bool
```

Checks the validity of the date formed by the arguments. A date is considered valid if each parameter is properly defined.

### Parameters

The month is between 1 and 12 inclusive.

The day is within the allowed number of days for the given month. Leap years are taken into consideration.

The year is between 1 and 32767 inclusive.

### Return Values

Returns true if the date given is valid; otherwise returns false.

### Examples

Example #1 checkdate() example

```
<?php
var_dump(checkdate(12, 31, 2000));
var_dump(checkdate(2, 29, 2001));
```

The above example will output:

```
bool(true)
bool(false)
```

### See Also

- mktime() - Get Unix timestamp for a date
- strtotime() - Parse about any English textual datetime description into a Unix timestamp

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.checkdate.php
