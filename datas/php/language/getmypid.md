# getmypid

Source: https://devdocs.io/php/function.getmypid

(PHP 4, PHP 5, PHP 7, PHP 8)

getmypid — Gets PHP's process ID

### Description

```
getmypid(): int|false
```

Gets the current PHP process ID.

### Parameters

This function has no parameters.

### Return Values

Returns the current PHP process ID, or false on error.

### Notes

Process IDs are not unique, thus they are a weak entropy source. We recommend against relying on pids in security-dependent contexts.

### See Also

- getmygid() - Get PHP script owner's GID
- getmyuid() - Gets PHP script owner's UID
- get_current_user() - Gets the name of the owner of the current PHP script
- getmyinode() - Gets the inode of the current script
- getlastmod() - Gets time of last page modification

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.getmypid.php
