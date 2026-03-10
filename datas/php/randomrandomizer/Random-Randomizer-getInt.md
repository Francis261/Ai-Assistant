# Random\Randomizer::getInt

Source: https://devdocs.io/php/random-randomizer.getint

(PHP 8 >= 8.2.0)

Random\Randomizer::getInt — Get a uniformly selected integer

### Description

```
public Random\Randomizer::getInt(int $min, int $max): int
```

### Parameters

The lowest value to be returned.

The highest value to be returned.

### Return Values

A uniformly selected integer from the closed interval [min, max]. Both min and max are possible return values.

### Errors/Exceptions

- If max is less than min, a ValueError will be thrown.
- Any Throwables thrown by the Random\Engine::generate() method of the underlying Random\Randomizer::$engine.

### Examples

Example #1 Random\Randomizer::getInt() example

```
<?php
$r = new \Random\Randomizer();

// Random integer in range:
echo $r->getInt(1, 100), "\n";
?>
```

The above example will output something similar to:

```
42
```

### See Also

- random_int() - Get a cryptographically secure, uniformly selected integer
- Random\Randomizer::getFloat() - Get a uniformly selected float

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/random-randomizer.getint.php
