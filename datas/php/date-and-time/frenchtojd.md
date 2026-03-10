# frenchtojd

Source: https://devdocs.io/php/function.frenchtojd

(PHP 4, PHP 5, PHP 7, PHP 8)

frenchtojd — Converts a date from the French Republican Calendar to a Julian Day Count

### Description

```
frenchtojd(int $month, int $day, int $year): int
```

Converts a date from the French Republican Calendar to a Julian Day Count.

These routines only convert dates in years 1 through 14 (Gregorian dates 22 September 1792 through 22 September 1806). This more than covers the period when the calendar was in use.

### Parameters

The month as a number from 1 (for Vendémiaire) to 13 (for the period of 5-6 days at the end of each year)

The day as a number from 1 to 30

The year as a number between 1 and 14

### Return Values

The julian day for the given french revolution date as an integer.

### See Also

- jdtofrench() - Converts a Julian Day Count to the French Republican Calendar
- cal_to_jd() - Converts from a supported calendar to Julian Day Count

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.frenchtojd.php
