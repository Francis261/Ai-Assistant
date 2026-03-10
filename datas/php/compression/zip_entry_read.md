# zip_entry_read

Source: https://devdocs.io/php/function.zip-entry-read

(PHP 4 >= 4.1.0, PHP 5 >= 5.2.0, PHP 7, PHP 8, PECL zip >= 1.0.0)

zip_entry_read — Read from an open directory entry

This function has been DEPRECATED as of PHP 8.0.0. Relying on this function is highly discouraged.

### Description

```
#[\Deprecated] 
 zip_entry_read(resource $zip_entry, int $len = 1024): string|false
```

Reads from an open directory entry.

### Parameters

A directory entry returned by zip_read().

The number of bytes to return.

Note:

This should be the uncompressed length you wish to read.

### Return Values

Returns the data read, empty string on end of a file, or false on error.

### Changelog

### See Also

- zip_entry_open() - Open a directory entry for reading
- zip_entry_close() - Close a directory entry
- zip_entry_filesize() - Retrieve the actual file size of a directory entry

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.zip-entry-read.php
