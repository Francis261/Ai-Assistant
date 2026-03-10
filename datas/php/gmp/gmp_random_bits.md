# gmp_random_bits

Source: https://devdocs.io/php/function.gmp-random-bits

(PHP 5 >= 5.6.3, PHP 7, PHP 8)

gmp_random_bits — Random number

### Description

```
gmp_random_bits(int $bits): GMP
```

Generate a random number. The number will be between 0 and 2$bits - 1.

bits must greater than 0, and the maximum value is restricted by available memory.

This function does not generate cryptographically secure values, and must not be used for cryptographic purposes, or purposes that require returned values to be unguessable.

If cryptographically secure randomness is required, the Random\Randomizer may be used with the Random\Engine\Secure engine. For simple use cases, the random_int() and random_bytes() functions provide a convenient and secure API that is backed by the operating system’s CSPRNG.

### Parameters

The number of bits to generate.

### Return Values

A random GMP number.

### Errors/Exceptions

If bits is less than 1, a ValueError will be thrown.

### Examples

Example #1 gmp_random_bits() example

```
<?php
$rand1 = gmp_random_bits(3); // random number from 0 to 7
$rand2 = gmp_random_bits(5); // random number from 0 to 31

echo gmp_strval($rand1) . "\n";
echo gmp_strval($rand2) . "\n";
?>
```

The above example will output:

```
3
15
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-random-bits.php
