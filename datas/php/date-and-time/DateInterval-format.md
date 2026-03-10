# DateInterval::format

Source: https://devdocs.io/php/dateinterval.format

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

DateInterval::format — Formats the interval

### Description

```
public DateInterval::format(string $format): string
```

Formats the interval.

### Parameters

### Return Values

Returns the formatted interval.

### Changelog

### Examples

Example #1 DateInterval example

```
<?php
$interval = new DateInterval('P2Y4DT6H8M');
echo $interval->format('%d days');
```

The above example will output:

```
4 days
```

Example #2 DateInterval and carry over points

```
<?php
$interval = new DateInterval('P32D');
echo $interval->format('%d days');
```

The above example will output:

```
32 days
```

Example #3 DateInterval and DateTime::diff() with the %a and %d modifiers

```
<?php
$january = new DateTime('2010-01-01');
$february = new DateTime('2010-02-01');
$interval = $february->diff($january);

// %a will output the total number of days.
echo $interval->format('%a total days')."\n";

// While %d will only output the number of days not already covered by the
// month.
echo $interval->format('%m month, %d days');
```

The above example will output:

```
31 total days
1 month, 0 days
```

### Notes

Note:

The DateInterval::format() method does not recalculate carry over points in time strings nor in date segments. This is expected because it is not possible to overflow values like "32 days" which could be interpreted as anything from "1 month and 4 days" to "1 month and 1 day".

### See Also

- DateTime::diff() - Returns the difference between two DateTime objects

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dateinterval.format.php
