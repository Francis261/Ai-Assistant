# mb_ereg_search_regs

Source: https://devdocs.io/php/function.mb-ereg-search-regs

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

mb_ereg_search_regs — Returns the matched part of a multibyte regular expression

### Description

```
mb_ereg_search_regs(?string $pattern = null, ?string $options = null): array|false
```

Returns the matched part of a multibyte regular expression.

### Parameters

The search pattern.

The search option. See mb_regex_set_options() for explanation.

### Return Values

mb_ereg_search_regs() executes the multibyte regular expression match, and if there are some matched part, it returns an array including substring of matched part as first element, the first grouped part with brackets as second element, the second grouped part as third element, and so on. It returns false on error.

### Changelog

### Notes

Note:

The internal encoding or the character encoding specified by mb_regex_encoding() will be used as the character encoding for this function.

### See Also

- mb_regex_encoding() - Set/Get character encoding for multibyte regex
- mb_ereg_search_init() - Setup string and regular expression for a multibyte regular expression match

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-ereg-search-regs.php
