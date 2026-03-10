# pcntl_wstopsig

Source: https://devdocs.io/php/function.pcntl-wstopsig

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

pcntl_wstopsig — Returns the signal which caused the child to stop

### Description

```
pcntl_wstopsig(int $status): int|false
```

Returns the number of the signal which caused the child to stop. This function is only useful if pcntl_wifstopped() returned true.

### Parameters

The status parameter is the status parameter supplied to a successful call to pcntl_waitpid().

### Return Values

Returns the signal number. If the functionality is not supported by the OS, false is returned.

### See Also

- pcntl_waitpid() - Waits on or returns the status of a forked child
- pcntl_wifstopped() - Checks whether the child process is currently stopped

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pcntl-wstopsig.php
