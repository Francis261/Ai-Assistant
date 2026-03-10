# Random\Engine\Xoshiro256StarStar::__construct

Source: https://devdocs.io/php/random-engine-xoshiro256starstar.construct

(PHP 8 >= 8.2.0)

Random\Engine\Xoshiro256StarStar::__construct — Constructs a new xoshiro256** engine

### Description

### Parameters

How the internal 256 bit (32 byte) state consisting of four unsigned 64 bit integers is seeded depends on the type used as the seed.

### Errors/Exceptions

- If the length of a string seed is not 32 bytes, a ValueError will be thrown.
- If a string seed consists of 32 NUL bytes ("\x00"), a ValueError will be thrown.

### Examples

Example #1 Random\Engine\Xoshiro256StarStar::__construct() example

```
<?php
// Uses a random 256 Bit seed.
$e = new \Random\Engine\Xoshiro256StarStar();

$r = new \Random\Randomizer($e);
?>
```

Example #2 Deriving a seed from a string

```
<?php
$string = "My string seed";

// Hash the string with SHA-256 using binary output to turn the
// $string into a 256 Bit seed. Using the same string will result
// in the same sequence of randomness.
$e = new \Random\Engine\Xoshiro256StarStar(
    hash('sha256', $string, binary: true)
);

echo bin2hex($e->generate()), "\n";
?>
```

The above example will output:

```
6e013453678388c2
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/random-engine-xoshiro256starstar.construct.php
