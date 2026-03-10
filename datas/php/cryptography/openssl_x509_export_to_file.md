# openssl_x509_export_to_file

Source: https://devdocs.io/php/function.openssl-x509-export-to-file

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

openssl_x509_export_to_file — Exports a certificate to file

### Description

```
openssl_x509_export_to_file(OpenSSLCertificate|string $certificate, string $output_filename, bool $no_text = true): bool
```

openssl_x509_export_to_file() stores certificate into a file named by output_filename in a PEM encoded format.

### Parameters

See Key/Certificate parameters for a list of valid values.

Path to the output file.

The optional parameter notext affects the verbosity of the output; if it is false, then additional human-readable information is included in the output. The default value of notext is true.

### Return Values

Returns true on success or false on failure.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-x509-export-to-file.php
