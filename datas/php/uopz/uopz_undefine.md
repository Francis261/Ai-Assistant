# uopz_undefine

Source: https://devdocs.io/php/function.uopz-undefine

(PECL uopz 1, PECL uopz 2, PECL uopz 5, PECL uopz 6, PECL uopz 7)

uopz_undefine — Undefine a constant

### Description

```
uopz_undefine(string $constant): bool
```

```
uopz_undefine(string $class, string $constant): bool
```

Removes the constant at runtime

### Parameters

The name of the class containing constant

The name of an existing constant

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 uopz_undefine() example

```
<?php
define("MY", true);

uopz_undefine("MY");

var_dump(defined("MY"));
?>
```

The above example will output:

```
bool(false)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.uopz-undefine.php
