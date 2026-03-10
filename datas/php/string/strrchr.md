# strrchr

Source: https://devdocs.io/php/function.strrchr

(PHP 4, PHP 5, PHP 7, PHP 8)

strrchr — Find the last occurrence of a character in a string

### Description

```
strrchr(string $haystack, string $needle, bool $before_needle = false): string|false
```

This function returns the portion of haystack which starts at the last occurrence of needle and goes until the end of haystack.

### Parameters

The string to search in

If needle contains more than one character, only the first is used. This behavior is different from that of strstr().

Prior to PHP 8.0.0, if needle is not a string, it is converted to an integer and applied as the ordinal value of a character. This behavior is deprecated as of PHP 7.3.0, and relying on it is highly discouraged. Depending on the intended behavior, the needle should either be explicitly cast to string, or an explicit call to chr() should be performed.

If true, strrchr() returns the part of the haystack before the last occurrence of the needle (excluding the needle).

### Return Values

This function returns the portion of string, or false if needle is not found.

### Changelog

### Examples

Example #1 strrchr() example

```
<?php
$ext = strrchr('somefile.txt', '.');
echo "file extension: $ext \n";
$ext = $ext ? strtolower(substr($ext, 1)) : '';
echo "file extension: $ext";
?>
```

The above example will output something similar to:

```
file extension: .txt
file extension: txt
```

### Notes

Note: This function is binary-safe.

### See Also

- strstr() - Find the first occurrence of a string
- strrpos() - Find the position of the last occurrence of a substring in a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.strrchr.php
