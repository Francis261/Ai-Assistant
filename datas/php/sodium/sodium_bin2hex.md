# sodium_bin2hex

Source: https://devdocs.io/php/function.sodium-bin2hex

(PHP 7 >= 7.2.0, PHP 8)

sodium_bin2hex — Encode to hexadecimal

### Description

```
sodium_bin2hex(#[\SensitiveParameter] string $string): string
```

Converts a raw binary string into a hex-encoded string. Unlike the standard hex-encoding function, sodium_bin2hex() is constant-time (a property that is important for any code that touches cryptographic inputs, such as plaintexts or keys).

### Parameters

Raw binary string.

### Return Values

Hex encoded string.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-bin2hex.php
