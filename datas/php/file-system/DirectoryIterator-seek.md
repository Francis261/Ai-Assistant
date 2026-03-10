# DirectoryIterator::seek

Source: https://devdocs.io/php/directoryiterator.seek

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

DirectoryIterator::seek — Seek to a DirectoryIterator item

### Description

```
public DirectoryIterator::seek(int $offset): void
```

Seek to a given position in the DirectoryIterator.

### Parameters

The zero-based numeric position to seek to.

### Return Values

No value is returned.

### Examples

Example #1 DirectoryIterator::seek() example

Seek to the fourth item in the directory containing the script. The first two are usually . and ..

```
<?php
$iterator = new DirectoryIterator(dirname(__FILE__));
$iterator->seek(3);
if ($iterator->valid()) {
    echo $iterator->getFilename();
} else {
    echo 'No file at position 3';
}
?>
```

### See Also

- DirectoryIterator::rewind() - Rewind the DirectoryIterator back to the start
- DirectoryIterator::next() - Move forward to next DirectoryIterator item
- SeekableIterator::seek() - Seeks to a position

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/directoryiterator.seek.php
