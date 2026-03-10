# openssl_pkey_get_details

Source: https://devdocs.io/php/function.openssl-pkey-get-details

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

openssl_pkey_get_details — Returns an array with the key details

### Description

```
openssl_pkey_get_details(OpenSSLAsymmetricKey $key): array|false
```

This function returns the key details (bits, key, type).

### Parameters

Resource holding the key.

### Return Values

Returns an array with the key details on success or false on failure. Returned array has indexes bits (number of bits), key (string representation of the public key) and type (type of the key which is one of OPENSSL_KEYTYPE_RSA, OPENSSL_KEYTYPE_DSA, OPENSSL_KEYTYPE_DH, OPENSSL_KEYTYPE_EC, OPENSSL_KEYTYPE_X25519, OPENSSL_KEYTYPE_ED25519, OPENSSL_KEYTYPE_X448, OPENSSL_KEYTYPE_ED448, or -1 meaning unknown).

Depending on the key type used, additional details may be returned. Note that some elements may not always be available.

- OPENSSL_KEYTYPE_RSA, an additional array key named "rsa", containing the key data is returned. Key Description "n" modulus "e" public exponent "d" private exponent "p" prime 1 "q" prime 2 "dmp1" exponent1, d mod (p-1) "dmq1" exponent2, d mod (q-1) "iqmp" coefficient, (inverse of q) mod p
- OPENSSL_KEYTYPE_DSA, an additional array key named "dsa", containing the key data is returned. Key Description "p" prime number (public) "q" 160-bit subprime, q | p-1 (public) "g" generator of subgroup (public) "priv_key" private key x "pub_key" public key y = g^x
- OPENSSL_KEYTYPE_DH, an additional array key named "dh", containing the key data is returned. Key Description "p" prime number (shared) "g" generator of Z_p (shared) "priv_key" private DH value x "pub_key" public DH value g^x
- OPENSSL_KEYTYPE_X25519, OPENSSL_KEYTYPE_ED25519, OPENSSL_KEYTYPE_X448, or OPENSSL_KEYTYPE_ED448 an additional array key named "x25519", "ed25519", "x448", or "ed448" respectively, is returned, containing the key data. Key Description "priv_key" private key "pub_key" public key

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-pkey-get-details.php
