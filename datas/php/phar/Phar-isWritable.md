# Phar::isWritable

Source: https://devdocs.io/php/phar.iswritable

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

Phar::isWritable — Returns true if the phar archive can be modified

### Description

```
public Phar::isWritable(): bool
```

This method returns true if phar.readonly is 0, and the actual phar archive on disk is not read-only.

### Parameters

No parameters.

### Return Values

Returns true if the phar archive can be modified

### See Also

- Phar::canWrite() - Returns whether phar extension supports writing and creating phars
- PharData::isWritable() - Returns true if the tar/zip archive can be modified

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.iswritable.php
