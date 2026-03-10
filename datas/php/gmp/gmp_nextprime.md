# gmp_nextprime

Source: https://devdocs.io/php/function.gmp-nextprime

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

gmp_nextprime — Find next prime number

### Description

```
gmp_nextprime(GMP|int|string $num): GMP
```

Find next prime number

### Parameters

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

### Return Values

Return the next prime number greater than num, as a GMP number.

### Examples

Example #1 gmp_nextprime() example

```
<?php
$prime1 = gmp_nextprime(10); // next prime number greater than 10
$prime2 = gmp_nextprime(-1000); // next prime number greater than -1000

echo gmp_strval($prime1) . "\n";
echo gmp_strval($prime2) . "\n";
?>
```

The above example will output:

```
11
2
```

### Notes

Note:

This function uses a probabilistic algorithm to identify primes and chances to get a composite number are extremely small.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-nextprime.php
