# DatePeriod::getDateInterval

Source: https://devdocs.io/php/dateperiod.getdateinterval

(PHP 5 >= 5.6.5, PHP 7, PHP 8)

DatePeriod::getDateInterval — Gets the interval

### Description

Object-oriented style

```
public DatePeriod::getDateInterval(): DateInterval
```

Gets a DateInterval object representing the interval used for the period.

### Parameters

This function has no parameters.

### Return Values

Returns a DateInterval object

### Examples

Example #1 DatePeriod::getDateInterval() example

```
<?php
$period = DatePeriod::createFromIso8601String('R7/2016-05-16T00:00:00Z/P1D');
$interval = $period->getDateInterval();
echo $interval->format('%d day');
```

The above example will output:

```
1 day
```

### See Also

- DatePeriod::getStartDate() - Gets the start date
- DatePeriod::getEndDate() - Gets the end date

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dateperiod.getdateinterval.php
