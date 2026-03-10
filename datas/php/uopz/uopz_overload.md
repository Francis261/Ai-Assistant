# uopz_overload

Source: https://devdocs.io/php/function.uopz-overload

(PECL uopz 1, PECL uopz 2)

uopz_overload — Overload a VM opcode

This function has been REMOVED in PECL uopz 5.0.0.

### Description

```
uopz_overload(int $opcode, Callable $callable): void
```

Overloads the specified opcode with the user defined function

### Parameters

A valid opcode, see constants for details of supported codes

### Return Values

### Examples

Example #1 uopz_overload() example

```
<?php
uopz_overload(ZEND_EXIT, function(){});

exit();
echo "Hello World";
?>
```

The above example will output:

```
Hello World
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.uopz-overload.php
