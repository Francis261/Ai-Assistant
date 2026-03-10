# openssl_x509_read

Source: https://devdocs.io/php/function.openssl-x509-read

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

openssl_x509_read — Parse an X.509 certificate and return an object for it

### Description

```
openssl_x509_read(OpenSSLCertificate|string $certificate): OpenSSLCertificate|false
```

openssl_x509_read() parses the certificate supplied by certificate and returns an OpenSSLCertificate object for it.

### Parameters

X509 certificate. See Key/Certificate parameters for a list of valid values.

### Return Values

Returns an OpenSSLCertificate on success or false on failure.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-x509-read.php
