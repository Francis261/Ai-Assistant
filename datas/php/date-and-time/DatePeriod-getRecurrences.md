# DatePeriod::getRecurrences

Source: https://devdocs.io/php/dateperiod.getrecurrences

(PHP 7 >= 7.2.17/7.3.4, PHP 8)

DatePeriod::getRecurrences — Gets the number of recurrences

### Description

Object-oriented style

```
public DatePeriod::getRecurrences(): ?int
```

Get the number of recurrences.

### Parameters

This function has no parameters.

### Return Values

The number of recurrences as set by explicitly passing the $recurrences to the constructor of the DatePeriod class, or null otherwise.

### Examples

Example #1 Different values for DatePeriod::getRecurrences()

```
<?php
$start = new DateTime('2018-12-31 00:00:00');
$end   = new DateTime('2021-12-31 00:00:00');
$interval = new DateInterval('P1M');
$recurrences = 5;

// recurrences explicitly set through the constructor
$period = new DatePeriod($start, $interval, $recurrences, DatePeriod::EXCLUDE_START_DATE);
echo $period->getRecurrences(), "\n";

$period = new DatePeriod($start, $interval, $recurrences);
echo $period->getRecurrences(), "\n";

$period = new DatePeriod($start, $interval, $recurrences, DatePeriod::INCLUDE_END_DATE);
echo $period->getRecurrences(), "\n\n";

// recurrences not set in the constructor
$period = new DatePeriod($start, $interval, $end);
var_dump($period->getRecurrences());

$period = new DatePeriod($start, $interval, $end, DatePeriod::EXCLUDE_START_DATE);
var_dump($period->getRecurrences());
```

The above example will output:

```
5
5
5

NULL
NULL
```

### See Also

- DatePeriod::$recurrences

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dateperiod.getrecurrences.php
