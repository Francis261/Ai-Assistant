# PharData::delMetadata

Source: https://devdocs.io/php/phardata.delmetadata

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

PharData::delMetadata — Deletes the global metadata of a zip archive

### Description

```
public PharData::delMetadata(): true
```

Note:

This method requires the php.ini setting phar.readonly to be set to 0 in order to work for Phar objects. Otherwise, a PharException will be thrown.

Deletes the global metadata of the zip archive

### Parameters

### Return Values

Always returns true.

### Errors/Exceptions

Throws PharException if errors occur while flushing changes to disk.

### Examples

Example #1 A PharData::delMetaData() example

```
<?php
try {
    $phar = new PharData('myphar.zip');
    var_dump($phar->getMetadata());
    $phar->setMetadata("hi there");
    var_dump($phar->getMetadata());
    $phar->delMetadata();
    var_dump($phar->getMetadata());
} catch (Exception $e) {
    // handle errors
}
?>
```

The above example will output:

```
NULL
string(8) "hi there"
NULL
```

### See Also

- Phar::delMetadata() - Deletes the global metadata of the phar

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phardata.delmetadata.php
