# PharData::setSignatureAlgorithm

Source: https://devdocs.io/php/phardata.setsignaturealgorithm

(No version information available, might only be in Git)

PharData::setSignatureAlgorithm — Set the signature algorithm for a phar and apply it

### Description

```
public PharData::setSignatureAlgorithm(int $algo, ?string $privateKey = null): void
```

Note:

This method requires the php.ini setting phar.readonly to be set to 0 in order to work for Phar objects. Otherwise, a PharException will be thrown.

Set the signature algorithm for a phar and apply it. The signature algorithm must be one of Phar::MD5, Phar::SHA1, Phar::SHA256, Phar::SHA512, or Phar::OPENSSL.

### Parameters

One of Phar::MD5, Phar::SHA1, Phar::SHA256, Phar::SHA512, or Phar::OPENSSL

### Return Values

No value is returned.

### Errors/Exceptions

Throws UnexpectedValueException for many errors, BadMethodCallException if called for a zip- or a tar-based phar archive, and a PharException if any problems occur flushing changes to disk.

### Changelog

### See Also

- Phar::getSupportedSignatures() - Return array of supported signature types
- Phar::getSignature() - Return MD5/SHA1/SHA256/SHA512/OpenSSL signature of a Phar archive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phardata.setsignaturealgorithm.php
