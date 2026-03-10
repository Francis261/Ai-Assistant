# posix_getegid

Source: https://devdocs.io/php/function.posix-getegid

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_getegid — Return the effective group ID of the current process

### Description

```
posix_getegid(): int
```

Return the numeric effective group ID of the current process.

### Parameters

This function has no parameters.

### Return Values

Returns an int of the effective group ID.

### Examples

Example #1 posix_getegid() example

This example will print out the effective group id, once it is changed with posix_setegid().

```
<?php
echo 'My real group id is '.posix_getgid(); //20
posix_setegid(40);
echo 'My real group id is '.posix_getgid(); //20
echo 'My effective group id is '.posix_getegid(); //40
?>
```

### Notes

posix_getegid() is different than posix_getgid() because effective group ID can be changed by a calling process using posix_setegid().

### See Also

- posix_getgrgid() - Return info about a group by group id
- posix_getgid() - Return the real group ID of the current process
- posix_setgid() - Set the GID of the current process

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-getegid.php
