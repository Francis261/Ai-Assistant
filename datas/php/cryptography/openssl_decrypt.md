# openssl_decrypt

Source: https://devdocs.io/php/function.openssl-decrypt

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

openssl_decrypt — Decrypts data

### Description

```
openssl_decrypt(
 string $data,
 string $cipher_algo,
 #[\SensitiveParameter] string $passphrase,
 int $options = 0,
 string $iv = "",
 ?string $tag = null,
 string $aad = ""
): string|false
```

Takes a raw or base64 encoded string and decrypts it using a given method and passphrase.

### Parameters

The encrypted message to be decrypted.

The cipher method. For a list of available cipher methods, use openssl_get_cipher_methods().

The passphrase. If the passphrase is shorter than expected, it is silently padded with NUL characters; if the passphrase is longer than expected, it is silently truncated.

There is no key derivation function used for passphrase as its name might suggest. The only operation used is padding with NUL characters or truncation if the length is different than expected.

options can be one of OPENSSL_RAW_DATA, OPENSSL_ZERO_PADDING or OPENSSL_DONT_ZERO_PAD_KEY.

A non-null Initialization Vector. If the IV is shorter than expected, it is padded with NUL characters and warning is emitted; if the passphrase is longer than expected, it is truncated and warning is emitted.

The authentication tag in AEAD cipher mode. If it is incorrect, the authentication fails and the function returns false.

The length of the tag is not checked by the function. It is the caller's responsibility to ensure that the length of the tag matches the length of the tag retrieved when openssl_encrypt() has been called. Otherwise the decryption may succeed if the given tag only matches the start of the proper tag.

Additional authenticated data.

### Return Values

The decrypted string on success or false on failure.

### Errors/Exceptions

Emits an E_WARNING level error if an unknown cipher algorithm is passed via the cipher_algo parameter.

Emits an E_WARNING level error if an empty value is passed in via the iv parameter.

### Changelog

### See Also

- openssl_encrypt() - Encrypts data

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-decrypt.php
