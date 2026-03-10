# DateTimeZone::getLocation

Source: https://devdocs.io/php/datetimezone.getlocation

# timezone_location_get

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

DateTimeZone::getLocation -- timezone_location_get — Returns location information for a timezone

### Description

Object-oriented style

```
public DateTimeZone::getLocation(): array|false
```

Procedural style

```
timezone_location_get(DateTimeZone $object): array|false
```

Returns location information for a timezone, including country code, latitude/longitude and comments.

### Parameters

Procedural style only: A DateTimeZone object returned by timezone_open()

### Return Values

Array containing location information about timezone or false on failure.

### Examples

Example #1 DateTimeZone::getLocation() example

```
<?php
$tz = new DateTimeZone("Asia/Jakarta");
print_r($tz->getLocation());
print_r(timezone_location_get($tz));
```

The above example will output:

```
Array
(
    [country_code] => ID
    [latitude] => -6.16667
    [longitude] => 106.8
    [comments] => Java, Sumatra
)
Array
(
    [country_code] => ID
    [latitude] => -6.16667
    [longitude] => 106.8
    [comments] => Java, Sumatra
)
```

The country_code elements contains the ISO 3166-1 alpha-2 country code for each entry. The latitude and longitude elements the coordinates of the named city from the time zone identifier, and comments contain (when not false) a hint of where in the given country this timezone applies. This information is suitable to present to end-users.

### See Also

- DateTimeZone::listIdentifiers() - Returns a numerically indexed array containing all defined timezone identifiers to get a full or partial list of all supported timezone identifiers

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/datetimezone.getlocation.php
