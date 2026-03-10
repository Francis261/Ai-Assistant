# DateTime::setTimezone

Source: https://devdocs.io/php/datetime.settimezone

# date_timezone_set

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

DateTime::setTimezone -- date_timezone_set — Sets the time zone for the DateTime object

### Description

Object-oriented style

```
public DateTime::setTimezone(DateTimeZone $timezone): DateTime
```

Procedural style

```
date_timezone_set(DateTime $object, DateTimeZone $timezone): DateTime
```

Sets a new timezone for a DateTime object.

Like DateTimeImmutable::setTimezone() but works with DateTime.

The procedural version takes the DateTime object as its first argument.

### Parameters

Procedural style only: A DateTime object returned by date_create(). The function modifies this object.

A DateTimeZone object representing the desired time zone.

### Return Values

Returns the DateTime object for method chaining. The underlaying point-in-time is not changed when calling this method.

### Examples

Example #1 DateTime::setTimeZone() example

Object-oriented style

```
<?php
$date = new DateTime('2000-01-01', new DateTimeZone('Pacific/Nauru'));
echo $date->format('Y-m-d H:i:sP') . "\n";

$date->setTimezone(new DateTimeZone('Pacific/Chatham'));
echo $date->format('Y-m-d H:i:sP') . "\n";
```

The above example will output:

```
2000-01-01 00:00:00+12:00
2000-01-01 01:45:00+13:45
```

Procedural style

```
<?php
$date = date_create('2000-01-01', timezone_open('Pacific/Nauru'));
echo date_format($date, 'Y-m-d H:i:sP') . "\n";

date_timezone_set($date, timezone_open('Pacific/Chatham'));
echo date_format($date, 'Y-m-d H:i:sP') . "\n";
```

The above example will output:

```
2000-01-01 00:00:00+12:00
2000-01-01 01:45:00+13:45
```

### See Also

- DateTimeImmutable::setTimezone() - Sets the time zone
- DateTime::getTimezone() - Return time zone relative to given DateTime
- DateTimeZone::__construct() - Creates new DateTimeZone object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetime.settimezone.php
