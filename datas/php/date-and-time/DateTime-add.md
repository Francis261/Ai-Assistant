# DateTime::add

Source: https://devdocs.io/php/datetime.add

# date_add

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

DateTime::add -- date_add — Modifies a DateTime object, with added amount of days, months, years, hours, minutes and seconds

### Description

Object-oriented style

```
public DateTime::add(DateInterval $interval): DateTime
```

Procedural style

```
date_add(DateTime $object, DateInterval $interval): DateTime
```

Adds the specified DateInterval object to the specified DateTime object.

Like DateTimeImmutable::add() but works with DateTime.

The procedural version takes the DateTime object as its first argument.

### Parameters

Procedural style only: A DateTime object returned by date_create(). The function modifies this object.

A DateInterval object

### Return Values

Returns the modified DateTime object for method chaining.

### See Also

- DateTimeImmutable::add() - Returns a new object, with added amount of days, months, years, hours, minutes and seconds

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetime.add.php
