# date_sunrise

Source: https://devdocs.io/php/function.date-sunrise

(PHP 5, PHP 7, PHP 8)

date_sunrise — Returns time of sunrise for a given day and location

This function has been DEPRECATED as of PHP 8.1.0. Relying on this function is highly discouraged. Use date_sun_info() instead.

### Description

```
#[\Deprecated] 
 date_sunrise(
 int $timestamp,
 int $returnFormat = SUNFUNCS_RET_STRING,
 ?float $latitude = null,
 ?float $longitude = null,
 ?float $zenith = null,
 ?float $utcOffset = null
): string|int|float|false
```

date_sunrise() returns the sunrise time for a given day (specified as a timestamp) and location.

### Parameters

The timestamp of the day from which the sunrise time is taken.

Defaults to North, pass in a negative value for South. See also: date.default_latitude

Defaults to East, pass in a negative value for West. See also: date.default_longitude

zenith is the angle between the center of the sun and a line perpendicular to earth's surface. It defaults to date.sunrise_zenith

Specified in hours. The utcOffset is ignored, if returnFormat is SUNFUNCS_RET_TIMESTAMP.

### Return Values

Returns the sunrise time in a specified returnFormat on success or false on failure. One potential reason for failure is that the sun does not rise at all, which happens inside the polar circles for part of the year.

### Errors/Exceptions

Every call to a date/time function will generate a E_WARNING if the time zone is not valid. See also date_default_timezone_set()

### Changelog

### Examples

Example #1 date_sunrise() example

```
<?php

/* calculate the sunrise time for Lisbon, Portugal
Latitude: 38.4 North
Longitude: 9 West
Zenith ~= 90
offset: +1 GMT
*/

echo date("D M d Y"). ', sunrise time : ' .date_sunrise(time(), SUNFUNCS_RET_STRING, 38.4, -9, 90, 1);
```

The above example will output something similar to:

```
Deprecated: Constant SUNFUNCS_RET_STRING is deprecated in script on line 10
Deprecated: Function date_sunrise() is deprecated since 8.1, use date_sun_info() instead in script on line 10
Mon Dec 20 2004, sunrise time : 08:54
```

Example #2 No sunrise

```
<?php
$solstice = strtotime('2017-12-21');
var_dump(date_sunrise($solstice, SUNFUNCS_RET_STRING, 69.245833, -53.537222));
```

The above example will output:

```
Deprecated: Constant SUNFUNCS_RET_STRING is deprecated in script on line 3
Deprecated: Function date_sunrise() is deprecated since 8.1, use date_sun_info() instead in script on line 3
bool(false)
```

### See Also

- date_sun_info() - Returns an array with information about sunset/sunrise and twilight begin/end

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.date-sunrise.php
