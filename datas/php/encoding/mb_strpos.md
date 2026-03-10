# mb_strpos

Source: https://devdocs.io/php/function.mb-strpos

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

mb_strpos — Find position of first occurrence of string in a string

### Description

```
mb_strpos(
 string $haystack,
 string $needle,
 int $offset = 0,
 ?string $encoding = null
): int|false
```

Finds position of the first occurrence of needle in the haystack string.

Performs a multi-byte safe strpos() operation based on number of characters. The first character's position is 0, the second character position is 1, and so on.

### Parameters

The string from which to get the position of the first occurrence of needle.

The string to find in haystack. In contrast with strpos(), numeric values are not applied as the ordinal value of a character.

The search offset. If it is not specified, 0 is used. A negative offset counts from the end of the string.

The encoding parameter is the character encoding. If it is omitted or null, the internal character encoding value will be used.

### Return Values

Returns the numeric position of the first occurrence of needle in the haystack string. If needle is not found, it returns false.

### Errors/Exceptions

- If offset is greater than the length of haystack, a ValueError will be thrown.

### Changelog

### See Also

- mb_internal_encoding() - Set/Get internal character encoding
- strpos() - Find the position of the first occurrence of a substring in a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-strpos.php
