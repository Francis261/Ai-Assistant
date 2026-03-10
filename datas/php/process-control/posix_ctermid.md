# posix_ctermid

Source: https://devdocs.io/php/function.posix-ctermid

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_ctermid — Get path name of controlling terminal

### Description

```
posix_ctermid(): string|false
```

Generates a string which is the pathname for the current controlling terminal for the process. On error this will set errno, which can be checked using posix_get_last_error()

### Parameters

This function has no parameters.

### Return Values

Upon successful completion, returns string of the pathname to the current controlling terminal. Otherwise false is returned and errno is set, which can be checked with posix_get_last_error().

### Examples

Example #1 posix_ctermid() example

This example will display the path to the current TTY.

```
<?php
echo "I am running from ".posix_ctermid();
?>
```

### See Also

- posix_ttyname() - Determine terminal device name
- posix_get_last_error() - Retrieve the error number set by the last posix function that failed

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-ctermid.php
