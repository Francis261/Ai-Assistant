# imap_utf7_decode

Source: https://devdocs.io/php/function.imap-utf7-decode

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_utf7_decode — Decodes a modified UTF-7 encoded string

### Description

```
imap_utf7_decode(string $string): string|false
```

Decodes modified UTF-7 string into ISO-8859-1 string.

This function is needed to decode mailbox names that contain certain characters which are not in range of printable ASCII characters.

### Parameters

A modified UTF-7 encoding string, as defined in » RFC 2060, section 5.1.3.

### Return Values

Returns a string that is encoded in ISO-8859-1 and consists of the same sequence of characters in string, or false if string contains invalid modified UTF-7 sequence or string contains a character that is not part of ISO-8859-1 character set.

### See Also

- imap_utf7_encode() - Converts ISO-8859-1 string to modified UTF-7 text

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-utf7-decode.php
