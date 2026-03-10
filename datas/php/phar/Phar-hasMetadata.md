# Phar::hasMetadata

Source: https://devdocs.io/php/phar.hasmetadata

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.2.0)

Phar::hasMetadata — Returns whether phar has global meta-data

### Description

```
public Phar::hasMetadata(): bool
```

Returns whether phar has global meta-data set.

### Parameters

No parameters.

### Return Values

Returns true if meta-data has been set, and false if not.

### Examples

Example #1 A Phar::hasMetadata() example

```
<?php
try {
    $phar = new Phar('myphar.phar');
    var_dump($phar->hasMetadata());
    $phar->setMetadata(array('thing' => 'hi'));
    var_dump($phar->hasMetadata());
    $phar->delMetadata();
    var_dump($phar->hasMetadata());
} catch (Exception $e) {
    // handle error
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

- Phar::getMetadata() - Returns phar archive meta-data
- Phar::setMetadata() - Sets phar archive meta-data
- Phar::delMetadata() - Deletes the global metadata of the phar

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.hasmetadata.php
