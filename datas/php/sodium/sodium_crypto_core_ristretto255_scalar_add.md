# sodium_crypto_core_ristretto255_scalar_add

Source: https://devdocs.io/php/function.sodium-crypto-core-ristretto255-scalar-add

(PHP 8 >= 8.1.0)

sodium_crypto_core_ristretto255_scalar_add — Adds a scalar value

### Description

```
sodium_crypto_core_ristretto255_scalar_add(string $x, string $y): string
```

Adds an element y to x. Available as of libsodium 1.0.18.

This function is currently not documented; only its argument list is available.

### Parameters

Scalar, representing the X coordinate.

Scalar, representing the Y coordinate.

### Return Values

Returns a 32-byte random string.

### Examples

Example #1 sodium_crypto_core_ristretto255_scalar_add() example

```
<?php

$foo = sodium_crypto_core_ristretto255_scalar_random();
$bar = sodium_crypto_core_ristretto255_scalar_random();

$value = sodium_crypto_core_ristretto255_scalar_add($foo, $bar);
$value = sodium_crypto_core_ristretto255_scalar_sub($value, $bar);

var_dump(hash_equals($foo, $value));
?>
```

The above example will output:

```
bool(true)
```

### See Also

- sodium_crypto_core_ristretto255_scalar_random() - Generates a random key
- sodium_crypto_core_ristretto255_scalar_sub() - Subtracts a scalar value

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-core-ristretto255-scalar-add.php
