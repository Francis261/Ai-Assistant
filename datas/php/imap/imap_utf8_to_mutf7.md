# imap_utf8_to_mutf7

Source: https://devdocs.io/php/function.imap-utf8-to-mutf7

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

imap_utf8_to_mutf7 — Encode a UTF-8 string to modified UTF-7

### Description

```
imap_utf8_to_mutf7(string $string): string|false
```

Encode a UTF-8 string to modified UTF-7 (as specified in RFC 2060, section 5.1.3).

Note:

This function is only available, if libcclient exports utf8_to_mutf7().

### Parameters

A UTF-8 encoded string.

### Return Values

Returns string converted to modified UTF-7, or false on failure.

### See Also

- imap_mutf7_to_utf8() - Decode a modified UTF-7 string to UTF-8

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-utf8-to-mutf7.php
