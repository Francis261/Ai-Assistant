# openssl_pkcs7_sign

Source: https://devdocs.io/php/function.openssl-pkcs7-sign

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

openssl_pkcs7_sign — Sign an S/MIME message

### Description

```
openssl_pkcs7_sign(
 string $input_filename,
 string $output_filename,
 OpenSSLCertificate|string $certificate,
 #[\SensitiveParameter] OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key,
 ?array $headers,
 int $flags = PKCS7_DETACHED,
 ?string $untrusted_certificates_filename = null
): bool
```

openssl_pkcs7_sign() takes the contents of the file named input_filename and signs them using the certificate and its matching private key specified by certificate and private_key parameters.

### Parameters

The input file you are intending to digitally sign.

The file which the digital signature will be written to.

The X.509 certificate used to digitally sign input_filename. See Key/Certificate parameters for a list of valid values.

private_key is the private key corresponding to certificate. See Public/Private Key parameters for a list of valid values.

headers is an array of headers that will be prepended to the data after it has been signed (see openssl_pkcs7_encrypt() for more information about the format of this parameter).

flags can be used to alter the output - see PKCS7 constants.

untrusted_certificates_filename specifies the name of a file containing a bunch of extra certificates to include in the signature which can for example be used to help the recipient to verify the certificate that you used.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 openssl_pkcs7_sign() example

```
<?php
// the message you want to sign so that recipient can be sure it was you that
// sent it
$data = <<<EOD

You have my authorization to spend $10,000 on dinner expenses.

The CEO
EOD;
// save message to file
$fp = fopen("msg.txt", "w");
fwrite($fp, $data);
fclose($fp);
// encrypt it
if (openssl_pkcs7_sign("msg.txt", "signed.txt", "file://mycert.pem",
    array("file://mycert.pem", "mypassphrase"),
    array("To" => "joes@example.com", // keyed syntax
          "From: HQ <ceo@example.com>", // indexed syntax
          "Subject" => "Eyes only")
    )) {
    // message signed - send it!
    exec(ini_get("sendmail_path") . " < signed.txt");
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-pkcs7-sign.php
