# is_readable

Source: https://devdocs.io/php/function.is-readable

(PHP 4, PHP 5, PHP 7, PHP 8)

is_readable — Tells whether a file exists and is readable

### Description

```
is_readable(string $filename): bool
```

Tells whether a file exists and is readable.

### Parameters

Path to the file.

### Return Values

Returns true if the file or directory specified by filename exists and is readable, false otherwise.

### Errors/Exceptions

Upon failure, an E_WARNING is emitted.

### Examples

Example #1 is_readable() example

```
<?php
$filename = 'test.txt';
if (is_readable($filename)) {
    echo 'The file is readable';
} else {
    echo 'The file is not readable';
}
?>
```

### Notes

Keep in mind that PHP may be accessing the file as the user id that the web server runs as (often 'nobody').

Note: The results of this function are cached. See clearstatcache() for more details.

As of PHP 5.0.0, this function can also be used with some URL wrappers. Refer to Supported Protocols and Wrappers to determine which wrappers support stat() family of functionality.

Note:

The check is done using the real UID/GID instead of the effective one.

This function may return true for directories. Use is_dir() to distinguish file and directory.

### See Also

- is_writable() - Tells whether the filename is writable
- file_exists() - Checks whether a file or directory exists
- fgets() - Gets line from file pointer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.is-readable.php
