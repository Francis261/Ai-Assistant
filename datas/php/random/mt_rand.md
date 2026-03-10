# mt_rand

Source: https://devdocs.io/php/function.mt-rand

(PHP 4, PHP 5, PHP 7, PHP 8)

mt_rand — Generate a random value via the Mersenne Twister Random Number Generator

### Description

```
mt_rand(): int
```

```
mt_rand(int $min, int $max): int
```

Many random number generators of older libcs have dubious or unknown characteristics and are slow. The mt_rand() function is a drop-in replacement for the older rand(). It uses a random number generator with known characteristics using the » Mersenne Twister, which will produce random numbers four times faster than what the average libc rand() provides.

If called without the optional min, max arguments mt_rand() returns a pseudo-random value between 0 and mt_getrandmax(). If you want a random number between 5 and 15 (inclusive), for example, use mt_rand(5,
 15).

This function does not generate cryptographically secure values, and must not be used for cryptographic purposes, or purposes that require returned values to be unguessable.

If cryptographically secure randomness is required, the Random\Randomizer may be used with the Random\Engine\Secure engine. For simple use cases, the random_int() and random_bytes() functions provide a convenient and secure API that is backed by the operating system’s CSPRNG.

### Parameters

Optional lowest value to be returned (default: 0)

Optional highest value to be returned (default: mt_getrandmax())

### Return Values

A random integer value between min (or 0) and max (or mt_getrandmax(), inclusive).

### Errors/Exceptions

- If max is less than min, a ValueError will be thrown.

### Changelog

### Examples

Example #1 mt_rand() example

```
<?php
echo mt_rand(), "\n";
echo mt_rand(), "\n";

echo mt_rand(5, 15), "\n";
?>
```

The above example will output something similar to:

```
1604716014
1478613278
6
```

### Notes

min max range must be within the range mt_getrandmax(). i.e. (max - min) <= mt_getrandmax() Otherwise, mt_rand() may return poorer random numbers than it should.

### See Also

- mt_srand() - Seeds the Mersenne Twister Random Number Generator
- mt_getrandmax() - Show largest possible random value
- random_int() - Get a cryptographically secure, uniformly selected integer
- random_bytes() - Get cryptographically secure random bytes

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mt-rand.php
