# rand

Source: https://devdocs.io/php/function.rand

(PHP 4, PHP 5, PHP 7, PHP 8)

rand — Generate a random integer

### Description

```
rand(): int
```

```
rand(int $min, int $max): int
```

If called without the optional min, max arguments rand() returns a pseudo-random integer between 0 and getrandmax(). If you want a random number between 5 and 15 (inclusive), for example, use rand(5,
 15).

This function does not generate cryptographically secure values, and must not be used for cryptographic purposes, or purposes that require returned values to be unguessable.

If cryptographically secure randomness is required, the Random\Randomizer may be used with the Random\Engine\Secure engine. For simple use cases, the random_int() and random_bytes() functions provide a convenient and secure API that is backed by the operating system’s CSPRNG.

Note: Prior to PHP 7.1.0, getrandmax() was only 32767 on some platforms (such as Windows). If you require a range larger than 32767, specifying min and max will allow you to create a range larger than this, or consider using mt_rand() instead.

Note: As of PHP 7.1.0, rand() uses the same random number generator as mt_rand(). To preserve backwards compatibility rand() allows max to be smaller than min as opposed to returning false as mt_rand().

### Parameters

The lowest value to return (default: 0)

The highest value to return (default: getrandmax())

### Return Values

A pseudo random value between min (or 0) and max (or getrandmax(), inclusive).

### Changelog

### Examples

Example #1 rand() example

```
<?php
echo rand(), "\n";
echo rand(), "\n";

echo rand(5, 15), "\n";
?>
```

The above example will output something similar to:

```
7771
22264
11
```

### Notes

min max range must be within the range getrandmax(). i.e. (max - min) <= getrandmax() Otherwise, rand() may return poor-quality random numbers.

### See Also

- srand() - Seed the random number generator
- getrandmax() - Show largest possible random value
- mt_rand() - Generate a random value via the Mersenne Twister Random Number Generator
- random_int() - Get a cryptographically secure, uniformly selected integer
- random_bytes() - Get cryptographically secure random bytes

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.rand.php
