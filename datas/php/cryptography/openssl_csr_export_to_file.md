# openssl_csr_export_to_file

Source: https://devdocs.io/php/function.openssl-csr-export-to-file

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

openssl_csr_export_to_file — Exports a CSR to a file

### Description

```
openssl_csr_export_to_file(OpenSSLCertificateSigningRequest|string $csr, string $output_filename, bool $no_text = true): bool
```

openssl_csr_export_to_file() takes the Certificate Signing Request represented by csr and saves it in PEM format into the file named by output_filename.

### Parameters

See CSR parameters for a list of valid values.

Path to the output file.

The optional parameter notext affects the verbosity of the output; if it is false, then additional human-readable information is included in the output. The default value of notext is true.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 openssl_csr_export_to_file() example

```
<?php
$subject = array(
    "commonName" => "example.com",
);
$private_key = openssl_pkey_new(array(
    "private_key_bits" => 2048,
    "private_key_type" => OPENSSL_KEYTYPE_RSA,
));
$csr = openssl_csr_new($subject, $private_key, array('digest_alg' => 'sha384') );
openssl_pkey_export_to_file($private_key, 'example-priv.key');
// Along with the subject, the CSR contains the public key corresponding to the private key
openssl_csr_export_to_file($csr, 'example-csr.pem');
?>
```

### See Also

- openssl_csr_export() - Exports a CSR as a string
- openssl_csr_new() - Generates a CSR
- openssl_csr_sign() - Sign a CSR with another certificate (or itself) and generate a certificate

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-csr-export-to-file.php
