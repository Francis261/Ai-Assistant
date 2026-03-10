# sodium_hex2bin

Source: https://devdocs.io/php/function.sodium-hex2bin

(PHP 7 >= 7.2.0, PHP 8)

sodium_hex2bin — Decodes a hexadecimally encoded binary string

### Description

```
sodium_hex2bin(#[\SensitiveParameter] string $string, string $ignore = ""): string
```

Decodes a hexadecimally encoded binary string.

Like sodium_bin2hex(), sodium_hex2bin() is resistant to side-channel attacks while hex2bin() is not.

### Parameters

Hexadecimal representation of data.

Optional string argument for characters to ignore.

### Return Values

Returns the binary representation of the given string data.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-hex2bin.php
