# openssl_x509_export

Source: https://devdocs.io/php/function.openssl-x509-export

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

openssl_x509_export — Exports a certificate as a string

### Description

```
openssl_x509_export(OpenSSLCertificate|string $certificate, string &$output, bool $no_text = true): bool
```

openssl_x509_export() stores certificate into a string named by output in a PEM encoded format.

### Parameters

See Key/Certificate parameters for a list of valid values.

On success, this will hold the PEM.

The optional parameter notext affects the verbosity of the output; if it is false, then additional human-readable information is included in the output. The default value of notext is true.

### Return Values

Returns true on success or false on failure.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-x509-export.php
