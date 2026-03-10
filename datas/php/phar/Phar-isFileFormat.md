# Phar::isFileFormat

Source: https://devdocs.io/php/phar.isfileformat

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

Phar::isFileFormat — Returns true if the phar archive is based on the tar/phar/zip file format depending on the parameter

### Description

```
public Phar::isFileFormat(int $format): bool
```

### Parameters

Either Phar::PHAR, Phar::TAR, or Phar::ZIP to test for the format of the archive.

### Return Values

Returns true if the phar archive matches the file format requested by the parameter

### Errors/Exceptions

PharException is thrown if the parameter is an unknown file format specifier.

### See Also

- Phar::convertToExecutable() - Convert a phar archive to another executable phar archive file format
- Phar::convertToData() - Convert a phar archive to a non-executable tar or zip file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.isfileformat.php
