# Random\Randomizer::shuffleArray

Source: https://devdocs.io/php/random-randomizer.shufflearray

(PHP 8 >= 8.2.0)

Random\Randomizer::shuffleArray — Get a permutation of an array

### Description

```
public Random\Randomizer::shuffleArray(array $array): array
```

Returns a uniformly selected permutation of the input array.

Each possible permutation of the input array is equally likely to be returned.

### Parameters

The array whose values are shuffled.

The input array will not be modified.

### Return Values

A permutation of the values of array.

Array keys of the input array will not be preserved; the returned array will be a list (array_is_list()).

### Errors/Exceptions

- Any Throwables thrown by the Random\Engine::generate() method of the underlying Random\Randomizer::$engine.

### Examples

Example #1 Random\Randomizer::shuffleArray() example

```
<?php
$r = new \Random\Randomizer();

$fruits = [ 'red' => '🍎', 'green' => '🥝', 'yellow' => '🍌', 'pink' => '🍑', 'purple' => '🍇' ];

// Shuffle array:
echo "Salad: ", implode(', ', $r->shuffleArray($fruits)), "\n";

// Shuffle again:
echo "Another Salad: ", implode(', ', $r->shuffleArray($fruits)), "\n";
?>
```

The above example will output something similar to:

```
Salad: 🍎, 🥝, 🍇, 🍌, 🍑
Another Salad: 🍑, 🍇, 🥝, 🍎, 🍌
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/random-randomizer.shufflearray.php
