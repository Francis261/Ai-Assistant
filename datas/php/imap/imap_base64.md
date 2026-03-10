# imap_base64

Source: https://devdocs.io/php/function.imap-base64

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_base64 — Decode BASE64 encoded text

### Description

```
imap_base64(string $string): string|false
```

Decodes the given BASE-64 encoded string.

### Parameters

The encoded text

### Return Values

Returns the decoded message as a string, or false on failure.

### See Also

- imap_binary() - Convert an 8bit string to a base64 string
- base64_encode() - Encodes data with MIME base64
- base64_decode() - Decodes data encoded with MIME base64
- » RFC2045, Section 6.8

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-base64.php
