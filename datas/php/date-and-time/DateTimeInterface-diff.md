# DateTimeInterface::diff

Source: https://devdocs.io/php/datetime.diff

# DateTimeImmutable::diff

# DateTime::diff

# date_diff

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

DateTimeInterface::diff -- DateTimeImmutable::diff -- DateTime::diff -- date_diff — Returns the difference between two DateTime objects

### Description

Object-oriented style

```
public DateTimeInterface::diff(DateTimeInterface $targetObject, bool $absolute = false): DateInterval
```

```
public DateTimeImmutable::diff(DateTimeInterface $targetObject, bool $absolute = false): DateInterval
```

```
public DateTime::diff(DateTimeInterface $targetObject, bool $absolute = false): DateInterval
```

Procedural style

```
date_diff(DateTimeInterface $baseObject, DateTimeInterface $targetObject, bool $absolute = false): DateInterval
```

Returns the difference between two DateTimeInterface objects.

### Parameters

The date to compare to.

Should the interval be forced to be positive?

### Return Values

The DateInterval object represents the difference between the two dates.

The absolute parameter only affects the invert property of a DateInterval object.

The return value more specifically represents the clock-time interval to apply to the original object ($this or $originObject) to arrive at the $targetObject. This process is not always reversible.

The method is aware of DST changeovers, and hence can return an interval of 24 hours and 30 minutes, as per one of the examples. If you want to calculate with absolute time, you need to convert both the $this/$baseObject, and $targetObject to UTC first.

### Examples

Example #1 DateTimeImmutable::diff() example

Object-oriented style

```
<?php
$origin = new DateTimeImmutable('2009-10-11');
$target = new DateTimeImmutable('2009-10-13');
$interval = $origin->diff($target);
echo $interval->format('%R%a days');
```

The above example will output:

```
+2 days
```

Procedural style

```
<?php
$origin = date_create('2009-10-11');
$target = date_create('2009-10-13');
$interval = date_diff($origin, $target);
echo $interval->format('%R%a days');
```

The above example will output:

```
+2 days
```

Example #2 DateTimeInterface::diff() during DST changeover

```
<?php
$originalTime = new DateTimeImmutable("2021-10-30 09:00:00 Europe/London");
$targetTime = new DateTimeImmutable("2021-10-31 08:30:00 Europe/London");
$interval = $originalTime->diff($targetTime);
echo $interval->format("%H:%I:%S (Full days: %a)"), "\n";
```

The above example will output:

```
24:30:00 (Full days: 0)
```

Example #3 DateTimeInterface::diff() range

The value that the method returns is the exact amount of time to get from $this to $targetObject. Comparing January 1st to December 31st returns therefore 364, and not 365, days (for non-leap years).

```
<?php
$originalTime = new DateTimeImmutable("2023-01-01 UTC");
$targetTime = new DateTimeImmutable("2023-12-31 UTC");
$interval = $originalTime->diff($targetTime);
echo "Full days: ", $interval->format("%a"), "\n";
```

The above example will output:

```
Full days: 364
```

Example #4 DateTime object comparison

Note:

DateTimeImmutable and DateTime objects can be compared using comparison operators.

```
<?php
$date1 = new DateTime("now");
$date2 = new DateTime("tomorrow");

var_dump($date1 == $date2);
var_dump($date1 < $date2);
var_dump($date1 > $date2);
```

The above example will output:

```
bool(false)
bool(true)
bool(false)
```

### See Also

- DateInterval::format() - Formats the interval
- DateTime::add() - Modifies a DateTime object, with added amount of days, months, years, hours, minutes and seconds
- DateTime::sub() - Subtracts an amount of days, months, years, hours, minutes and seconds from a DateTime object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetime.diff.php
