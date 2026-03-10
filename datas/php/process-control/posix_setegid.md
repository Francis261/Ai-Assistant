# posix_setegid

Source: https://devdocs.io/php/function.posix-setegid

(PHP 4 >= 4.0.2, PHP 5, PHP 7, PHP 8)

posix_setegid — Set the effective GID of the current process

### Description

```
posix_setegid(int $group_id): bool
```

Set the effective group ID of the current process. This is a privileged function and needs appropriate privileges (usually root) on the system to be able to perform this function.

### Parameters

The group id.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 posix_setegid() example

This example will print out the effective group id, once changed.

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
- posix_getgid() - Return the real group ID of the current process
- posix_setgid() - Set the GID of the current process

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-setegid.php
