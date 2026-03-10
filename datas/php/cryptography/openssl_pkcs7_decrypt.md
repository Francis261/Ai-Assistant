# openssl_pkcs7_decrypt

Source: https://devdocs.io/php/function.openssl-pkcs7-decrypt

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

openssl_pkcs7_decrypt — Decrypts an S/MIME encrypted message

### Description

```
openssl_pkcs7_decrypt(
 string $input_filename,
 string $output_filename,
 #[\SensitiveParameter] OpenSSLCertificate|string $certificate,
 #[\SensitiveParameter] OpenSSLAsymmetricKey|OpenSSLCertificate|array|string|null $private_key = null
): bool
```

Decrypts the S/MIME encrypted message contained in the file specified by input_filename using the certificate and its associated private key specified by certificate and private_key.

### Parameters

The decrypted message is written to the file specified by output_filename.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 openssl_pkcs7_decrypt() example

```
<?php
// $cert and $key are assumed to contain your personal certificate and private
// key pair, and that you are the recipient of an S/MIME message
$infilename = "encrypted.msg";  // this file holds your encrypted message
$outfilename = "decrypted.msg"; // make sure you can write to this file

if (openssl_pkcs7_decrypt($infilename, $outfilename, $cert, $key)) {
    echo "decrypted!";
} else {
    echo "failed to decrypt!";
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-pkcs7-decrypt.php
