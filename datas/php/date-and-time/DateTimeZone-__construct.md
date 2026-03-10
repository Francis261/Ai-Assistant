# DateTimeZone::__construct

Source: https://devdocs.io/php/datetimezone.construct

# timezone_open

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

DateTimeZone::__construct -- timezone_open — Creates new DateTimeZone object

### Description

Object-oriented style

Procedural style

```
timezone_open(string $timezone): DateTimeZone|false
```

Creates a new DateTimeZone object.

A DateTimeZone object provides access to three different types of timezone rules: UTC offset (type 1), timezone abbreviation (type 2), and timezone identifiers as published in the IANA timezone database (type 3).

The DateTimeZone object can be attached to DateTime and DateTimeImmutable objects to be able to render the timezone encapsulated by these objects in a local timezone.

### Parameters

One of the supported timezone names, an offset value (+0200), or a timezone abbreviation (BST).

### Return Values

Returns DateTimeZone on success. Procedural style returns false on failure.

### Errors/Exceptions

This method throws DateInvalidTimeZoneException if the timezone supplied is not recognised as a valid timezone. Prior to PHP 8.3, this was an Exception instead.

### Changelog

### Examples

Example #1 Creating and attaching DateTimeZone to a DateTimeImmutable

```
<?php
$d = new DateTimeImmutable("2022-06-02 15:44:48 UTC");

$timezones = [ 'Europe/London', 'GMT+04:45', '-06:00', 'CEST' ];

foreach ($timezones as $tz) {
    $tzo = new DateTimeZone($tz);

    $local = $d->setTimezone($tzo);
    echo $local->format(DateTimeInterface::RFC2822 . ' — e') . "\n";
}
```

The above example will output:

```
Thu, 02 Jun 2022 16:44:48 +0100 — Europe/London
Thu, 02 Jun 2022 20:29:48 +0445 — +04:45
Thu, 02 Jun 2022 09:44:48 -0600 — -06:00
Thu, 02 Jun 2022 17:44:48 +0200 — CEST
```

Example #2 Catching errors when instantiating DateTimeZone

```
<?php
// Error handling by catching exceptions
$timezones = array('Europe/London', 'Mars/Phobos', 'Jupiter/Europa');

foreach ($timezones as $tz) {
    try {
        $mars = new DateTimeZone($tz);
        echo $mars->getName() . "\n";
    } catch(Exception $e) {
        echo $e->getMessage() . "\n";
    }
}
```

The above example will output:

```
Europe/London
DateTimeZone::__construct() [datetimezone.--construct]: Unknown or bad timezone (Mars/Phobos)
DateTimeZone::__construct() [datetimezone.--construct]: Unknown or bad timezone (Jupiter/Europa)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetimezone.construct.php
