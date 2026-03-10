# lchown

Source: https://devdocs.io/php/function.lchown

(PHP 5 >= 5.1.3, PHP 7, PHP 8)

lchown — Changes user ownership of symlink

### Description

```
lchown(string $filename, string|int $user): bool
```

Attempts to change the owner of the symlink filename to user user.

Only the superuser may change the owner of a symlink.

### Parameters

Path to the file.

User name or number.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Changing the owner of a symbolic link

```
<?php
$target = 'output.php';
$link = 'output.html';
symlink($target, $link);

lchown($link, 8);
?>
```

### Notes

Note: This function will not work on remote files as the file to be examined must be accessible via the server's filesystem.

Note: This function is not implemented on Windows platforms.

### See Also

- chown() - Changes file owner
- lchgrp() - Changes group ownership of symlink
- chgrp() - Changes file group
- chmod() - Changes file mode

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.lchown.php
