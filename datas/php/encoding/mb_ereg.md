# mb_ereg

Source: https://devdocs.io/php/function.mb-ereg

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

mb_ereg — Regular expression match with multibyte support

### Description

```
mb_ereg(string $pattern, string $string, array &$matches = null): bool
```

Executes the regular expression match with multibyte support.

### Parameters

The search pattern.

The search string.

If matches are found for parenthesized substrings of pattern and the function is called with the third argument matches, the matches will be stored in the elements of the array matches. If no matches are found, matches is set to an empty array.

$matches[1] will contain the substring which starts at the first left parenthesis; $matches[2] will contain the substring starting at the second, and so on. $matches[0] will contain a copy of the complete string matched.

### Return Values

Returns whether pattern matches string.

### Changelog

### Notes

Note:

The internal encoding or the character encoding specified by mb_regex_encoding() will be used as the character encoding for this function.

### See Also

- mb_regex_encoding() - Set/Get character encoding for multibyte regex
- mb_eregi() - Regular expression match ignoring case with multibyte support

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-ereg.php
