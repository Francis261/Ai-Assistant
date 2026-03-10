# openssl_csr_get_public_key

Source: https://devdocs.io/php/function.openssl-csr-get-public-key

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

openssl_csr_get_public_key — Returns the public key of a CSR

### Description

```
openssl_csr_get_public_key(OpenSSLCertificateSigningRequest|string $csr, bool $short_names = true): OpenSSLAsymmetricKey|false
```

openssl_csr_get_public_key() extracts the public key from csr and prepares it for use by other functions.

### Parameters

See CSR parameters for a list of valid values.

This parameter is ignored

### Return Values

Returns an OpenSSLAsymmetricKey on success, or false on error.

### Changelog

### Examples

Example #1 openssl_csr_get_public_key() example

```
<?php
$subject = array(
    "commonName" => "example.com",
);
$private_key = openssl_pkey_new(array(
    "private_key_bits" => 2048,
    "private_key_type" => OPENSSL_KEYTYPE_RSA,
));
$csr = openssl_csr_new($subject, $private_key, array('digest_alg' => 'sha256') );
$public_key = openssl_csr_get_public_key($csr);
$info = openssl_pkey_get_details($public_key);
echo $info['key'];
?>
```

### See Also

- openssl_csr_get_subject() - Returns the subject of a CSR
- openssl_csr_new() - Generates a CSR
- openssl_pkey_get_details() - Returns an array with the key details
- openssl_pkey_export_to_file() - Gets an exportable representation of a key into a file
- openssl_pkey_export() - Gets an exportable representation of a key into a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-csr-get-public-key.php
