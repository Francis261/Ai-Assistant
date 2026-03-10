# DirectoryIterator::rewind

Source: https://devdocs.io/php/directoryiterator.rewind

(PHP 5, PHP 7, PHP 8)

DirectoryIterator::rewind — Rewind the DirectoryIterator back to the start

### Description

```
public DirectoryIterator::rewind(): void
```

Rewind the DirectoryIterator back to the start.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 DirectoryIterator::rewind() example

```
<?php
$iterator = new DirectoryIterator(dirname(__FILE__));

$iterator->next();
echo $iterator->key(); //1

$iterator->rewind(); //rewinding to the beginning
echo $iterator->key(); //0
?>
```

### See Also

- DirectoryIterator::current() - Return the current DirectoryIterator item
- DirectoryIterator::key() - Return the key for the current DirectoryIterator item
- DirectoryIterator::next() - Move forward to next DirectoryIterator item
- DirectoryIterator::valid() - Check whether current DirectoryIterator position is a valid file
- Iterator::rewind() - Rewind the Iterator to the first element

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/directoryiterator.rewind.php
