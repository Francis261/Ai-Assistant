# parse_ini_string

Source: https://devdocs.io/php/function.parse-ini-string

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

parse_ini_string — Parse a configuration string

### Description

```
parse_ini_string(string $ini_string, bool $process_sections = false, int $scanner_mode = INI_SCANNER_NORMAL): array|false
```

parse_ini_string() returns the settings in string ini_string in an associative array.

The structure of the ini string is the same as the php.ini's.

This function must not be used with untrusted inputs, unless scanner_mode is INI_SCANNER_RAW since the parsed output might contain the values of sensitive constants, such as constants holding a database password.

### Parameters

The contents of the ini file being parsed.

By setting the process_sections parameter to true, you get a multidimensional array, with the section names and settings included. The default for process_sections is false

Can either be INI_SCANNER_NORMAL (default) or INI_SCANNER_RAW. If INI_SCANNER_RAW is supplied, then option values will not be parsed.

As of PHP 5.6.1 can also be specified as INI_SCANNER_TYPED. In this mode boolean, null and integer types are preserved when possible. String values "true", "on" and "yes" are converted to true. "false", "off", "no" and "none" are considered false. "null" is converted to null in typed mode. Also, all numeric strings are converted to integer type if it is possible.

### Return Values

The settings are returned as an associative array on success, and false on failure.

### Notes

Note: There are reserved words which must not be used as keys for ini files. These include: null, yes, no, true, false, on, off, none. Values null, off, no and false result in "", and values on, yes and true result in "1", unless INI_SCANNER_TYPED mode is used. Characters ?{}|&~![()^" must not be used anywhere in the key and have a special meaning in the value.

### See Also

- parse_ini_file() - Parse a configuration file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.parse-ini-string.php
