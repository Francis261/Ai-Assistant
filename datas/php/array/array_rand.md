# array_rand

Source: https://devdocs.io/php/function.array-rand

(PHP 4, PHP 5, PHP 7, PHP 8)

array_rand — Pick one or more random keys out of an array

### Description

```
array_rand(array $array, int $num = 1): int|string|array
```

Picks one or more random entries out of an array, and returns the key (or keys) of the random entries.

This function does not generate cryptographically secure values, and must not be used for cryptographic purposes, or purposes that require returned values to be unguessable.

If cryptographically secure randomness is required, the Random\Randomizer may be used with the Random\Engine\Secure engine. For simple use cases, the random_int() and random_bytes() functions provide a convenient and secure API that is backed by the operating system’s CSPRNG.

### Parameters

The input array. Cannot be empty.

Specifies how many entries should be picked. Must be greater than zero, and less than or equal to the length of array

### Return Values

When picking only one entry, array_rand() returns the key for a random entry. Otherwise, an array of keys for the random entries is returned. This is done so that random keys can be picked from the array as well as random values. If multiple keys are returned, they will be returned in the order they were present in the original array.

### Errors/Exceptions

Throws a ValueError if array is empty, or if num is out of range.

### Changelog

### Examples

Example #1 array_rand() example

```
<?php
$input = array("Neo", "Morpheus", "Trinity", "Cypher", "Tank");
$rand_keys = array_rand($input, 2);
echo $input[$rand_keys[0]] . "\n";
echo $input[$rand_keys[1]] . "\n";
?>
```

### See Also

- Random\Randomizer::pickArrayKeys() - Select random array keys
- Random\Randomizer::shuffleArray() - Get a permutation of an array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.array-rand.php
