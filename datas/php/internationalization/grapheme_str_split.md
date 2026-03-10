# grapheme_str_split

Source: https://devdocs.io/php/function.grapheme-str-split

(PHP 8 >= 8.4.0)

grapheme_str_split — Split a string into an array

### Description

```
grapheme_str_split(string $string, int $length = 1): array|false
```

This function will return an array of strings, it is a version of str_split() with support for grapheme cluster byte characters. If the length parameter is specified, the string is broken down into chunks of the specified length in grapheme clusters (not bytes).

### Parameters

The string to split into grapheme clusters or chunks. string must be valid UTF-8.

Each element of the returned array will be composed of length grapheme clusters.

### Return Values

grapheme_str_split() returns an array of strings, or false on failure.

### Errors/Exceptions

If length is less than 1, a ValueError will be thrown.

### See Also

- str_split() - Convert a string to an array
- mb_str_split() - Given a multibyte string, return an array of its characters
- » Unicode Text Segmentation: Grapheme Cluster Boundaries

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.grapheme-str-split.php
