# mb_split

Source: https://devdocs.io/php/function.mb-split

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

mb_split — Split multibyte string using regular expression

### Description

```
mb_split(string $pattern, string $string, int $limit = -1): array|false
```

Split a multibyte string using regular expression pattern and returns the result as an array.

### Parameters

The regular expression pattern.

The string being split.

### Return Values

The result as an array, or false on failure.

### Notes

Note:

The character encoding specified by mb_regex_encoding() will be used as the character encoding for this function by default.

### See Also

- mb_regex_encoding() - Set/Get character encoding for multibyte regex
- mb_ereg() - Regular expression match with multibyte support
- explode() - Split a string by a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-split.php
