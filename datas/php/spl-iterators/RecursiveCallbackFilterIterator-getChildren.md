# RecursiveCallbackFilterIterator::getChildren

Source: https://devdocs.io/php/recursivecallbackfilteriterator.getchildren

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

RecursiveCallbackFilterIterator::getChildren — Return the inner iterator's children contained in a RecursiveCallbackFilterIterator

### Description

```
public RecursiveCallbackFilterIterator::getChildren(): RecursiveCallbackFilterIterator
```

Fetches the filtered children of the inner iterator.

RecursiveCallbackFilterIterator::hasChildren() should be used to determine if there are children to be fetched.

### Parameters

This function has no parameters.

### Return Values

Returns a RecursiveCallbackFilterIterator containing the children.

### See Also

- RecursiveCallbackFilterIterator Examples
- RecursiveCallbackFilterIterator::__construct() - Create a RecursiveCallbackFilterIterator from a RecursiveIterator
- RecursiveCallbackFilteriterator::hasChildren() - Check whether the inner iterator's current element has children

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/recursivecallbackfilteriterator.getchildren.php
