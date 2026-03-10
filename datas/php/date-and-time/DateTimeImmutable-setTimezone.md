# DateTimeImmutable::setTimezone

Source: https://devdocs.io/php/datetimeimmutable.settimezone

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

DateTimeImmutable::setTimezone — Sets the time zone

### Description

```
#[\NoDiscard]
 public DateTimeImmutable::setTimezone(DateTimeZone $timezone): DateTimeImmutable
```

Returns a new DateTimeImmutable object with a new timezone set.

### Parameters

A DateTimeZone object representing the desired time zone.

### Return Values

Returns a new modified DateTimeImmutable object for method chaining. The underlaying point-in-time is not changed when calling this method.

### Examples

Example #1 DateTimeImmutable::setTimeZone() example

Object-oriented style

```
<?php
$date = new DateTimeImmutable('2000-01-01', new DateTimeZone('Pacific/Nauru'));
echo $date->format('Y-m-d H:i:sP') . "\n";

$newDate = $date->setTimezone(new DateTimeZone('Pacific/Chatham'));
echo $newDate->format('Y-m-d H:i:sP') . "\n";
?>
```

The above example will output:

```
2000-01-01 00:00:00+12:00
2000-01-01 01:45:00+13:45
```

### See Also

- DateTimeImmutable::getTimezone() - Return time zone relative to given DateTime
- DateTimeZone::__construct() - Creates new DateTimeZone object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetimeimmutable.settimezone.php
