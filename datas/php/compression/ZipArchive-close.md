# ZipArchive::close

Source: https://devdocs.io/php/ziparchive.close

(PHP 5 >= 5.2.0, PHP 7, PHP 8, PECL zip >= 1.1.0)

ZipArchive::close — Close the active archive (opened or newly created)

### Description

```
public ZipArchive::close(): bool
```

Close opened or created archive and save changes. This method is automatically called at the end of the script.

If the archive contains no files, the file is completely removed by default (no empty archive is written) according to the value of the ZipArchive::AFL_CREATE_OR_KEEP_FILE_FOR_EMPTY_ARCHIVE global flag.

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### See Also

- ZipArchive::setArchiveFlag() - Set a global flag of a ZIP archive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ziparchive.close.php
