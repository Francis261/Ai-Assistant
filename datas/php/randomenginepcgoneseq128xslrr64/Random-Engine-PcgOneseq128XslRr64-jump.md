# Random\Engine\PcgOneseq128XslRr64::jump

Source: https://devdocs.io/php/random-engine-pcgoneseq128xslrr64.jump

(PHP 8 >= 8.2.0)

Random\Engine\PcgOneseq128XslRr64::jump — Efficiently move the engine ahead multiple steps

### Description

```
public Random\Engine\PcgOneseq128XslRr64::jump(int $advance): void
```

Moves the algorithm’s state ahead by the number of steps given by advance, as if Random\Engine\PcgOneseq128XslRr64::generate() was called that many times.

### Parameters

The number of steps to move ahead; must be 0 or greater.

### Return Values

No value is returned.

### Errors/Exceptions

- If advance is less than 0, a ValueError will be thrown.

### Examples

Example #1 Random\Engine\PcgOneseq128XslRr64::jump() example

```
<?php
$a = new \Random\Engine\PcgOneseq128XslRr64(0);
$b = clone $a;

for ($i = 0; $i < 1_000; $i++) {
    $a->generate();
}
$b->jump(1_000);

echo "A: ", bin2hex($a->generate()), "\n";
echo "B: ", bin2hex($b->generate()), "\n";
?>
```

The above example will output:

```
A: e6d0d5813913a424
B: e6d0d5813913a424
```

Example #2 Randomizer methods may call the engine more than once

```
<?php
$a = new \Random\Randomizer(new \Random\Engine\PcgOneseq128XslRr64(42659));
$b = new \Random\Randomizer(clone $a->engine);

$a->getInt(1, 1572864); // Performs two calls to generate().
$a->getInt(1, 1572864);

$b->engine->jump(2);

// Because the first call to ->getInt() called ->generate() twice
// the engines do not match up after performing a ->jump(2).
echo "A: ", bin2hex($a->engine->generate()), "\n";
echo "B: ", bin2hex($b->engine->generate()), "\n";

// Now the B engine matches the A engine.
echo "B: ", bin2hex($b->engine->generate()), "\n";
?>
```

The above example will output:

```
A: 1e9f3107d56653d0
B: a156c0086dd79d44
B: 1e9f3107d56653d0
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/random-engine-pcgoneseq128xslrr64.jump.php
