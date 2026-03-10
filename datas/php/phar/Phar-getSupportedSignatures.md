# Phar::getSupportedSignatures

Source: https://devdocs.io/php/phar.getsupportedsignatures

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.1.0)

Phar::getSupportedSignatures — Return array of supported signature types

### Description

```
final public static Phar::getSupportedSignatures(): array
```

Return array of supported signature types

### Parameters

No parameters.

### Return Values

Returns an array containing any of MD5, SHA-1, SHA-256, SHA-512, or OpenSSL.

### See Also

- Phar::getSignature() - Return MD5/SHA1/SHA256/SHA512/OpenSSL signature of a Phar archive
- Phar::setSignatureAlgorithm() - Set the signature algorithm for a phar and apply it

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.getsupportedsignatures.php
