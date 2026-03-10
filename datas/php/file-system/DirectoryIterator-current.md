# DirectoryIterator::current

Source: https://devdocs.io/php/directoryiterator.current

(PHP 5, PHP 7, PHP 8)

DirectoryIterator::current — Return the current DirectoryIterator item

### Description

```
public DirectoryIterator::current(): mixed
```

Get the current DirectoryIterator item.

### Parameters

This function has no parameters.

### Return Values

The current DirectoryIterator item.

### Examples

Example #1 A DirectoryIterator::current() example

This example will list the contents of the directory containing the script.

```
<?php
$iterator = new DirectoryIterator(__DIR__);
while($iterator->valid()) {
    $file = $iterator->current();
    echo $iterator->key() . " => " . $file->getFilename() . "\n";
    $iterator->next();
}
?>
```

The above example will output something similar to:

```
0 => .
1 => ..
2 => apple.jpg
3 => banana.jpg
4 => index.php
5 => pear.jpg
```

### See Also

- DirectoryIterator::key() - Return the key for the current DirectoryIterator item
- DirectoryIterator::next() - Move forward to next DirectoryIterator item
- DirectoryIterator::rewind() - Rewind the DirectoryIterator back to the start
- DirectoryIterator::valid() - Check whether current DirectoryIterator position is a valid file
- Iterator::current() - Return the current element

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/directoryiterator.current.php
