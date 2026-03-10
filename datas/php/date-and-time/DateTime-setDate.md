# DateTime::setDate

Source: https://devdocs.io/php/datetime.setdate

# date_date_set

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

DateTime::setDate -- date_date_set — Sets the date

### Description

Object-oriented style

```
public DateTime::setDate(int $year, int $month, int $day): DateTime
```

Procedural style

```
date_date_set(
 DateTime $object,
 int $year,
 int $month,
 int $day
): DateTime
```

Resets the current date of the DateTime object to a different date.

Like DateTimeImmutable::setDate() but works with DateTime, and changes the existing object.

The procedural version takes the DateTime object as its first argument.

### Parameters

Procedural style only: A DateTime object returned by date_create(). The function modifies this object.

Year of the date.

Month of the date.

Day of the date.

### Return Values

Returns the modified DateTime object for method chaining.

### See Also

- DateTimeImmutable::setDate() - Sets the date

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetime.setdate.php
