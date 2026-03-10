# gmmktime

Source: https://devdocs.io/php/function.gmmktime

(PHP 4, PHP 5, PHP 7, PHP 8)

gmmktime — Get Unix timestamp for a GMT date

### Description

```
gmmktime(
 int $hour,
 ?int $minute = null,
 ?int $second = null,
 ?int $month = null,
 ?int $day = null,
 ?int $year = null
): int|false
```

Identical to mktime() except the passed parameters represents a GMT date. gmmktime() internally uses mktime() so only times valid in derived local time can be used.

Like mktime(), optional arguments may be left out in order from right to left, with any omitted arguments being set to the current corresponding GMT value.

Calling gmmktime() without any arguments is not supported, and will result in an ArgumentCountError. time() can be used to get the current timestamp.

### Parameters

The number of the hour relative to the start of the day determined by month, day and year. Negative values reference the hour before midnight of the day in question. Values greater than 23 reference the appropriate hour in the following day(s).

The number of the minute relative to the start of the hour. Negative values reference the minute in the previous hour. Values greater than 59 reference the appropriate minute in the following hour(s).

The number of seconds relative to the start of the minute. Negative values reference the second in the previous minute. Values greater than 59 reference the appropriate second in the following minute(s).

The number of the month relative to the end of the previous year. Values 1 to 12 reference the normal calendar months of the year in question. Values less than 1 (including negative values) reference the months in the previous year in reverse order, so 0 is December, -1 is November, etc. Values greater than 12 reference the appropriate month in the following year(s).

The number of the day relative to the end of the previous month. Values 1 to 28, 29, 30 or 31 (depending upon the month) reference the normal days in the relevant month. Values less than 1 (including negative values) reference the days in the previous month, so 0 is the last day of the previous month, -1 is the day before that, etc. Values greater than the number of days in the relevant month reference the appropriate day in the following month(s).

The year

### Return Values

Returns a int Unix timestamp on success, or false if the timestamp doesn't fit in a PHP integer.

### Changelog

### Examples

Example #1 gmmktime() basic example

```
<?php
date_default_timezone_set("Indian/Maldives");

echo "July 1, 2000 is on a " . date("l", gmmktime(0, 0, 0, 7, 1, 2000));
```

The above example will output:

```
July 1, 2000 is on a Saturday
```

### See Also

- The DateTimeImmutable class
- mktime() - Get Unix timestamp for a date
- date() - Format a Unix timestamp
- time() - Return current Unix timestamp

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmmktime.php
