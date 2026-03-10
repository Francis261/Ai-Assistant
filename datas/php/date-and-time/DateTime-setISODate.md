# DateTime::setISODate

Source: https://devdocs.io/php/datetime.setisodate

# date_isodate_set

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

DateTime::setISODate -- date_isodate_set — Sets the ISO date

### Description

Object-oriented style

```
public DateTime::setISODate(int $year, int $week, int $dayOfWeek = 1): DateTime
```

Procedural style

```
date_isodate_set(
 DateTime $object,
 int $year,
 int $week,
 int $dayOfWeek = 1
): DateTime
```

Set a date according to the ISO 8601 standard - using weeks and day offsets rather than specific dates.

Like DateTimeImmutable::setISODate() but works with DateTime.

The procedural version takes the DateTime object as its first argument.

### Parameters

Procedural style only: A DateTime object returned by date_create(). The function modifies this object.

Year of the date.

Week of the date.

Offset from the first day of the week.

### Return Values

Returns the modified DateTime object for method chaining.

### See Also

- DateTimeImmutable::setISODate() - Sets the ISO date

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetime.setisodate.php
