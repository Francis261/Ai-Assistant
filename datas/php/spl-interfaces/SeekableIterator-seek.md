# SeekableIterator::seek

Source: https://devdocs.io/php/seekableiterator.seek

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SeekableIterator::seek — Seeks to a position

### Description

```
public SeekableIterator::seek(int $offset): void
```

Seeks to a given position in the iterator.

### Parameters

The position to seek to.

### Return Values

No value is returned.

### Errors/Exceptions

Implementations should throw an OutOfBoundsException if the offset is not seekable.

### Examples

Example #1 SeekableIterator::seek() example

Seek to the item at position 3 in the iterator (ArrayIterator implements SeekableIterator).

```
<?php
$array = array("apple", "banana", "cherry", "damson", "elderberry");
$iterator = new ArrayIterator($array);
$iterator->seek(3);
echo $iterator->current();
?>
```

The above example will output something similar to:

```
damson
```

### See Also

- SeekableIterator
- Iterator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/seekableiterator.seek.php
