# srand

Source: https://devdocs.io/php/function.srand

(PHP 4, PHP 5, PHP 7, PHP 8)

srand — Seed the random number generator

### Description

```
srand(?int $seed = null, int $mode = MT_RAND_MT19937): void
```

Seeds the random number generator with seed or with a random value if no seed is given.

Note: There is no need to seed the random number generator with srand() or mt_srand() as this is done automatically.

Because the Mt19937 (“Mersenne Twister”) engine accepts only a single 32 bit integer as the seed, the number of possible random sequences is limited to just 232 (i.e. 4,294,967,296), despite Mt19937’s huge period of 219937-1.

When relying on either implicit or explicit random seeding, duplications will appear much earlier. Duplicated seeds are expected with 50% probability after less than 80,000 randomly generated seeds according to the birthday problem. A 10% probability of a duplicated seed happens after randomly generating roughly 30,000 seeds.

This makes Mt19937 unsuitable for applications where duplicated sequences must not happen with more than a negligible probability. If reproducible seeding is required, both the Random\Engine\Xoshiro256StarStar and Random\Engine\PcgOneseq128XslRr64 engines support much larger seeds that are unlikely to collide randomly. If reproducibility is not required, the Random\Engine\Secure engine provides cryptographically secure randomness.

Note: As of PHP 7.1.0, srand() has been made an alias of mt_srand().

### Parameters

Fills the state with values generated with a linear congruential generator that was seeded with seed interpreted as an unsigned 32 bit integer.

If seed is omitted or null, a random unsigned 32-bit integer will be used.

### Return Values

No value is returned.

### Changelog

### See Also

- rand() - Generate a random integer
- getrandmax() - Show largest possible random value
- mt_srand() - Seeds the Mersenne Twister Random Number Generator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.srand.php
