# Random\Engine\PcgOneseq128XslRr64::__construct

Source: https://devdocs.io/php/random-engine-pcgoneseq128xslrr64.construct

(PHP 8 >= 8.2.0)

Random\Engine\PcgOneseq128XslRr64::__construct — Constructs a new PCG Oneseq 128 XSL RR 64 engine

### Description

### Parameters

How the internal 128 bit (16 byte) state consisting of one unsigned 128 bit integer is seeded depends on the type used as the seed.

### Errors/Exceptions

- If the length of a string seed is not 16 bytes, a ValueError will be thrown.

### Examples

Example #1 Random\Engine\PcgOneseq128XslRr64::__construct() example

```
<?php
// Uses a random 128 Bit seed.
$e = new \Random\Engine\PcgOneseq128XslRr64();

$r = new \Random\Randomizer($e);
?>
```

Example #2 Deriving a seed from a string

```
<?php
$string = "My string seed";

// Hash the string with truncated SHA-256 using binary output
// to turn the $string into a 128 Bit seed. Using the same
// string will result in the same sequence of randomness.
$e = new \Random\Engine\PcgOneseq128XslRr64(
    substr(hash('sha256', $string, binary: true), 0, 16)
);

echo bin2hex($e->generate()), "\n";
?>
```

The above example will output:

```
8333ef59315b16d8
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/random-engine-pcgoneseq128xslrr64.construct.php
