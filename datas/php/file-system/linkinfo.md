# linkinfo

Source: https://devdocs.io/php/function.linkinfo

(PHP 4, PHP 5, PHP 7, PHP 8)

linkinfo — Gets information about a link

### Description

```
linkinfo(string $path): int|false
```

Gets information about a link.

This function is used to verify if a link (pointed to by path) really exists (using the same method as the S_ISLNK macro defined in stat.h).

### Parameters

Path to the link.

### Return Values

linkinfo() returns the st_dev field of the Unix C stat structure returned by the lstat system call. Returns a non-negative integer on success, -1 in case the link was not found, or false if an open.base_dir violation occurs.

### Examples

Example #1 linkinfo() example

```
<?php

echo linkinfo('/vmlinuz'); // 835

?>
```

### See Also

- symlink() - Creates a symbolic link
- link() - Create a hard link
- readlink() - Returns the target of a symbolic link

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.linkinfo.php
