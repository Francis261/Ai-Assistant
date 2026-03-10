# is_link

Source: https://devdocs.io/php/function.is-link

(PHP 4, PHP 5, PHP 7, PHP 8)

is_link — Tells whether the filename is a symbolic link

### Description

```
is_link(string $filename): bool
```

Tells whether the given file is a symbolic link.

### Parameters

Path to the file.

### Return Values

Returns true if the filename exists and is a symbolic link, false otherwise.

### Errors/Exceptions

Upon failure, an E_WARNING is emitted.

### Examples

Example #1 Create and confirm if a file is a symbolic link

```
<?php
$link = 'uploads';

if (is_link($link)) {
    echo readlink($link);
} else {
    symlink('uploads.php', $link);
}
?>
```

### Notes

Note: The results of this function are cached. See clearstatcache() for more details.

As of PHP 5.0.0, this function can also be used with some URL wrappers. Refer to Supported Protocols and Wrappers to determine which wrappers support stat() family of functionality.

### See Also

- is_dir() - Tells whether the filename is a directory
- is_file() - Tells whether the filename is a regular file
- readlink() - Returns the target of a symbolic link
- symlink() - Creates a symbolic link

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.is-link.php
