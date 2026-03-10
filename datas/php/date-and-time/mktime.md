# mktime

Source: https://devdocs.io/php/function.mktime

(PHP 4, PHP 5, PHP 7, PHP 8)

mktime — Get Unix timestamp for a date

### Description

```
mktime(
 int $hour,
 ?int $minute = null,
 ?int $second = null,
 ?int $month = null,
 ?int $day = null,
 ?int $year = null
): int|false
```

Returns the Unix timestamp corresponding to the arguments given. This timestamp is a long integer containing the number of seconds between the Unix Epoch (January 1 1970 00:00:00 GMT) and the time specified.

Any optional arguments omitted or null will be set to the current value according to the local date and time.

Please note that the ordering of arguments is in an odd order: month, day, year, and not in the more reasonable order of year, month, day.

Calling mktime() without arguments is not supported, and will result in an ArgumentCountError. time() can be used to get the current timestamp.

### Parameters

The number of the hour relative to the start of the day determined by month, day and year. Negative values reference the hour before midnight of the day in question. Values greater than 23 reference the appropriate hour in the following day(s).

The number of the minute relative to the start of the hour. Negative values reference the minute in the previous hour. Values greater than 59 reference the appropriate minute in the following hour(s).

The number of seconds relative to the start of the minute. Negative values reference the second in the previous minute. Values greater than 59 reference the appropriate second in the following minute(s).

The number of the month relative to the end of the previous year. Values 1 to 12 reference the normal calendar months of the year in question. Values less than 1 (including negative values) reference the months in the previous year in reverse order, so 0 is December, -1 is November, etc. Values greater than 12 reference the appropriate month in the following year(s).

The number of the day relative to the end of the previous month. Values 1 to 28, 29, 30 or 31 (depending upon the month) reference the normal days in the relevant month. Values less than 1 (including negative values) reference the days in the previous month, so 0 is the last day of the previous month, -1 is the day before that, etc. Values greater than the number of days in the relevant month reference the appropriate day in the following month(s).

The number of the year, may be a two or four digit value, with values between 0-69 mapping to 2000-2069 and 70-100 to 1970-2000. On systems where time_t is a 32bit signed integer, as most common today, the valid range for year is somewhere between 1901 and 2038.

### Return Values

mktime() returns the Unix timestamp of the arguments given, or false if the timestamp doesn't fit in a PHP integer.

### Changelog

### Examples

Example #1 mktime() basic example

```
<?php
// Set the default timezone to use.
date_default_timezone_set('UTC');

// Prints: July 1, 2000 is on a Saturday
echo "July 1, 2000 is on a " . date("l", mktime(0, 0, 0, 7, 1, 2000)) . "\n";

// Prints something like: 2006-04-05T01:02:03+00:00
echo date('c', mktime(1, 2, 3, 4, 5, 2006)) . "\n";
```

The above example will output something similar to:

```
July 1, 2000 is on a Saturday
2006-04-05T01:02:03+00:00
```

Example #2 mktime() example

mktime() is useful for doing date arithmetic and validation, as it will automatically calculate the correct value for out-of-range input. For example, each of the following lines produces the string "Jan-01-1998".

```
<?php
date_default_timezone_set('America/New_York');

echo date("c", mktime(0, 0, 0, 12, 32, 1997)) . "\n";
echo date("c", mktime(0, 0, 0, 13, 1, 1997)) . "\n";
echo date("c", mktime(0, 0, 0, 1, 1, 1998)) . "\n";
echo date("c", mktime(0, 0, 0, 1, 1, 98)) . "\n";
```

The above example will output something similar to:

```
1998-01-01T00:00:00-05:00
1998-01-01T00:00:00-05:00
1998-01-01T00:00:00-05:00
1998-01-01T00:00:00-05:00
```

Example #3 Using mktime to find relative dates

```
<?php
date_default_timezone_set('Asia/Tokyo');

$tomorrow  = mktime(0, 0, 0, date("m")  , date("d")+1, date("Y"));
print date('c', $tomorrow) . "\n";

$lastmonth = mktime(0, 0, 0, date("m")-1, date("d"),   date("Y"));
print date('c', $lastmonth) . "\n";

$nextyear  = mktime(0, 0, 0, date("m"),   date("d"),   date("Y")+1) . "\n";
print date('c', $nextyear) . "\n";
```

The above example will output something similar to:

```
2025-09-30T00:00:00+09:00
2025-08-29T00:00:00+09:00
2026-09-29T00:00:00+09:00
```

Note:

This can be more reliable than simply adding or subtracting the number of seconds in a day or month to a timestamp because of daylight saving time.

Example #4 Last day of a month

The last day of any given month can be expressed as the "0" day of the next month, not the -1 day. Both of the following examples will produce the string "The last day in Feb 2000 is: 29".

```
<?php

$lastday = mktime(0, 0, 0, 3, 0, 2000);
echo 'Last day in Feb 2000 is: ', date('d', $lastday) . "\n";

$lastday = mktime(0, 0, 0, 4, -31, 2000);
echo 'Last day in Feb 2000 is: ', date('d', $lastday) . "\n";
```

The above example will output:

```
Last day in Feb 2000 is: 29
Last day in Feb 2000 is: 29
```

### See Also

- The DateTimeImmutable class
- checkdate() - Validate a Gregorian date
- gmmktime() - Get Unix timestamp for a GMT date
- date() - Format a Unix timestamp
- time() - Return current Unix timestamp

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mktime.php
