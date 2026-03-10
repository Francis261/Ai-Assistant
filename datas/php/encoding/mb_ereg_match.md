# mb_ereg_match

Source: https://devdocs.io/php/function.mb-ereg-match

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

mb_ereg_match — Regular expression match for multibyte string

### Description

```
mb_ereg_match(string $pattern, string $string, ?string $options = null): bool
```

A regular expression match for a multibyte string

Note: pattern is only matched at the beginning of string.

### Parameters

The regular expression pattern.

The string being evaluated.

The search option. See mb_regex_set_options() for explanation.

### Return Values

Returns true if string matches the regular expression pattern, false if not.

### Changelog

### Notes

Note:

The internal encoding or the character encoding specified by mb_regex_encoding() will be used as the character encoding for this function.

### See Also

- mb_regex_encoding() - Set/Get character encoding for multibyte regex
- mb_ereg() - Regular expression match with multibyte support

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-ereg-match.php
