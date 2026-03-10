# posix_setuid

Source: https://devdocs.io/php/function.posix-setuid

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_setuid — Set the UID of the current process

### Description

```
posix_setuid(int $user_id): bool
```

Set the real user ID of the current process. This is a privileged function that needs appropriate privileges (usually root) on the system to be able to perform this function.

### Parameters

The user id.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 posix_setuid() example

This example will show the current user id and then set it to a different value.

```
<?php
echo posix_getuid()."\n"; //10001
echo posix_geteuid()."\n"; //10001
posix_setuid(10000);
echo posix_getuid()."\n"; //10000
echo posix_geteuid()."\n"; //10000
?>
```

### See Also

- posix_setgid() - Set the GID of the current process
- posix_seteuid() - Set the effective UID of the current process
- posix_getuid() - Return the real user ID of the current process
- posix_geteuid() - Return the effective user ID of the current process

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-setuid.php
