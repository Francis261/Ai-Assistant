# getdate

Source: https://devdocs.io/php/function.getdate

(PHP 4, PHP 5, PHP 7, PHP 8)

getdate — Get date/time information

### Description

```
getdate(?int $timestamp = null): array
```

Returns an associative array containing the date information of the timestamp, or the current local time if timestamp is omitted or null.

### Parameters

The optional timestamp parameter is an int Unix timestamp that defaults to the current local time if timestamp is omitted or null. In other words, it defaults to the value of time().

### Return Values

Returns an associative array of information related to the timestamp. Elements from the returned associative array are as follows:

### Changelog

### Examples

Example #1 getdate() example

```
<?php
$today = getdate();
print_r($today);
```

The above example will output something similar to:

```
Array
(
    [seconds] => 40
    [minutes] => 58
    [hours] => 21
    [mday] => 17
    [wday] => 2
    [mon] => 6
    [year] => 2003
    [yday] => 167
    [weekday] => Tuesday
    [month] => June
    [0] => 1055901520
)
```

### See Also

- date() - Format a Unix timestamp
- idate() - Format a local time/date part as integer
- localtime() - Get the local time
- time() - Return current Unix timestamp
- setlocale() - Set locale information

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.getdate.php
