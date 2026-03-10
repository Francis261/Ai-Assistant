# openssl_pkey_export_to_file

Source: https://devdocs.io/php/function.openssl-pkey-export-to-file

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

openssl_pkey_export_to_file — Gets an exportable representation of a key into a file

### Description

```
openssl_pkey_export_to_file(
 #[\SensitiveParameter] OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $key,
 string $output_filename,
 #[\SensitiveParameter] ?string $passphrase = null,
 ?array $options = null
): bool
```

openssl_pkey_export_to_file() saves an ascii-armoured (PEM encoded) rendition of key into the file named by output_filename.

Note: You need to have a valid openssl.cnf installed for this function to operate correctly. See the notes under the installation section for more information.

### Parameters

Path to the output file.

The key can be optionally protected by a passphrase.

options can be used to fine-tune the export process by specifying and/or overriding options for the openssl configuration file. See openssl_csr_new() for more information about options.

### Return Values

Returns true on success or false on failure.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-pkey-export-to-file.php
