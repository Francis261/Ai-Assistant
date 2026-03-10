# openssl_x509_checkpurpose

Source: https://devdocs.io/php/function.openssl-x509-checkpurpose

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

openssl_x509_checkpurpose — Verifies if a certificate can be used for a particular purpose

### Description

```
openssl_x509_checkpurpose(
 OpenSSLCertificate|string $certificate,
 int $purpose,
 array $ca_info = [],
 ?string $untrusted_certificates_file = null
): bool|int
```

openssl_x509_checkpurpose() examines a certificate to see if it can be used for the specified purpose.

### Parameters

The examined certificate.

ca_info should be an array of trusted CA files/dirs as described in Certificate Verification.

If specified, this should be the name of a PEM encoded file holding certificates that can be used to help verify the certificate, although no trust is placed in the certificates that come from that file.

### Return Values

Returns true if the certificate can be used for the intended purpose, false if it cannot, or -1 on error.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-x509-checkpurpose.php
