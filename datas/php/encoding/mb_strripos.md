# mb_strripos

Source: https://devdocs.io/php/function.mb-strripos

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

mb_strripos — Finds position of last occurrence of a string within another, case insensitive

### Description

```
mb_strripos(
 string $haystack,
 string $needle,
 int $offset = 0,
 ?string $encoding = null
): int|false
```

mb_strripos() performs multi-byte safe strripos() operation based on number of characters. needle position is counted from the beginning of haystack. First character's position is 0. Second character position is 1. Unlike mb_strrpos(), mb_strripos() is case-insensitive.

### Parameters

The string from which to get the position of the last occurrence of needle.

The string to find in haystack.

May be specified to begin searching an arbitrary number of characters into the haystack. Negative values will stop searching at an arbitrary point prior to the end of the haystack.

The encoding parameter is the character encoding. If it is omitted or null, the internal character encoding value will be used.

### Return Values

Return the numeric position of the last occurrence of needle in the haystack string, or false if needle is not found.

### Errors/Exceptions

- If offset is greater than the length of haystack, a ValueError will be thrown.

### Changelog

### See Also

- strripos() - Find the position of the last occurrence of a case-insensitive substring in a string
- strrpos() - Find the position of the last occurrence of a substring in a string
- mb_strrpos() - Find position of last occurrence of a string in a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-strripos.php
