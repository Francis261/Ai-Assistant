# MultipleIterator::attachIterator

Source: https://devdocs.io/php/multipleiterator.attachiterator

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

MultipleIterator::attachIterator — Attaches iterator information

### Description

```
public MultipleIterator::attachIterator(Iterator $iterator, string|int|null $info = null): void
```

Attaches iterator information.

This function is currently not documented; only its argument list is available.

### Parameters

The new iterator to attach.

The associative information for the Iterator, which must be an int, a string, or null.

### Return Values

Description...

### Errors/Exceptions

An IllegalValueException if the iterator parameter is invalid, or if info is already associated information.

### See Also

- MultipleIterator::__construct() - Constructs a new MultipleIterator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/multipleiterator.attachiterator.php
