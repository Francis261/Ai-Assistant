# sodium_crypto_core_ristretto255_scalar_invert

Source: https://devdocs.io/php/function.sodium-crypto-core-ristretto255-scalar-invert

(PHP 8 >= 8.1.0)

sodium_crypto_core_ristretto255_scalar_invert — Inverts a scalar value

### Description

```
sodium_crypto_core_ristretto255_scalar_invert(string $s): string
```

Inverts a scalar value. Available as of libsodium 1.0.18.

This function is currently not documented; only its argument list is available.

### Parameters

Scalar value.

### Return Values

Returns a 32-byte random string.

### Examples

Example #1 sodium_crypto_core_ristretto255_scalar_invert() example

```
<?php

$foo = sodium_crypto_core_ristretto255_scalar_random();

$inverted = sodium_crypto_core_ristretto255_scalar_invert($foo);
$reInverted = sodium_crypto_core_ristretto255_scalar_invert($inverted);

var_dump(hash_equals($foo, $reInverted));
?>
```

The above example will output:

```
bool(true)
```

### See Also

- sodium_crypto_core_ristretto255_scalar_random() - Generates a random key

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-core-ristretto255-scalar-invert.php
