# RecursiveCallbackFilterIterator::__construct

Source: https://devdocs.io/php/recursivecallbackfilteriterator.construct

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

RecursiveCallbackFilterIterator::__construct — Create a RecursiveCallbackFilterIterator from a RecursiveIterator

### Description

Creates a filtered iterator from a RecursiveIterator using the callback to determine which items are accepted or rejected.

### Parameters

The recursive iterator to be filtered.

The callback, which should return true to accept the current item or false otherwise. See Examples.

May be any valid callable value.

### See Also

- RecursiveCallbackFilterIterator Examples
- RecursiveCallbackFilterIterator::getChildren() - Return the inner iterator's children contained in a RecursiveCallbackFilterIterator
- RecursiveCallbackFilteriterator::hasChildren() - Check whether the inner iterator's current element has children

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/recursivecallbackfilteriterator.construct.php
