# uopz_allow_exit

Source: https://devdocs.io/php/function.uopz-allow-exit

(PECL uopz 5, PECL uopz 6, PECL uopz 7)

uopz_allow_exit — Allows control over disabled exit opcode

### Description

```
uopz_allow_exit(bool $allow): void
```

By default uopz disables the exit opcode, so exit() calls are practically ignored. uopz_allow_exit() allows to control this behavior.

### Parameters

Whether to allow the execution of exit opcodes or not.

### Return Values

No value is returned.

### Examples

Example #1 uopz_allow_exit() example

```
<?php
exit(1);
echo 1;
uopz_allow_exit(true);
exit(2);
echo 2;
?>
```

The above example will output:

```
1
```

### Notes

OPcache optimizes away dead code after unconditional exit.

### See Also

- uopz_get_exit_status() - Retrieve the last set exit status

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.uopz-allow-exit.php
