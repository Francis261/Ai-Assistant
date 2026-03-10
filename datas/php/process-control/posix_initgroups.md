# posix_initgroups

Source: https://devdocs.io/php/function.posix-initgroups

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

posix_initgroups — Calculate the group access list

### Description

```
posix_initgroups(string $username, int $group_id): bool
```

Calculates the group access list for the user specified in name.

### Parameters

The user to calculate the list for.

Typically the group number from the password file.

### Return Values

Returns true on success or false on failure.

### See Also

- The Unix manual page for initgroups(3).

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-initgroups.php
