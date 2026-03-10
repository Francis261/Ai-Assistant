# mcrypt_enc_is_block_algorithm

Source: https://devdocs.io/php/function.mcrypt-enc-is-block-algorithm

(PHP 4 >= 4.0.2, PHP 5, PHP 7 < 7.2.0, PECL mcrypt >= 1.0.0)

mcrypt_enc_is_block_algorithm — Checks whether the algorithm of the opened mode is a block algorithm

This function has been DEPRECATED as of PHP 7.1.0 and REMOVED as of PHP 7.2.0. Relying on this function is highly discouraged.

### Description

```
mcrypt_enc_is_block_algorithm(resource $td): bool
```

Tells whether the algorithm of the opened mode is a block algorithm.

### Parameters

The encryption descriptor.

### Return Values

Returns true if the algorithm is a block algorithm or false if it is a stream one.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mcrypt-enc-is-block-algorithm.php
