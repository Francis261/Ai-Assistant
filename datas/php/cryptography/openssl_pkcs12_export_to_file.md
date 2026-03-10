# openssl_pkcs12_export_to_file

Source: https://devdocs.io/php/function.openssl-pkcs12-export-to-file

(PHP 5 >= 5.2.2, PHP 7, PHP 8)

openssl_pkcs12_export_to_file — Exports a PKCS#12 Compatible Certificate Store File

### Description

```
openssl_pkcs12_export_to_file(
 OpenSSLCertificate|string $certificate,
 string $output_filename,
 #[\SensitiveParameter] OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key,
 #[\SensitiveParameter] string $passphrase,
 array $options = []
): bool
```

openssl_pkcs12_export_to_file() stores certificate into a file named by output_filename in a PKCS#12 file format.

### Parameters

See Key/Certificate parameters for a list of valid values.

Path to the output file.

Private key component of PKCS#12 file. See Public/Private Key parameters for a list of valid values.

Encryption password for unlocking the PKCS#12 file.

Optional array, other keys will be ignored.

### Return Values

Returns true on success or false on failure.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-pkcs12-export-to-file.php
