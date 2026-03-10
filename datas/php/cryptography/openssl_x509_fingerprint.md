# openssl_x509_fingerprint

Source: https://devdocs.io/php/function.openssl-x509-fingerprint

(PHP 5 >= 5.6.0, PHP 7, PHP 8)

openssl_x509_fingerprint — Calculates the fingerprint, or digest, of a given X.509 certificate

### Description

```
openssl_x509_fingerprint(OpenSSLCertificate|string $certificate, string $digest_algo = "sha1", bool $binary = false): string|false
```

openssl_x509_fingerprint() returns the digest of certificate as a string.

### Parameters

See Key/Certificate parameters for a list of valid values.

The digest method or hash algorithm to use, e.g. "sha256", one of openssl_get_md_methods().

When set to true, outputs raw binary data. false outputs lowercase hexits.

### Return Values

Returns a string containing the calculated certificate fingerprint as lowercase hexits unless binary is set to true in which case the raw binary representation of the message digest is returned.

Returns false on failure.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-x509-fingerprint.php
