# pcntl_wtermsig

Source: https://devdocs.io/php/function.pcntl-wtermsig

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

pcntl_wtermsig — Returns the signal which caused the child to terminate

### Description

```
pcntl_wtermsig(int $status): int|false
```

Returns the number of the signal that caused the child process to terminate. This function is only useful if pcntl_wifsignaled() returned true.

### Parameters

The status parameter is the status parameter supplied to a successful call to pcntl_waitpid().

### Return Values

Returns the signal number. If the functionality is not supported by the OS, false is returned.

### See Also

- pcntl_waitpid() - Waits on or returns the status of a forked child
- pcntl_signal() - Installs a signal handler
- pcntl_wifsignaled() - Checks whether the status code represents a termination due to a signal

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pcntl-wtermsig.php
