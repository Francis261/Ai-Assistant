# GlobIterator::count

Source: https://devdocs.io/php/globiterator.count

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

GlobIterator::count — Get the number of directories and files

### Description

```
public GlobIterator::count(): int
```

Gets the number of directories and files found by the glob expression.

### Parameters

This function has no parameters.

### Return Values

The number of returned directories and files, as an int.

### Examples

Example #1 GlobIterator::count() example

```
<?php
$iterator = new GlobIterator('*.xml');

printf("Matched %d item(s)\r\n", $iterator->count());
?>
```

The above example will output something similar to:

```
Matched 8 item(s)
```

### See Also

- GlobIterator::__construct() - Construct a directory using glob
- count() - Counts all elements in an array or in a Countable object
- glob() - Find pathnames matching a pattern

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/globiterator.count.php
