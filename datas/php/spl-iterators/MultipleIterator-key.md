# MultipleIterator::key

Source: https://devdocs.io/php/multipleiterator.key

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

MultipleIterator::key — Gets the registered iterator instances

### Description

```
public MultipleIterator::key(): array
```

Get the registered iterator instances key() result.

This function is currently not documented; only its argument list is available.

### Parameters

This function has no parameters.

### Return Values

An array of all registered iterator instances.

### Errors/Exceptions

A RuntimeException if the iterator is invalid (as of PHP 8.1.0), or mode MIT_NEED_ALL is set, and at least one attached iterator is not valid.

Calling this method from foreach triggers warning "Illegal type returned".

### Changelog

### See Also

- MultipleIterator::current() - Gets the registered iterator instances

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/multipleiterator.key.php
