# PharFileInfo::getMetadata

Source: https://devdocs.io/php/pharfileinfo.getmetadata

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.0.0)

PharFileInfo::getMetadata — Returns file-specific meta-data saved with a file

### Description

```
public PharFileInfo::getMetadata(array $unserializeOptions = []): mixed
```

Return meta-data that was saved in the Phar archive's manifest for this file.

### Parameters

### Return Values

any PHP variable that can be serialized and is stored as meta-data for the file, or null if no meta-data is stored.

### Changelog

### Examples

Example #1 A PharFileInfo::getMetadata() example

```
<?php
// make sure it doesn't exist
@unlink('brandnewphar.phar');
try {
    $p = new Phar(dirname(__FILE__) . '/brandnewphar.phar', 0, 'brandnewphar.phar');
    $p['file.txt'] = 'hello';
    $p['file.txt']->setMetadata(array('user' => 'bill', 'mime-type' => 'text/plain'));
    var_dump($p['file.txt']->getMetadata());
} catch (Exception $e) {
    echo 'Could not create/modify brandnewphar.phar: ', $e;
}
?>
```

The above example will output:

```
array(2) {
  ["user"]=>
  string(4) "bill"
  ["mime-type"]=>
  string(10) "text/plain"
}
```

### See Also

- PharFileInfo::setMetadata() - Sets file-specific meta-data saved with a file
- PharFileInfo::hasMetadata() - Returns the metadata of the entry
- PharFileInfo::delMetadata() - Deletes the metadata of the entry
- Phar::setMetadata() - Sets phar archive meta-data
- Phar::hasMetadata() - Returns whether phar has global meta-data
- Phar::getMetadata() - Returns phar archive meta-data

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pharfileinfo.getmetadata.php
