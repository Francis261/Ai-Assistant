# DirectoryIterator::valid

Source: https://devdocs.io/php/directoryiterator.valid

(PHP 5, PHP 7, PHP 8)

DirectoryIterator::valid — Check whether current DirectoryIterator position is a valid file

### Description

```
public DirectoryIterator::valid(): bool
```

Check whether current DirectoryIterator position is a valid file.

### Parameters

This function has no parameters.

### Return Values

Returns true if the position is valid, otherwise false

### Examples

Example #1 A DirectoryIterator::valid() example

```
<?php
$iterator = new DirectoryIterator(dirname(__FILE__));

// Loop to end of iterator
while($iterator->valid()) {
    $iterator->next();
}

$iterator->valid(); // FALSE
$iterator->rewind(); 
$iterator->valid(); // TRUE

?>
```

### See Also

- DirectoryIterator::current() - Return the current DirectoryIterator item
- DirectoryIterator::key() - Return the key for the current DirectoryIterator item
- DirectoryIterator::next() - Move forward to next DirectoryIterator item
- DirectoryIterator::rewind() - Rewind the DirectoryIterator back to the start
- Iterator::valid() - Checks if current position is valid

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/directoryiterator.valid.php
