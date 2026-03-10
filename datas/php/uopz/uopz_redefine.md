# uopz_redefine

Source: https://devdocs.io/php/function.uopz-redefine

(PECL uopz 1, PECL uopz 2, PECL uopz 5, PECL uopz 6, PECL uopz 7)

uopz_redefine — Redefine a constant

### Description

```
uopz_redefine(string $constant, mixed $value): bool
```

```
uopz_redefine(string $class, string $constant, mixed $value): bool
```

Redefines the given constant as value

### Parameters

The name of the class containing the constant

The name of the constant

The new value for the constant, must be a valid type for a constant variable

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 uopz_redefine() example

```
<?php
define("MY", 100);

uopz_redefine("MY", 1000);

echo MY;
?>
```

The above example will output:

```
1000
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.uopz-redefine.php
