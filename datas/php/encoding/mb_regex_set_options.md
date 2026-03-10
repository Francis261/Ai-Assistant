# mb_regex_set_options

Source: https://devdocs.io/php/function.mb-regex-set-options

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

mb_regex_set_options — Set/Get the default options for mbregex functions

### Description

```
mb_regex_set_options(?string $options = null): string
```

Sets the default options described by options for multibyte regex functions.

### Parameters

The options to set. This is a string where each character is an option. To set a mode, the mode character must be the last one set, however there can only be set one mode but multiple options.

Note:

The "e" option has no effect when set through mb_regex_set_options(). Use it with mb_ereg_replace() or mb_eregi_replace().

### Return Values

The previous options. If options is omitted or null, it returns the string that describes the current options.

### Changelog

### See Also

- mb_split() - Split multibyte string using regular expression
- mb_ereg() - Regular expression match with multibyte support
- mb_eregi() - Regular expression match ignoring case with multibyte support

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-regex-set-options.php
