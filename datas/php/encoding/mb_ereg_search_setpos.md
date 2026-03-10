# mb_ereg_search_setpos

Source: https://devdocs.io/php/function.mb-ereg-search-setpos

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

mb_ereg_search_setpos — Set start point of next regular expression match

### Description

```
mb_ereg_search_setpos(int $offset): bool
```

mb_ereg_search_setpos() sets the starting point of a match for mb_ereg_search().

### Parameters

The position to set. If it is negative, it counts from the end of the string.

### Return Values

Returns true on success or false on failure.

### Changelog

### Notes

Note:

The internal encoding or the character encoding specified by mb_regex_encoding() will be used as the character encoding for this function.

### See Also

- mb_regex_encoding() - Set/Get character encoding for multibyte regex
- mb_ereg_search_init() - Setup string and regular expression for a multibyte regular expression match

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-ereg-search-setpos.php
