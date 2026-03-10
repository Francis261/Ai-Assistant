# pcntl_wifsignaled

Source: https://devdocs.io/php/function.pcntl-wifsignaled

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

pcntl_wifsignaled — Checks whether the status code represents a termination due to a signal

### Description

```
pcntl_wifsignaled(int $status): bool
```

Checks whether the child process exited because of a signal which was not caught.

### Parameters

The status parameter is the status parameter supplied to a successful call to pcntl_waitpid().

### Return Values

Returns true if the child process exited because of a signal which was not caught, false otherwise.

### See Also

- pcntl_waitpid() - Waits on or returns the status of a forked child
- pcntl_signal() - Installs a signal handler

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pcntl-wifsignaled.php
