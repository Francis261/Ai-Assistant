# DateTime::sub

Source: https://devdocs.io/php/datetime.sub

# date_sub

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

DateTime::sub -- date_sub — Subtracts an amount of days, months, years, hours, minutes and seconds from a DateTime object

### Description

Object-oriented style

```
public DateTime::sub(DateInterval $interval): DateTime
```

Procedural style

```
date_sub(DateTime $object, DateInterval $interval): DateTime
```

Modifies the specified DateTime object, by subtracting the specified DateInterval object.

Like DateTimeImmutable::sub() but works with DateTime.

The procedural version takes the DateTime object as its first argument.

### Parameters

Procedural style only: A DateTime object returned by date_create(). The function modifies this object.

A DateInterval object

### Return Values

Returns the modified DateTime object for method chaining.

### Errors/Exceptions

Object Oriented API only: If an unsupported operation is attempted, such as using a DateInterval object representing relative time specifications such as next weekday, a DateInvalidOperationException is thrown.

### Changelog

### See Also

- DateTimeImmutable::sub() - Subtracts an amount of days, months, years, hours, minutes and seconds

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetime.sub.php
