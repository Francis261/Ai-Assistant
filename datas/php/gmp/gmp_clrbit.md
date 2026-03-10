# gmp_clrbit

Source: https://devdocs.io/php/function.gmp-clrbit

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_clrbit — Clear bit

### Description

```
gmp_clrbit(GMP $num, int $index): void
```

Clears (sets to 0) bit index in num. The index starts at 0.

### Parameters

A GMP object.

The index of the bit to clear. Index 0 represents the least significant bit.

### Return Values

No value is returned.

### Examples

Example #1 gmp_clrbit() example

```
<?php
$a = gmp_init("0xff");
gmp_clrbit($a, 0); // index starts at 0, least significant bit
echo gmp_strval($a) . "\n";
?>
```

The above example will output:

```
254
```

### Notes

Note:

Unlike most of the other GMP functions, gmp_clrbit() must be called with a GMP object that already exists (using gmp_init() for example). One will not be automatically created.

### See Also

- gmp_setbit() - Set bit
- gmp_testbit() - Tests if a bit is set

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-clrbit.php
