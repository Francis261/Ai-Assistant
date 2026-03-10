# readdir

Source: https://devdocs.io/php/function.readdir

(PHP 4, PHP 5, PHP 7, PHP 8)

readdir — Read entry from directory handle

### Description

```
readdir(?resource $dir_handle = null): string|false
```

Returns the name of the next entry in the directory. The entries are returned in the order in which they are stored by the filesystem.

### Parameters

### Return Values

Returns the entry name on success, or false on failure.

This function may return Boolean false, but may also return a non-Boolean value which evaluates to false. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

### Changelog

### Examples

For a complete example refer to the opendir() documentation.

### See Also

- opendir() - Open directory handle
- rewinddir() - Rewind directory handle
- closedir() - Close directory handle
- dir() - Return an instance of the Directory class
- is_dir() - Tells whether the filename is a directory
- glob() - Find pathnames matching a pattern
- scandir() - List files and directories inside the specified path

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.readdir.php
