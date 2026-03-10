# IntlDateFormatter::localtime

Source: https://devdocs.io/php/intldateformatter.localtime

# datefmt_localtime

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

IntlDateFormatter::localtime -- datefmt_localtime — Parse string to a field-based time value

### Description

Object-oriented style

```
public IntlDateFormatter::localtime(string $string, int &$offset = null): array|false
```

Procedural style

```
datefmt_localtime(IntlDateFormatter $formatter, string $string, int &$offset = null): array|false
```

Converts string $value to a field-based time value ( an array of various fields), starting at $parse_pos and consuming as much of the input value as possible.

### Parameters

The formatter resource

string to convert to a time

Position at which to start the parsing in $value (zero-based). If no error occurs before $value is consumed, $parse_pos will contain -1 otherwise it will contain the position at which parsing ended . If $parse_pos > strlen($value), the parse fails immediately.

### Return Values

Localtime compatible array of integers : contains 24 hour clock value in tm_hour field, or false on failure.

### Examples

Example #1 datefmt_localtime() example

```
<?php

$fmt = datefmt_create(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
$arr = datefmt_localtime($fmt, 'Wednesday, December 31, 1969 at 4:00:00 PM Pacific Standard Time', $offset);
echo 'First parsed output is ';
if ($arr) {
    foreach ($arr as $key => $value) {
        echo "$key : $value , ";
    }
}

?>
```

Example #2 OO example

```
<?php
$fmt = new IntlDateFormatter(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
$arr = $fmt->localtime('Wednesday, December 31, 1969 at 4:00:00 PM Pacific Standard Time', $offset);
echo 'First parsed output is ';
if ($arr) {
    foreach ($arr as $key => $value) {
        echo "$key : $value , ";
    }
}

?>
```

The above example will output:

```
First parsed output is tm_sec : 0 , tm_min : 0 , tm_hour : 16 , tm_year : 69 ,
tm_mday : 31 , tm_wday : 3 , tm_yday : 365 , tm_mon : 11 , tm_isdst : 0 ,
```

### See Also

- datefmt_create() - Create a date formatter
- datefmt_format() - Format the date/time value as a string
- datefmt_parse() - Parse string to a timestamp value
- datefmt_get_error_code() - Get the error code from last operation
- datefmt_get_error_message() - Get the error text from the last operation

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intldateformatter.localtime.php
