# mb_ereg_search_init

Source: https://devdocs.io/php/function.mb-ereg-search-init

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

mb_ereg_search_init — Setup string and regular expression for a multibyte regular expression match

### Description

```
mb_ereg_search_init(string $string, ?string $pattern = null, ?string $options = null): bool
```

mb_ereg_search_init() sets string and pattern for a multibyte regular expression. These values are used for mb_ereg_search(), mb_ereg_search_pos(), and mb_ereg_search_regs().

### Parameters

The search string.

The search pattern.

The search option. See mb_regex_set_options() for explanation.

### Return Values

Returns true on success or false on failure.

### Changelog

### Notes

Note:

The internal encoding or the character encoding specified by mb_regex_encoding() will be used as the character encoding for this function.

### See Also

- mb_regex_encoding() - Set/Get character encoding for multibyte regex
- mb_ereg_search_regs() - Returns the matched part of a multibyte regular expression

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-ereg-search-init.php
