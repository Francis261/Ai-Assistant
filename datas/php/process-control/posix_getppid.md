# posix_getppid

Source: https://devdocs.io/php/function.posix-getppid

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_getppid — Return the parent process identifier

### Description

```
posix_getppid(): int
```

Return the process identifier of the parent process of the current process.

### Parameters

This function has no parameters.

### Return Values

Returns the identifier, as an int.

### Examples

Example #1 Example use of posix_getppid()

```
<?php
echo posix_getppid(); //8259
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-getppid.php
