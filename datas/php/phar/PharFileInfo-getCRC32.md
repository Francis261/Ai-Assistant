# PharFileInfo::getCRC32

Source: https://devdocs.io/php/pharfileinfo.getcrc32

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.0.0)

PharFileInfo::getCRC32 — Returns CRC32 code or throws an exception if CRC has not been verified

### Description

```
public PharFileInfo::getCRC32(): int
```

This returns the crc32() checksum of the file within the Phar archive.

### Parameters

This function has no parameters.

### Return Values

The crc32() checksum of the file within the Phar archive.

### Errors/Exceptions

Throws BadMethodCallException if the file has not yet had its CRC32 verified. This should be impossible with normal use, as the CRC is verified upon opening the file for reading or writing.

### Examples

Example #1 A PharFileInfo::getCRC32() example

```
<?php
try {
    $p = new Phar('/path/to/my.phar', 0, 'my.phar');
    $p['myfile.txt'] = 'hi';
    $file = $p['myfile.txt'];
    echo $file->getCRC32();
} catch (Exception $e) {
    echo 'Write operations on my.phar.phar failed: ', $e;
}
?>
```

The above example will output:

```
3633523372
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pharfileinfo.getcrc32.php
