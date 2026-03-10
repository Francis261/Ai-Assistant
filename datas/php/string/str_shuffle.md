# str_shuffle

Source: https://devdocs.io/php/function.str-shuffle

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

str_shuffle — Randomly shuffles a string

### Description

```
str_shuffle(string $string): string
```

str_shuffle() shuffles a string. One permutation of all possible is created.

This function does not generate cryptographically secure values, and must not be used for cryptographic purposes, or purposes that require returned values to be unguessable.

If cryptographically secure randomness is required, the Random\Randomizer may be used with the Random\Engine\Secure engine. For simple use cases, the random_int() and random_bytes() functions provide a convenient and secure API that is backed by the operating system’s CSPRNG.

### Parameters

The input string.

### Return Values

Returns the shuffled string.

### Changelog

### Examples

Example #1 str_shuffle() example

```
<?php
$str = 'abcdef';
$shuffled = str_shuffle($str);

// This will echo something like: bfdaec
echo $shuffled;
?>
```

### See Also

- Random\Randomizer::shuffleBytes() - Get a byte-wise permutation of a string
- Random\Randomizer::shuffleArray() - Get a permutation of an array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.str-shuffle.php
