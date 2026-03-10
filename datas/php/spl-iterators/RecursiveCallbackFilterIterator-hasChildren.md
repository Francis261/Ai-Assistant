# RecursiveCallbackFilterIterator::hasChildren

Source: https://devdocs.io/php/recursivecallbackfilteriterator.haschildren

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

RecursiveCallbackFilterIterator::hasChildren — Check whether the inner iterator's current element has children

### Description

```
public RecursiveCallbackFilterIterator::hasChildren(): bool
```

Returns true if the current element has children, false otherwise.

### Parameters

This function has no parameters.

### Return Values

Returns true if the current element has children, false otherwise.

### Examples

Example #1 RecursiveCallbackFilterIterator::hasChildren() basic usage

```
<?php

$dir = new RecursiveDirectoryIterator(__DIR__);

// Recursively iterate over XML files
$files = new RecursiveCallbackFilterIterator($dir, function ($current, $key, $iterator) {
    // Allow recursion into directories
    if ($iterator->hasChildren()) {
        return TRUE;
    }
    // Check for XML file
    if (!strcasecmp($current->getExtension(), 'xml')) {
        return TRUE;
    }
    return FALSE;
});

?>
```

### See Also

- RecursiveCallbackFilterIterator Examples
- RecursiveCallbackFilterIterator::__construct() - Create a RecursiveCallbackFilterIterator from a RecursiveIterator
- RecursiveCallbackFilteriterator::getChildren() - Return the inner iterator's children contained in a RecursiveCallbackFilterIterator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/recursivecallbackfilteriterator.haschildren.php
