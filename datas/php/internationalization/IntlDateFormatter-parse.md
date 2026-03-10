# IntlDateFormatter::parse

Source: https://devdocs.io/php/intldateformatter.parse

# datefmt_parse

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

IntlDateFormatter::parse -- datefmt_parse — Parse string to a timestamp value

### Description

Object-oriented style

```
public IntlDateFormatter::parse(string $string, int &$offset = null): int|float|false
```

Procedural style

```
datefmt_parse(IntlDateFormatter $formatter, string $string, int &$offset = null): int|float|false
```

Converts string to an incremental time value, starting at offset and consuming as much of the input value as possible.

### Parameters

The formatter resource

string to convert to a time

Position at which to start the parsing in string (zero-based). If no error occurs before string is consumed, offset will contain -1 otherwise it will contain the position at which parsing ended (and the error occurred). This variable will contain the end position if the parse fails. If offset > strlen($string), the parse fails immediately.

### Return Values

Timestamp of parsed value, or false if value cannot be parsed.

### Examples

Example #1 OO example

```
<?php
$fmt = new IntlDateFormatter(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
echo 'First parsed output is ' . $fmt->parse('Wednesday, December 20, 1989 4:00:00 PM PT');
$fmt = new IntlDateFormatter(
    'de-DE',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
?>
```

Example #2 datefmt_parse() example

```
<?php
$fmt = datefmt_create(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
echo 'First parsed output is ' . datefmt_parse($fmt, 'Wednesday, December 20, 1989 4:00:00 PM PT');
$fmt = datefmt_create(
    'de-DE',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
echo 'Second parsed output is ' . datefmt_parse($fmt, 'Mittwoch, 20. Dezember 1989 16:00 Uhr GMT-08:00');
?>
```

The above example will output:

```
First parsed output is 630201600
Second parsed output is 630201600
```

### See Also

- datefmt_create() - Create a date formatter
- datefmt_format() - Format the date/time value as a string
- datefmt_localtime() - Parse string to a field-based time value
- datefmt_get_error_code() - Get the error code from last operation
- datefmt_get_error_message() - Get the error text from the last operation

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intldateformatter.parse.php
