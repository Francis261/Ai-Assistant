# DatePeriod::getEndDate

Source: https://devdocs.io/php/dateperiod.getenddate

(PHP 5 >= 5.6.5, PHP 7, PHP 8)

DatePeriod::getEndDate — Gets the end date

### Description

Object-oriented style

```
public DatePeriod::getEndDate(): ?DateTimeInterface
```

Gets the end date of the period.

### Parameters

This function has no parameters.

### Return Values

Returns null if the DatePeriod does not have an end date. For example, when initialized with the recurrences parameter, or the isostr parameter without an end date.

Returns a DateTimeImmutable object when the DatePeriod is initialized with a DateTimeImmutable object as the end parameter.

Returns a cloned DateTime object representing the end date otherwise.

### Examples

Example #1 DatePeriod::getEndDate() example

```
<?php
$period = new DatePeriod(
    new DateTime('2016-05-16T00:00:00Z'),
    new DateInterval('P1D'),
    new DateTime('2016-05-20T00:00:00Z')
);
$start = $period->getEndDate();
echo $start->format(DateTime::ISO8601);
```

The above examples will output:

```
2016-05-20T00:00:00+0000
```

Example #2 DatePeriod::getEndDate() without an end date

```
<?php
$period = new DatePeriod(
    new DateTime('2016-05-16T00:00:00Z'),
    new DateInterval('P1D'),
    7
);
var_dump($period->getEndDate());
```

The above example will output:

```
NULL
```

### See Also

- DatePeriod::getStartDate() - Gets the start date
- DatePeriod::getDateInterval() - Gets the interval

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dateperiod.getenddate.php
