# Random\Engine\Mt19937::__construct

Source: https://devdocs.io/php/random-engine-mt19937.construct

(PHP 8 >= 8.2.0)

Random\Engine\Mt19937::__construct — Constructs a new Mt19937 engine

### Description

Because the Mt19937 (“Mersenne Twister”) engine accepts only a single 32 bit integer as the seed, the number of possible random sequences is limited to just 232 (i.e. 4,294,967,296), despite Mt19937’s huge period of 219937-1.

When relying on either implicit or explicit random seeding, duplications will appear much earlier. Duplicated seeds are expected with 50% probability after less than 80,000 randomly generated seeds according to the birthday problem. A 10% probability of a duplicated seed happens after randomly generating roughly 30,000 seeds.

This makes Mt19937 unsuitable for applications where duplicated sequences must not happen with more than a negligible probability. If reproducible seeding is required, both the Random\Engine\Xoshiro256StarStar and Random\Engine\PcgOneseq128XslRr64 engines support much larger seeds that are unlikely to collide randomly. If reproducibility is not required, the Random\Engine\Secure engine provides cryptographically secure randomness.

### Parameters

Fills the state with values generated with a linear congruential generator that was seeded with seed interpreted as an unsigned 32 bit integer.

If seed is omitted or null, a random unsigned 32 bit integer will be used.

Use one of the following constants to specify the implementation of the algorithm to use.

- MT_RAND_MT19937: The correct Mt19937 implementation.
- MT_RAND_PHP: An incorrect implementation for backwards compatibility with mt_srand() prior to PHP 7.1.0.

This feature has been DEPRECATED as of PHP 8.3.0. Relying on this feature is highly discouraged.

### Examples

Example #1 Random\Engine\Mt19937::__construct() example

```
<?php
// Uses a random 32 Bit seed.
$e = new \Random\Engine\Mt19937();

$r = new \Random\Randomizer($e);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/random-engine-mt19937.construct.php
