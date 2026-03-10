# CallbackFilterIterator::accept

Source: https://devdocs.io/php/callbackfilteriterator.accept

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

CallbackFilterIterator::accept — Calls the callback with the current value, the current key and the inner iterator as arguments

### Description

```
public CallbackFilterIterator::accept(): bool
```

This method calls the callback with the current value, current key and the inner iterator.

The callback is expected to return true if the current item is to be accepted, or false otherwise.

### Parameters

This function has no parameters.

### Return Values

Returns true to accept the current item, or false otherwise.

### See Also

- CallbackFilterIterator Examples
- CallbackFilterIterator::__construct() - Create a filtered iterator from another iterator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/callbackfilteriterator.accept.php
