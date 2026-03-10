# sodium_base642bin

Source: https://devdocs.io/php/function.sodium-base642bin

(PHP 7 >= 7.2.0, PHP 8)

sodium_base642bin — Decodes a base64-encoded string into raw binary.

### Description

```
sodium_base642bin(#[\SensitiveParameter] string $string, int $id, string $ignore = ""): string
```

Converts a base64 encoded string into raw binary. Unlike base64_decode(), sodium_base642bin() is constant-time (a property that is important for any code that touches cryptographic inputs, such as plaintexts or keys) and supports multiple character sets.

### Parameters

string; Encoded string.

- SODIUM_BASE64_VARIANT_ORIGINAL for standard (A-Za-z0-9/\+) Base64 encoding.
- SODIUM_BASE64_VARIANT_ORIGINAL_NO_PADDING for standard (A-Za-z0-9/\+) Base64 encoding, without = padding characters.
- SODIUM_BASE64_VARIANT_URLSAFE for URL-safe (A-Za-z0-9\-_) Base64 encoding.
- SODIUM_BASE64_VARIANT_URLSAFE_NO_PADDING for URL-safe (A-Za-z0-9\-_) Base64 encoding, without = padding characters.

Characters to ignore when decoding (e.g. whitespace characters).

### Return Values

Decoded string.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-base642bin.php
