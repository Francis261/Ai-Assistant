# MultipleIterator::current

Source: https://devdocs.io/php/multipleiterator.current

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

MultipleIterator::current — Gets the registered iterator instances

### Description

```
public MultipleIterator::current(): array
```

Get the registered iterator instances current() result.

This function is currently not documented; only its argument list is available.

### Parameters

This function has no parameters.

### Return Values

An array containing the current values of each attached iterator.

### Errors/Exceptions

A RuntimeException if the iterator is invalid (as of PHP 8.1.0), or mode MIT_NEED_ALL is set and at least one attached iterator is not valid. Or an IllegalValueException if a key is null and MIT_KEYS_ASSOC is set.

### Changelog

### See Also

- MultipleIterator::valid() - Checks the validity of sub iterators

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/multipleiterator.current.php
