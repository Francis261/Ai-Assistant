# mb_strrpos

Source: https://devdocs.io/php/function.mb-strrpos

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

mb_strrpos — Find position of last occurrence of a string in a string

### Description

```
mb_strrpos(
 string $haystack,
 string $needle,
 int $offset = 0,
 ?string $encoding = null
): int|false
```

Performs a multibyte safe strrpos() operation based on the number of characters. needle position is counted from the beginning of haystack. First character's position is 0. Second character position is 1.

### Parameters

The string being checked, for the last occurrence of needle

The string to find in haystack.

The encoding parameter is the character encoding. If it is omitted or null, the internal character encoding value will be used.

### Return Values

Returns the numeric position of the last occurrence of needle in the haystack string. If needle is not found, it returns false.

### Errors/Exceptions

- If offset is greater than the length of haystack, a ValueError will be thrown.

### Changelog

### See Also

- mb_strpos() - Find position of first occurrence of string in a string
- mb_internal_encoding() - Set/Get internal character encoding
- strrpos() - Find the position of the last occurrence of a substring in a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-strrpos.php
