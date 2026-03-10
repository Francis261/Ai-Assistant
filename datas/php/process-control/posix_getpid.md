# posix_getpid

Source: https://devdocs.io/php/function.posix-getpid

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_getpid — Return the current process identifier

### Description

```
posix_getpid(): int
```

Return the process identifier of the current process.

### Parameters

This function has no parameters.

### Return Values

Returns the identifier, as an int.

### Examples

Example #1 Example use of posix_getpid()

```
<?php
echo posix_getpid(); //8805
?>
```

### See Also

- posix_kill() - Send a signal to a process
- POSIX man page GETPID(2)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-getpid.php
