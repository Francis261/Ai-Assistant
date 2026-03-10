# is_file

Source: https://devdocs.io/php/function.is-file

(PHP 4, PHP 5, PHP 7, PHP 8)

is_file — Tells whether the filename is a regular file

### Description

```
is_file(string $filename): bool
```

Tells whether the given file is a regular file. If filename is a symbolic link, it will resolve the symlink and will give information about the referred file.

### Parameters

Path to the file.

### Return Values

Returns true if the filename exists and is a regular file, false otherwise.

Note: Because PHP's integer type is signed and many platforms use 32bit integers, some filesystem functions may return unexpected results for files which are larger than 2GB.

### Errors/Exceptions

Upon failure, an E_WARNING is emitted.

### Examples

Example #1 is_file() example

```
<?php
var_dump(is_file('a_file.txt')) . "\n";
var_dump(is_file('/usr/bin/')) . "\n";
?>
```

The above example will output:

```
bool(true)
bool(false)
```

### Notes

Note: The results of this function are cached. See clearstatcache() for more details.

As of PHP 5.0.0, this function can also be used with some URL wrappers. Refer to Supported Protocols and Wrappers to determine which wrappers support stat() family of functionality.

### See Also

- is_dir() - Tells whether the filename is a directory
- is_link() - Tells whether the filename is a symbolic link
- SplFileInfo

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.is-file.php
