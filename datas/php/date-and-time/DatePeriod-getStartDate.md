# DatePeriod::getStartDate

Source: https://devdocs.io/php/dateperiod.getstartdate

(PHP 5 >= 5.6.5, PHP 7, PHP 8)

DatePeriod::getStartDate — Gets the start date

### Description

Object-oriented style

```
public DatePeriod::getStartDate(): DateTimeInterface
```

Gets the start date of the period.

### Parameters

This function has no parameters.

### Return Values

Returns a DateTimeImmutable object when the DatePeriod is initialized with a DateTimeImmutable object as the start parameter.

Returns a DateTime object otherwise.

### Examples

Example #1 DatePeriod::getStartDate() example

```
<?php
$period = DatePeriod::createFromIso8601String('R7/2016-05-16T00:00:00Z/P1D');
$start = $period->getStartDate();
echo $start->format(DateTime::ISO8601);
```

The above example will output:

```
2016-05-16T00:00:00+0000
```

### See Also

- DatePeriod::getEndDate() - Gets the end date
- DatePeriod::getDateInterval() - Gets the interval

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dateperiod.getstartdate.php
