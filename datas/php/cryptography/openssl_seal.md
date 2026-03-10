# openssl_seal

Source: https://devdocs.io/php/function.openssl-seal

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

openssl_seal — Seal (encrypt) data

### Description

```
openssl_seal(
 #[\SensitiveParameter] string $data,
 string &$sealed_data,
 array &$encrypted_keys,
 array $public_key,
 string $cipher_algo,
 string &$iv = null
): int|false
```

openssl_seal() seals (encrypts) data using the specified cipher_algo with a randomly generated secret key. The key is then encrypted with each of the public keys in public_key array, and each encrypted envelope key is returned in encrypted_keys. This allows sealed data to be sent to multiple recipients (provided their public keys are available). Each recipient must receive both the sealed data and the envelope key that was encrypted with the recipient's public key. The IV (Initialization Vector) is generated, and its value is returned in iv.

### Parameters

The data to seal.

The sealed data.

Array of encrypted keys.

Array of OpenSSLAsymmetricKey instances containing public keys.

The cipher method.

The default value for PHP versions prior to 8.0 is ('RC4') which is considered insecure. It is strongly recommended to explicitly specify a secure cipher method.

The initialization vector for decryption of data. It is required if the cipher method requires IV. This can be found out by calling openssl_cipher_iv_length() with cipher_algo.

The IV cannot be set explicitly. Any value set in it is overwritten by randomly generated value.

### Return Values

Returns the length of the sealed data on success, or false on error. If successful the sealed data is returned in sealed_data, and the envelope keys in encrypted_keys.

### Changelog

### Examples

Example #1 openssl_seal() example

```
<?php
// $data is assumed to contain the data to be sealed
$data = "test";

// fetch public keys
$pk1 = openssl_get_publickey("file://cert1.pem");
$pk2 = openssl_get_publickey("file://cert2.pem");

// seal message, only owners of $pk1 and $pk2 can decrypt $sealed with keys
// $ekeys[0] and $ekeys[1] respectively.
if (openssl_seal($data, $sealed, $ekeys, array($pk1, $pk2), 'AES256', $iv) > 0) {
    // possibly store the $sealed and $iv values and use later in openssl_open
    echo "success\n";
}
?>
```

### See Also

- openssl_open() - Open sealed data

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-seal.php
