# DatePeriod::createFromISO8601String

Source: https://devdocs.io/php/dateperiod.createfromiso8601string

(PHP 8 >= 8.3.0)

DatePeriod::createFromISO8601String — Creates a new DatePeriod object from an ISO8601 string

### Description

```
public static DatePeriod::createFromISO8601String(string $specification, int $options = 0): static
```

Creates a new DatePeriod object from an ISO8601 string, as specified with specification.

### Parameters

A subset of the » ISO 8601 repeating interval specification.

An example of an accepted ISO 8601 interval specifications is R5/2008-03-01T13:00:00Z/P1Y2M10DT2H30M, which specifies:

- 5 iterations (R5/)
- Starting at 2008-03-01T13:00:00Z.
- Each iteration is an 1 year, 2 months, 10 days, 2 hours, and 30 minute interval (/P1Y2M10DT2H30M).

Examples of some ISO 8601 interval specification features that PHP does not support are:

1. zero occurrences (R0/)
2. time offsets other than UTC (Z), such as +02:00.

A bit field which can be used to control certain behaviour with start- and end- dates.

With DatePeriod::EXCLUDE_START_DATE you exclude the start date from the set of recurring dates within the period.

With DatePeriod::INCLUDE_END_DATE you include the end date in the set of recurring dates within the period.

### Return Values

Creates a new DatePeriod object.

DatePeriod objects created with this method can be used as an iterator to generate a number of DateTimeImmutable objects.

### Errors/Exceptions

Throws an DateMalformedPeriodStringException when the specification cannot be parsed as a valid ISO 8601 period.

### Examples

Example #1 DatePeriod::createFromISO8601String example

```
<?php
$iso = 'R4/2023-07-01T00:00:00Z/P7D';
$period = DatePeriod::createFromISO8601String($iso);

// By iterating over the DatePeriod object, all of the
// recurring dates within that period are printed.
foreach ($period as $date) {
    echo $date->format('Y-m-d'), "\n";
}
```

The above example will output:

```
2023-07-01
2023-07-08
2023-07-15
2023-07-22
2023-07-29
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dateperiod.createfromiso8601string.php
