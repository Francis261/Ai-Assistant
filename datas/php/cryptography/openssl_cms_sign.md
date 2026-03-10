# openssl_cms_sign

Source: https://devdocs.io/php/function.openssl-cms-sign

(PHP 8)

openssl_cms_sign — Sign a file

### Description

```
openssl_cms_sign(
 string $input_filename,
 string $output_filename,
 OpenSSLCertificate|string $certificate,
 #[\SensitiveParameter] OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key,
 ?array $headers,
 int $flags = 0,
 int $encoding = OPENSSL_ENCODING_SMIME,
 ?string $untrusted_certificates_filename = null
): bool
```

This function signs a file with an X.509 certificate and key.

### Parameters

The name of the file to be signed.

The name of the file to deposit the results.

The signing certificate. See Key/Certificate parameters for a list of valid values.

The key associated with certificate. See Key/Certificate parameters for a list of valid values.

An array of headers to be included in S/MIME output.

Flags to be passed to cms_sign().

The encoding of the output file. One of OPENSSL_ENCODING_SMIME, OPENSSL_ENCODING_DER or OPENSSL_ENCODING_PEM.

Intermediate certificates to be included in the signature.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 openssl_cms_sign() example

```
<?php

openssl_cms_sign('input.txt', 'output.txt', 'file://cert.pem', 'file://privkey.pem', null, OPENSSL_CMS_BINARY, OPENSSL_ENCODING_DER, 'chain.pem');
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-cms-sign.php
