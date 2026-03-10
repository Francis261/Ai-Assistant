# CallbackFilterIterator::__construct

Source: https://devdocs.io/php/callbackfilteriterator.construct

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

CallbackFilterIterator::__construct — Create a filtered iterator from another iterator

### Description

Creates a filtered iterator using the callback to determine which items are accepted or rejected.

### Parameters

The iterator to be filtered.

The callback, which should return true to accept the current item or false otherwise. See Examples.

May be any valid callable value.

### See Also

- CallbackFilterIterator Examples
- CallbackFilterIterator::accept() - Calls the callback with the current value, the current key and the inner iterator as arguments

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/callbackfilteriterator.construct.php
