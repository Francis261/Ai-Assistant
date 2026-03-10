# DateTimeInterface::getTimezone

Source: https://devdocs.io/php/datetime.gettimezone

# DateTimeImmutable::getTimezone

# DateTime::getTimezone

# date_timezone_get

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

DateTimeInterface::getTimezone -- DateTimeImmutable::getTimezone -- DateTime::getTimezone -- date_timezone_get — Return time zone relative to given DateTime

### Description

Object-oriented style

```
public DateTimeInterface::getTimezone(): DateTimeZone|false
```

```
public DateTimeImmutable::getTimezone(): DateTimeZone|false
```

```
public DateTime::getTimezone(): DateTimeZone|false
```

Procedural style

```
date_timezone_get(DateTimeInterface $object): DateTimeZone|false
```

Return time zone relative to given DateTime.

### Parameters

Procedural style only: A DateTime object returned by date_create()

### Return Values

Returns a DateTimeZone object on success or false on failure.

### Examples

Example #1 DateTime::getTimezone() example

Object-oriented style

```
<?php
$date = new DateTimeImmutable("now", new DateTimeZone('Europe/London'));
$tz = $date->getTimezone();
echo $tz->getName();
```

The above example will output:

```
Europe/London
```

Procedural style

```
<?php
$date = date_create("now", timezone_open('Europe/London'));
$tz = date_timezone_get($date);
echo timezone_name_get($tz);
```

The above example will output:

```
Europe/London
```

### See Also

- DateTime::setTimezone() - Sets the time zone for the DateTime object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetime.gettimezone.php
