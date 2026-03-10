# imap_utf7_encode

Source: https://devdocs.io/php/function.imap-utf7-encode

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_utf7_encode — Converts ISO-8859-1 string to modified UTF-7 text

### Description

```
imap_utf7_encode(string $string): string
```

Converts string to modified UTF-7 text.

This is needed to encode mailbox names that contain certain characters which are not in range of printable ASCII characters.

### Parameters

An ISO-8859-1 string.

### Return Values

Returns string encoded with the modified UTF-7 encoding as defined in » RFC 2060, section 5.1.3.

### See Also

- imap_utf7_decode() - Decodes a modified UTF-7 encoded string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-utf7-encode.php
