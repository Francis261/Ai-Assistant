# mcrypt_enc_self_test

Source: https://devdocs.io/php/function.mcrypt-enc-self-test

(PHP 4 >= 4.0.2, PHP 5, PHP 7 < 7.2.0, PECL mcrypt >= 1.0.0)

mcrypt_enc_self_test — Runs a self test on the opened module

This function has been DEPRECATED as of PHP 7.1.0 and REMOVED as of PHP 7.2.0. Relying on this function is highly discouraged.

### Description

```
mcrypt_enc_self_test(resource $td): int
```

This function runs the self test on the algorithm specified by the descriptor td.

### Parameters

The encryption descriptor.

### Return Values

Returns 0 on success and a negative int on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mcrypt-enc-self-test.php
