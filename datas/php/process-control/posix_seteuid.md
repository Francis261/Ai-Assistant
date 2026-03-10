# posix_seteuid

Source: https://devdocs.io/php/function.posix-seteuid

(PHP 4 >= 4.0.2, PHP 5, PHP 7, PHP 8)

posix_seteuid — Set the effective UID of the current process

### Description

```
posix_seteuid(int $user_id): bool
```

Set the effective user ID of the current process. This is a privileged function and needs appropriate privileges (usually root) on the system to be able to perform this function.

### Parameters

The user id.

### Return Values

Returns true on success or false on failure.

### See Also

- posix_geteuid() - Return the effective user ID of the current process
- posix_setuid() - Set the UID of the current process
- posix_getuid() - Return the real user ID of the current process

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-seteuid.php
