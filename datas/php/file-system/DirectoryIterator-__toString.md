# DirectoryIterator::__toString

Source: https://devdocs.io/php/directoryiterator.tostring

(PHP 5, PHP 7, PHP 8)

DirectoryIterator::__toString — Get file name as a string

### Description

```
public DirectoryIterator::__toString(): string
```

Get the file name of the current DirectoryIterator item.

### Parameters

This function has no parameters.

### Return Values

Returns the file name of the current DirectoryIterator item.

### Examples

Example #1 A DirectoryIterator::__toString() example

This example will list the contents of the directory containing the script.

```
<?php
$dir = new DirectoryIterator(dirname(__FILE__));
foreach ($dir as $fileinfo) {
    echo $fileinfo;
}
?>
```

The above example will output something similar to:

```
.
..
apple.jpg
banana.jpg
index.php
pear.jpg
```

### See Also

- DirectoryIterator::getFilename() - Return file name of current DirectoryIterator item
- The __toString() magic method

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/directoryiterator.tostring.php
