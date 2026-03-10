# uopz_get_exit_status

Source: https://devdocs.io/php/function.uopz-get-exit-status

(PECL uopz 5, PECL uopz , PECL uopz 7)

uopz_get_exit_status — Retrieve the last set exit status

### Description

```
uopz_get_exit_status(): mixed
```

Retrieves the last set exit status, i.e. the value passed to exit().

### Parameters

This function has no parameters.

### Return Values

This function returns the last exit status, or null if exit() has not been called.

### Examples

Example #1 uopz_get_exit_status() example

```
<?php
exit(123); 
echo uopz_get_exit_status();?>
```

The above example will output:

```
123
```

### Notes

OPcache optimizes away dead code after unconditional exit.

### See Also

- uopz_allow_exit() - Allows control over disabled exit opcode

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.uopz-get-exit-status.php
