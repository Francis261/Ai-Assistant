# fileinode

Source: https://devdocs.io/php/function.fileinode

(PHP 4, PHP 5, PHP 7, PHP 8)

fileinode — Gets file inode

### Description

```
fileinode(string $filename): int|false
```

Gets the file inode.

### Parameters

Path to the file.

### Return Values

Returns the inode number of the file, or false on failure.

### Errors/Exceptions

Upon failure, an E_WARNING is emitted.

### Examples

Example #1 Comparing the inode of a file with the current file

```
<?php
$filename = 'index.php';
if (getmyinode() == fileinode($filename)) {
    echo 'You are checking the current file.';
}
?>
```

### Notes

Note: The results of this function are cached. See clearstatcache() for more details.

As of PHP 5.0.0, this function can also be used with some URL wrappers. Refer to Supported Protocols and Wrappers to determine which wrappers support stat() family of functionality.

### See Also

- getmyinode() - Gets the inode of the current script
- stat() - Gives information about a file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.fileinode.php
