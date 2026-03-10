# zip_entry_compressionmethod

Source: https://devdocs.io/php/function.zip-entry-compressionmethod

(PHP 4 >= 4.1.0, PHP 5 >= 5.2.0, PHP 7, PHP 8, PECL zip >= 1.0.0)

zip_entry_compressionmethod — Retrieve the compression method of a directory entry

This function has been DEPRECATED as of PHP 8.0.0. Relying on this function is highly discouraged.

### Description

```
#[\Deprecated] 
 zip_entry_compressionmethod(resource $zip_entry): string|false
```

Returns the compression method of the directory entry specified by zip_entry.

### Parameters

A directory entry returned by zip_read().

### Return Values

The compression method, or false on failure.

### Changelog

### See Also

- zip_open() - Open a ZIP file archive
- zip_read() - Read next entry in a ZIP file archive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.zip-entry-compressionmethod.php
