# Phar::getSignature

Source: https://devdocs.io/php/phar.getsignature

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.0.0)

Phar::getSignature — Return MD5/SHA1/SHA256/SHA512/OpenSSL signature of a Phar archive

### Description

```
public Phar::getSignature(): array|false
```

Returns the verification signature of a phar archive in a hexadecimal string.

### Parameters

### Return Values

Array with the opened archive's signature in hash key and MD5, SHA-1, SHA-256, SHA-512, or OpenSSL in hash_type. This signature is a hash calculated on the entire phar's contents, and may be used to verify the integrity of the archive. A valid signature is absolutely required of all executable phar archives if the phar.require_hash INI variable is set to true. If there is no signature, the function returns false.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.getsignature.php
