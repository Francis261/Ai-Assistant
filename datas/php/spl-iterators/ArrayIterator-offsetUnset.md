# ArrayIterator::offsetUnset

Source: https://devdocs.io/php/arrayiterator.offsetunset

(PHP 5, PHP 7, PHP 8)

ArrayIterator::offsetUnset — Unset value for an offset

### Description

```
public ArrayIterator::offsetUnset(mixed $key): void
```

Unsets a value for an offset.

If iteration is in progress, and ArrayIterator::offsetUnset() is used to unset the current index of iteration, the iteration position will be advanced to the next index. Since the iteration position is also advanced at the end of a foreach loop body, use of ArrayIterator::offsetUnset() inside a foreach loop may result in indices being skipped.

### Parameters

The offset to unset.

### Return Values

No value is returned.

### See Also

- ArrayIterator::offsetGet() - Get value for an offset
- ArrayIterator::offsetSet() - Set value for an offset

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayiterator.offsetunset.php
