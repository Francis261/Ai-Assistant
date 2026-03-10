# pcntl_signal_get_handler

Source: https://devdocs.io/php/function.pcntl-signal-get-handler

(PHP 7 >= 7.1.0, PHP 8)

pcntl_signal_get_handler — Get the current handler for specified signal

### Description

```
pcntl_signal_get_handler(int $signal): callable|int
```

The pcntl_signal_get_handler() function will get the current handler for the specified signal.

### Parameters

The signal number.

### Return Values

This function may return an integer value that refers to SIG_DFL or SIG_IGN. If a custom handler has been set, that callable is returned.

### Changelog

### Examples

Example #1 pcntl_signal_get_handler() example

```
<?php
var_dump(pcntl_signal_get_handler(SIGUSR1)); // Outputs: int(0)

function pcntl_test($signo) {}
pcntl_signal(SIGUSR1, 'pcntl_test');
var_dump(pcntl_signal_get_handler(SIGUSR1)); // Outputs: string(10) "pcntl_test"

pcntl_signal(SIGUSR1, SIG_DFL);
var_dump(pcntl_signal_get_handler(SIGUSR1)); // Outputs: int(0)

pcntl_signal(SIGUSR1, SIG_IGN);
var_dump(pcntl_signal_get_handler(SIGUSR1)); // Outputs: int(1)
?>
```

### See Also

- pcntl_signal() - Installs a signal handler

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pcntl-signal-get-handler.php
