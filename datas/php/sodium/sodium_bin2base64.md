# sodium_bin2base64

Source: https://devdocs.io/php/function.sodium-bin2base64

(PHP 7 >= 7.2.0, PHP 8)

sodium_bin2base64 — Encodes a raw binary string with base64.

### Description

```
sodium_bin2base64(#[\SensitiveParameter] string $string, int $id): string
```

Converts a raw binary string into a base64-encoded string. Unlike base64_encode(), sodium_bin2base64() is constant-time (a property that is important for any code that touches cryptographic inputs, such as plaintexts or keys) and supports multiple character sets.

### Parameters

Raw binary string.

- SODIUM_BASE64_VARIANT_ORIGINAL for standard (A-Za-z0-9/\+) Base64 encoding.
- SODIUM_BASE64_VARIANT_ORIGINAL_NO_PADDING for standard (A-Za-z0-9/\+) Base64 encoding, without = padding characters.
- SODIUM_BASE64_VARIANT_URLSAFE for URL-safe (A-Za-z0-9\-_) Base64 encoding.
- SODIUM_BASE64_VARIANT_URLSAFE_NO_PADDING for URL-safe (A-Za-z0-9\-_) Base64 encoding, without = padding characters.

### Return Values

Base64-encoded string.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-bin2base64.php
