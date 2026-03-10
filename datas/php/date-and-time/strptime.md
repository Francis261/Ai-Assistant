# strptime

Source: https://devdocs.io/php/function.strptime

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

strptime — Parse a time/date generated with strftime()

This function has been DEPRECATED as of PHP 8.1.0. Relying on this function is highly discouraged.

### Description

```
#[\Deprecated] 
 strptime(string $timestamp, string $format): array|false
```

strptime() returns an array with the timestamp parsed, or false on error.

Month and weekday names and other language dependent strings respect the current locale set with setlocale() (LC_TIME).

### Parameters

The string to parse (e.g. returned from strftime()).

The format used in timestamp (e.g. the same as used in strftime()). Note that some of the format options available to strftime() may not have any effect within strptime(); the exact subset that are supported will vary based on the operating system and C library in use.

For more information about the format options, read the strftime() page.

### Return Values

Returns an array or false on failure.

### Changelog

### Examples

Example #1 strptime() example

```
<?php
$format = '%d/%m/%Y %H:%M:%S';
$strf = strftime($format);

echo "$strf\n";

print_r(strptime($strf, $format));
```

The above example will output something similar to:

```
03/10/2004 15:54:19

Array
(
    [tm_sec] => 19
    [tm_min] => 54
    [tm_hour] => 15
    [tm_mday] => 3
    [tm_mon] => 9
    [tm_year] => 104
    [tm_wday] => 0
    [tm_yday] => 276
    [unparsed] =>
)
```

### Notes

Note: This function is not implemented on Windows platforms.

Note:

Internally, this function calls the strptime() function provided by the system's C library. This function can exhibit noticeably different behaviour across different operating systems. The use of date_parse_from_format(), which does not suffer from these issues, is recommended.

Note:

"tm_sec" includes any leap seconds (currently upto 2 a year). For more information on leap seconds, see the » Wikipedia article on leap seconds.

### See Also

- IntlDateFormatter::parse() - Parse string to a timestamp value
- DateTime::createFromFormat() - Parses a time string according to a specified format
- checkdate() - Validate a Gregorian date
- strftime() - Format a local time/date according to locale settings
- date_parse_from_format() - Get info about given date formatted according to the specified format

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.strptime.php
