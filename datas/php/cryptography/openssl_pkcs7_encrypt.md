# openssl_pkcs7_encrypt

Source: https://devdocs.io/php/function.openssl-pkcs7-encrypt

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

openssl_pkcs7_encrypt — Encrypt an S/MIME message

### Description

```
openssl_pkcs7_encrypt(
 string $input_filename,
 string $output_filename,
 OpenSSLCertificate|array|string $certificate,
 ?array $headers,
 int $flags = 0,
 int $cipher_algo = OPENSSL_CIPHER_AES_128_CBC
): bool
```

openssl_pkcs7_encrypt() takes the contents of the file named input_filename and encrypts them using an RC2 40-bit cipher so that they can only be read by the intended recipients specified by certificate.

### Parameters

Either a lone X.509 certificate, or an array of X.509 certificates.

headers is an array of headers that will be prepended to the data after it has been encrypted.

headers can be either an associative array keyed by header name, or an indexed array, where each element contains a single header line.

flags can be used to specify options that affect the encoding process - see PKCS7 constants.

One of cipher constants.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 openssl_pkcs7_encrypt() example

```
<?php
// the message you want to encrypt and send to your secret agent
// in the field, known as nighthawk.  You have his certificate
// in the file nighthawk.pem
$data = <<<EOD
Nighthawk,

Top secret, for your eyes only!

The enemy is closing in! Meet me at the cafe at 8.30am
to collect your forged passport!

HQ
EOD;

// load key
$key = file_get_contents("nighthawk.pem");

// save message to file
$fp = fopen("msg.txt", "w");
fwrite($fp, $data);
fclose($fp);

// encrypt it
if (openssl_pkcs7_encrypt("msg.txt", "enc.txt", $key,
    array("To" => "nighthawk@example.com", // keyed syntax
          "From: HQ <hq@example.com>", // indexed syntax
          "Subject" => "Eyes only"))) {
    // message encrypted - send it!
    exec(ini_get("sendmail_path") . " < enc.txt");
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-pkcs7-encrypt.php
