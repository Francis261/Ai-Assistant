# posix_getuid

Source: https://devdocs.io/php/function.posix-getuid

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_getuid — Return the real user ID of the current process

### Description

```
posix_getuid(): int
```

Return the numeric real user ID of the current process.

### Parameters

This function has no parameters.

### Return Values

Returns the user id, as an int

### Examples

Example #1 Example use of posix_getuid()

```
<?php
echo posix_getuid(); //10000
?>
```

### See Also

- posix_getpwuid() - Return info about a user by user id
- POSIX man page GETUID(2)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-getuid.php
