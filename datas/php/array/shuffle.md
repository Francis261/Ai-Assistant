# shuffle

Source: https://devdocs.io/php/function.shuffle

(PHP 4, PHP 5, PHP 7, PHP 8)

shuffle — Shuffle an array

### Description

```
shuffle(array &$array): true
```

This function shuffles (randomizes the order of the elements in) an array.

This function does not generate cryptographically secure values, and must not be used for cryptographic purposes, or purposes that require returned values to be unguessable.

If cryptographically secure randomness is required, the Random\Randomizer may be used with the Random\Engine\Secure engine. For simple use cases, the random_int() and random_bytes() functions provide a convenient and secure API that is backed by the operating system’s CSPRNG.

### Parameters

The array.

### Return Values

Always returns true.

### Changelog

### Examples

Example #1 shuffle() example

```
<?php
$numbers = range(1, 20);
shuffle($numbers);
foreach ($numbers as $number) {
    echo "$number ";
}
?>
```

### Notes

Note: This function assigns new keys to the elements in array. It will remove any existing keys that may have been assigned, rather than just reordering the keys.

Note:

Resets array's internal pointer to the first element.

### See Also

- Random\Randomizer::shuffleArray() - Get a permutation of an array
- Random\Randomizer::shuffleBytes() - Get a byte-wise permutation of a string
- Random\Randomizer::pickArrayKeys() - Select random array keys
- The comparison of array sorting functions

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.shuffle.php
