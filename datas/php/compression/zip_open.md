# zip_open

Source: https://devdocs.io/php/function.zip-open

(PHP 4 >= 4.1.0, PHP 5 >= 5.2.0, PHP 7, PHP 8, PECL zip >= 1.0.0)

zip_open — Open a ZIP file archive

This function has been DEPRECATED as of PHP 8.0.0. Relying on this function is highly discouraged.

### Description

```
#[\Deprecated] 
 zip_open(string $filename): resource|int|false
```

Opens a new zip archive for reading.

### Parameters

The file name of the ZIP archive to open.

### Return Values

Returns a resource handle for later use with zip_read() and zip_close() or returns either false or the number of error if filename does not exist or in case of other error.

### Changelog

### See Also

- zip_read() - Read next entry in a ZIP file archive
- zip_close() - Close a ZIP file archive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.zip-open.php
