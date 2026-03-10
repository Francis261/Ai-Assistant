# uopz_get_return

Source: https://devdocs.io/php/function.uopz-get-return

(PECL uopz 5, PECL uopz 6, PECL uopz 7)

uopz_get_return — Gets a previous set return value for a function

### Description

```
uopz_get_return(string $function): mixed
```

```
uopz_get_return(string $class, string $function): mixed
```

Gets the return value of the function previously set by uopz_set_return().

### Parameters

The name of the class containing the function

The name of the function

### Return Values

The return value or Closure previously set.

### Examples

Example #1 uopz_get_return() example

```
<?php
uopz_set_return("strlen", 42);
echo uopz_get_return("strlen");
?>
```

The above example will output:

```
42
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.uopz-get-return.php
