# openssl_pkcs12_read

Source: https://devdocs.io/php/function.openssl-pkcs12-read

(PHP 5 >= 5.2.2, PHP 7, PHP 8)

openssl_pkcs12_read — Parse a PKCS#12 Certificate Store into an array

### Description

```
openssl_pkcs12_read(string $pkcs12, array &$certificates, #[\SensitiveParameter] string $passphrase): bool
```

openssl_pkcs12_read() parses the PKCS#12 certificate store supplied by pkcs12 into a array named certificates.

### Parameters

The certificate store contents, not its file name.

On success, this will hold the Certificate Store Data.

Encryption password for unlocking the PKCS#12 file.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 openssl_pkcs12_read() example

```
<?php
if (!$cert_store = file_get_contents("/certs/file.p12")) {
    echo "Error: Unable to read the cert file\n";
    exit;
}

if (openssl_pkcs12_read($cert_store, $cert_info, "my_secret_pass")) {
    echo "Certificate Information\n";
    print_r($cert_info);
} else {
    echo "Error: Unable to read the cert store.\n";
    exit;
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-pkcs12-read.php
