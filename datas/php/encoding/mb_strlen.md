# mb_strlen

Source: https://devdocs.io/php/function.mb-strlen

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

mb_strlen — Get string length

### Description

```
mb_strlen(string $string, ?string $encoding = null): int
```

Gets the length of a string.

### Parameters

The string being checked for length.

The encoding parameter is the character encoding. If it is omitted or null, the internal character encoding value will be used.

### Return Values

Returns the number of characters in string string having character encoding encoding. A multi-byte character is counted as 1.

### Errors/Exceptions

If the encoding is unknown, an error of level E_WARNING is generated.

### Changelog

### See Also

- mb_internal_encoding() - Set/Get internal character encoding
- grapheme_strlen() - Get string length in grapheme units
- iconv_strlen() - Returns the character count of string
- strlen() - Get string length

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-strlen.php
