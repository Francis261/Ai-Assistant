# FilesystemIterator::rewind

Source: https://devdocs.io/php/filesystemiterator.rewind

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

FilesystemIterator::rewind — Rewinds back to the beginning

### Description

```
public FilesystemIterator::rewind(): void
```

Rewinds the directory back to the start.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 FilesystemIterator::rewind() example

```
<?php
$iterator = new FilesystemIterator(dirname(__FILE__), FilesystemIterator::KEY_AS_FILENAME);

echo $iterator->key() . "\n";

$iterator->next();
echo $iterator->key() . "\n";

$iterator->rewind();
echo $iterator->key() . "\n";
?>
```

The above example will output something similar to:

```
apple.jpg
banana.jpg
apple.jpg
```

### See Also

- DirectoryIterator::rewind() - Rewind the DirectoryIterator back to the start

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/filesystemiterator.rewind.php
