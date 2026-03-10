# pcntl_wifstopped

Source: https://devdocs.io/php/function.pcntl-wifstopped

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

pcntl_wifstopped — Checks whether the child process is currently stopped

### Description

```
pcntl_wifstopped(int $status): bool
```

Checks whether the child process which caused the return is currently stopped; this is only possible if the call to pcntl_waitpid() was done using the option WUNTRACED.

### Parameters

The status parameter is the status parameter supplied to a successful call to pcntl_waitpid().

### Return Values

Returns true if the child process which caused the return is currently stopped, false otherwise.

### See Also

- pcntl_waitpid() - Waits on or returns the status of a forked child

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pcntl-wifstopped.php
