# zip_entry_open

Source: https://devdocs.io/php/function.zip-entry-open

(PHP 4 >= 4.1.0, PHP 5 >= 5.2.0, PHP 7, PHP 8, PECL zip >= 1.0.0)

zip_entry_open — Open a directory entry for reading

This function has been DEPRECATED as of PHP 8.0.0. Relying on this function is highly discouraged.

### Description

```
#[\Deprecated] 
 zip_entry_open(resource $zip_dp, resource $zip_entry, string $mode = "rb"): bool
```

Opens a directory entry in a zip file for reading.

### Parameters

A valid resource handle returned by zip_open().

A directory entry returned by zip_read().

Any of the modes specified in the documentation of fopen().

Note:

Currently, mode is ignored and is always "rb". This is due to the fact that zip support in PHP is read only access.

### Return Values

Returns true on success or false on failure.

Note:

Unlike fopen() and other similar functions, the return value of zip_entry_open() only indicates the result of the operation and is not needed for reading or closing the directory entry.

### Changelog

### See Also

- zip_entry_close() - Close a directory entry
- zip_entry_read() - Read from an open directory entry

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.zip-entry-open.php
