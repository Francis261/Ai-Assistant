# mcrypt_decrypt

Source: https://devdocs.io/php/function.mcrypt-decrypt

(PHP 4 >= 4.0.2, PHP 5, PHP 7 < 7.2.0, PECL mcrypt >= 1.0.0)

mcrypt_decrypt — Decrypts crypttext with given parameters

This function has been DEPRECATED as of PHP 7.1.0 and REMOVED as of PHP 7.2.0. Relying on this function is highly discouraged.

### Description

```
mcrypt_decrypt(
 string $cipher,
 string $key,
 string $data,
 string $mode,
 string $iv = ?
): string|false
```

Decrypts the data and returns the unencrypted data.

### Parameters

One of the MCRYPT_ciphername constants, or the name of the algorithm as string.

The key with which the data was encrypted. If the provided key size is not supported by the cipher, the function will emit a warning and return false

The data that will be decrypted with the given cipher and mode. If the size of the data is not n * blocksize, the data will be padded with '\0'.

One of the MCRYPT_MODE_modename constants, or one of the following strings: "ecb", "cbc", "cfb", "ofb", "nofb" or "stream".

Used for the initialization in CBC, CFB, OFB modes, and in some algorithms in STREAM mode. If the provided IV size is not supported by the chaining mode or no IV was provided, but the chaining mode requires one, the function will emit a warning and return false.

### Return Values

Returns the decrypted data as a string or false on failure.

### See Also

- mcrypt_encrypt() - Encrypts plaintext with given parameters

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mcrypt-decrypt.php
