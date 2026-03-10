# PharData::isWritable

Source: https://devdocs.io/php/phardata.iswritable

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

PharData::isWritable — Returns true if the tar/zip archive can be modified

### Description

```
public PharData::isWritable(): bool
```

This method returns true if the tar/zip archive on disk is not read-only. Unlike Phar::isWritable(), data-only tar/zip archives can be modified even if phar.readonly is set to 1.

### Parameters

No parameters.

### Return Values

Returns true if the tar/zip archive can be modified

### See Also

- Phar::canWrite() - Returns whether phar extension supports writing and creating phars
- Phar::isWritable() - Returns true if the phar archive can be modified

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phardata.iswritable.php
