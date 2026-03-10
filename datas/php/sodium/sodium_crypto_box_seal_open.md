# sodium_crypto_box_seal_open

Source: https://devdocs.io/php/function.sodium-crypto-box-seal-open

(PHP 7 >= 7.2.0, PHP 8)

sodium_crypto_box_seal_open — Anonymous public-key decryption

### Description

```
sodium_crypto_box_seal_open(string $ciphertext, #[\SensitiveParameter] string $key_pair): string|false
```

Decrypt a message that was encrypted with sodium_crypto_box_seal()

### Parameters

The encrypted message

The keypair of the recipient. Must include the secret key.

### Return Values

The plaintext on success, or false on failure.

### Examples

Example #1 sodium_crypto_box_seal_open() example

```
<?php
// Ciphertext is not sensitive; base64_decode is fine
$sealed_b64 = "oRBXXAV4iQBrxlV4A21Bord8Yo/D8ZlrIIGNyaRCcGBfpz0map52I3xq6l+CST+1NSgQkbV+HiYyFjXWiWiaCGupGf+zl4bgWj/A9Adtem7Jt3h3emrMsLw=";
$sealed = base64_decode($sealed_b64);

// Keypair contains a cryptographic secret; use a timing-safe decoder
$keypair_b64 = "KZkF8wnB7bnC2aXB3lFOqCTc0Z6MllvaQb9ASVG8o2/MsewkuE4u1uaEgTzSakeiYyIW8DGj+02/L3cWIbs9bQ==";
$keypair = sodium_base642bin($keypair_b64, SODIUM_BASE64_VARIANT_ORIGINAL);

$opened = sodium_crypto_box_seal_open($sealed, $keypair);
var_dump($opened);
?>
```

The above example will output something similar to:

```
string(41) "Writing software in PHP can be a delight!"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-box-seal-open.php
