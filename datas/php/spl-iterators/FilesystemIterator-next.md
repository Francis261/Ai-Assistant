# FilesystemIterator::next

Source: https://devdocs.io/php/filesystemiterator.next

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

FilesystemIterator::next — Move to the next file

### Description

```
public FilesystemIterator::next(): void
```

Move to the next file.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 FilesystemIterator::next() example

List the contents of a directory using a while loop.

```
<?php
$iterator = new FilesystemIterator(dirname(__FILE__));
while($iterator->valid()) {
    echo $iterator->getFilename() . "\n";
    $iterator->next();
}
?>
```

The above example will output something similar to:

```
apple.jpg
banana.jpg
example.php
```

### See Also

- DirectoryIterator::next() - Move forward to next DirectoryIterator item

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/filesystemiterator.next.php
