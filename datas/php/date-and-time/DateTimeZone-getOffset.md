# DateTimeZone::getOffset

Source: https://devdocs.io/php/datetimezone.getoffset

# timezone_offset_get

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

DateTimeZone::getOffset -- timezone_offset_get — Returns the timezone offset from GMT

### Description

Object-oriented style

```
public DateTimeZone::getOffset(DateTimeInterface $datetime): int
```

Procedural style

```
timezone_offset_get(DateTimeZone $object, DateTimeInterface $datetime): int
```

This function returns the offset to GMT for the date/time specified in the datetime parameter. The GMT offset is calculated with the timezone information contained in the DateTimeZone object being used.

### Parameters

Procedural style only: A DateTimeZone object returned by timezone_open()

DateTime that contains the date/time to compute the offset from.

### Return Values

Returns time zone offset in seconds.

### Examples

Example #1 DateTimeZone::getOffset() examples

```
<?php
// Create two timezone objects, one for Taipei (Taiwan) and one for
// Tokyo (Japan)
$dateTimeZoneTaipei = new DateTimeZone("Asia/Taipei");
$dateTimeZoneJapan = new DateTimeZone("Asia/Tokyo");

// Create two DateTime objects that will contain the same Unix timestamp, but
// have different timezones attached to them.
$dateTimeTaipei = new DateTime("now", $dateTimeZoneTaipei);
$dateTimeJapan = new DateTime("now", $dateTimeZoneJapan);

// Calculate the GMT offset for the date/time contained in the $dateTimeTaipei
// object, but using the timezone rules as defined for Tokyo
// ($dateTimeZoneJapan).
$timeOffset = $dateTimeZoneJapan->getOffset($dateTimeTaipei);

// Should show int(32400) (for dates after Sat Sep 8 01:00:00 1951 JST).
var_dump($timeOffset);
```

The above example will output:

```
int(32400)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetimezone.getoffset.php
