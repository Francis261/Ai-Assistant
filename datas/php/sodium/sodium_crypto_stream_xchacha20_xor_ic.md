# sodium_crypto_stream_xchacha20_xor_ic

Source: https://devdocs.io/php/function.sodium-crypto-stream-xchacha20-xor-ic

(PHP 8 >= 8.2.0)

sodium_crypto_stream_xchacha20_xor_ic — Encrypts a message using a nonce and a secret key (no authentication)

### Description

```
sodium_crypto_stream_xchacha20_xor_ic(
 #[\SensitiveParameter] string $message,
 string $nonce,
 int $counter,
 #[\SensitiveParameter] string $key
): string
```

The function is similar to sodium_crypto_stream_xchacha20_xor() but adds the ability to set the initial value of the block counter to a non-zero value. This permits direct access to any block without having to compute the previous ones.

This encryption is unauthenticated, and does not prevent chosen-ciphertext attacks. Make sure to combine the ciphertext with a Message Authentication Code, for example with sodium_crypto_aead_xchacha20poly1305_ietf_encrypt() function, or sodium_crypto_auth().

### Parameters

The message to encrypt.

24-byte nonce.

The initial value of the block counter.

Key, possibly generated from sodium_crypto_stream_xchacha20_keygen().

### Return Values

Encrypted message, or false on failure.

### Examples

Example #1 sodium_crypto_stream_xchacha20_xor_ic() example

```
<?php
$n2 = random_bytes(SODIUM_CRYPTO_STREAM_XCHACHA20_NONCEBYTES);
$left  = str_repeat("\x01", 64);
$right = str_repeat("\xfe", 64);

// All at once:
$stream7_unified = sodium_crypto_stream_xchacha20_xor($left . $right, $n2, $key);

// Piecewise, with initial counter:
$stream7_left  = sodium_crypto_stream_xchacha20_xor_ic($left, $n2, 0, $key);
$stream7_right = sodium_crypto_stream_xchacha20_xor_ic($right, $n2, 1, $key);
$stream7_concat = $stream7_left . $stream7_right;

var_dump(strlen($stream7_concat));
var_dump($stream7_unified === $stream7_concat);
?>
```

The above example will output something similar to:

```
int(128)
bool(true)
```

### See Also

- sodium_crypto_stream_xchacha20_xor() - Encrypts a message using a nonce and a secret key (no authentication)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-stream-xchacha20-xor-ic.php
