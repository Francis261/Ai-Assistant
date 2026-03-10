# mb_ereg_search

Source: https://devdocs.io/php/function.mb-ereg-search

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

mb_ereg_search — Multibyte regular expression match for predefined multibyte string

### Description

```
mb_ereg_search(?string $pattern = null, ?string $options = null): bool
```

Performs a multibyte regular expression match for a predefined multibyte string.

### Parameters

The search pattern.

The search option. See mb_regex_set_options() for explanation.

### Return Values

mb_ereg_search() returns true if the multibyte string matches with the regular expression, or false otherwise. The string for matching is set by mb_ereg_search_init(). If pattern is not specified, the previous one is used.

### Changelog

### Notes

Note:

The internal encoding or the character encoding specified by mb_regex_encoding() will be used as the character encoding for this function.

### See Also

- mb_regex_encoding() - Set/Get character encoding for multibyte regex
- mb_ereg_search_init() - Setup string and regular expression for a multibyte regular expression match

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-ereg-search.php
