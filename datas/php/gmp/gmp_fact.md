# gmp_fact

Source: https://devdocs.io/php/function.gmp-fact

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_fact — Factorial

### Description

```
gmp_fact(GMP|int|string $num): GMP
```

Calculates factorial (num!) of num.

### Parameters

The factorial number.

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

### Return Values

A GMP object.

### Examples

Example #1 gmp_fact() example

```
<?php
$fact1 = gmp_fact(5); // 5 * 4 * 3 * 2 * 1
echo gmp_strval($fact1) . "\n";

$fact2 = gmp_fact(50); // 50 * 49 * 48, ... etc
echo gmp_strval($fact2) . "\n";
?>
```

The above example will output:

```
120
30414093201713378043612608166064768844377641568960512000000000000
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-fact.php
