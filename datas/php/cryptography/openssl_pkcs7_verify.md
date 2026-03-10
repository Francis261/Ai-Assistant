# openssl_pkcs7_verify

Source: https://devdocs.io/php/function.openssl-pkcs7-verify

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

openssl_pkcs7_verify — Verifies the signature of an S/MIME signed message

### Description

```
openssl_pkcs7_verify(
 string $input_filename,
 int $flags,
 ?string $signers_certificates_filename = null,
 array $ca_info = [],
 ?string $untrusted_certificates_filename = null,
 ?string $content = null,
 ?string $output_filename = null
): bool|int
```

openssl_pkcs7_verify() reads the S/MIME message contained in the given file and examines the digital signature.

### Parameters

Path to the message.

flags can be used to affect how the signature is verified - see PKCS7 constants for more information.

If the signers_certificates_filename is specified, it should be a string holding the name of a file into which the certificates of the persons that signed the messages will be stored in PEM format.

If the ca_info is specified, it should hold information about the trusted CA certificates to use in the verification process - see certificate verification for more information about this parameter.

If the untrusted_certificates_filename is specified, it is the filename of a file containing a bunch of certificates to use as untrusted CAs.

You can specify a filename with content that will be filled with the verified data, but with the signature information stripped.

### Return Values

Returns true if the signature is verified, false if it is not correct (the message has been tampered with, or the signing certificate is invalid), or -1 on error.

### Changelog

### Notes

Note: As specified in RFC 2045, lines may not be longer than 76 characters in the input_filename parameter.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-pkcs7-verify.php
