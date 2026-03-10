# date_sun_info

Source: https://devdocs.io/php/function.date-sun-info

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

date_sun_info — Returns an array with information about sunset/sunrise and twilight begin/end

### Description

```
date_sun_info(int $timestamp, float $latitude, float $longitude): array
```

### Parameters

Unix timestamp.

Latitude in degrees.

Longitude in degrees.

### Return Values

Returns an array whose structure is detailed in the following list:

The values of the array elements are either UNIX timestamps, false if the sun is below the respective zenith for the whole day, or true if the sun is above the respective zenith for the whole day.

### Changelog

### Examples

Example #1 A date_sun_info() example

```
<?php
$sun_info = date_sun_info(strtotime("2006-12-12"), 31.7667, 35.2333);
foreach ($sun_info as $key => $val) {
    echo "$key: " . date("H:i:s", $val) . "\n";
}
```

The above example will output:

```
sunrise: 05:52:11
sunset: 15:41:21
transit: 10:46:46
civil_twilight_begin: 05:24:08
civil_twilight_end: 16:09:24
nautical_twilight_begin: 04:52:25
nautical_twilight_end: 16:41:06
astronomical_twilight_begin: 04:21:32
astronomical_twilight_end: 17:12:00
```

Example #2 Polar night, with some processing

```
<?php
$tz = new \DateTimeZone('America/Anchorage');

$si = date_sun_info(strtotime("2022-12-21"), 70.21, -148.51);
foreach ($si as $key => $value) {
    echo
        match ($value) {
            true => 'always',
            false => 'never',
            default => date_create("@{$value}")->setTimeZone($tz)->format( 'H:i:s T' ),
        },
        ": {$key}",
        "\n";
}
```

The above example will output:

```
never: sunrise
never: sunset
12:52:18 AKST: transit
10:53:19 AKST: civil_twilight_begin
14:51:17 AKST: civil_twilight_end
09:01:47 AKST: nautical_twilight_begin
16:42:48 AKST: nautical_twilight_end
07:40:47 AKST: astronomical_twilight_begin
18:03:49 AKST: astronomical_twilight_end
```

Example #3 Midnight sun (Tromsø, Norway)

```
<?php
$si = date_sun_info(strtotime("2022-06-26"), 69.68, 18.94);
print_r($si);
```

The above example will output:

```
Array
(
    [sunrise] => 1
    [sunset] => 1
    [transit] => 1656240426
    [civil_twilight_begin] => 1
    [civil_twilight_end] => 1
    [nautical_twilight_begin] => 1
    [nautical_twilight_end] => 1
    [astronomical_twilight_begin] => 1
    [astronomical_twilight_end] => 1
)
```

Example #4 Calculating length of day (Kyiv)

```
<?php
$si = date_sun_info(strtotime('2022-08-26'), 50.45, 30.52);
$diff = $si['sunset'] - $si['sunrise'];
echo "Length of day: ",
    floor($diff / 3600), "h ",
    floor(($diff % 3600) / 60), "s\n";
```

The above example will output:

```
Length of day: 13h 56s
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.date-sun-info.php
