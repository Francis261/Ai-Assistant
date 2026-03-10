# is_dir

Source: https://devdocs.io/php/function.is-dir

(PHP 4, PHP 5, PHP 7, PHP 8)

is_dir — Tells whether the filename is a directory

### Description

```
is_dir(string $filename): bool
```

Tells whether the given filename is a directory.

### Parameters

Path to the file. If filename is a relative filename, it will be checked relative to the current working directory. If filename is a symbolic or hard link then the link will be resolved and checked. If you have enabled open_basedir further restrictions may apply.

### Return Values

Returns true if the filename exists and is a directory, false otherwise.

### Errors/Exceptions

Upon failure, an E_WARNING is emitted.

### Examples

Example #1 is_dir() example

```
<?php
var_dump(is_dir('a_file.txt'));
var_dump(is_dir('bogus_dir/abc'));

var_dump(is_dir('..')); //one dir up
?>
```

The above example will output:

```
bool(false)
bool(false)
bool(true)
```

### Notes

Note: The results of this function are cached. See clearstatcache() for more details.

As of PHP 5.0.0, this function can also be used with some URL wrappers. Refer to Supported Protocols and Wrappers to determine which wrappers support stat() family of functionality.

### See Also

- chdir() - Change directory
- dir() - Return an instance of the Directory class
- opendir() - Open directory handle
- is_file() - Tells whether the filename is a regular file
- is_link() - Tells whether the filename is a symbolic link

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.is-dir.php
