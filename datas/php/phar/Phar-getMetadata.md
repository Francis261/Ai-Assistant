# Phar::getMetadata

Source: https://devdocs.io/php/phar.getmetadata

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.0.0)

Phar::getMetadata — Returns phar archive meta-data

### Description

```
public Phar::getMetadata(array $unserializeOptions = []): mixed
```

Retrieve archive meta-data. Meta-data can be any PHP variable that can be serialized.

Accessing the meta-data will trigger deserialization, which can trigger the execution of arbitrary PHP code. Do not use this on untrusted phar archives, or configure the unserializeOptions in a secure manner.

### Parameters

No parameters.

### Return Values

Any PHP value that can be serialized and is stored as meta-data for the Phar archive, or null if no meta-data is stored.

### Changelog

### Examples

Example #1 A Phar::getMetadata() example

```
<?php
// make sure it doesn't exist
@unlink('brandnewphar.phar');
try {
    $p = new Phar(dirname(__FILE__) . '/brandnewphar.phar', 0, 'brandnewphar.phar');
    $p['file.php'] = '<?php echo "hello";';
    $p->setMetadata(array('bootstrap' => 'file.php'));
    var_dump($p->getMetadata());
} catch (Exception $e) {
    echo 'Could not modify phar:', $e;
}
?>
```

The above example will output:

```
array(1) {
  ["bootstrap"]=>
  string(8) "file.php"
}
```

### See Also

- Phar::setMetadata() - Sets phar archive meta-data
- Phar::delMetadata() - Deletes the global metadata of the phar
- Phar::hasMetadata() - Returns whether phar has global meta-data

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.getmetadata.php
