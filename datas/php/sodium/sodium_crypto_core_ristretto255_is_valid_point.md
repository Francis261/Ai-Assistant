# sodium_crypto_core_ristretto255_is_valid_point

Source: https://devdocs.io/php/function.sodium-crypto-core-ristretto255-is-valid-point

(PHP 8 >= 8.1.0)

sodium_crypto_core_ristretto255_is_valid_point — Determines if a point on the ristretto255 curve

### Description

```
sodium_crypto_core_ristretto255_is_valid_point(string $s): bool
```

Determines if a point on the ristretto255 curve, in canonical form, on the main subgroup, and that the point doesn't have a small order. Available as of libsodium 1.0.18.

This function is currently not documented; only its argument list is available.

### Parameters

An Elliptic-curve point.

### Return Values

Returns true if s is on the ristretto255 curve, false otherwise.

### Examples

Example #1 sodium_crypto_core_ristretto255_is_valid_point() example

```
<?php

$foo = sodium_crypto_core_ristretto255_scalar_random();
$bar = sodium_crypto_scalarmult_ristretto255_base($foo);

var_dump(sodium_crypto_core_ristretto255_is_valid_point($bar));
?>
```

The above example will output:

```
bool(true)
```

### See Also

- sodium_crypto_core_ristretto255_scalar_random() - Generates a random key
- sodium_crypto_scalarmult_ristretto255_base() - Calculates the public key from a secret key

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-core-ristretto255-is-valid-point.php
