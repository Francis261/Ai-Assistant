# Phar::delete

Source: https://devdocs.io/php/phar.delete

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

Phar::delete — Delete a file within a phar archive

### Description

```
public Phar::delete(string $localName): true
```

Note:

This method requires the php.ini setting phar.readonly to be set to 0 in order to work for Phar objects. Otherwise, a PharException will be thrown.

Delete a file within an archive. This is the functional equivalent of calling unlink() on the stream wrapper equivalent, as shown in the example below.

### Parameters

Path within an archive to the file to delete.

### Return Values

Always returns true.

### Errors/Exceptions

Throws PharException if errors occur while flushing changes to disk.

### Examples

Example #1 A Phar::delete() example

```
<?php
try {
    $phar = new Phar('myphar.phar');
    $phar->delete('unlink/me.php');
    // this is equivalent to:
    unlink('phar://myphar.phar/unlink/me.php');
} catch (Exception $e) {
    // handle errors
}
?>
```

### See Also

- PharData::delete() - Delete a file within a tar/zip archive
- Phar::unlinkArchive() - Completely remove a phar archive from disk and from memory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.delete.php
