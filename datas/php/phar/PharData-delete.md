# PharData::delete

Source: https://devdocs.io/php/phardata.delete

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

PharData::delete — Delete a file within a tar/zip archive

### Description

```
public PharData::delete(string $localName): true
```

Delete a file within an archive. This is the functional equivalent of calling unlink() on the stream wrapper equivalent, as shown in the example below.

### Parameters

Path within an archive to the file to delete.

### Return Values

Always returns true.

### Errors/Exceptions

Throws PharException if errors occur while flushing changes to disk.

### Examples

Example #1 A PharData::delete() example

```
<?php
try {
    $phar = new PharData('myphar.zip');
    $phar->delete('unlink/me.php');
    // this is equivalent to:
    unlink('phar://myphar.phar/unlink/me.php');
} catch (Exception $e) {
    // handle errors
}
?>
```

### See Also

- Phar::delete() - Delete a file within a phar archive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phardata.delete.php
