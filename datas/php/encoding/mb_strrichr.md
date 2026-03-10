# mb_strrichr

Source: https://devdocs.io/php/function.mb-strrichr

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

mb_strrichr — Finds the last occurrence of a character in a string within another, case insensitive

### Description

```
mb_strrichr(
 string $haystack,
 string $needle,
 bool $before_needle = false,
 ?string $encoding = null
): string|false
```

mb_strrichr() finds the last occurrence of needle in haystack and returns the portion of haystack. Unlike mb_strrchr(), mb_strrichr() is case-insensitive. If needle is not found, it returns false.

### Parameters

The string from which to get the last occurrence of needle.

The string to find in haystack.

Determines which portion of haystack this function returns. If set to true, it returns all of haystack from the beginning to the last occurrence of needle. If set to false, it returns all of haystack from the last occurrence of needle to the end.

The encoding parameter is the character encoding. If it is omitted or null, the internal character encoding value will be used.

### Return Values

Returns the portion of haystack. or false if needle is not found.

### Changelog

### See Also

- mb_stristr() - Finds first occurrence of a string within another, case insensitive
- mb_strrchr() - Finds the last occurrence of a character in a string within another

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-strrichr.php
