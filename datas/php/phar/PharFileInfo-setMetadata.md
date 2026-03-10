# PharFileInfo::setMetadata

Source: https://devdocs.io/php/pharfileinfo.setmetadata

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.0.0)

PharFileInfo::setMetadata — Sets file-specific meta-data saved with a file

### Description

```
public PharFileInfo::setMetadata(mixed $metadata): void
```

PharFileInfo::setMetadata() should only be used to store customized data in a file that cannot be represented with existing information stored with a file. Meta-data can significantly slow down the performance of loading a phar archive if the data is large, or if there are many files containing meta-data. It is important to note that file permissions are natively supported inside a phar; it is possible to set them with the PharFileInfo::chmod() method. As with all functionality that modifies the contents of a phar, the phar.readonly INI variable must be off in order to succeed if the file is within a Phar archive. Files within PharData archives do not have this restriction.

Some possible uses for meta-data include passing a user/group that should be set when a file is extracted from the phar to disk. Other uses could include explicitly specifying a MIME type to return. However, any useful data that describes a file, but should not be contained inside of it may be stored.

### Parameters

Any PHP variable containing information to store alongside a file

### Return Values

No value is returned.

### Examples

Example #1 A PharFileInfo::setMetadata() example

```
<?php
// make sure it doesn't exist
@unlink('brandnewphar.phar');
try {
    $p = new Phar(dirname(__FILE__) . '/brandnewphar.phar', 0, 'brandnewphar.phar');
    $p['file.txt'] = 'hello';
    $p['file.txt']->setMetadata(array('user' => 'bill', 'mime-type' => 'text/plain'));
    var_dump($p['file.txt']->getMetaData());
} catch (Exception $e) {
    echo 'Could not create/modify phar: ', $e;
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

- PharFileInfo::hasMetadata() - Returns the metadata of the entry
- PharFileInfo::getMetadata() - Returns file-specific meta-data saved with a file
- PharFileInfo::delMetadata() - Deletes the metadata of the entry
- Phar::setMetadata() - Sets phar archive meta-data
- Phar::hasMetadata() - Returns whether phar has global meta-data
- Phar::getMetadata() - Returns phar archive meta-data

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pharfileinfo.setmetadata.php
