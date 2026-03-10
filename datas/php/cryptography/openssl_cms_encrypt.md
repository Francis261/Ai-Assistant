# openssl_cms_encrypt

Source: https://devdocs.io/php/function.openssl-cms-encrypt

(PHP 8)

openssl_cms_encrypt — Encrypt a CMS message

### Description

```
openssl_cms_encrypt(
 string $input_filename,
 string $output_filename,
 OpenSSLCertificate|array|string $certificate,
 ?array $headers,
 int $flags = 0,
 int $encoding = OPENSSL_ENCODING_SMIME,
 int $cipher_algo = OPENSSL_CIPHER_AES_128_CBC
): bool
```

This function encrypts content to one or more recipients, based on the certificates that are passed to it.

### Parameters

The file to be encrypted.

The output file.

Recipients to encrypt to.

Headers to include when S/MIME is used.

Flags to be passed to CMS_sign.

An encoding to output. One of OPENSSL_ENCODING_SMIME, OPENSSL_ENCODING_DER or OPENSSL_ENCODING_PEM.

A cypher to use.

### Return Values

Returns true on success or false on failure.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-cms-encrypt.php
