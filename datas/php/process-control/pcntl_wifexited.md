# pcntl_wifexited

Source: https://devdocs.io/php/function.pcntl-wifexited

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

pcntl_wifexited — Checks if status code represents a normal exit

### Description

```
pcntl_wifexited(int $status): bool
```

Checks whether the child status code represents a normal exit.

### Parameters

The status parameter is the status parameter supplied to a successful call to pcntl_waitpid().

### Return Values

Returns true if the child status code represents a normal exit, false otherwise.

### See Also

- pcntl_waitpid() - Waits on or returns the status of a forked child
- pcntl_wexitstatus() - Returns the return code of a terminated child

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pcntl-wifexited.php
