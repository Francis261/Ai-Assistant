# FilterIterator::valid

Source: https://devdocs.io/php/filteriterator.valid

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

FilterIterator::valid — Check whether the current element is valid

### Description

```
public FilterIterator::valid(): bool
```

Checks whether the current element is valid.

Note:

The standard implementation of this function will initially return false until the inner iterator is advanced to the first accepted element.

### Parameters

This function has no parameters.

### Return Values

true if the current element is valid, otherwise false

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/filteriterator.valid.php
