# readlink

Source: https://devdocs.io/php/function.readlink

(PHP 4, PHP 5, PHP 7, PHP 8)

readlink — Returns the target of a symbolic link

### Description

```
readlink(string $path): string|false
```

readlink() does the same as the readlink C function.

### Parameters

The symbolic link path.

### Return Values

Returns the contents of the symbolic link path or false on error.

Note: The function fails if path is not a symlink, except on Windows, where the normalized path will be returned.

### Examples

Example #1 readlink() example

```
<?php

// output e.g. /boot/vmlinux-2.4.20-xfs
echo readlink('/vmlinuz');

?>
```

### See Also

- is_link() - Tells whether the filename is a symbolic link
- symlink() - Creates a symbolic link
- linkinfo() - Gets information about a link

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.readlink.php
