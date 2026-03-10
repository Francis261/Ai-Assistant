# DateTimeImmutable::__construct

Source: https://devdocs.io/php/datetimeimmutable.construct

# date_create_immutable

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

DateTimeImmutable::__construct -- date_create_immutable — Returns new DateTimeImmutable object

### Description

Object-oriented style

Procedural style

```
date_create_immutable(string $datetime = "now", ?DateTimeZone $timezone = null): DateTimeImmutable|false
```

Returns new a DateTimeImmutable object.

### Parameters

A date/time string. Valid formats are explained in Date and Time Formats.

Enter "now" here to obtain the current time when using the $timezone parameter.

A DateTimeZone object representing the timezone of $datetime.

If $timezone is omitted or null, the current timezone will be used.

Note:

The $timezone parameter and the current timezone are ignored when the $datetime parameter either is a UNIX timestamp (e.g. @946684800) or specifies a timezone (e.g. 2010-01-28T15:00:00+02:00, or 2010-07-05T06:00:00Z).

### Return Values

Returns a new DateTimeImmutable instance.

### Errors/Exceptions

If an invalid Date/Time string is passed, DateMalformedStringException is thrown. Previous to PHP 8.3, this was Exception.

### Changelog

### Examples

Example #1 DateTimeImmutable::__construct() example

Object-oriented style

```
<?php
try {
    $date = new DateTimeImmutable('2000-01-01');
} catch (Exception $e) {
    echo $e->getMessage();
    exit(1);
}

echo $date->format('Y-m-d');
```

The above example will output:

```
2000-01-01
```

Procedural style

```
<?php
$date = date_create('2000-01-01');
if (!$date) {
    $e = date_get_last_errors();
    foreach ($e['errors'] as $error) {
        echo "$error\n";
    }
    exit(1);
}

echo date_format($date, 'Y-m-d');
```

The above example will output:

```
2000-01-01
```

Example #2 Intricacies of DateTimeImmutable::__construct()

```
<?php
date_default_timezone_set('America/Jamaica');

// Specified date/time in PHP's default time zone.
$date = new DateTimeImmutable('2000-01-01');
echo $date->format('Y-m-d H:i:sP') . "\n";

// Specified date/time in the specified time zone.
$date = new DateTimeImmutable('2000-01-01', new DateTimeZone('Pacific/Nauru'));
echo $date->format('Y-m-d H:i:sP') . "\n";

// Current date/time in your PHP's default time zone.
$date = new DateTimeImmutable();
echo $date->format('Y-m-d H:i:sP') . "\n";

// Current date/time in the specified time zone.
$date = new DateTimeImmutable('now', new DateTimeZone('Pacific/Nauru'));
echo $date->format('Y-m-d H:i:sP') . "\n";

// Using a UNIX timestamp.  Notice the result is in the UTC time zone.
$date = new DateTimeImmutable('@946684800');
echo $date->format('Y-m-d H:i:sP') . "\n";

// Non-existent values roll over.
$date = new DateTimeImmutable('2000-02-30');
echo $date->format('Y-m-d H:i:sP') . "\n";
```

The above example will output something similar to:

```
2000-01-01 00:00:00-05:00
2000-01-01 00:00:00+12:00
2010-04-24 10:24:16-04:00
2010-04-25 02:24:16+12:00
2000-01-01 00:00:00+00:00
2000-03-01 00:00:00-05:00
```

Note:

Rolled over dates can be detected by checking for warnings using DateTimeImmutable::getLastErrors().

Example #3 Changing the associated timezone

```
<?php
$timeZone = new \DateTimeZone('Asia/Tokyo');

$time = new \DateTimeImmutable();
$time = $time->setTimezone($timeZone);

echo $time->format('Y/m/d H:i:s e'), "\n";
```

The above example will output something similar to:

```
2022/08/12 23:49:23 Asia/Tokyo
```

Example #4 Using a relative date/time string

```
<?php
$time = new \DateTimeImmutable("-1 year");

echo $time->format('Y/m/d H:i:s'), "\n";
```

The above example will output something similar to:

```
2021/08/12 15:43:51
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetimeimmutable.construct.php
