# gmp_random_seed

Source: https://devdocs.io/php/function.gmp-random-seed

(PHP 7, PHP 8)

gmp_random_seed — Sets the RNG seed

### Description

```
gmp_random_seed(GMP|int|string $seed): void
```

### Parameters

The seed to be set for the gmp_random(), gmp_random_bits(), and gmp_random_range() functions.

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

### Return Values

No value is returned.

### Errors/Exceptions

Throws a ValueError if seed is invalid.

### Changelog

### Examples

Example #1 gmp_random_seed() example

```
<?php
// set the seed
gmp_random_seed(100);

var_dump(gmp_strval(gmp_random(1)));

// set the seed to something else
gmp_random_seed(gmp_init(-100));

var_dump(gmp_strval(gmp_random_bits(10)));

// set the seed to something invalid
var_dump(gmp_random_seed('not a number'));
```

The above example will output:

```
string(20) "15370156633245019617"
string(3) "683"

Warning: gmp_random_seed(): Unable to convert variable to GMP - string is not an integer in %s on line %d
bool(false)
```

### See Also

- gmp_init() - Create GMP number
- gmp_random() - Random number
- gmp_random_bits() - Random number
- gmp_random_range() - Get a uniformly selected integer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-random-seed.php
