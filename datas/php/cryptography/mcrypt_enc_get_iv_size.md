# mcrypt_enc_get_iv_size

Source: https://devdocs.io/php/function.mcrypt-enc-get-iv-size

(PHP 4 >= 4.0.2, PHP 5, PHP 7 < 7.2.0, PECL mcrypt >= 1.0.0)

mcrypt_enc_get_iv_size — Returns the size of the IV of the opened algorithm

This function has been DEPRECATED as of PHP 7.1.0 and REMOVED as of PHP 7.2.0. Relying on this function is highly discouraged.

### Description

```
mcrypt_enc_get_iv_size(resource $td): int
```

This function returns the size of the IV of the algorithm specified by the encryption descriptor in bytes. An IV is used in cbc, cfb and ofb modes, and in some algorithms in stream mode.

### Parameters

The encryption descriptor.

### Return Values

Returns the size of the IV, or 0 if the IV is ignored by the algorithm.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mcrypt-enc-get-iv-size.php
