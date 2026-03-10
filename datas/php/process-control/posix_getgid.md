# posix_getgid

Source: https://devdocs.io/php/function.posix-getgid

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_getgid — Return the real group ID of the current process

### Description

```
posix_getgid(): int
```

Return the numeric real group ID of the current process.

### Parameters

This function has no parameters.

### Return Values

Returns the real group id, as an int.

### Examples

Example #1 posix_getgid() example

This example will print out the real group id, even once the effective group id has been changed.

```
<?php
echo 'My real group id is '.posix_getgid(); //20
posix_setegid(40);
echo 'My real group id is '.posix_getgid(); //20
echo 'My effective group id is '.posix_getegid(); //40
?>
```

### See Also

- posix_getgrgid() - Return info about a group by group id
- posix_getegid() - Return the effective group ID of the current process
- posix_setgid() - Set the GID of the current process
- POSIX man page GETGID(2)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-getgid.php
