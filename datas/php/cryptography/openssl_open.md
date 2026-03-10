# openssl_open

Source: https://devdocs.io/php/function.openssl-open

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

openssl_open — Open sealed data

### Description

```
openssl_open(
 string $data,
 #[\SensitiveParameter] string &$output,
 string $encrypted_key,
 #[\SensitiveParameter] OpenSSLAsymmetricKey|OpenSSLCertificate|array|string $private_key,
 string $cipher_algo,
 ?string $iv = null
): bool
```

openssl_open() opens (decrypts) data using an envelope key that is decrypted from encrypted_key using private_key. The decryption is done using cipher_algo and iv. The IV is required only if the cipher method requires it. The function fills output with the decrypted data. The envelope key is usually generated when the data are sealed using a public key that is associated with the private key. See openssl_seal() for more information.

### Parameters

The sealed data.

If the call is successful the opened data is returned in this parameter.

The encrypted symmetric key that can be decrypted using private_key.

The private key used for decrypting encrypted_key.

The cipher method used for decryption of data.

The default value for PHP versions prior to 8.0 is ('RC4') which is considered insecure. It is strongly recommended to explicitly specify a secure cipher method.

The initialization vector used for decryption of data. It is required if the cipher method requires IV. This can be found out by calling openssl_cipher_iv_length() with cipher_algo.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 openssl_open() example

```
<?php

// $sealed, $env_key and $iv are assumed to contain the sealed data, our
// envelope key and IV. All given to us by the sealer.

// Fetch private key from file located in private_key.pem
$pkey = openssl_get_privatekey("file://private_key.pem");

// Decrypt the data and store it in $open
if (openssl_open($sealed, $open, $env_key, $pkey, 'AES256', $iv)) {
    echo "Here is the opened data: ", $open;
} else {
    echo "Failed to open data";
}

?>
```

### See Also

- openssl_seal() - Seal (encrypt) data

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-open.php
