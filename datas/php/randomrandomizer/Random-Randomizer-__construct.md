# Random\Randomizer::__construct

Source: https://devdocs.io/php/random-randomizer.construct

(PHP 8 >= 8.2.0)

Random\Randomizer::__construct — Constructs a new Randomizer

### Description

This function is currently not documented; only its argument list is available.

### Parameters

The Random\Engine to use to generate randomness.

If engine is omitted or null, a new Random\Engine\Secure object will be used.

### Examples

Example #1 Random\Randomizer::__construct() example

```
<?php
$r = new \Random\Randomizer();
$r = new \Random\Randomizer(new \Random\Engine\Mt19937());
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/random-randomizer.construct.php
