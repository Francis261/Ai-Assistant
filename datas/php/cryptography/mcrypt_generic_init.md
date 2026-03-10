# mcrypt_generic_init

Source: https://devdocs.io/php/function.mcrypt-generic-init

(PHP 4 >= 4.0.2, PHP 5, PHP 7 < 7.2.0, PECL mcrypt >= 1.0.0)

mcrypt_generic_init — This function initializes all buffers needed for encryption

This function has been DEPRECATED as of PHP 7.1.0 and REMOVED as of PHP 7.2.0. Relying on this function is highly discouraged.

### Description

```
mcrypt_generic_init(resource $td, string $key, string $iv): int
```

You need to call this function before every call to mcrypt_generic() or mdecrypt_generic().

### Parameters

The encryption descriptor.

The maximum length of the key should be the one obtained by calling mcrypt_enc_get_key_size() and every value smaller than this is legal.

The IV should normally have the size of the algorithms block size, but you must obtain the size by calling mcrypt_enc_get_iv_size(). IV is ignored in ECB. IV MUST exist in CFB, CBC, STREAM, nOFB and OFB modes. It needs to be random and unique (but not secret). The same IV must be used for encryption/decryption. If you do not want to use it you should set it to zeros, but this is not recommended.

### Return Values

The function returns a negative value on error: -3 when the key length was incorrect, -4 when there was a memory allocation problem and any other return value is an unknown error. If an error occurs a warning will be displayed accordingly. false is returned if incorrect parameters were passed.

### See Also

- mcrypt_module_open() - Opens the module of the algorithm and the mode to be used

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mcrypt-generic-init.php
