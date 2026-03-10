# openssl_x509_parse

Source: https://devdocs.io/php/function.openssl-x509-parse

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

openssl_x509_parse — Parse an X509 certificate and return the information as an array

### Description

```
openssl_x509_parse(OpenSSLCertificate|string $certificate, bool $short_names = true): array|false
```

openssl_x509_parse() returns information about the supplied certificate, including fields such as subject name, issuer name, purposes, valid from and valid to dates etc.

### Parameters

X509 certificate. See Key/Certificate parameters for a list of valid values.

short_names controls how the data is indexed in the array - if short_names is true (the default) then fields will be indexed with the short name form, otherwise, the long name form will be used - e.g.: CN is the shortname form of commonName.

### Return Values

The structure of the returned data is (deliberately) not yet documented, as it is still subject to change.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-x509-parse.php
