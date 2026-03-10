# sodium_crypto_core_ristretto255_random

Source: https://devdocs.io/php/function.sodium-crypto-core-ristretto255-random

(PHP 8 >= 8.1.0)

sodium_crypto_core_ristretto255_random — Generates a random key

### Description

```
sodium_crypto_core_ristretto255_random(): string
```

Generates a random key. Available as of libsodium 1.0.18.

This function is currently not documented; only its argument list is available.

### Parameters

This function has no parameters.

### Return Values

Returns a 32-byte random string.

### Examples

Example #1 sodium_crypto_core_ristretto255_random() example

```
<?php

$foo = sodium_crypto_core_ristretto255_random();
$bar = sodium_crypto_core_ristretto255_random();

$value = sodium_crypto_core_ristretto255_add($foo, $bar);
$value = sodium_crypto_core_ristretto255_sub($value, $bar);

var_dump(hash_equals($foo, $value));
?>
```

The above example will output:

```
bool(true)
```

### See Also

- sodium_crypto_core_ristretto255_add() - Adds an element
- sodium_crypto_core_ristretto255_sub() - Subtracts an element

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-core-ristretto255-random.php
