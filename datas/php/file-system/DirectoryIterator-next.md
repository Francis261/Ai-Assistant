# DirectoryIterator::next

Source: https://devdocs.io/php/directoryiterator.next

(PHP 5, PHP 7, PHP 8)

DirectoryIterator::next — Move forward to next DirectoryIterator item

### Description

```
public DirectoryIterator::next(): void
```

Move forward to the next DirectoryIterator item.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 DirectoryIterator::next() example

List the contents of a directory using a while loop.

```
<?php
$iterator = new DirectoryIterator(dirname(__FILE__));
while($iterator->valid()) {
    echo $iterator->getFilename() . "\n";
    $iterator->next();
}
?>
```

The above example will output something similar to:

```
.
..
apple.jpg
banana.jpg
index.php
pear.jpg
```

### See Also

- DirectoryIterator::current() - Return the current DirectoryIterator item
- DirectoryIterator::key() - Return the key for the current DirectoryIterator item
- DirectoryIterator::rewind() - Rewind the DirectoryIterator back to the start
- DirectoryIterator::valid() - Check whether current DirectoryIterator position is a valid file
- Iterator::next() - Move forward to next element

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/directoryiterator.next.php
