# The DateInterval class

Source: https://devdocs.io/php/class.dateinterval

## Introduction

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

Represents a date interval.

A date interval stores either a fixed amount of time (in years, months, days, hours etc) or a relative time string in the format that DateTimeImmutable's and DateTime's constructors support.

More specifically, the information in an object of the DateInterval class is an instruction to get from one date/time to another date/time. This process is not always reversible.

A common way to create a DateInterval object is by calculating the difference between two date/time objects through DateTimeInterface::diff().

Since there is no well defined way to compare date intervals, DateInterval instances are incomparable.

## Class synopsis

```
public static createFromDateString(string $datetime): DateInterval
```

```
public format(string $format): string
```

## Properties

The available properties listed below depend on PHP version, and should be considered as readonly.

Number of years.

Number of months.

Number of days.

Number of hours.

Number of minutes.

Number of seconds.

Number of microseconds, as a fraction of a second.

Is 1 if the interval represents a negative time period and 0 otherwise. See DateInterval::format().

If the DateInterval object was created by DateTimeImmutable::diff() or DateTime::diff(), then this is the total number of full days between the start and end dates. Otherwise, days will be false.

If the DateInterval object was created by DateInterval::createFromDateString(), then this property's value will be true, and the date_string property will be populated. Otherwise, the value will be false, and the y to f, invert, and days properties will be populated.

The string used as argument to DateInterval::createFromDateString().

## Changelog

## Table of Contents

- DateInterval::__construct — Creates a new DateInterval object
- DateInterval::createFromDateString — Sets up a DateInterval from the relative parts of the string
- DateInterval::format — Formats the interval

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.dateinterval.php
