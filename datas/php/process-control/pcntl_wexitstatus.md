# pcntl_wexitstatus

Source: https://devdocs.io/php/function.pcntl-wexitstatus

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

pcntl_wexitstatus — Returns the return code of a terminated child

### Description

```
pcntl_wexitstatus(int $status): int|false
```

Returns the return code of a terminated child. This function is only useful if pcntl_wifexited() returned true.

### Parameters

The status parameter is the status parameter supplied to a successful call to pcntl_waitpid().

### Return Values

Returns the return code. If the functionality is not supported by the OS, false is returned.

### See Also

- pcntl_waitpid() - Waits on or returns the status of a forked child
- pcntl_wifexited() - Checks if status code represents a normal exit

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pcntl-wexitstatus.php
