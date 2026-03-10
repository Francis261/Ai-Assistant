# symlink

Source: https://devdocs.io/php/function.symlink

(PHP 4, PHP 5, PHP 7, PHP 8)

symlink — Creates a symbolic link

### Description

```
symlink(string $target, string $link): bool
```

symlink() creates a symbolic link to the existing target with the specified name link.

### Parameters

Target of the link.

The link name.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

The function fails, and issues E_WARNING, if link already exists. On Windows, the function also fails, and issues E_WARNING, if target does not exist.

### Examples

Example #1 Create a symbolic link

```
<?php
$target = 'uploads.php';
$link = 'uploads';
symlink($target, $link);

echo readlink($link);
?>
```

### See Also

- is_link() - Tells whether the filename is a symbolic link
- link() - Create a hard link
- readlink() - Returns the target of a symbolic link
- linkinfo() - Gets information about a link
- unlink() - Deletes a file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.symlink.php
