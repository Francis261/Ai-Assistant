# mb_ereg_search_pos

Source: https://devdocs.io/php/function.mb-ereg-search-pos

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

mb_ereg_search_pos — Returns position and length of a matched part of the multibyte regular expression for a predefined multibyte string

### Description

```
mb_ereg_search_pos(?string $pattern = null, ?string $options = null): array|false
```

Returns position and length of a matched part of the multibyte regular expression for a predefined multibyte string

The string for match is specified by mb_ereg_search_init(). If it is not specified, the previous one will be used.

### Parameters

The search pattern.

The search option. See mb_regex_set_options() for explanation.

### Return Values

An array containing two elements. The first element is the offset, in bytes, where the match begins relative to the start of the search string, and the second element is the length in bytes of the match.

If an error occurs, false is returned.

### Changelog

### Notes

Note:

The internal encoding or the character encoding specified by mb_regex_encoding() will be used as the character encoding for this function.

### See Also

- mb_regex_encoding() - Set/Get character encoding for multibyte regex
- mb_ereg_search_init() - Setup string and regular expression for a multibyte regular expression match

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-ereg-search-pos.php
