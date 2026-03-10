# SplFixedArray::offsetUnset

Source: https://devdocs.io/php/splfixedarray.offsetunset

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SplFixedArray::offsetUnset — Unsets the value at the specified $index

### Description

```
public SplFixedArray::offsetUnset(int $index): void
```

Unsets the value at the specified index.

### Parameters

The index being unset.

### Return Values

No value is returned.

### Errors/Exceptions

Throws RuntimeException when index is outside the defined size of the array or when index cannot be parsed as an integer.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfixedarray.offsetunset.php
