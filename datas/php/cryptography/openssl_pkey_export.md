# openssl_pkey_export

Source: https://devdocs.io/php/function.openssl-pkey-export

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

openssl_pkey_export — Gets an exportable representation of a key into a string

### Description

```
openssl_pkey_export(
 #[\SensitiveParameter] OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $key,
 string &$output,
 #[\SensitiveParameter] ?string $passphrase = null,
 ?array $options = null
): bool
```

openssl_pkey_export() exports key as a PEM encoded string and stores it into output (which is passed by reference).

Note: You need to have a valid openssl.cnf installed for this function to operate correctly. See the notes under the installation section for more information.

### Parameters

The key is optionally protected by passphrase.

options can be used to fine-tune the export process by specifying and/or overriding options for the openssl configuration file. See openssl_csr_new() for more information about options.

### Return Values

Returns true on success or false on failure.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-pkey-export.php
