# spl_classes

Source: https://devdocs.io/php/function.spl-classes

(PHP 5, PHP 7, PHP 8)

spl_classes — Return available SPL classes

### Description

```
spl_classes(): array
```

This function returns an array with the current available SPL classes.

### Parameters

This function has no parameters.

### Return Values

Returns an array containing the currently available SPL classes.

### Examples

Example #1 spl_classes() example

```
<?php

print_r(spl_classes());

?>
```

The above example will output something similar to:

```
Array
(
    [ArrayObject] => ArrayObject
    [ArrayIterator] => ArrayIterator
    [CachingIterator] => CachingIterator
    [RecursiveCachingIterator] => RecursiveCachingIterator
    [DirectoryIterator] => DirectoryIterator
    [FilterIterator] => FilterIterator
    [LimitIterator] => LimitIterator
    [ParentIterator] => ParentIterator
    [RecursiveDirectoryIterator] => RecursiveDirectoryIterator
    [RecursiveIterator] => RecursiveIterator
    [RecursiveIteratorIterator] => RecursiveIteratorIterator
    [SeekableIterator] => SeekableIterator
    [SimpleXMLIterator] => SimpleXMLIterator
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.spl-classes.php
