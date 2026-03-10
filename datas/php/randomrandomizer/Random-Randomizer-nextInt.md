# Random\Randomizer::nextInt

Source: https://devdocs.io/php/random-randomizer.nextint

(PHP 8 >= 8.2.0)

Random\Randomizer::nextInt — Get a positive integer

### Description

```
public Random\Randomizer::nextInt(): int
```

### Parameters

This function has no parameters.

### Return Values

A positive integer between 0 and a maximum value depending on the number of bytes returned from Random\Engine::generate(). The exact maximum can be calculated as 2$engine_bytes * 8 - 1 - 1.

### Errors/Exceptions

- To avoid inconsistencies, 32 bit PHP will throw Random\RandomException if the output size of Random\Engine::generate() exceeds 32 bits, as the selected integer cannot be returned losslessly. This affects the native 64 bit engines Random\Engine\PcgOneseq128XslRr64 and Random\Engine\Xoshiro256StarStar. Any userland engine returning more than 4 bytes of randomness is also affected.
- Any Throwables thrown by the Random\Engine::generate() method of the underlying Random\Randomizer::$engine.

### Examples

Example #1 Random\Randomizer::nextInt() example

```
<?php
$r = new \Random\Randomizer();

// Random "next" integer:
echo $r->nextInt(), "\n";
?>
```

The above example will output something similar to:

```
8041689838856078718
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/random-randomizer.nextint.php
