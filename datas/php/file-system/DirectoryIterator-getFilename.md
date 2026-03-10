# DirectoryIterator::getFilename

Source: https://devdocs.io/php/directoryiterator.getfilename

(PHP 5, PHP 7, PHP 8)

DirectoryIterator::getFilename — Return file name of current DirectoryIterator item

### Description

```
public DirectoryIterator::getFilename(): string
```

Get the file name of the current DirectoryIterator item.

### Parameters

This function has no parameters.

### Return Values

Returns the file name of the current DirectoryIterator item.

### Examples

Example #1 A DirectoryIterator::getFilename() example

This example will list the contents of the directory containing the script.

```
<?php
$dir = new DirectoryIterator(dirname(__FILE__));
foreach ($dir as $fileinfo) {
    echo $fileinfo->getFilename() . "\n";
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

- DirectoryIterator::getBasename() - Get base name of current DirectoryIterator item
- DirectoryIterator::getPath()
- DirectoryIterator::getPathname()
- pathinfo() - Returns information about a file path

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/directoryiterator.getfilename.php
