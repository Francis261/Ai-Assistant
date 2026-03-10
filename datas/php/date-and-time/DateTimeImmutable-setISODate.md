# DateTimeImmutable::setISODate

Source: https://devdocs.io/php/datetimeimmutable.setisodate

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

DateTimeImmutable::setISODate — Sets the ISO date

### Description

```
#[\NoDiscard]
 public DateTimeImmutable::setISODate(int $year, int $week, int $dayOfWeek = 1): DateTimeImmutable
```

Returns a new DateTimeImmutable object with the date set according to the ISO 8601 standard - using weeks and day offsets rather than specific dates.

### Parameters

Year of the date.

Week of the date.

Offset from the first day of the week.

### Return Values

Returns a new DateTimeImmutable object with the modified data.

### Examples

Example #1 DateTimeImmutable::setISODate() example

Object-oriented style

```
<?php

$date = new DateTimeImmutable();

$newDate = $date->setISODate(2008, 2);
echo $newDate->format('Y-m-d') . "\n";

$newDate = $date->setISODate(2008, 2, 7);
echo $newDate->format('Y-m-d') . "\n";
```

The above example will output:

```
2008-01-07
2008-01-13
```

Procedural style

```
<?php

$date = date_create();

date_isodate_set($date, 2008, 2);
echo date_format($date, 'Y-m-d') . "\n";

date_isodate_set($date, 2008, 2, 7);
echo date_format($date, 'Y-m-d') . "\n";
```

The above example will output:

```
2008-01-07
2008-01-13
```

Example #2 Values exceeding ranges are added to their parent values

```
<?php

$date = new DateTimeImmutable();

$newDate = $date->setISODate(2008, 2, 7);
echo $newDate->format('Y-m-d') . "\n";

$newDate = $date->setISODate(2008, 2, 8);
echo $newDate->format('Y-m-d') . "\n";

$newDate = $date->setISODate(2008, 53, 7);
echo $newDate->format('Y-m-d') . "\n";
```

The above example will output:

```
2008-01-13
2008-01-14
2009-01-04
```

Example #3 Finding the month a week is in

```
<?php

$date = new DateTimeImmutable();
$newDate = $date->setISODate(2008, 14);
echo $newDate->format('n');
```

The above example will output:

```
3
```

### See Also

- DateTimeImmutable::setDate() - Sets the date
- DateTimeImmutable::setTime() - Sets the time

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetimeimmutable.setisodate.php
