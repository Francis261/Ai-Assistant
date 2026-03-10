# iconv_strlen

Source: https://devdocs.io/php/function.iconv-strlen

(PHP 5, PHP 7, PHP 8)

iconv_strlen — Returns the character count of string

### Description

```
iconv_strlen(string $string, ?string $encoding = null): int|false
```

In contrast to strlen(), iconv_strlen() counts the occurrences of characters in the given byte sequence string on the basis of the specified character set, the result of which is not necessarily identical to the length of the string in bytes.

### Parameters

The string.

If encoding parameter is omitted or null, string is assumed to be encoded in iconv.internal_encoding.

### Return Values

Returns the character count of string, as an integer, or false if an error occurs during the encoding.

### Changelog

### See Also

- grapheme_strlen() - Get string length in grapheme units
- mb_strlen() - Get string length
- strlen() - Get string length

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.iconv-strlen.php
