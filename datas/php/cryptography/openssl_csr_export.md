# openssl_csr_export

Source: https://devdocs.io/php/function.openssl-csr-export

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

openssl_csr_export — Exports a CSR as a string

### Description

```
openssl_csr_export(OpenSSLCertificateSigningRequest|string $csr, string &$output, bool $no_text = true): bool
```

openssl_csr_export() takes the Certificate Signing Request represented by csr and stores it in PEM format in output, which is passed by reference.

### Parameters

See CSR parameters for a list of valid values.

on success, this string will contain the PEM encoded CSR

The optional parameter notext affects the verbosity of the output; if it is false, then additional human-readable information is included in the output. The default value of notext is true.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 openssl_csr_export() example

```
<?php
$subject = array(
    "commonName" => "example.com",
);
$private_key = openssl_pkey_new(array(
    "private_key_bits" => 2048,
    "private_key_type" => OPENSSL_KEYTYPE_RSA,
));
$configargs = array(
    'digest_alg' => 'sha256WithRSAEncryption'
);
$csr = openssl_csr_new($subject, $private_key, $configargs);
openssl_csr_export($csr, $csr_string);
echo $csr_string;
?>
```

### See Also

- openssl_csr_export_to_file() - Exports a CSR to a file
- openssl_csr_new() - Generates a CSR
- openssl_csr_sign() - Sign a CSR with another certificate (or itself) and generate a certificate

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-csr-export.php
