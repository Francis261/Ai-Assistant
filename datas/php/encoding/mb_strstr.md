# mb_strstr

Source: https://devdocs.io/php/function.mb-strstr

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

mb_strstr — Finds first occurrence of a string within another

### Description

```
mb_strstr(
 string $haystack,
 string $needle,
 bool $before_needle = false,
 ?string $encoding = null
): string|false
```

mb_strstr() finds the first occurrence of needle in haystack and returns the portion of haystack. If needle is not found, it returns false.

### Parameters

The string from which to get the first occurrence of needle

The string to find in haystack

Determines which portion of haystack this function returns. If set to true, it returns all of haystack from the beginning to the first occurrence of needle (excluding needle). If set to false, it returns all of haystack from the first occurrence of needle to the end (including needle).

The encoding parameter is the character encoding. If it is omitted or null, the internal character encoding value will be used.

### Return Values

Returns the portion of haystack, or false if needle is not found.

### Changelog

### See Also

- stristr() - Case-insensitive strstr
- strstr() - Find the first occurrence of a string
- mb_stristr() - Finds first occurrence of a string within another, case insensitive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-strstr.php
