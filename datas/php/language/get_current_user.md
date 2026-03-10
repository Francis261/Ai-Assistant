# get_current_user

Source: https://devdocs.io/php/function.get-current-user

(PHP 4, PHP 5, PHP 7, PHP 8)

get_current_user — Gets the name of the owner of the current PHP script

### Description

```
get_current_user(): string
```

Returns the name of the owner of the current PHP script.

### Parameters

This function has no parameters.

### Return Values

Returns the username as a string.

### Examples

Example #1 get_current_user() example

```
<?php
echo 'Current script owner: ' . get_current_user();
?>
```

The above example will output something similar to:

```
Current script owner: SYSTEM
```

### See Also

- getmyuid() - Gets PHP script owner's UID
- getmygid() - Get PHP script owner's GID
- getmypid() - Gets PHP's process ID
- getmyinode() - Gets the inode of the current script
- getlastmod() - Gets time of last page modification

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.get-current-user.php
