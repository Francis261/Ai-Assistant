# gmp_prob_prime

Source: https://devdocs.io/php/function.gmp-prob-prime

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_prob_prime — Check if number is "probably prime"

### Description

```
gmp_prob_prime(GMP|int|string $num, int $repetitions = 10): int
```

The function uses Miller-Rabin's probabilistic test to check if a number is a prime.

### Parameters

The number being checked as a prime.

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

Reasonable values of repetitions vary from 5 to 10 (default being 10); a higher value lowers the probability for a non-prime to pass as a "probable" prime.

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

### Return Values

If this function returns 0, num is definitely not prime. If it returns 1, then num is "probably" prime. If it returns 2, then num is surely prime.

### Examples

Example #1 gmp_prob_prime() example

```
<?php
// definitely not a prime
echo gmp_prob_prime("6") . "\n";

// probably a prime
echo gmp_prob_prime("1111111111111111111") . "\n";

// definitely a prime
echo gmp_prob_prime("11") . "\n";
?>
```

The above example will output:

```
0
1
2
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-prob-prime.php
