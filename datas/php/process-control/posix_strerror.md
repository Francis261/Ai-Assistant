# posix_strerror

Source: https://devdocs.io/php/function.posix-strerror

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

posix_strerror — Retrieve the system error message associated with the given errno

### Description

```
posix_strerror(int $error_code): string
```

Returns the POSIX system error message associated with the given error_code. You may get the error_code parameter by calling posix_get_last_error().

### Parameters

A POSIX error number, returned by posix_get_last_error(). If set to 0, then the string "Success" is returned.

### Return Values

Returns the error message, as a string.

### Examples

Example #1 posix_strerror() example

This example will attempt to kill a process which does not exist, then will print out the corresponding error message.

```
<?php
posix_kill(50,SIGKILL);
echo posix_strerror(posix_get_last_error())."\n";
?>
```

The above example will output something similar to:

```
No such process
```

### See Also

- posix_get_last_error() - Retrieve the error number set by the last posix function that failed

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-strerror.php
