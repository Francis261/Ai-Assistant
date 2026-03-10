# posix_getlogin

Source: https://devdocs.io/php/function.posix-getlogin

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_getlogin — Return login name

### Description

```
posix_getlogin(): string|false
```

Returns the login name of the user owning the current process.

### Parameters

This function has no parameters.

### Return Values

Returns the login name of the user, as a string, or false on failure.

### Examples

Example #1 Example use of posix_getlogin()

```
<?php
echo posix_getlogin(); //apache
?>
```

### See Also

- posix_getpwnam() - Return info about a user by username
- POSIX man page GETLOGIN(3)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-getlogin.php
