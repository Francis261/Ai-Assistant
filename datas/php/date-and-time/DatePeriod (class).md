# The DatePeriod class

Source: https://devdocs.io/php/class.dateperiod

## Introduction

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

Represents a date period.

A date period allows iteration over a set of dates and times, recurring at regular intervals, over a given period.

## Class synopsis

```
public static createFromISO8601String(string $specification, int $options = 0): static
```

```
public getDateInterval(): DateInterval
```

```
public getEndDate(): ?DateTimeInterface
```

```
public getRecurrences(): ?int
```

```
public getStartDate(): DateTimeInterface
```

## Predefined Constants

Exclude start date, used in DatePeriod::__construct().

Include end date, used in DatePeriod::__construct().

## Properties

The minimum amount of instances as retured by the iterator.

If the number of recurrences has been explicitly passed through the recurrences parameter in the constructor of the DatePeriod instance, then this property contains this value, plus one if the start date has not been disabled through DatePeriod::EXCLUDE_START_DATE, plus one if the end date has been enabled through DatePeriod::INCLUDE_END_DATE.

If the number of recurrences has not been explicitly passed, then this property contains the minimum number of returned instances. This would be 0, plus one if the start date has not been disabled through DatePeriod::EXCLUDE_START_DATE, plus one if the end date has been enabled through DatePeriod::INCLUDE_END_DATE.

```
<?php
$start = new DateTime('2018-12-31 00:00:00');
$end   = new DateTime('2021-12-31 00:00:00');
$interval = new DateInterval('P1M');
$recurrences = 5;

// recurrences explicitly set through the constructor
$period = new DatePeriod($start, $interval, $recurrences, DatePeriod::EXCLUDE_START_DATE);
echo $period->recurrences, "\n";

$period = new DatePeriod($start, $interval, $recurrences);
echo $period->recurrences, "\n";

$period = new DatePeriod($start, $interval, $recurrences, DatePeriod::INCLUDE_END_DATE);
echo $period->recurrences, "\n";

// recurrences not set in the constructor
$period = new DatePeriod($start, $interval, $end);
echo $period->recurrences, "\n";

$period = new DatePeriod($start, $interval, $end, DatePeriod::EXCLUDE_START_DATE);
echo $period->recurrences, "\n";
```

The above example will output:

```
5
6
7
1
0
```

See also DatePeriod::getRecurrences().

Whether to include the end date in the set of recurring dates or not.

Whether to include the start date in the set of recurring dates or not.

The start date of the period.

During iteration this will contain the current date within the period.

The end date of the period.

An ISO 8601 repeating interval specification.

## Changelog

## Table of Contents

- DatePeriod::__construct — Creates a new DatePeriod object
- DatePeriod::createFromISO8601String — Creates a new DatePeriod object from an ISO8601 string
- DatePeriod::getDateInterval — Gets the interval
- DatePeriod::getEndDate — Gets the end date
- DatePeriod::getRecurrences — Gets the number of recurrences
- DatePeriod::getStartDate — Gets the start date

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.dateperiod.php
