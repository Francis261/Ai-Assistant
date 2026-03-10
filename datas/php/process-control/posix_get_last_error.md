# posix_get_last_error

Source: https://devdocs.io/php/function.posix-get-last-error

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

posix_get_last_error — Retrieve the error number set by the last posix function that failed

### Description

```
posix_get_last_error(): int
```

Retrieve the error number set by the last posix function that failed. The system error message associated with the errno may be checked with posix_strerror().

### Parameters

This function has no parameters.

### Return Values

Returns the errno (error number) set by the last posix function that failed. If no errors exist, 0 is returned.

### Examples

Example #1 posix_get_last_error() example

This example attempt to kill a bogus process id, which will set the last error. We will then print out the last errno.

```
<?php
posix_kill(999459,SIGKILL);
echo 'Your error returned was '.posix_get_last_error(); //Your error was ___
?>
```

### See Also

- posix_strerror() - Retrieve the system error message associated with the given errno

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-get-last-error.php
