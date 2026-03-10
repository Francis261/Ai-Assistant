# openssl_cms_verify

Source: https://devdocs.io/php/function.openssl-cms-verify

(PHP 8)

openssl_cms_verify — Verify a CMS signature

### Description

```
openssl_cms_verify(
 string $input_filename,
 int $flags = 0,
 ?string $certificates = null,
 array $ca_info = [],
 ?string $untrusted_certificates_filename = null,
 ?string $content = null,
 ?string $pk7 = null,
 ?string $sigfile = null,
 int $encoding = OPENSSL_ENCODING_SMIME
): bool
```

This function verifies a CMS signature, either attached or detached, with the specified encoding.

### Parameters

The input file.

Flags to pass to cms_verify().

A file with the signer certificate and optionally intermediate certificates.

An array containing self-signed certificate authority certificates.

A file containing additional intermediate certificates.

A file pointing to the content when signatures are detached.

A file to save the signature to.

The encoding of the input file. One of OPENSSL_ENCODING_SMIME, OPENSSL_ENCODING_DER or OPENSSL_ENCODING_PEM.

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-cms-verify.php
