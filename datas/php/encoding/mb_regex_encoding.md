# mb_regex_encoding

Source: https://devdocs.io/php/function.mb-regex-encoding

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

mb_regex_encoding — Set/Get character encoding for multibyte regex

### Description

```
mb_regex_encoding(?string $encoding = null): string|bool
```

Set/Get character encoding for a multibyte regex.

### Parameters

The encoding parameter is the character encoding. If it is omitted or null, the internal character encoding value will be used.

### Return Values

If encoding is set, then Returns true on success or false on failure. In this case, the internal character encoding is NOT changed. If encoding is omitted, then the current character encoding name for a multibyte regex is returned.

### Changelog

### See Also

- mb_internal_encoding() - Set/Get internal character encoding
- mb_ereg() - Regular expression match with multibyte support

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-regex-encoding.php
