# Phar::setSignatureAlgorithm

Source: https://devdocs.io/php/phar.setsignaturealgorithm

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.1.0)

Phar::setSignatureAlgorithm — Set the signature algorithm for a phar and apply it

### Description

```
public Phar::setSignatureAlgorithm(int $algo, ?string $privateKey = null): void
```

Note:

This method requires the php.ini setting phar.readonly to be set to 0 in order to work for Phar objects. Otherwise, a PharException will be thrown.

set the signature algorithm for a phar and apply it. The signature algorithm must be one of Phar::MD5, Phar::SHA1, Phar::SHA256, Phar::SHA512, or Phar::OPENSSL.

Note that all executable phar archives have a signature created automatically, SHA1 by default. data tar- or zip-based archives (archives created with the PharData class) must have their signature created and set explicitly via Phar::setSignatureAlgorithm().

### Parameters

One of Phar::MD5, Phar::SHA1, Phar::SHA256, Phar::SHA512, or Phar::OPENSSL

The contents of an OpenSSL private key, as extracted from a certificate or OpenSSL key file:

```
<?php
$private = openssl_get_privatekey(file_get_contents('private.pem'));
$pkey = '';
openssl_pkey_export($private, $pkey);
$p->setSignatureAlgorithm(Phar::OPENSSL, $pkey);
?>
```

### Return Values

No value is returned.

### Errors/Exceptions

Throws UnexpectedValueException for many errors, and a PharException if any problems occur flushing changes to disk.

### Changelog

### See Also

- Phar::getSupportedSignatures() - Return array of supported signature types
- Phar::getSignature() - Return MD5/SHA1/SHA256/SHA512/OpenSSL signature of a Phar archive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.setsignaturealgorithm.php
