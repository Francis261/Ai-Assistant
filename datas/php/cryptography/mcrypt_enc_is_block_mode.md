# mcrypt_enc_is_block_mode

Source: https://devdocs.io/php/function.mcrypt-enc-is-block-mode

(PHP 4 >= 4.0.2, PHP 5, PHP 7 < 7.2.0, PECL mcrypt >= 1.0.0)

mcrypt_enc_is_block_mode — Checks whether the opened mode outputs blocks

This function has been DEPRECATED as of PHP 7.1.0 and REMOVED as of PHP 7.2.0. Relying on this function is highly discouraged.

### Description

```
mcrypt_enc_is_block_mode(resource $td): bool
```

Tells whether the opened mode outputs blocks (e.g. true for cbc and ecb, and false for cfb and stream).

### Parameters

The encryption descriptor.

### Return Values

Returns true if the mode outputs blocks of bytes, or false if it outputs just bytes.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mcrypt-enc-is-block-mode.php
