# openssl_csr_get_subject

Source: https://devdocs.io/php/function.openssl-csr-get-subject

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

openssl_csr_get_subject — Returns the subject of a CSR

### Description

```
openssl_csr_get_subject(OpenSSLCertificateSigningRequest|string $csr, bool $short_names = true): array|false
```

openssl_csr_get_subject() returns subject distinguished name information encoded in the csr including fields commonName (CN), organizationName (O), countryName (C) etc.

### Parameters

See CSR parameters for a list of valid values.

short_names controls how the data is indexed in the array - if short_names is true (the default) then fields will be indexed with the short name form, otherwise, the long name form will be used - e.g.: CN is the shortname form of commonName.

### Return Values

Returns an associative array with subject description, or false on failure.

### Changelog

### Examples

Example #1 openssl_csr_get_subject() example

```
<?php
$subject = array(
    "countryName" => "CA",
    "stateOrProvinceName" => "Alberta",
    "localityName" => "Calgary",
    "organizationName" => "XYZ Widgets Inc",
    "organizationalUnitName" => "PHP Documentation Team",
    "commonName" => "Wez Furlong",
    "emailAddress" => "wez@example.com",
);
$private_key = openssl_pkey_new(array(
    "private_key_bits" => 2048,
    "private_key_type" => OPENSSL_KEYTYPE_RSA,
));
$configargs = array(
    'digest_alg' => 'sha512WithRSAEncryption'
);
$csr = openssl_csr_new($subject, $privkey, $configargs);
print_r(openssl_csr_get_subject($csr));
?>
```

The above example will output something similar to:

```
Array
(
    [C] => CA
    [ST] => Alberta
    [L] => Calgary
    [O] => XYZ Widgets Inc
    [OU] => PHP Documentation Team
    [CN] => Wez Furlong
    [emailAddress] => wez@example.com
)
```

### See Also

- openssl_csr_new() - Generates a CSR
- openssl_csr_get_public_key() - Returns the public key of a CSR
- openssl_x509_parse() - Parse an X509 certificate and return the information as an array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-csr-get-subject.php
