# LimitIterator::seek

Source: https://devdocs.io/php/limititerator.seek

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

LimitIterator::seek — Seek to the given position

### Description

```
public LimitIterator::seek(int $offset): int
```

Moves the iterator to the offset specified by offset.

### Parameters

The position to seek to.

### Return Values

Returns the offset position after seeking.

### Errors/Exceptions

Throws an OutOfBoundsException if the position is outside of the limits specified in LimitIterator::__construct().

### See Also

- LimitIterator::current() - Get current element
- LimitIterator::key() - Get current key
- LimitIterator::rewind() - Rewind the iterator to the specified starting offset
- LimitIterator::next() - Move the iterator forward
- LimitIterator::valid() - Check whether the current element is valid

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/limititerator.seek.php
