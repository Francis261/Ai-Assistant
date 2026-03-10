# openssl_sign

Source: https://devdocs.io/php/function.openssl-sign

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

openssl_sign — Generate signature

### Description

```
openssl_sign(
 string $data,
 string &$signature,
 #[\SensitiveParameter] OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key,
 string|int $algorithm = OPENSSL_ALGO_SHA1
): bool
```

openssl_sign() computes a signature for the specified data by generating a cryptographic digital signature using the private key associated with private_key. Note that the data itself is not encrypted.

### Parameters

The string of data you wish to sign

If the call was successful the signature is returned in signature.

OpenSSLAsymmetricKey - a key, returned by openssl_get_privatekey()

string - a PEM formatted key

int - one of these Signature Algorithms.

string - a valid string returned by openssl_get_md_methods() example, "sha256WithRSAEncryption" or "sha384".

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 openssl_sign() example

```
<?php
// $data is assumed to contain the data to be signed

// fetch private key from file and ready it
$pkeyid = openssl_pkey_get_private("file://src/openssl-0.9.6/demos/sign/key.pem");

// compute signature
openssl_sign($data, $signature, $pkeyid);

// free the key from memory
openssl_free_key($pkeyid);
?>
```

Example #2 openssl_sign() example

```
<?php
//data you want to sign
$data = 'my data';

//create new private and public key
$new_key_pair = openssl_pkey_new(array(
    "private_key_bits" => 2048,
    "private_key_type" => OPENSSL_KEYTYPE_RSA,
));
openssl_pkey_export($new_key_pair, $private_key_pem);

$details = openssl_pkey_get_details($new_key_pair);
$public_key_pem = $details['key'];

//create signature
openssl_sign($data, $signature, $private_key_pem, OPENSSL_ALGO_SHA256);

//save for later
file_put_contents('private_key.pem', $private_key_pem);
file_put_contents('public_key.pem', $public_key_pem);
file_put_contents('signature.dat', $signature);

//verify signature
$r = openssl_verify($data, $signature, $public_key_pem, "sha256WithRSAEncryption");
var_dump($r);
?>
```

### See Also

- openssl_verify() - Verify signature

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-sign.php
