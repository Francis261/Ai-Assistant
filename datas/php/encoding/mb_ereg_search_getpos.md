# mb_ereg_search_getpos

Source: https://devdocs.io/php/function.mb-ereg-search-getpos

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

mb_ereg_search_getpos — Returns start point for next regular expression match

### Description

```
mb_ereg_search_getpos(): int
```

Returns the start point for the next regular expression match.

### Parameters

This function has no parameters.

### Return Values

mb_ereg_search_getpos() returns the point to start regular expression match for mb_ereg_search(), mb_ereg_search_pos(), mb_ereg_search_regs(). The position is represented by bytes from the head of string.

### Notes

Note:

The internal encoding or the character encoding specified by mb_regex_encoding() will be used as the character encoding for this function.

### See Also

- mb_regex_encoding() - Set/Get character encoding for multibyte regex
- mb_ereg_search_setpos() - Set start point of next regular expression match

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-ereg-search-getpos.php
