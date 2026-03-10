# mcrypt_enc_is_block_algorithm_mode

Source: https://devdocs.io/php/function.mcrypt-enc-is-block-algorithm-mode

(PHP 4 >= 4.0.2, PHP 5, PHP 7 < 7.2.0, PECL mcrypt >= 1.0.0)

mcrypt_enc_is_block_algorithm_mode — Checks whether the encryption of the opened mode works on blocks

This function has been DEPRECATED as of PHP 7.1.0 and REMOVED as of PHP 7.2.0. Relying on this function is highly discouraged.

### Description

```
mcrypt_enc_is_block_algorithm_mode(resource $td): bool
```

Tells whether the algorithm of the opened mode works on blocks (e.g. false for stream, and true for cbc, cfb, ofb)..

### Parameters

The encryption descriptor.

### Return Values

Returns true if the mode is for use with block algorithms, otherwise it returns false.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mcrypt-enc-is-block-algorithm-mode.php
