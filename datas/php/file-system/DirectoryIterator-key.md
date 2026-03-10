# DirectoryIterator::key

Source: https://devdocs.io/php/directoryiterator.key

(PHP 5, PHP 7, PHP 8)

DirectoryIterator::key — Return the key for the current DirectoryIterator item

### Description

```
public DirectoryIterator::key(): mixed
```

Get the key for the current DirectoryIterator item.

### Parameters

This function has no parameters.

### Return Values

The key for the current DirectoryIterator item as an int.

### Changelog

### Examples

Example #1 A DirectoryIterator::key() example

```
<?php
$dir = new DirectoryIterator(dirname(__FILE__));
foreach ($dir as $fileinfo) {
    if (!$fileinfo->isDot()) {
        echo $fileinfo->key() . " => " . $fileinfo->getFilename() . "\n";
    }
}
?>
```

The above example will output something similar to:

```
0 => apple.jpg
1 => banana.jpg
2 => index.php
3 => pear.jpg
```

### See Also

- DirectoryIterator::current() - Return the current DirectoryIterator item
- DirectoryIterator::next() - Move forward to next DirectoryIterator item
- DirectoryIterator::rewind() - Rewind the DirectoryIterator back to the start
- DirectoryIterator::valid() - Check whether current DirectoryIterator position is a valid file
- Iterator::key() - Return the key of the current element

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/directoryiterator.key.php
