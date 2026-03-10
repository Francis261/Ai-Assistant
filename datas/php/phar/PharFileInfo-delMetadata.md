# PharFileInfo::delMetadata

Source: https://devdocs.io/php/pharfileinfo.delmetadata

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.2.0)

PharFileInfo::delMetadata — Deletes the metadata of the entry

### Description

```
public PharFileInfo::delMetadata(): true
```

Deletes the metadata of the entry, if any.

### Parameters

No parameters.

### Return Values

Always returns true. As with all functionality that modifies the contents of a phar, the phar.readonly INI variable must be off in order to succeed if the file is within a Phar archive. Files within PharData archives do not have this restriction.

### Errors/Exceptions

Throws PharException if errors occurred while flushing changes to disk, and BadMethodCallException if write access is disabled.

### Examples

Example #1 A PharFileInfo::delMetaData() example

```
<?php
try {
    $a = new Phar('myphar.phar');
    $a['hi'] = 'hi';
    var_dump($a['hi']->delMetadata());
    $a['hi']->setMetadata('there');
    var_dump($a['hi']->delMetadata());
    var_dump($a['hi']->delMetadata());
} catch (Exception $e) {
    // handle errors
}
?>
```

The above example will output:

```
bool(false)
bool(true)
bool(false)
```

### See Also

- PharFileInfo::setMetadata() - Sets file-specific meta-data saved with a file
- PharFileInfo::hasMetadata() - Returns the metadata of the entry
- PharFileInfo::getMetadata() - Returns file-specific meta-data saved with a file
- Phar::setMetadata() - Sets phar archive meta-data
- Phar::hasMetadata() - Returns whether phar has global meta-data
- Phar::getMetadata() - Returns phar archive meta-data

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pharfileinfo.delmetadata.php
