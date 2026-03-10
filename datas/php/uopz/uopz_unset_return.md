# uopz_unset_return

Source: https://devdocs.io/php/function.uopz-unset-return

(PECL uopz 5, PECL uopz 6, PECL uopz 7)

uopz_unset_return — Unsets a previously set return value for a function

### Description

```
uopz_unset_return(string $function): bool
```

```
uopz_unset_return(string $class, string $function): bool
```

Unsets the return value of the function previously set by uopz_set_return().

### Parameters

The name of the class containing the function

The name of the function

### Return Values

True on success

### Examples

Example #1 uopz_unset_return() example

```
<?php
uopz_set_return("strlen", 42);
$len = strlen("Banana");
uopz_unset_return("strlen");
echo $len + strlen("Banana");
?>
```

The above example will output:

```
48
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.uopz-unset-return.php
