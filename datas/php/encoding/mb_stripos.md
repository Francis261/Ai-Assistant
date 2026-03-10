# mb_stripos

Source: https://devdocs.io/php/function.mb-stripos

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

mb_stripos — Finds position of first occurrence of a string within another, case insensitive

### Description

```
mb_stripos(
 string $haystack,
 string $needle,
 int $offset = 0,
 ?string $encoding = null
): int|false
```

mb_stripos() returns the numeric position of the first occurrence of needle in the haystack string. Unlike mb_strpos(), mb_stripos() is case-insensitive. If needle is not found, it returns false.

### Parameters

The string from which to get the position of the first occurrence of needle

The string to find in haystack

The position in haystack to start searching. A negative offset counts from the end of the string.

The encoding parameter is the character encoding. If it is omitted or null, the internal character encoding value will be used.

### Return Values

Return the numeric position of the first occurrence of needle in the haystack string, or false if needle is not found.

### Errors/Exceptions

- If offset is greater than the length of haystack, a ValueError will be thrown.

### Changelog

### See Also

- stripos() - Find the position of the first occurrence of a case-insensitive substring in a string
- strpos() - Find the position of the first occurrence of a substring in a string
- mb_strpos() - Find position of first occurrence of string in a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-stripos.php
