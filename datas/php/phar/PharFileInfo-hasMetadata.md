# PharFileInfo::hasMetadata

Source: https://devdocs.io/php/pharfileinfo.hasmetadata

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.2.0)

PharFileInfo::hasMetadata — Returns the metadata of the entry

### Description

```
public PharFileInfo::hasMetadata(): bool
```

Returns the metadata of a file within a phar archive.

### Parameters

No parameters.

### Return Values

Returns false if no metadata is set or is null, true if metadata is not null

### See Also

- PharFileInfo::setMetadata() - Sets file-specific meta-data saved with a file
- PharFileInfo::getMetadata() - Returns file-specific meta-data saved with a file
- PharFileInfo::delMetadata() - Deletes the metadata of the entry
- Phar::setMetadata() - Sets phar archive meta-data
- Phar::hasMetadata() - Returns whether phar has global meta-data
- Phar::getMetadata() - Returns phar archive meta-data

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pharfileinfo.hasmetadata.php
