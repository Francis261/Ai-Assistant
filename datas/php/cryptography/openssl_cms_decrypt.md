# openssl_cms_decrypt

Source: https://devdocs.io/php/function.openssl-cms-decrypt

(PHP 8)

openssl_cms_decrypt — Decrypt a CMS message

### Description

```
openssl_cms_decrypt(
 string $input_filename,
 string $output_filename,
 #[\SensitiveParameter] OpenSSLCertificate|string $certificate,
 #[\SensitiveParameter] OpenSSLAsymmetricKey|OpenSSLCertificate|array|string|null $private_key = null,
 int $encoding = OPENSSL_ENCODING_SMIME
): bool
```

Decrypts a CMS message.

### Parameters

The name of a file containing encrypted content.

The name of the file to deposit the decrypted content.

The name of the file containing a certificate of the recipient.

The name of the file containing a PKCS#8 key.

The encoding of the input file. One of OPENSSL_ENCODING_SMIME, OPENSSL_ENCODING_DER or OPENSSL_ENCODING_PEM.

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-cms-decrypt.php
