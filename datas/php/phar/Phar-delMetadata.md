# Phar::delMetadata

Source: https://devdocs.io/php/phar.delmetadata

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.2.0)

Phar::delMetadata — Deletes the global metadata of the phar

### Description

```
public Phar::delMetadata(): true
```

Note:

This method requires the php.ini setting phar.readonly to be set to 0 in order to work for Phar objects. Otherwise, a PharException will be thrown.

Deletes the global metadata of the phar

### Parameters

### Return Values

Always returns true.

### Errors/Exceptions

Throws PharException if errors occur while flushing changes to disk.

### Examples

Example #1 A Phar::delMetaData() example

```
<?php
try {
    $phar = new Phar('myphar.phar');
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

- Phar::getMetadata() - Returns phar archive meta-data
- Phar::setMetadata() - Sets phar archive meta-data
- Phar::hasMetadata() - Returns whether phar has global meta-data

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.delmetadata.php
