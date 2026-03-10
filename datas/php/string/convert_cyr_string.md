# convert_cyr_string

Source: https://devdocs.io/php/function.convert-cyr-string

(PHP 4, PHP 5, PHP 7)

convert_cyr_string — Convert from one Cyrillic character set to another

This function has been DEPRECATED as of PHP 7.4.0, and REMOVED as of PHP 8.0.0. Relying on this function is highly discouraged.

### Description

```
convert_cyr_string(string $str, string $from, string $to): string
```

Converts from one Cyrillic character set to another.

### Parameters

The string to be converted.

The source Cyrillic character set, as a single character.

The target Cyrillic character set, as a single character.

Supported characters are:

- k - koi8-r
- w - windows-1251
- i - iso8859-5
- a - x-cp866
- d - x-cp866
- m - x-mac-cyrillic

### Return Values

Returns the converted string.

### Changelog

### Notes

Note: This function is binary-safe.

### See Also

- mb_convert_encoding() - Convert a string from one character encoding to another
- iconv() - Convert a string from one character encoding to another

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.convert-cyr-string.php
