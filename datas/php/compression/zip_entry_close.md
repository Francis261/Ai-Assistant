# zip_entry_close

Source: https://devdocs.io/php/function.zip-entry-close

(PHP 4 >= 4.1.0, PHP 5 >= 5.2.0, PHP 7, PHP 8, PECL zip >= 1.0.0)

zip_entry_close — Close a directory entry

This function has been DEPRECATED as of PHP 8.0.0. Relying on this function is highly discouraged.

### Description

```
#[\Deprecated] 
 zip_entry_close(resource $zip_entry): bool
```

Closes the specified directory entry.

### Parameters

A directory entry previously opened zip_entry_open().

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- zip_entry_open() - Open a directory entry for reading
- zip_entry_read() - Read from an open directory entry

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.zip-entry-close.php
