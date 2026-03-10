# is_writable

Source: https://devdocs.io/php/function.is-writable

(PHP 4, PHP 5, PHP 7, PHP 8)

is_writable — Tells whether the filename is writable

### Description

```
is_writable(string $filename): bool
```

Returns true if the filename exists and is writable. The filename argument may be a directory name allowing you to check if a directory is writable.

Keep in mind that PHP may be accessing the file as the user id that the web server runs as (often 'nobody').

### Parameters

The filename being checked.

### Return Values

Returns true if the filename exists and is writable.

### Errors/Exceptions

Upon failure, an E_WARNING is emitted.

### Examples

Example #1 is_writable() example

```
<?php
$filename = 'test.txt';
if (is_writable($filename)) {
    echo 'The file is writable';
} else {
    echo 'The file is not writable';
}
?>
```

### Notes

Note: The results of this function are cached. See clearstatcache() for more details.

As of PHP 5.0.0, this function can also be used with some URL wrappers. Refer to Supported Protocols and Wrappers to determine which wrappers support stat() family of functionality.

### See Also

- is_readable() - Tells whether a file exists and is readable
- file_exists() - Checks whether a file or directory exists
- fwrite() - Binary-safe file write

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.is-writable.php
