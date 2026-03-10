# SplFixedArray::offsetSet

Source: https://devdocs.io/php/splfixedarray.offsetset

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SplFixedArray::offsetSet — Sets a new value at a specified index

### Description

```
public SplFixedArray::offsetSet(int $index, mixed $value): void
```

Sets the value at the specified index to value.

### Parameters

The index being set.

The new value for the index.

### Return Values

No value is returned.

### Errors/Exceptions

Throws RuntimeException when index is outside the defined size of the array or when index cannot be parsed as an integer.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfixedarray.offsetset.php
